// TG5 session template — Air Days excluded (entered as negated days at plan creation)
// Day 1 = Intro to APO (AEAF brief removed)
const TG5_TEMPLATE = [
  [
    {
      "slot": "am1",
      "label": "Intro to APO",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 2
    },
    {
      "slot": "pm1",
      "label": "Eng Drawing ED1",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Eng Drawing ED1",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 4
    },
    {
      "slot": "am2",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Eng Drawing ED2",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Eng Drawing ED2",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Beliefs & Values 1",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "Eng Drawing ED2",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Eng Drawing ED2",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Eng Drawing ED2",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Eng Drawing ED2",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "Eng Drawing ED2",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "P Ed Cancelled",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Eng Drawing ED2 + Courageous Conv.",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ED3 Exam Eng Drawing",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ED3 Exam Eng Drawing",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ED3 Exam Eng Drawing",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ED3 Exam Eng Drawing",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 6
    },
    {
      "slot": "am2",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 8
    },
    {
      "slot": "pm1",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 10
    },
    {
      "slot": "pm2",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 12
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 14
    },
    {
      "slot": "am2",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 16
    },
    {
      "slot": "pm1",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 18
    },
    {
      "slot": "pm2",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 20
    }
  ],
  [
    {
      "slot": "am1",
      "label": "CAD 1,2,3 theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "CAD 1,2,3 theory",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 22
    },
    {
      "slot": "pm2",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 24
    }
  ],
  [
    {
      "slot": "am1",
      "label": "CAD4 practical",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 26
    },
    {
      "slot": "pm2",
      "label": "Maths pt1",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 28
    }
  ],
  [
    {
      "slot": "am1",
      "label": "CAD4/5 practical",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "CAD5/6 theory",
      "isMaths": false
    },
    {
      "slot": "lunch",
      "label": "PowerBI Eng Drawing & CAD",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt1 \u2013 EXAM",
      "isMaths": true,
      "section": "pt1",
      "pEnd": 30,
      "isExam": true
    },
    {
      "slot": "pm2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 2
    }
  ],
  [
    {
      "slot": "am1",
      "label": "CAD6 practical / CAD7 Exam",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "CAD7 EW025 Exam",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "CAD7 EW025 Exam",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "P Ed",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 4
    },
    {
      "slot": "am2",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "lunch",
      "label": "F2F Eng Drawing & CAD",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "THS1 Tech HS theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "THS1 Tech HS practical",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 6
    },
    {
      "slot": "am2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 8
    },
    {
      "slot": "pm1",
      "label": "THS2 Tech HS theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "THS2 Tech HS theory/practical",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 10
    },
    {
      "slot": "am2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 12
    },
    {
      "slot": "pm1",
      "label": "THS2 Tech HS practical",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "THS2 Tech HS practical",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 14
    },
    {
      "slot": "am2",
      "label": "Beliefs & Values 2",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "THS3 Tech HS theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "THS3 Tech HS practical",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "THS4 Tech HS theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "THS4 Tech HS practical",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 16
    },
    {
      "slot": "pm2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 18
    }
  ],
  [
    {
      "slot": "am1",
      "label": "THS4 Tech HS practical",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "THS4 Tech HS practical",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 20
    },
    {
      "slot": "pm2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 22
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Courageous Conv. P3 + THS4",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "THS5 Tech HS theory",
      "isMaths": false
    },
    {
      "slot": "lunch",
      "label": "PowerBI THS 2",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 24
    },
    {
      "slot": "pm2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 26
    }
  ],
  [
    {
      "slot": "am1",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "THS6 ES201 Exam",
      "isMaths": false
    },
    {
      "slot": "lunch",
      "label": "Log into MODnet",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ES1/2 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES2 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 28
    },
    {
      "slot": "am2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 30
    },
    {
      "slot": "lunch",
      "label": "F2F THS",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ES3 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES4 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 32
    },
    {
      "slot": "am2",
      "label": "Beliefs & Values 3",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ES4 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES4 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 34
    },
    {
      "slot": "am2",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 36
    },
    {
      "slot": "pm1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 38
    },
    {
      "slot": "pm2",
      "label": "P Ed",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2a",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 40
    },
    {
      "slot": "am2",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "TDC Admin",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Maths pt2a \u2013 EXAM 003A",
      "isMaths": true,
      "section": "pt2a",
      "pEnd": 41,
      "isExam": true
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES4 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 2
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 4
    },
    {
      "slot": "pm2",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 6
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 8
    },
    {
      "slot": "pm2",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 10
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 12
    },
    {
      "slot": "pm2",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 14
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES5 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES5 Elec Sci theory/practical",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 16
    },
    {
      "slot": "pm2",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 18
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 20
    },
    {
      "slot": "am2",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 22
    },
    {
      "slot": "pm1",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES5 Elec Sci practical",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2b",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 23,
      "single": true
    },
    {
      "slot": "am2",
      "label": "Maths pt2b \u2013 EXAM 003B",
      "isMaths": true,
      "section": "pt2b",
      "pEnd": 24,
      "isExam": true
    },
    {
      "slot": "pm1",
      "label": "ES5 Elec Sci practical",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES5 Elec Sci practical",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 2
    },
    {
      "slot": "am2",
      "label": "P Ed \u2013 Fit for life",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ES5 Elec Sci practical",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES6 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 4
    },
    {
      "slot": "am2",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 6
    },
    {
      "slot": "pm1",
      "label": "ES6 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES6 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 8
    },
    {
      "slot": "am2",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 10
    },
    {
      "slot": "pm1",
      "label": "ES6 Elec Sci practical",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES6 Elec Sci practical",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 12
    },
    {
      "slot": "am2",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ES7/8 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES8 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES8 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES9 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 14
    },
    {
      "slot": "pm2",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 16
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Courageous Conv. P4 + ES9",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES9 Elec Sci practical",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 18
    },
    {
      "slot": "pm2",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 20
    }
  ],
  [
    {
      "slot": "am1",
      "label": "TDC Admin + ES10 theory",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES10 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "P Ed",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 22
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES10 Elec Sci theory/practical",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES10 Elec Sci practical",
      "isMaths": false
    },
    {
      "slot": "lunch",
      "label": "Log into MODnet",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 24
    },
    {
      "slot": "pm2",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 26
    }
  ],
  [
    {
      "slot": "am1",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 28
    },
    {
      "slot": "am2",
      "label": "Maths pt2c",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 30
    },
    {
      "slot": "pm1",
      "label": "2nd Last P Ed",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES11 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "TDC Admin",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "Maths pt2c \u2013 EXAM 003C",
      "isMaths": true,
      "section": "pt2c",
      "pEnd": 31,
      "isExam": true
    },
    {
      "slot": "pm1",
      "label": "ES11 Elec Sci theory",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "ES11 Elec Sci theory",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES11 Elec Sci practical",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES12 Revision Elec Sci",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "ES12 Revision Elec Sci",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "Beliefs & Values 4",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "ES12 EP042 Exam Elec Sci",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "ES12 EP042 Exam Elec Sci",
      "isMaths": false
    },
    {
      "slot": "lunch",
      "label": "RT Survey",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "Last P Ed",
      "isMaths": false
    },
    {
      "slot": "pm2",
      "label": "TDC Admin/EoC",
      "isMaths": false
    }
  ],
  [
    {
      "slot": "am1",
      "label": "APO EoC Feedback",
      "isMaths": false
    },
    {
      "slot": "am2",
      "label": "TDC Admin/EoC",
      "isMaths": false
    },
    {
      "slot": "lunch",
      "label": "F2F Maths & Elec Science",
      "isMaths": false
    },
    {
      "slot": "pm1",
      "label": "MAD Return",
      "isMaths": false
    }
  ]
];
