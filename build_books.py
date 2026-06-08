"""
Build script: processes raw docx-converted HTML books into
  books/pt1.html, books/book1.html, books/book2.html, books/book3.html
  (with id anchors injected at each KLP heading)
and
  books/sections/<section>/<klp_ref>.html
  (individual KLP content snippets for the lesson panel)
"""
import re, os, json

SRC = 'books_html'
OUT_BOOKS = 'books'
OUT_SECTS = 'books/sections'
os.makedirs(OUT_BOOKS, exist_ok=True)

# ── Period → KLP ref mapping (from pd_by_pd) ────────────────────────────────
# Maps section → period_number → klp_ref
PERIOD_KLP = {
  'pt1': {
    1:'1.2.1.1.1', 2:'1.2.1.1.4', 3:'1.2.1.1.4', 4:'1.2.1.1.5',
    5:'1.2.1.1.6', 6:'1.2.1.1.7', 7:'1.2.1.1.8', 8:'1.2.1.1.8',
    9:'1.2.1.1.9', 10:'1.2.1.1.11', 11:'1.2.1.1.11', 12:'1.2.1.1.11',
    13:'1.2.1.1.12', 14:'1.2.1.1.12', 15:'1.2.1.1.13',
    16:'1.2.1.1.14', 17:'1.2.1.1.14', 18:'1.2.1.1.15', 19:'1.2.1.1.15',
    20:'1.2.1.1.16', 21:'1.2.1.1.16', 22:'1.2.1.1.16', 23:'1.2.1.1.16', 24:'1.2.1.1.16',
    25:'1.2.1.1.17', 26:'1.2.1.1.18', 27:'1.2.1.1.18',
    28:'1.2.1.2.1', 29:'1.2.1.1.13', 30:'1.2.1.1.13',
  },
  'pt2a': {
    1:'1.2.2.1.1', 2:'1.2.2.1.2', 3:'1.2.2.1.2', 4:'1.2.2.1.3',
    5:'1.2.2.1.4', 6:'1.2.2.1.4', 7:'1.2.2.1.5', 8:'1.2.2.1.6',
    9:'1.2.2.1.7', 10:'1.2.2.1.7', 11:'1.2.2.1.8',
    12:'1.2.2.1.9', 13:'1.2.2.1.9',
    14:'1.2.2.1.10', 15:'1.2.2.1.10', 16:'1.2.2.1.10', 17:'1.2.2.1.10',
    18:'1.2.2.2.1', 19:'1.2.2.2.1',
    20:'1.2.2.2.2', 21:'1.2.2.2.2',
    22:'1.2.2.2.3', 23:'1.2.2.2.3',
    24:'1.2.2.2.4', 25:'1.2.2.2.4',
    26:'1.2.2.2.5', 27:'1.2.2.2.5',
    28:'1.2.2.3.1', 29:'1.2.2.3.1',
    30:'1.2.2.3.2', 31:'1.2.2.3.2',
    32:'1.2.2.3.3', 33:'1.2.2.3.3',
    34:'1.2.2.4.1', 35:'1.2.2.4.1',
    36:'1.2.2.4.2', 37:'1.2.2.4.2',
    38:'1.2.2.4.3', 39:'1.2.2.4.3', 40:'1.2.2.4.3',
    41:'1.2.2.5.1', 42:'1.2.2.5.1', 43:'1.2.2.5.1',
  },
  'pt2b': {
    1:'1.2.2.6.1', 2:'1.2.2.6.2', 3:'1.2.2.6.3',
    4:'1.2.2.6.4', 5:'1.2.2.6.4',
    6:'1.2.2.6.5', 7:'1.2.2.6.5',
    8:'1.2.2.6.6', 9:'1.2.2.6.6',
    10:'1.2.2.6.7',
    11:'1.2.2.6.8', 12:'1.2.2.6.8',
    13:'1.2.2.6.9', 14:'1.2.2.6.9',
    15:'1.2.2.6.10',
    16:'1.2.2.7.1', 17:'1.2.2.7.2',
    18:'1.2.2.7.3', 19:'1.2.2.7.3',
    20:'1.2.2.7.4', 21:'1.2.2.7.5',
    22:'1.2.2.7.6', 23:'1.2.2.7.6',
    24:'1.2.2.8.1', 25:'1.2.2.8.1', 26:'1.2.2.8.1',
  },
  'pt2c': {
    1:'1.2.2.9.1', 2:'1.2.2.9.1', 3:'1.2.2.9.1', 4:'1.2.2.9.1', 5:'1.2.2.9.1',
    6:'1.2.2.9.2', 7:'1.2.2.9.2',
    8:'1.2.2.9.3', 9:'1.2.2.9.3',
    10:'1.2.2.9.4', 11:'1.2.2.9.4',
    12:'1.2.2.10.1',
    13:'1.2.2.10.5', 14:'1.2.2.10.5', 15:'1.2.2.10.5',
    16:'1.2.2.10.5', 17:'1.2.2.10.5', 18:'1.2.2.10.5',
    19:'1.2.2.10.6', 20:'1.2.2.10.6',
    21:'1.2.2.10.7', 22:'1.2.2.10.7',
    23:'1.2.2.11.1',
    24:'1.2.2.11.3', 25:'1.2.2.11.3',
    26:'1.2.2.12.1',
    27:'1.2.2.12.3',
    28:'1.2.2.12.4', 29:'1.2.2.12.4',
    30:'1.2.2.12.5',
    31:'1.2.2.13.1', 32:'1.2.2.13.1', 33:'1.2.2.13.1',
  },
}

# ── KLP ref → description (from pd_by_pd) ────────────────────────────────────
KLP_DESC = {
  '1.2.1.1.1':'Diagnostic quiz / Decimal system / Estimation',
  '1.2.1.1.4':'Standard operators on arithmetic',
  '1.2.1.1.5':'Directed numbers',
  '1.2.1.1.6':'Fractions',
  '1.2.1.1.7':'Operators on fractions',
  '1.2.1.1.8':'Operators on decimals',
  '1.2.1.1.9':'Rounding / decimal types',
  '1.2.1.1.10':'Decimal types',
  '1.2.1.1.11':'FDP conversion',
  '1.2.1.1.12':'Percentage values',
  '1.2.1.1.13':'Arithmetic ratios / Non-calc exam',
  '1.2.1.1.14':'Proportionality',
  '1.2.1.1.15':'HCF & LCM',
  '1.2.1.1.16':'BIDMAS',
  '1.2.1.1.17':'SI units',
  '1.2.1.1.18':'Indices & standard form',
  '1.2.1.2.1':'Probability',
  '1.2.2.1.1':'Symbols & equations',
  '1.2.2.1.2':'Index laws',
  '1.2.2.1.3':'Like/unlike terms',
  '1.2.2.1.4':'Simplify like/unlike terms',
  '1.2.2.1.5':'Simplify brackets',
  '1.2.2.1.6':'HCF & factorisation',
  '1.2.2.1.7':'Quadratic factorisation',
  '1.2.2.1.8':'Algebraic operators',
  '1.2.2.1.9':'Transposition intro',
  '1.2.2.1.10':'Change of subject',
  '1.2.2.2.1':'Substitution',
  '1.2.2.2.2':'Linear equations',
  '1.2.2.2.3':'Quadratic (factor)',
  '1.2.2.2.4':'Quadratic formula',
  '1.2.2.2.5':'Simultaneous equations',
  '1.2.2.3.1':'Index/log conversion',
  '1.2.2.3.2':'Laws of logarithms',
  '1.2.2.3.3':'Indicial equations',
  '1.2.2.4.1':'Plotting graphs',
  '1.2.2.4.2':'Straight-line graphs',
  '1.2.2.4.3':'Simultaneous (graphical)',
  '1.2.2.5.1':'EAL Exam 003A',
  '1.2.2.6.1':'Triangle properties',
  '1.2.2.6.2':'Pythagoras theorem',
  '1.2.2.6.3':'Pythagoras (calculation)',
  '1.2.2.6.4':'Trig ratios',
  '1.2.2.6.5':'Trig functions',
  '1.2.2.6.6':'Inverse trig',
  '1.2.2.6.7':'Trig identities',
  '1.2.2.6.8':'Sine/cos graphs (CAST)',
  '1.2.2.6.9':'Sine & cosine rules',
  '1.2.2.6.10':'Radians',
  '1.2.2.6.11':'Radian conversion',
  '1.2.2.7.1':'Circle properties',
  '1.2.2.7.2':'Unit conversions',
  '1.2.2.7.3':'Perimeter/area/volume',
  '1.2.2.7.4':'Compound shapes',
  '1.2.2.7.5':'2D to 3D prism',
  '1.2.2.7.6':'Surface area & volume',
  '1.2.2.8.1':'EAL Exam 003B',
  '1.2.2.9.1':'Differentiation',
  '1.2.2.9.2':'2nd derivatives',
  '1.2.2.9.3':'Displacement/velocity/acceleration',
  '1.2.2.9.4':'Differentiation notation',
  '1.2.2.10.1':'Integration intro',
  '1.2.2.10.5':'Standard integrals',
  '1.2.2.10.6':'Definite integrals',
  '1.2.2.10.7':'Integration problems',
  '1.2.2.11.1':'Data types',
  '1.2.2.11.3':'Statistical diagrams',
  '1.2.2.12.1':'Mean/median/mode',
  '1.2.2.12.3':'Grouped mean',
  '1.2.2.12.4':'Variance & std dev',
  '1.2.2.12.5':'Population vs sample',
  '1.2.2.13.1':'EAL Exam 003C',
}

# ── Book file config ─────────────────────────────────────────────────────────
BOOKS = [
  {
    'section': 'pt1',
    'src': f'{SRC}/TG5Maths-BasicMathematics_part_1.html',
    'out': f'{OUT_BOOKS}/pt1.html',
    'title': 'Pt1 — Basic Mathematics',
    # Pattern to find KLP anchors in this book
    'klp_pattern': r'(1\.2\.1\.[12]\.\d+)',
  },
  {
    'section': 'pt2a',
    'src': f'{SRC}/TG5MathsEAL_Book1-CommonFoundationV2_1-APO.html',
    'out': f'{OUT_BOOKS}/book1.html',
    'title': 'Book 1 — Algebra, Logarithms & Graphs',
    'klp_pattern': r'(1\.2\.2\.[1-5]\.\d+)',
  },
  {
    'section': 'pt2b',
    'src': f'{SRC}/TG5MathsEAL_Book2-TrigAreaVol_v2.0-APO.html',
    'out': f'{OUT_BOOKS}/book2.html',
    'title': 'Book 2 — Trigonometry & Geometry',
    'klp_pattern': r'(1\.2\.2\.[678]\.\d+)',
  },
  {
    'section': 'pt2c',
    'src': f'{SRC}/TG5MathsEAL_Book3-CalculusStat_v2.0AL2-APO.html',
    'out': f'{OUT_BOOKS}/book3.html',
    'title': 'Book 3 — Calculus & Statistics',
    'klp_pattern': r'(1\.2\.2\.(9|1[0-3])\.\d+)',
  },
]

def anchor_id(klp_ref):
    return 'klp-' + klp_ref.replace('.', '-')

def inject_anchors(html, klp_pattern):
    """
    Find KLP references inside <strong> tags and inject id anchors.
    Returns (modified_html, list_of_klp_refs_found)
    """
    found = []
    def replacer(m):
        full_strong = m.group(0)
        klp_match = re.search(klp_pattern, full_strong)
        if klp_match:
            ref = klp_match.group(1)
            # normalise any comma typo (e.g. 1.2.2,7.2)
            ref = ref.replace(',', '.')
            if ref not in found:
                found.append(ref)
            aid = anchor_id(ref)
            return f'<span id="{aid}"></span>{full_strong}'
        return full_strong

    modified = re.sub(r'<strong>.*?</strong>', replacer, html, flags=re.DOTALL)
    return modified, found

CSS = """
<style>
body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fc; color: #1a1a2e;
       max-width: 900px; margin: 0 auto; padding: 24px 20px; }
h1 { font-size: 1.3rem; color: #1a5276; border-bottom: 2px solid #1a5276; padding-bottom: 8px; }
p { line-height: 1.7; margin: 0.6em 0; }
strong { color: #0d3b5e; }
table { border-collapse: collapse; width: 100%; margin: 1em 0; font-size: 0.9rem; }
td, th { border: 1px solid #ccd; padding: 6px 10px; }
th { background: #e8eef8; }
img { max-width: 100%; height: auto; }
.klp-anchor { display: block; height: 0; }
</style>
"""

for book in BOOKS:
    print(f'Processing {book["section"]}...')
    raw = open(book['src']).read()
    modified, found_klps = inject_anchors(raw, book['klp_pattern'])
    print(f'  Found KLP refs: {found_klps}')

    # Write full book with anchors
    full = f'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>{book["title"]}</title>{CSS}</head><body>\n{modified}\n</body></html>'
    with open(book['out'], 'w') as f:
        f.write(full)
    print(f'  Written: {book["out"]}')

    # Extract per-KLP sections
    os.makedirs(f'{OUT_SECTS}/{book["section"]}', exist_ok=True)

    # Split by anchor spans
    parts = re.split(r'(<span id="klp-[^"]+"></span>)', modified)
    # Build sections dict: klp_ref -> html_content
    current_ref = None
    current_chunks = []
    sections = {}
    for part in parts:
        m = re.match(r'<span id="klp-([^"]+)"></span>', part)
        if m:
            if current_ref:
                sections[current_ref] = ''.join(current_chunks)
            current_ref = m.group(1).replace('-', '.', 4)  # restore ref format
            current_chunks = []
        else:
            current_chunks.append(part)
    if current_ref:
        sections[current_ref] = ''.join(current_chunks)

    for ref, content in sections.items():
        desc = KLP_DESC.get(ref, ref)
        sect_html = f'''<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>{desc}</title>{CSS}
</head><body>
<div class="klp-header" style="background:#e8eef8;padding:10px 14px;border-radius:6px;margin-bottom:16px;">
  <div style="font-size:0.75rem;color:#5a7a9a;font-family:monospace">{ref}</div>
  <div style="font-size:1rem;font-weight:600;color:#0d3b5e">{desc}</div>
</div>
{content}
</body></html>'''
        fname = f'{OUT_SECTS}/{book["section"]}/{ref}.html'
        with open(fname, 'w') as f:
            f.write(sect_html)

    print(f'  Sections written: {len(sections)}')

# Write the period→KLP mapping as JS data file
with open(f'{OUT_BOOKS}/period_klp_map.js', 'w') as f:
    f.write('// Auto-generated by build_books.py\n')
    f.write('const PERIOD_KLP_MAP = ')
    f.write(json.dumps(PERIOD_KLP, indent=2))
    f.write(';\n\nconst KLP_DESC = ')
    f.write(json.dumps(KLP_DESC, indent=2))
    f.write(';\n\nconst SECTION_BOOK = {\n')
    f.write('  pt1: "books/pt1.html",\n')
    f.write('  pt2a: "books/book1.html",\n')
    f.write('  pt2b: "books/book2.html",\n')
    f.write('  pt2c: "books/book3.html",\n')
    f.write('};\n\nconst SECTION_BOOK_LABEL = {\n')
    f.write('  pt1: "Pt1 — Basic Mathematics",\n')
    f.write('  pt2a: "Book 1 — Algebra, Logs & Graphs",\n')
    f.write('  pt2b: "Book 2 — Trig & Geometry",\n')
    f.write('  pt2c: "Book 3 — Calculus & Statistics",\n')
    f.write('};\n')
    
print('\nDone. period_klp_map.js written.')
