/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A performant interface for rendering sectioned lists, supporting the most handy features:\\n\\n - Fully cross-platform.\\n - Configurable viewability callbacks.\\n - List header support.\\n - List footer support.\\n - Item separator support.\\n - Section header support.\\n - Section separator support.\\n - Heterogeneous data and item rendering support.\\n - Pull to Refresh.\\n - Scroll loading.\\n\\nIf you don't need section support and want a simpler interface, use [\`<FlatList>\`](/react-native/docs/flatlist.html).\\n\\nIf you need _sticky_ section header support, use \`ListView\` for now.\\n\\nSimple Examples:\\n\\n    <SectionList\\n      renderItem=\{(\{item}) => <ListItem title=\{item.title}}\\n      renderSectionHeader=\{(\{section}) => <H1 title=\{section.key} />}\\n      sections=\{[ // homogenous rendering between sections\\n        \{data: [...], key: ...},\\n        \{data: [...], key: ...},\\n        \{data: [...], key: ...},\\n      ]}\\n    />\\n\\n    <SectionList\\n      sections=\{[ // heterogeneous rendering between sections\\n        \{data: [...], key: ..., renderItem: ...},\\n        \{data: [...], key: ..., renderItem: ...},\\n        \{data: [...], key: ..., renderItem: ...},\\n      ]}\\n    />\\n\\nThis is a convenience wrapper around [\`<VirtualizedList>\`](/react-native/docs/virtualizedlist.html),\\nand thus inherits the following caveats:\\n\\n- Internal state is not preserved when content scrolls out of the render window. Make sure all\\n  your data is captured in the item data or external stores like Flux, Redux, or Relay.\\n- This is a \`PureComponent\` which means that it will not re-render if \`props\` remain shallow-\\n  equal. Make sure that everything your \`renderItem\` function depends on is passed as a prop that\\n  is not \`===\` after updates, otherwise your UI may not update on changes. This includes the\\n  \`data\` prop and parent component state.\\n- In order to constrain memory and enable smooth scrolling, content is rendered asynchronously\\n  offscreen. This means it's possible to scroll faster than the fill rate ands momentarily see\\n  blank content. This is a tradeoff that can be adjusted to suit the needs of each application,\\n  and we are working on improving it behind the scenes.\\n- By default, the list looks for a \`key\` prop on each item and uses that for the React key.\\n  Alternatively, you can provide a custom \`keyExtractor\` prop.",
  "methods": [],
  "props": \{
    "sections": \{
      "flowType": \{
        "name": "Array",
        "elements": [
          \{
            "name": "SectionT"
          }
        ],
        "raw": "Array<SectionT>"
      },
      "required": true,
      "description": ""
    },
    "renderItem": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{item: Item, index: number}) => ?React.Element<any>",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{item: Item, index: number}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "item",
                      "value": \{
                        "name": "any",
                        "required": true
                      }
                    },
                    \{
                      "key": "index",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>",
            "nullable": true
          }
        }
      },
      "required": true,
      "description": "Default renderer for every item in every section. Can be over-ridden on a per-section basis."
    },
    "ItemSeparatorComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered in between adjacent Items within each section."
    },
    "ListHeaderComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the very beginning of the list."
    },
    "ListFooterComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the very end of the list."
    },
    "renderSectionHeader": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{section: SectionT}) => ?React.Element<any>",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{section: SectionT}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "section",
                      "value": \{
                        "name": "SectionT",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>",
            "nullable": true
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the top of each section. Sticky headers are not yet supported."
    },
    "SectionSeparatorComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered in between each section."
    },
    "keyExtractor": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(item: Item, index: number) => string",
        "signature": \{
          "arguments": [
            \{
              "name": "item",
              "type": \{
                "name": "any"
              }
            },
            \{
              "name": "index",
              "type": \{
                "name": "number"
              }
            }
          ],
          "return": \{
            "name": "string"
          }
        }
      },
      "required": true,
      "description": "Used to extract a unique key for a given item at the specified index. Key is used for caching\\nand as the react key to track item re-ordering. The default extractor checks item.key, then\\nfalls back to using the index, like react does."
    },
    "onEndReached": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{distanceFromEnd: number}) => void",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{distanceFromEnd: number}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "distanceFromEnd",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": ""
    },
    "onRefresh": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": \{
          "arguments": [],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "If provided, a standard RefreshControl will be added for \\"Pull to Refresh\\" functionality. Make\\nsure to also set the \`refreshing\` prop correctly."
    },
    "onViewableItemsChanged": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{viewableItems: Array<ViewToken>, changed: Array<ViewToken>}) => void",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{viewableItems: Array<ViewToken>, changed: Array<ViewToken>}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "viewableItems",
                      "value": \{
                        "name": "Array",
                        "elements": [
                          \{
                            "name": "ViewToken"
                          }
                        ],
                        "raw": "Array<ViewToken>",
                        "required": true
                      }
                    },
                    \{
                      "key": "changed",
                      "value": \{
                        "name": "Array",
                        "elements": [
                          \{
                            "name": "ViewToken"
                          }
                        ],
                        "raw": "Array<ViewToken>",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Called when the viewability of rows changes, as defined by the\\n\`viewabilityConfig\` prop."
    },
    "refreshing": \{
      "flowType": \{
        "name": "boolean",
        "nullable": true
      },
      "required": false,
      "description": "Set this true while waiting for new data from a refresh."
    },
    "shouldItemUpdate": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(\\n  prevProps: \{item: Item, index: number},\\n  nextProps: \{item: Item, index: number}\\n) => boolean",
        "signature": \{
          "arguments": [
            \{
              "name": "prevProps",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{item: Item, index: number}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "item",
                      "value": \{
                        "name": "any",
                        "required": true
                      }
                    },
                    \{
                      "key": "index",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    }
                  ]
                }
              }
            },
            \{
              "name": "nextProps",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{item: Item, index: number}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "item",
                      "value": \{
                        "name": "any",
                        "required": true
                      }
                    },
                    \{
                      "key": "index",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "name": "boolean"
          }
        }
      },
      "required": true,
      "description": "This is an optional optimization to minimize re-rendering items."
    }
  },
  "type": "component",
  "filepath": "Libraries/CustomComponents/Lists/SectionList.js",
  "componentName": "SectionList",
  "componentPlatform": "cross",
  "styles": \{
    "ViewStylePropTypes": \{
      "props": \{
        "backfaceVisibility": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'visible'",
                "computed": false
              },
              \{
                "value": "'hidden'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "backgroundColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderTopColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderRightColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderBottomColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderLeftColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderStyle": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'solid'",
                "computed": false
              },
              \{
                "value": "'dotted'",
                "computed": false
              },
              \{
                "value": "'dashed'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "borderWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderRightWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderLeftWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "opacity": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "elevation": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": "(Android-only) Sets the elevation of a view, using Android's underlying\\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\\nThis adds a drop shadow to the item and affects z-order for overlapping views.\\nOnly supported on Android 5.0+, has no effect on earlier versions.\\n@platform android"
        }
      },
      "composes": [
        "LayoutPropTypes",
        "ShadowPropTypesIOS",
        "TransformPropTypes"
      ]
    },
    "TextStylePropTypes": \{
      "props": \{
        "color": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "fontFamily": \{
          "type": \{
            "name": "string"
          },
          "required": false,
          "description": ""
        },
        "fontSize": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "fontStyle": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'normal'",
                "computed": false
              },
              \{
                "value": "'italic'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "fontWeight": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"normal\\"",
                "computed": false
              },
              \{
                "value": "'bold'",
                "computed": false
              },
              \{
                "value": "'100'",
                "computed": false
              },
              \{
                "value": "'200'",
                "computed": false
              },
              \{
                "value": "'300'",
                "computed": false
              },
              \{
                "value": "'400'",
                "computed": false
              },
              \{
                "value": "'500'",
                "computed": false
              },
              \{
                "value": "'600'",
                "computed": false
              },
              \{
                "value": "'700'",
                "computed": false
              },
              \{
                "value": "'800'",
                "computed": false
              },
              \{
                "value": "'900'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "Specifies font weight. The values 'normal' and 'bold' are supported for\\nmost fonts. Not all fonts have a variant for each of the numeric values,\\nin that case the closest one is chosen."
        },
        "fontVariant": \{
          "type": \{
            "name": "arrayOf",
            "value": \{
              "name": "enum",
              "value": [
                \{
                  "value": "'small-caps'",
                  "computed": false
                },
                \{
                  "value": "'oldstyle-nums'",
                  "computed": false
                },
                \{
                  "value": "'lining-nums'",
                  "computed": false
                },
                \{
                  "value": "'tabular-nums'",
                  "computed": false
                },
                \{
                  "value": "'proportional-nums'",
                  "computed": false
                }
              ]
            }
          },
          "required": false,
          "description": "@platform ios"
        },
        "textShadowOffset": \{
          "type": \{
            "name": "shape",
            "value": \{
              "width": \{
                "name": "number",
                "required": false
              },
              "height": \{
                "name": "number",
                "required": false
              }
            }
          },
          "required": false,
          "description": ""
        },
        "textShadowRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "textShadowColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "letterSpacing": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": "@platform ios"
        },
        "lineHeight": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "textAlign": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'left'",
                "computed": false
              },
              \{
                "value": "'right'",
                "computed": false
              },
              \{
                "value": "'center'",
                "computed": false
              },
              \{
                "value": "'justify'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "Specifies text alignment. The value 'justify' is only supported on iOS and\\nfallbacks to \`left\` on Android."
        },
        "textAlignVertical": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'top'",
                "computed": false
              },
              \{
                "value": "'bottom'",
                "computed": false
              },
              \{
                "value": "'center'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "@platform android"
        },
        "includeFontPadding": \{
          "type": \{
            "name": "bool"
          },
          "required": false,
          "description": "Set to \`false\` to remove extra font padding intended to make space for certain ascenders / descenders.\\nWith some fonts, this padding can make text look slightly misaligned when centered vertically.\\nFor best results also set \`textAlignVertical\` to \`center\`. Default is true.\\n@platform android"
        },
        "textDecorationLine": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"none\\"",
                "computed": false
              },
              \{
                "value": "'underline'",
                "computed": false
              },
              \{
                "value": "'line-through'",
                "computed": false
              },
              \{
                "value": "'underline line-through'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "textDecorationStyle": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"solid\\"",
                "computed": false
              },
              \{
                "value": "'double'",
                "computed": false
              },
              \{
                "value": "'dotted'",
                "computed": false
              },
              \{
                "value": "'dashed'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "@platform ios"
        },
        "textDecorationColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": "@platform ios"
        },
        "writingDirection": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'ltr'",
                "computed": false
              },
              \{
                "value": "'rtl'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "@platform ios"
        }
      },
      "composes": [
        "ViewStylePropTypes"
      ]
    },
    "ImageStylePropTypes": \{
      "props": \{
        "resizeMode": \{
          "type": \{
            "name": "enum",
            "computed": true,
            "value": "Object.keys(ImageResizeMode)"
          },
          "required": false,
          "description": ""
        },
        "backfaceVisibility": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'visible'",
                "computed": false
              },
              \{
                "value": "'hidden'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "backgroundColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "overflow": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'visible'",
                "computed": false
              },
              \{
                "value": "'hidden'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "tintColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": "Changes the color of all the non-transparent pixels to the tintColor."
        },
        "opacity": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "overlayColor": \{
          "type": \{
            "name": "string"
          },
          "required": false,
          "description": "When the image has rounded corners, specifying an overlayColor will\\ncause the remaining space in the corners to be filled with a solid color.\\nThis is useful in cases which are not supported by the Android\\nimplementation of rounded corners:\\n  - Certain resize modes, such as 'contain'\\n  - Animated GIFs\\n\\nA typical way to use this prop is with images displayed on a solid\\nbackground and setting the \`overlayColor\` to the same color\\nas the background.\\n\\nFor details of how this works under the hood, see\\nhttp://frescolib.org/docs/rounded-corners-and-circles.html\\n\\n@platform android"
        },
        "borderTopLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        }
      },
      "composes": [
        "LayoutPropTypes",
        "ShadowPropTypesIOS",
        "TransformPropTypes"
      ]
    }
  },
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/SectionListExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule SectionListExample\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst \{\\n  SectionList,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = ReactNative;\\n\\nconst UIExplorerPage = require\('./UIExplorerPage');\\n\\nconst infoLog = require\('infoLog');\\n\\nconst \{\\n  HeaderComponent,\\n  FooterComponent,\\n  ItemComponent,\\n  PlainInput,\\n  SeparatorComponent,\\n  genItemData,\\n  pressItem,\\n  renderSmallSwitchOption,\\n  renderStackedItem,\\n} = require\('./ListExampleShared');\\n\\nconst VIEWABILITY_CONFIG = \{\\n  minimumViewTime: 3000,\\n  viewAreaCoveragePercentThreshold: 100,\\n  waitForInteraction: true,\\n};\\n\\nconst renderSectionHeader = (\{section}) => (\\n  <View>\\n    <Text style=\{styles.headerText}>SECTION HEADER: \{section.key}</Text>\\n    <SeparatorComponent />\\n  </View>\\n);\\n\\nconst CustomSeparatorComponent = (\{text}) => (\\n  <View>\\n    <SeparatorComponent />\\n    <Text style=\{styles.separatorText}>\{text}</Text>\\n    <SeparatorComponent />\\n  </View>\\n);\\n\\nclass SectionListExample extends React.PureComponent \{\\n  static title = '<SectionList>';\\n  static description = 'Performant, scrollable list of data.';\\n\\n  state = \{\\n    data: genItemData(1000),\\n    filterText: '',\\n    logViewable: false,\\n    virtualized: true,\\n  };\\n  render() \{\\n    const filterRegex = new RegExp(String(this.state.filterText), 'i');\\n    const filter = (item) => (\\n      filterRegex.test(item.text) || filterRegex.test(item.title)\\n    );\\n    const filteredData = this.state.data.filter(filter);\\n    return (\\n      <UIExplorerPage\\n        noSpacer=\{true}\\n        noScroll=\{true}>\\n        <View style=\{styles.searchRow}>\\n          <PlainInput\\n            onChangeText=\{filterText => \{\\n              this.setState(() => (\{filterText}));\\n            }}\\n            placeholder=\\"Search...\\"\\n            value=\{this.state.filterText}\\n          />\\n          <View style=\{styles.optionSection}>\\n            \{renderSmallSwitchOption(this, 'virtualized')}\\n            \{renderSmallSwitchOption(this, 'logViewable')}\\n          </View>\\n        </View>\\n        <SeparatorComponent />\\n        <SectionList\\n          ListHeaderComponent=\{HeaderComponent}\\n          ListFooterComponent=\{FooterComponent}\\n          SectionSeparatorComponent=\{() =>\\n            <CustomSeparatorComponent text=\\"SECTION SEPARATOR\\" />\\n          }\\n          ItemSeparatorComponent=\{() =>\\n            <CustomSeparatorComponent text=\\"ITEM SEPARATOR\\" />\\n          }\\n          enableVirtualization=\{this.state.virtualized}\\n          onRefresh=\{() => alert('onRefresh: nothing to refresh :P')}\\n          onViewableItemsChanged=\{this._onViewableItemsChanged}\\n          refreshing=\{false}\\n          renderItem=\{this._renderItemComponent}\\n          renderSectionHeader=\{renderSectionHeader}\\n          sections=\{[\\n            \{renderItem: renderStackedItem, key: 's1', data: [\\n              \{title: 'Item In Header Section', text: 'Section s1', key: '0'},\\n            ]},\\n            \{key: 's2', data: [\\n              \{noImage: true, title: '1st item', text: 'Section s2', key: '0'},\\n              \{noImage: true, title: '2nd item', text: 'Section s2', key: '1'},\\n            ]},\\n            \{key: 'Filtered Items', data: filteredData},\\n          ]}\\n          viewabilityConfig=\{VIEWABILITY_CONFIG}\\n        />\\n      </UIExplorerPage>\\n    );\\n  }\\n  _renderItemComponent = (\{item}) => (\\n    <ItemComponent item=\{item} onPress=\{this._pressItem} />\\n  );\\n  // This is called when items change viewability by scrolling into our out of\\n  // the viewable area.\\n  _onViewableItemsChanged = (info: \{\\n    changed: Array<\{\\n      key: string,\\n      isViewable: boolean,\\n      item: \{columns: Array<*>},\\n      index: ?number,\\n      section?: any\\n    }>},\\n  ) => \{\\n    // Impressions can be logged here\\n    if (this.state.logViewable) \{\\n      infoLog('onViewableItemsChanged: ', info.changed.map((v: Object) => (\\n        \{...v, item: '...', section: v.section.key}\\n      )));\\n    }\\n  };\\n  _pressItem = (index: number) => \{\\n    pressItem(this, index);\\n  };\\n}\\n\\nconst styles = StyleSheet.create(\{\\n  headerText: \{\\n    padding: 4,\\n  },\\n  optionSection: \{\\n    flexDirection: 'row',\\n  },\\n  searchRow: \{\\n    paddingHorizontal: 10,\\n  },\\n  separatorText: \{\\n    color: 'gray',\\n    alignSelf: 'center',\\n    padding: 4,\\n    fontSize: 9,\\n  },\\n});\\n\\nmodule.exports = SectionListExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"sectionlist","title":"SectionList","layout":"autodocs","category":"components","permalink":"docs/sectionlist.html","platform":"cross","next":"segmentedcontrolios","previous":"scrollview","sidebar":true,"runnable":true,"path":"Libraries/CustomComponents/Lists/SectionList.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;