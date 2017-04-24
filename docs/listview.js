/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "ListView - A core component designed for efficient display of vertically\\nscrolling lists of changing data. The minimal API is to create a\\n[\`ListView.DataSource\`](docs/listviewdatasource.html), populate it with a simple\\narray of data blobs, and instantiate a \`ListView\` component with that data\\nsource and a \`renderRow\` callback which takes a blob from the data array and\\nreturns a renderable component.\\n\\nMinimal example:\\n\\n\`\`\`\\nclass MyComponent extends Component \{\\n  constructor() \{\\n    super();\\n    const ds = new ListView.DataSource(\{rowHasChanged: (r1, r2) => r1 !== r2});\\n    this.state = \{\\n      dataSource: ds.cloneWithRows(['row 1', 'row 2']),\\n    };\\n  }\\n\\n  render() \{\\n    return (\\n      <ListView\\n        dataSource=\{this.state.dataSource}\\n        renderRow=\{(rowData) => <Text>\{rowData}</Text>}\\n      />\\n    );\\n  }\\n}\\n\`\`\`\\n\\nListView also supports more advanced features, including sections with sticky\\nsection headers, header and footer support, callbacks on reaching the end of\\nthe available data (\`onEndReached\`) and on the set of rows that are visible\\nin the device viewport change (\`onChangeVisibleRows\`), and several\\nperformance optimizations.\\n\\nThere are a few performance operations designed to make ListView scroll\\nsmoothly while dynamically loading potentially very large (or conceptually\\ninfinite) data sets:\\n\\n * Only re-render changed rows - the rowHasChanged function provided to the\\n   data source tells the ListView if it needs to re-render a row because the\\n   source data has changed - see ListViewDataSource for more details.\\n\\n * Rate-limited row rendering - By default, only one row is rendered per\\n   event-loop (customizable with the \`pageSize\` prop). This breaks up the\\n   work into smaller chunks to reduce the chance of dropping frames while\\n   rendering rows.",
  "methods": [
    \{
      "name": "getMetrics",
      "docblock": "Exports some data, e.g. for perf investigations or analytics.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Exports some data, e.g. for perf investigations or analytics."
    },
    \{
      "name": "scrollTo",
      "docblock": "Scrolls to a given x, y offset, either immediately or with a smooth animation.\\n\\nSee \`ScrollView#scrollTo\`.",
      "modifiers": [],
      "params": [
        \{
          "name": "...args",
          "type": \{
            "names": [
              "Array"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Scrolls to a given x, y offset, either immediately or with a smooth animation.\\n\\nSee \`ScrollView#scrollTo\`."
    },
    \{
      "name": "scrollToEnd",
      "docblock": "If this is a vertical ListView scrolls to the bottom.\\nIf this is a horizontal ListView scrolls to the right.\\n\\nUse \`scrollToEnd(\{animated: true})\` for smooth animated scrolling,\\n\`scrollToEnd(\{animated: false})\` for immediate scrolling.\\nIf no options are passed, \`animated\` defaults to true.\\n\\nSee \`ScrollView#scrollToEnd\`.",
      "modifiers": [],
      "params": [
        \{
          "name": "options",
          "optional": true,
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "If this is a vertical ListView scrolls to the bottom.\\nIf this is a horizontal ListView scrolls to the right.\\n\\nUse \`scrollToEnd(\{animated: true})\` for smooth animated scrolling,\\n\`scrollToEnd(\{animated: false})\` for immediate scrolling.\\nIf no options are passed, \`animated\` defaults to true.\\n\\nSee \`ScrollView#scrollToEnd\`."
    }
  ],
  "props": \{
    "dataSource": \{
      "type": \{
        "name": "instanceOf",
        "value": "ListViewDataSource"
      },
      "required": true,
      "description": "An instance of [ListView.DataSource](docs/listviewdatasource.html) to use"
    },
    "renderSeparator": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "(sectionID, rowID, adjacentRowHighlighted) => renderable\\n\\nIf provided, a renderable component to be rendered as the separator\\nbelow each row but not the last row if there is a section header below.\\nTake a sectionID and rowID of the row above and whether its adjacent row\\nis highlighted."
    },
    "renderRow": \{
      "type": \{
        "name": "func"
      },
      "required": true,
      "description": "(rowData, sectionID, rowID, highlightRow) => renderable\\n\\nTakes a data entry from the data source and its ids and should return\\na renderable component to be rendered as the row. By default the data\\nis exactly what was put into the data source, but it's also possible to\\nprovide custom extractors. ListView can be notified when a row is\\nbeing highlighted by calling \`highlightRow(sectionID, rowID)\`. This\\nsets a boolean value of adjacentRowHighlighted in renderSeparator, allowing you\\nto control the separators above and below the highlighted row. The highlighted\\nstate of a row can be reset by calling highlightRow(null)."
    },
    "initialListSize": \{
      "type": \{
        "name": "number"
      },
      "required": true,
      "description": "How many rows to render on initial component mount. Use this to make\\nit so that the first screen worth of data appears at one time instead of\\nover the course of multiple frames.",
      "defaultValue": \{
        "value": "10",
        "computed": false
      }
    },
    "onEndReached": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Called when all rows have been rendered and the list has been scrolled\\nto within onEndReachedThreshold of the bottom. The native scroll\\nevent is provided."
    },
    "onEndReachedThreshold": \{
      "type": \{
        "name": "number"
      },
      "required": true,
      "description": "Threshold in pixels (virtual, not physical) for calling onEndReached.",
      "defaultValue": \{
        "value": "1000",
        "computed": false
      }
    },
    "pageSize": \{
      "type": \{
        "name": "number"
      },
      "required": true,
      "description": "Number of rows to render per event loop. Note: if your 'rows' are actually\\ncells, i.e. they don't span the full width of your view (as in the\\nListViewGridLayoutExample), you should set the pageSize to be a multiple\\nof the number of cells per row, otherwise you're likely to see gaps at\\nthe edge of the ListView as new pages are loaded.",
      "defaultValue": \{
        "value": "1",
        "computed": false
      }
    },
    "renderFooter": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "() => renderable\\n\\nThe header and footer are always rendered (if these props are provided)\\non every render pass. If they are expensive to re-render, wrap them\\nin StaticContainer or other mechanism as appropriate. Footer is always\\nat the bottom of the list, and header at the top, on every render pass."
    },
    "renderHeader": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "renderSectionHeader": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "(sectionData, sectionID) => renderable\\n\\nIf provided, a header is rendered for this section."
    },
    "renderScrollComponent": \{
      "type": \{
        "name": "func"
      },
      "required": true,
      "description": "(props) => renderable\\n\\nA function that returns the scrollable component in which the list rows\\nare rendered. Defaults to returning a ScrollView with the given props.",
      "defaultValue": \{
        "value": "props => <ScrollView \{...props} />",
        "computed": false
      }
    },
    "scrollRenderAheadDistance": \{
      "type": \{
        "name": "number"
      },
      "required": true,
      "description": "How early to start rendering rows before they come on screen, in\\npixels.",
      "defaultValue": \{
        "value": "1000",
        "computed": false
      }
    },
    "onChangeVisibleRows": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "(visibleRows, changedRows) => void\\n\\nCalled when the set of visible rows changes. \`visibleRows\` maps\\n\{ sectionID: \{ rowID: true }} for all the visible rows, and\\n\`changedRows\` maps \{ sectionID: \{ rowID: true | false }} for the rows\\nthat have changed their visibility, with true indicating visible, and\\nfalse indicating the view has moved out of view."
    },
    "removeClippedSubviews": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "A performance optimization for improving scroll perf of\\nlarge lists, used in conjunction with overflow: 'hidden' on the row\\ncontainers. This is enabled by default."
    },
    "stickySectionHeadersEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Makes the sections headers sticky. The sticky behavior means that it\\nwill scroll with the content at the top of the section until it reaches\\nthe top of the screen, at which point it will stick to the top until it\\nis pushed off the screen by the next section header.\\n@platform ios",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "stickyHeaderIndices": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "number"
        }
      },
      "required": true,
      "description": "An array of child indices determining which children get docked to the\\ntop of the screen when scrolling. For example, passing\\n\`stickyHeaderIndices=\{[0]}\` will cause the first child to be fixed to the\\ntop of the scroll view. This property is not supported in conjunction\\nwith \`horizontal=\{true}\`.\\n@platform ios",
      "defaultValue": \{
        "value": "[]",
        "computed": false
      }
    },
    "enableEmptySections": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Flag indicating whether empty section headers should be rendered. In the future release\\nempty section headers will be rendered by default, and the flag will be deprecated.\\nIf empty sections are not desired to be rendered their indices should be excluded from sectionID object."
    }
  },
  "composes": [
    "ScrollView"
  ],
  "type": "component",
  "filepath": "Libraries/CustomComponents/ListView/ListView.js",
  "componentName": "ListView",
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
      "path": "Examples/UIExplorer/js/ListViewExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule ListViewExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Image,\\n  ListView,\\n  TouchableHighlight,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = ReactNative;\\n\\nvar UIExplorerPage = require\('./UIExplorerPage');\\n\\nvar ListViewSimpleExample = React.createClass(\{\\n  statics: \{\\n    title: '<ListView>',\\n    description: 'Performant, scrollable list of data.'\\n  },\\n\\n  getInitialState: function() \{\\n    var ds = new ListView.DataSource(\{rowHasChanged: (r1, r2) => r1 !== r2});\\n    return \{\\n      dataSource: ds.cloneWithRows(this._genRows(\{})),\\n    };\\n  },\\n\\n  _pressData: (\{}: \{[key: number]: boolean}),\\n\\n  componentWillMount: function() \{\\n    this._pressData = \{};\\n  },\\n\\n  render: function() \{\\n    return (\\n      <UIExplorerPage\\n        title=\{this.props.navigator ? null : '<ListView>'}\\n        noSpacer=\{true}\\n        noScroll=\{true}>\\n        <ListView\\n          dataSource=\{this.state.dataSource}\\n          renderRow=\{this._renderRow}\\n          renderSeparator=\{this._renderSeparator}\\n        />\\n      </UIExplorerPage>\\n    );\\n  },\\n\\n  _renderRow: function(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) \{\\n    var rowHash = Math.abs(hashCode(rowData));\\n    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];\\n    return (\\n      <TouchableHighlight onPress=\{() => \{\\n          this._pressRow(rowID);\\n          highlightRow(sectionID, rowID);\\n        }}>\\n        <View>\\n          <View style=\{styles.row}>\\n            <Image style=\{styles.thumb} source=\{imgSource} />\\n            <Text style=\{styles.text}>\\n              \{rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}\\n            </Text>\\n          </View>\\n        </View>\\n      </TouchableHighlight>\\n    );\\n  },\\n\\n  _genRows: function(pressData: \{[key: number]: boolean}): Array<string> \{\\n    var dataBlob = [];\\n    for (var ii = 0; ii < 100; ii++) \{\\n      var pressedText = pressData[ii] ? ' (pressed)' : '';\\n      dataBlob.push('Row ' + ii + pressedText);\\n    }\\n    return dataBlob;\\n  },\\n\\n  _pressRow: function(rowID: number) \{\\n    this._pressData[rowID] = !this._pressData[rowID];\\n    this.setState(\{dataSource: this.state.dataSource.cloneWithRows(\\n      this._genRows(this._pressData)\\n    )});\\n  },\\n\\n  _renderSeparator: function(sectionID: number, rowID: number, adjacentRowHighlighted: bool) \{\\n    return (\\n      <View\\n        key=\{\`$\{sectionID}-$\{rowID}\`}\\n        style=\{\{\\n          height: adjacentRowHighlighted ? 4 : 1,\\n          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',\\n        }}\\n      />\\n    );\\n  }\\n});\\n\\nvar THUMB_URLS = [\\n  require\('./Thumbnails/like.png'),\\n  require\('./Thumbnails/dislike.png'),\\n  require\('./Thumbnails/call.png'),\\n  require\('./Thumbnails/fist.png'),\\n  require\('./Thumbnails/bandaged.png'),\\n  require\('./Thumbnails/flowers.png'),\\n  require\('./Thumbnails/heart.png'),\\n  require\('./Thumbnails/liking.png'),\\n  require\('./Thumbnails/party.png'),\\n  require\('./Thumbnails/poke.png'),\\n  require\('./Thumbnails/superlike.png'),\\n  require\('./Thumbnails/victory.png'),\\n  ];\\nvar LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';\\n\\n/* eslint no-bitwise: 0 */\\nvar hashCode = function(str) \{\\n  var hash = 15;\\n  for (var ii = str.length - 1; ii >= 0; ii--) \{\\n    hash = ((hash << 5) - hash) + str.charCodeAt(ii);\\n  }\\n  return hash;\\n};\\n\\nvar styles = StyleSheet.create(\{\\n  row: \{\\n    flexDirection: 'row',\\n    justifyContent: 'center',\\n    padding: 10,\\n    backgroundColor: '#F6F6F6',\\n  },\\n  thumb: \{\\n    width: 64,\\n    height: 64,\\n  },\\n  text: \{\\n    flex: 1,\\n  },\\n});\\n\\nmodule.exports = ListViewSimpleExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"listview","title":"ListView","layout":"autodocs","category":"components","permalink":"docs/listview.html","platform":"cross","next":"mapview","previous":"keyboardavoidingview","sidebar":true,"runnable":true,"path":"Libraries/CustomComponents/ListView/ListView.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;