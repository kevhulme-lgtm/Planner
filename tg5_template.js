// TG5 session template — Air Days excluded (entered as negated days at plan creation)
// Day 1 = Intro to APO (AEAF brief removed)
// Cell types for non-maths cells:
//   isPEd:true          → muted brown
//   isNonMathsExam:true → muted red
const TG5_TEMPLATE = [
  // ── Day 1 (Tue 09 Jun) ────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Intro to APO",   isMaths:false },
    { slot:"am2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:2 },
    { slot:"pm1", label:"Eng Drawing",    isMaths:false },
    { slot:"pm2", label:"Eng Drawing",    isMaths:false }
  ],
  // ── Day 2 (Wed 10 Jun) ────────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:4 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Eng Drawing",    isMaths:false },
    { slot:"pm2", label:"Eng Drawing",    isMaths:false }
  ],
  // ── Day 3 (Tue 16 Jun — after air days 11,12,15 Jun) ──────────────────────
  [
    { slot:"am1", label:"Beliefs & Values", isMaths:false },
    { slot:"am2", label:"Eng Drawing",    isMaths:false },
    { slot:"pm1", label:"Eng Drawing",    isMaths:false },
    { slot:"pm2", label:"Eng Drawing",    isMaths:false }
  ],
  // ── Day 4 (Wed 17 Jun) ───────────────────────────────────────────────────
  [
    { slot:"am1", label:"Eng Drawing",    isMaths:false },
    { slot:"am2", label:"Eng Drawing",    isMaths:false },
    { slot:"pm1", label:"P'Ed Cancelled", isMaths:false, isPEd:true },
    { slot:"pm2", label:"Eng Drawing / Courageous Conv.", isMaths:false }
  ],
  // ── Day 5 (Thu 18 Jun) ───────────────────────────────────────────────────
  [
    { slot:"am1", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Eng Drawing Exam", isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 6 (Fri 19 Jun) ───────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:6 },
    { slot:"am2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:8 },
    { slot:"pm1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:10 },
    { slot:"pm2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:12 }
  ],
  // ── Day 7 (Mon 22 Jun) ───────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:14 },
    { slot:"am2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:16 },
    { slot:"pm1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:18 },
    { slot:"pm2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:20 }
  ],
  // ── Day 8 (Tue 23 Jun) ───────────────────────────────────────────────────
  [
    { slot:"am1", label:"CAD",            isMaths:false },
    { slot:"am2", label:"CAD",            isMaths:false },
    { slot:"pm1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:22 },
    { slot:"pm2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:24 }
  ],
  // ── Day 9 (Wed 24 Jun) ───────────────────────────────────────────────────
  [
    { slot:"am1", label:"CAD",            isMaths:false },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:26 },
    { slot:"pm2", label:"Maths pt1",      isMaths:true, section:"pt1", pEnd:28 }
  ],
  // ── Day 10 (Thu 25 Jun) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"CAD",            isMaths:false },
    { slot:"am2", label:"CAD",            isMaths:false },
    { slot:"lunch", label:"PowerBI — Eng Drawing & CAD", isMaths:false },
    { slot:"pm1", label:"Maths pt1 — EXAM", isMaths:true, section:"pt1", pEnd:30, isExam:true },
    { slot:"pm2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:2 }
  ],
  // ── Day 11 (Fri 26 Jun) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"CAD Exam",       isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"CAD Exam",       isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"CAD Exam",       isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"P'Ed",           isMaths:false, isPEd:true }
  ],
  // ── Day 12 (Mon 29 Jun) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:4 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"lunch", label:"F2F — Eng Drawing & CAD", isMaths:false },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 13 (Tue 30 Jun) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:6 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:8 },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 14 (Wed 01 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:10 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:12 },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 15 (Thu 02 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:14 },
    { slot:"am2", label:"Beliefs & Values", isMaths:false },
    { slot:"pm1", label:"Tech HS",        isMaths:false },
    { slot:"pm2", label:"Tech HS",        isMaths:false }
  ],
  // ── Day 16 (Fri 03 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS",        isMaths:false },
    { slot:"am2", label:"Tech HS",        isMaths:false },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:16 },
    { slot:"pm2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:18 }
  ],
  // ── Day 17 (Mon 06 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS",        isMaths:false },
    { slot:"am2", label:"Tech HS",        isMaths:false },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:20 },
    { slot:"pm2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:22 }
  ],
  // ── Day 18 (Tue 07 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Courageous Conv. / Tech HS", isMaths:false },
    { slot:"am2", label:"Tech HS",        isMaths:false },
    { slot:"lunch", label:"PowerBI — Tech HS", isMaths:false },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:24 },
    { slot:"pm2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:26 }
  ],
  // ── Day 19 (Wed 08 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 20 (Thu 09 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 21 (Fri 10 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"pm2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true }
  ],
  // ── Day 22 (Mon 13 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Tech HS Exam",   isMaths:false, isNonMathsExam:true },
    { slot:"lunch", label:"Log into MODnet", isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 23 (Tue 14 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:28 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:30 },
    { slot:"lunch", label:"F2F — Tech HS", isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 24 (Wed 15 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:32 },
    { slot:"am2", label:"Beliefs & Values", isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 25 (Thu 16 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:34 },
    { slot:"am2", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:36 },
    { slot:"pm1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:38 },
    { slot:"pm2", label:"P'Ed",           isMaths:false, isPEd:true }
  ],
  // ── Day 26 (Fri 17 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2a",     isMaths:true, section:"pt2a", pEnd:40 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"TDC Admin",      isMaths:false },
    { slot:"pm2", label:"Maths pt2a — EXAM 003A", isMaths:true, section:"pt2a", pEnd:41, isExam:true }
  ],
  // ── Day 27 (Mon 20 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:2 }
  ],
  // ── Day 28 (Tue 21 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:4 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:6 }
  ],
  // ── Day 29 (Wed 22 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:8 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:10 }
  ],
  // ── Day 30 (Thu 23 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:12 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:14 }
  ],
  // ── Day 31 (Fri 24 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:16 },
    { slot:"pm2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:18 }
  ],
  // ── Day 32 (Mon 27 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:20 },
    { slot:"am2", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:22 },
    { slot:"pm1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 33 (Tue 28 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2b",     isMaths:true, section:"pt2b", pEnd:23, single:true },
    { slot:"am2", label:"Maths pt2b — EXAM 003B", isMaths:true, section:"pt2b", pEnd:24, isExam:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 34 (Wed 29 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:2 },
    { slot:"am2", label:"P'Ed — Fit for life", isMaths:false, isPEd:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 35 (Thu 30 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:4 },
    { slot:"am2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:6 },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 36 (Fri 31 Jul) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:8 },
    { slot:"am2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:10 },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 37 (Mon 03 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:12 },
    { slot:"am2", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 38 (Tue 04 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:14 },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:16 }
  ],
  // ── Day 39 (Wed 05 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Courageous Conv. / Elec Science", isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:18 },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:20 }
  ],
  // ── Day 40 (Thu 06 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"TDC Admin / Elec Science", isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"pm1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:22 }
  ],
  // ── Day 41 (Fri 07 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science",   isMaths:false },
    { slot:"lunch", label:"Log into MODnet", isMaths:false },
    { slot:"pm1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:24 },
    { slot:"pm2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:26 }
  ],
  // ── Day 42 (Mon 10 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:28 },
    { slot:"am2", label:"Maths pt2c",     isMaths:true, section:"pt2c", pEnd:30 },
    { slot:"pm1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 43 (Tue 11 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"TDC Admin",      isMaths:false },
    { slot:"am2", label:"Maths pt2c — EXAM 003C", isMaths:true, section:"pt2c", pEnd:31, isExam:true },
    { slot:"pm1", label:"Elec Science",   isMaths:false },
    { slot:"pm2", label:"Elec Science",   isMaths:false }
  ],
  // ── Day 44 (Wed 12 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science",   isMaths:false },
    { slot:"am2", label:"Elec Science Revision", isMaths:false },
    { slot:"pm1", label:"Elec Science Revision", isMaths:false },
    { slot:"pm2", label:"Beliefs & Values", isMaths:false }
  ],
  // ── Day 45 (Thu 13 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"Elec Science Exam", isMaths:false, isNonMathsExam:true },
    { slot:"am2", label:"Elec Science Exam", isMaths:false, isNonMathsExam:true },
    { slot:"lunch", label:"RT Survey",    isMaths:false },
    { slot:"pm1", label:"P'Ed",           isMaths:false, isPEd:true },
    { slot:"pm2", label:"TDC Admin / EoC", isMaths:false }
  ],
  // ── Day 46 (Fri 14 Aug) ──────────────────────────────────────────────────
  [
    { slot:"am1", label:"APO EoC Feedback", isMaths:false },
    { slot:"am2", label:"TDC Admin / EoC", isMaths:false },
    { slot:"lunch", label:"F2F — Maths & Elec Science", isMaths:false },
    { slot:"pm1", label:"MAD Return",     isMaths:false }
  ]
];
