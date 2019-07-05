import { calculatePercentOfTotal } from 'korobook/utils/utils'
import { slideWidth } from 'korobook/components/Products/FotoBook/FotoSpreadsSlider/FotoSpread/FotoSpread.style'

const halfOfFotoSpreadWidth = slideWidth * 0.5
const borderColor = '#333'
const borderWidth = .5

const lg = [41, 1]
const md = [31, 1]
const sm = [21, 1]


export default {

  // 1-1
  1: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      
      fotoFramesContainer: {
        flex: 1,
          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg
          }
        }
      }
    },

  },

  // 1-2
  2: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    }

  },

  // 1-3
  3: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: calculatePercentOfTotal(30, slideWidth),

      fotoFramesContainer: {
        flex: 1,
          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderRightWidth: 0.5,
              iconSize: lg
            }
        }
      }
    }

  },

  // 2-0
  4: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            iconSize: lg
          }

        }
      }
    }

  },

   // 2-1
   5: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            iconSize: md
          }

        }
      }
    }
  },

  // 2-2
  6: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: 0,
      paddingBottom: 0,

      fotoFramesContainer: {
        flex: 1,
          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              borderBottomWidth: 0,
              borderTopWidth: 0,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            iconSize: md
          }
        }
      }
    }
  },

  // 2-3
  7: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(40, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(40, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            iconSize: md
          }
        }
      }
    }
  },

  // 2-4
  8: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg
          }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        fotoFrames: {
          1: {
            width: calculatePercentOfTotal(50, halfOfFotoSpreadWidth),
            height: calculatePercentOfTotal(50, halfOfFotoSpreadWidth),
            borderColor,
            borderWidth,
            iconSize: sm
          }

        }
      }
    },

  },

   // 2-5
   9: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        fotoFrames: {
          1: {
            width: calculatePercentOfTotal(50, halfOfFotoSpreadWidth),
            height: calculatePercentOfTotal(50, halfOfFotoSpreadWidth),
            borderColor,
            borderWidth,
            iconSize: sm
          }

        }
      }
    }

  },

  // 2-6
  10: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: calculatePercentOfTotal(40, slideWidth),
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: 0,
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: calculatePercentOfTotal(60, slideWidth),
      paddingLeft: calculatePercentOfTotal(2, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            iconSize: md
          }
        }
      }
    }

  },

  // 2-7
  11: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: md
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            iconSize: md
          }
        }
      }
    }

  },

  // 2-8
  12: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: 0,
      paddingBottom: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              borderBottomWidth: 0,
              borderTopWidth: 0,
              iconSize: md
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: 0,
      paddingBottom: 0,

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            borderBottomWidth: 0,
            borderTopWidth: 0,
            iconSize: md
          }
        }
      }
    }

  },

  // 2-9
  13: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: 0,
      paddingBottom: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              borderBottomWidth: 0,
              borderTopWidth: 0,
              iconSize: md
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            borderColor,
            borderWidth,
            iconSize: md 
          }

        }
      }
    }

  },

  // 3-1
  14: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(35, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(35, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '48%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: md 
          },
          2: {
            width: '48%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: md
          }
      
        }
      }
    }

  },

  // 3-2
  15: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md 
          },
          2: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md
          },
        
      
        }
      }
    },

  },

  // 3-3
  16: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: 0,
      paddingBottom: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md
          },
          2: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md
          }
      
        }
      }
    }

  },

  // 3-4
  17: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(25, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(25, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm 
          },
          2: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
          }
        
      
        }
      }
    }

  },

  // 3-5
  18: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: calculatePercentOfTotal(30, slideWidth),
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: 0,
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: calculatePercentOfTotal(70, slideWidth),
      paddingLeft: calculatePercentOfTotal(2, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm 
          },
          2: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
          }
  
      
        }
      }
    }

  },

  // 3-6
  19: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: md
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md 
          },
          2: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md
          }
        
        }
      }
    }

  },

  // 4-1
  20: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: calculatePercentOfTotal(40, slideWidth),
      paddingLeft: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),
      paddingRight: 0,
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: calculatePercentOfTotal(60, slideWidth),
      paddingLeft: calculatePercentOfTotal(2, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm 
          },
          2: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm 

          },
          3: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm 
      
          }
        }
      }
    }

  },

  // 4-2
  21: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(25, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(25, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm 
          },
          2: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm 

          },
          3: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm 
          }
        }
      }
    }

  },

  // 4-3
  22: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(40, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(40, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '31%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: '31%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: sm

          },
          3: {
            width: '31%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: sm
      
          }
      
        }
      }
    }

  },

  // 4-4
  23: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(20, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '48%',
            height: '48%',
            borderColor,
            borderWidth,
            iconSize: sm 
          },
          2: {
            width: '48%',
            height: '48%',
            borderColor,
            borderWidth,
            iconSize: sm 

          },
          3: {
            width: '100%',
            height: '48%',
            borderColor,
            borderWidth,
            iconSize: md
      
          }
      
        }
      }
    },

  },

  // 4-5
  24: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(45, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(45, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '31%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: sm 
          },
          2: {
            width: '31%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: sm 

          },
          3: {
            width: '31%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: sm 
      
          }
      
        }
      }
    },

  },

  // 4-6
  25: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: calculatePercentOfTotal(40, slideWidth),
      padding: 0,
      // backgroundColor: '#ffbb2f',

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: calculatePercentOfTotal(60, slideWidth),
      padding: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm

          },
          3: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm
      
          }
      
        }
      }
    },

  },

  // 5-1
  26: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),


      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm 
          },
          2: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm 

          },
          3: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm 
      
          },
          4: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
          }
      
        }
      }
    }

  },

   // 5-2
  27: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              borderColor,
              borderWidth,
              iconSize: lg            
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),


      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
            
          },
          2: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm               
          },
          3: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
            
          },
          4: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
          }

        }
      }
    }

  },

  // 5-3  
  28: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: 0,


      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg              
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '32%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: '32%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm

          },
          3: {
            width: '32%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: sm
      
          },
          4: {
            width: '100%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md            
          }
        }
      }
    },

  },

   // 5-4
  29: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,

          fotoFrames: {
            1: {
              width: '100%',
              height: '100%',
              borderColor,
              borderWidth,
              iconSize: lg               
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(3, halfOfFotoSpreadWidth),  

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md             
          },
          2: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md   
          },
          3: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md         
          },
          4: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md          
          }

        }
      }
    },

  },

  // 6-1  
  30: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),


      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

          fotoFrames: {
            1: {
              width: '100%',
              height: '49%',
              borderColor,
              borderWidth,
              iconSize: md
            },
            2: {
              width: '100%',
              height: '49%',
              borderColor,
              borderWidth,
              iconSize: md
            }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),  

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md
          },
          2: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md

          },
          3: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md
      
          },
          4: {
            width: '48%',
            height: '49%',
            borderColor,
            borderWidth,
            iconSize: md           
          }

        }
      }
    },

  },

   // 6-2 
  31: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,

      fotoFramesContainer: {
        flex: 1,
        
        fotoFrames: {
          1: {
            flex: 1,
            iconSize: lg            
          }
        }
      }
    },

    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(15, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '30%',
            height: '48%',
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: '30%',
            height: '48%',
            borderColor,
            borderWidth,
            iconSize: sm  
          },
          3: {
            width: '30%',
            height: '100%',
            borderColor,
            borderWidth,
            iconSize: md        
          },
          4: {
            width: '30%',
            height: '48%',
            borderColor,
            borderWidth,
            iconSize: sm           
          },
          5: {
            width: '30%',
            height: '48%',
            borderColor,
            borderWidth,
            iconSize: sm        
          }
      
        }
      }
    }

  },

  // 6-3  
  32: {
      left: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: halfOfFotoSpreadWidth,

        fotoFramesContainer: {
          flex: 1,
          
          fotoFrames: {
            1: {
              flex: 1,
              iconSize: lg            
            }
          }
        }
      },

      right: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: halfOfFotoSpreadWidth,
        padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

        fotoFramesContainer: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          alignContent: 'space-between',
          justifyContent: 'space-between',
          flexWrap: 'wrap',

          fotoFrames: {
            1: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm
            },
            2: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm  
            },
            3: {
              width: '100%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: md        
            },
            4: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm           
            },
            5: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm        
            }
          }
        }
      }

  },

  // 7-1
  33: {
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      
      fotoFramesContainer: {
        flex: 1,
        
        fotoFrames: {
          1: {
            flex: 1,
            iconSize: lg            
          }
        }
      }
    },
    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        fotoFrames: {
          1: {
            width: '48%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: '48%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm
          },
          3: {
            width: '48%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm        
          },
          4: {
            width: '48%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm            
          },
          5: {
            width: '48%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm       
          },
          6: {
            width: '48%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: sm          
          },
        }
      }
    },

  },

  // 7-2
  34: {
      left: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: halfOfFotoSpreadWidth,
          
          fotoFramesContainer: {
          flex: 1,
          
          fotoFrames: {
              1: {
              flex: 1,
              iconSize: lg
            }
          }
          }
      },

      right: {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: halfOfFotoSpreadWidth,
          padding: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

          fotoFramesContainer: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          alignContent: 'space-between',
          justifyContent: 'space-between',
          flexWrap: 'wrap',

          fotoFrames: {
              1: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm            
              },
              2: {
              width: '48%',
              height: '66%',
              borderColor,
              borderWidth,
              iconSize: md          
              },
              3: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm            
              },
              4: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm            
              },
              5: {
              width: '48%',
              height: '32%',
              borderColor,
              borderWidth,
              iconSize: sm           
              }
            }
          }
      }
  },

  // 7-3
  35: {
    left: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: halfOfFotoSpreadWidth,
        padding: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

        fotoFramesContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        flexWrap: 'wrap',

            fotoFrames: {
            1: {
                width: '48%',
                height: '49%',
                borderColor,
                borderWidth,
                iconSize: sm
            },
            2: {
                width: '48%',
                height: '49%',
                borderColor,
                borderWidth,
                iconSize: sm
            },
            3: {
                width: '48%',
                height: '49%',
                borderColor,
                borderWidth,
                iconSize: sm
            },
            4: {
                width: '48%',
                height: '49%',
                borderColor,
                borderWidth,
                iconSize: sm
            }
        }
        }

    },

    right: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: halfOfFotoSpreadWidth,
        padding: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
        paddingLeft: calculatePercentOfTotal(40, halfOfFotoSpreadWidth),
        

        fotoFramesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-between',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        

        fotoFrames: {
            1: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: md
            },
            2: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: md
            },
            3: {
            width: '100%',
            height: '32%',
            borderColor,
            borderWidth,
            iconSize: md
            }
        }
        }
    }

  },




}