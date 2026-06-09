// TG5 session template — 43 teaching days
// Air Days are NOT in the template — enter them as negated days when creating a plan
// Cell type flags:
//   isPEd:true          → muted brown
//   isNonMathsExam:true → muted red
const TG5_TEMPLATE = [
  // ── Day 1 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Intro to APO",   isMaths:false },
    { slot:"am2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:2 },
    { slot:"pm1", label:"Eng Drawing",    isMaths:false },
    { slot:"pm2", label:"Eng Drawing",    isMaths:false }
  ],
  // ── Day 2 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:4 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Eng Drawing",    isMaths:false },
    { slot:"pm2", label:"Eng Drawing",    isMaths:false }
  ],
  // ── Day 3 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Beliefs & Values", isMaths:false },
    { slot:"am2", label:"Eng Drawing",    isMaths:false },
    { slot:"pm1", label:"Eng Drawing",    isMaths:false },
    { slot:"pm2", label:"Eng Drawing",    isMaths:false }
  ],
  // ── Day 4 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Eng Drawing",    isMaths:false },
    { slot:"am2", label:"Eng Drawing",    isMaths:false },
    { slot:"pm1", label:"P'Ed Cancelled", isMaths:false, isPEd:true },
    { slot:"pm2", label:"Eng Drawing / Courageous Conv.", isMaths:false }
  ],
  // ── Day 5 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 6 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:6 },
    { slot:"am2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:8 },
    { slot:"pm1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:10 },
    { slot:"pm2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:12 }
  ],
  // ── Day 7 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:14 },
    { slot:"am2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:16 },
    { slot:"pm1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:18 },
    { slot:"pm2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:20 }
  ],
  // ── Day 8 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:22 },
    { slot:"am2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:24 },
    { slot:"pm1", label:"CAD",            isMaths:false },
    { slot:"pm2", label:"CAD",            isMaths:false }
  ],
  // ── Day 9 ─────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"CAD",            isMaths:false },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:26 },
    { slot:"pm2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:28 }
  ],
  // ── Day 10 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1 — EXAM", isMaths:true, section:"pt1", pEnd:30, isExam:true },
    { slot:"am2", label:"CAD",            isMaths:false },
    { slot:"lunch", label:"PowerBI — Eng Drawing & CAD", isMaths:false },
    { slot:"pm1", label:"CAD",            isMaths:false },
    { slot:"pm2", label:"CAD Exam",       isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 11 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"CAD Exam",       isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"CAD Exam",       isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Maths pt2a",      isMaths:true, section:"pt2a", pEnd:2 },
    { slot:"pm2", label:"P'Ed",           isMaths:false, isPEd:true }
  ],
  // ── Day 12 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:4 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"lunch", label:"F2F — Eng Drawing & CAD", isMaths:false },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 13 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:6 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:8 },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 14 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:10 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:12 },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 15 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:14 },
    { slot:"am2", label:"Beliefs & Values", isMaths:false },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 16 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS",        isMaths:false },
    { slot:"am2", label:"Tech HS",        isMaths:false },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:16 },
    { slot:"pm2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:18 }
  ],
  // ── Day 17 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS",        isMaths:false },
    { slot:"am2", label:"Tech HS",        isMaths:false },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:20 },
    { slot:"pm2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:22 }
  ],
  // ── Day 18 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Courageous Conv. / Tech HS", isMaths:false },
    { slot:"am2", label:"Tech HS",        isMaths:false },
    { slot:"lunch", label:"PowerBI — Tech HS", isMaths:false },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:24 },
    { slot:"pm2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:26 }
  ],
  // ── Day 19 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 20 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 21 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 22 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"lunch", label:"Log into MODnet", isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 23 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:28 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:30 },
    { slot:"lunch", label:"F2F — Tech HS", isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 24 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:32 },
    { slot:"am2", label:"Beliefs & Values", isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 25 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:34 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:36 },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:38 },
    { slot:"pm2", label:"P'Ed",           isMaths:false, isPEd:true }
  ],
  // ── Day 26 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:40 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"TDC Admin / Maths pt2a — EXAM 003A", isMaths:true, section:"pt2a", pEnd:41, isExam:true, single:true },
    { slot:"pm2", label:"Maths pt2a — EXAM 003A", isMaths:true, section:"pt2a", pEnd:43, isExam:true }
  ],
  // ── Day 27 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:2 }
  ],
  // ── Day 28 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:4 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:6 }
  ],
  // ── Day 29 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:8 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:10 }
  ],
  // ── Day 30 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:12 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:14 }
  ],
  // ── Day 31 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:16 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:18 }
  ],
  // ── Day 32 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:20 },
    { slot:"am2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:22 },
    { slot:"pm1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 33 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2b — P23 / EXAM 003B", isMaths:true, section:"pt2b", pEnd:24, isExam:true },
    { slot:"am2", label:"Maths pt2b — EXAM 003B", isMaths:true, section:"pt2b", pEnd:26, isExam:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 34 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:2 },
    { slot:"am2", label:"P'Ed — Fit for life", isMaths:false, isPEd:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 35 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:4 },
    { slot:"am2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:6 },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 36 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:8 },
    { slot:"am2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:10 },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 37 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:12 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 38 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:14 },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:16 }
  ],
  // ── Day 39 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Courageous Conv. / Elec Science", isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:18 },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:20 }
  ],
  // ── Day 40 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"TDC Admin / Elec Science", isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:22 }
  ],
  // ── Day 41 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"lunch", label:"Log into MODnet", isMaths:false },
    { slot:"pm1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:24 },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:26 }
  ],
  // ── Day 42 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:28 },
    { slot:"am2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:30 },
    { slot:"pm1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 43 ────────────────────────────────────────────────────────────────
  [
    { slot:"am1", label:"TDC Admin / Maths pt2c — EXAM 003C", isMaths:true, section:"pt2c", pEnd:31, isExam:true, single:true },
    { slot:"am2", label:"Maths pt2c — EXAM 003C", isMaths:true, section:"pt2c", pEnd:33, isExam:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ]
];
