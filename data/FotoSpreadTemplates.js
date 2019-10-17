import { calculatePercentOfTotal } from "korobook/utils/utils";
import {
  slideWidth,
  halfOfFotoSpread,
  slideHeight
} from "korobook/components/FotoSpreadsSlider/FotoSpread/FotoSpread.style";
import { FotoSpreadTemplate } from "korobook/models/fotoSpreadTemplate";
var fotoSpreadTemplates = new Map();

const templates = [
  // 7-3
  // [
  //   {
  //     outerFotoFramesContainer: {
  //       padding: calculatePercentOfTotal(4, slideWidth)
  //     },
  //     innerFotoFramesContainer: {
  //       rows: 2,
  //       cols: 2
  //     },
  //     fotoFrames: [
  //       { row: [1, 2], col: [1, 2] },
  //       { row: [1, 2], col: [2, 3] },
  //       { row: [2, 3], col: [1, 2] },
  //       { row: [2, 3], col: [2, 3] }
  //     ]
  //   },
  //   {
  //     outerFotoFramesContainer: {
  //       padding: [
  //         calculatePercentOfTotal(3, slideWidth),
  //         calculatePercentOfTotal(4, slideWidth),
  //         calculatePercentOfTotal(3, slideWidth),
  //         calculatePercentOfTotal(40, halfOfFotoSpread)
  //       ]
  //     },
  //     innerFotoFramesContainer: {
  //       rows: 3,
  //       cols: 1
  //     },
  //     fotoFrames: [
  //       { row: [1, 2], col: [1, 2] },
  //       { row: [2, 3], col: [1, 2] },
  //       { row: [3, 4], col: [1, 2] }
  //     ]
  //   }
  // ]
  // 7-2
  [
    new Map([
      ["outerFotoFramesContainer", { padding: calculatePercentOfTotal(4, slideWidth) }],
      ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
      ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
    ]),
    new Map([
      ["outerFotoFramesContainer", { padding: calculatePercentOfTotal(4, slideWidth) }],
      ["innerFotoFramesContainer", { rows: 3, cols: 2, direction: "column" }],
      [
        "fotoFrames",
        [
          { row: [1, 2], col: [1, 2] },
          { row: [2, 4], col: [1, 2] },
          { row: [1, 2], col: [2, 3] },
          { row: [2, 3], col: [2, 3] },
          { row: [3, 4], col: [2, 3] }
        ]
      ]
    ])
  ]
  // // 7-1
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: 0 }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: calculatePercentOfTotal(4, slideWidth) }],
  //     ["innerFotoFramesContainer", { rows: 3, cols: 2 }],
  //     [
  //       "fotoFrames",
  //       [
  //         { row: [1, 2], col: [1, 2] },
  //         { row: [1, 2], col: [2, 3] },
  //         { row: [2, 3], col: [1, 2] },
  //         { row: [2, 3], col: [2, 3] },
  //         { row: [3, 4], col: [1, 2] },
  //         { row: [3, 4], col: [2, 3] }
  //       ]
  //     ]
  //   ])
  // ],
  // // 6-3
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: 0 }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: calculatePercentOfTotal(4, slideWidth) }],
  //     ["innerFotoFramesContainer", { rows: 3, cols: 2 }],
  //     [
  //       "fotoFrames",
  //       [
  //         { row: [1, 2], col: [1, 2] },
  //         { row: [1, 2], col: [2, 3] },
  //         { row: [2, 3], col: [1, 3] },
  //         { row: [3, 4], col: [1, 2] },
  //         { row: [3, 4], col: [2, 3] }
  //       ]
  //     ]
  //   ])
  // ],
  // // 6-2
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: 0 }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [
  //           calculatePercentOfTotal(8, slideWidth),
  //           calculatePercentOfTotal(4, slideWidth),
  //           calculatePercentOfTotal(8, slideWidth),
  //           calculatePercentOfTotal(4, slideWidth)
  //         ]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 3, direction: "column" }],
  //     [
  //       "fotoFrames",
  //       [
  //         { row: [1, 2], col: [1, 2] },
  //         { row: [2, 3], col: [1, 2] },
  //         { row: [1, 3], col: [2, 3] },
  //         { row: [1, 2], col: [3, 4] },
  //         { row: [2, 3], col: [3, 4] }
  //       ]
  //     ]
  //   ])
  // ],
  // // 6-1
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(3, slideWidth), calculatePercentOfTotal(8, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }, { row: [2, 3], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: calculatePercentOfTotal(4, slideWidth)
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 2 }],
  //     [
  //       "fotoFrames",
  //       [
  //         { row: [1, 2], col: [1, 2] },
  //         { row: [1, 2], col: [2, 3] },
  //         { row: [2, 3], col: [1, 2] },
  //         { row: [2, 3], col: [2, 3] }
  //       ]
  //     ]
  //   ])
  // ],

  // // 5-3
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: 0 }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: calculatePercentOfTotal(4, slideWidth)
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 3 }],
  //     [
  //       "fotoFrames",
  //       [
  //         { row: [1, 2], col: [1, 2] },
  //         { row: [1, 2], col: [2, 3] },
  //         { row: [1, 2], col: [3, 4] },
  //         { row: [2, 3], col: [1, 4] }
  //       ]
  //     ]
  //   ])
  // ],

  // // 5-2
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: calculatePercentOfTotal(4, slideWidth) }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(8, slideWidth), calculatePercentOfTotal(4, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 2 }],
  //     [
  //       "fotoFrames",
  //       [
  //         { row: [1, 2], col: [1, 2] },
  //         { row: [1, 2], col: [2, 3] },
  //         { row: [2, 3], col: [1, 2] },
  //         { row: [2, 3], col: [2, 3] }
  //       ]
  //     ]
  //   ])
  // ],

  // // 5-1
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: 0 }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(8, slideWidth), calculatePercentOfTotal(4, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 2 }],
  //     [
  //       "fotoFrames",
  //       [
  //         { row: [1, 2], col: [1, 2] },
  //         { row: [1, 2], col: [2, 3] },
  //         { row: [2, 3], col: [1, 2] },
  //         { row: [2, 3], col: [2, 3] }
  //       ]
  //     ]
  //   ])
  // ],

  // // 4-4
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: 0 }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: calculatePercentOfTotal(4, slideWidth)
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 2 }],
  //     [
  //       "fotoFrames",
  //       [{ row: [1, 2], col: [1, 2] }, { row: [1, 2], col: [2, 3] }, { row: [2, 3], col: [1, 3] }]
  //     ]
  //   ])
  // ],

  // // 4-2
  // [
  //   new Map([
  //     ["outerFotoFramesContainer", { padding: 0 }],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(3, slideWidth), calculatePercentOfTotal(12, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 3, cols: 1 }],
  //     [
  //       "fotoFrames",
  //       [{ row: [1, 2], col: [1, 2] }, { row: [2, 3], col: [1, 2] }, { row: [3, 4], col: [1, 2] }]
  //     ]
  //   ])
  // ],

  // // 3-6
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(8, slideWidth), calculatePercentOfTotal(3, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(4, slideWidth), calculatePercentOfTotal(12, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 2, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }, { row: [2, 3], col: [1, 2] }]]
  //   ])
  // ],

  // // 2-9
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [0, calculatePercentOfTotal(8, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(4, slideWidth), calculatePercentOfTotal(10, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 2-8
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [0, calculatePercentOfTotal(8, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [0, calculatePercentOfTotal(8, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 2-7
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(10, slideWidth), calculatePercentOfTotal(4, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(10, slideWidth), calculatePercentOfTotal(4, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],

  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: 0
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [
  //           calculatePercentOfTotal(24, slideHeight),
  //           calculatePercentOfTotal(12, slideWidth)
  //         ]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 2-5
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: calculatePercentOfTotal(4, slideWidth)
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [
  //           calculatePercentOfTotal(24, slideHeight),
  //           calculatePercentOfTotal(12, slideWidth)
  //         ]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 2-3
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: 0
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(12, slideWidth), calculatePercentOfTotal(8, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 2-2
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [0, calculatePercentOfTotal(8, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(8, slideWidth), calculatePercentOfTotal(12, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 2-1
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: 0
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: [calculatePercentOfTotal(8, slideWidth), calculatePercentOfTotal(12, slideWidth)]
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 2-0
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: calculatePercentOfTotal(8, slideWidth)
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ]),
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: calculatePercentOfTotal(8, slideWidth)
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 1-2
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: 0
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ],
  // // 1-1
  // [
  //   new Map([
  //     [
  //       "outerFotoFramesContainer",
  //       {
  //         padding: calculatePercentOfTotal(4, slideWidth)
  //       }
  //     ],
  //     ["innerFotoFramesContainer", { rows: 1, cols: 1 }],
  //     ["fotoFrames", [{ row: [1, 2], col: [1, 2] }]]
  //   ])
  // ]
];

templates.forEach((template, index) => {
  console.log(`TEMPLATE № - ${index}`);
  fotoSpreadTemplates.set(index, new FotoSpreadTemplate(template));
});

export { fotoSpreadTemplates };
