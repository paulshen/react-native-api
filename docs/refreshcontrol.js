/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "This component is used inside a ScrollView or ListView to add pull to refresh\\nfunctionality. When the ScrollView is at \`scrollY: 0\`, swiping down\\ntriggers an \`onRefresh\` event.\\n\\n### Usage example\\n\\n\`\`\` js\\nclass RefreshableList extends Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{\\n      refreshing: false,\\n    };\\n  }\\n\\n  _onRefresh() \{\\n    this.setState(\{refreshing: true});\\n    fetchData().then(() => \{\\n      this.setState(\{refreshing: false});\\n    });\\n  }\\n\\n  render() \{\\n    return (\\n      <ListView\\n        refreshControl=\{\\n          <RefreshControl\\n            refreshing=\{this.state.refreshing}\\n            onRefresh=\{this._onRefresh.bind(this)}\\n          />\\n        }\\n        ...\\n      >\\n      ...\\n      </ListView>\\n    );\\n  }\\n  ...\\n}\\n\`\`\`\\n\\n__Note:__ \`refreshing\` is a controlled prop, this is why it needs to be set to true\\nin the \`onRefresh\` function otherwise the refresh indicator will stop immediately.",
  "methods": [],
  "props": \{
    "onRefresh": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Called when the view starts refreshing."
    },
    "refreshing": \{
      "type": \{
        "name": "bool"
      },
      "required": true,
      "description": "Whether the view should be indicating an active refresh."
    },
    "tintColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The color of the refresh indicator.\\n@platform ios"
    },
    "titleColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "Title color.\\n@platform ios"
    },
    "title": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The title displayed under the refresh indicator.\\n@platform ios"
    },
    "enabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Whether the pull to refresh functionality is enabled.\\n@platform android"
    },
    "colors": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "custom",
          "raw": "ColorPropType"
        }
      },
      "required": false,
      "description": "The colors (at least one) that will be used to draw the refresh indicator.\\n@platform android"
    },
    "progressBackgroundColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The background color of the refresh indicator.\\n@platform android"
    },
    "size": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "RefreshLayoutConsts.SIZE.DEFAULT",
            "computed": true
          },
          \{
            "value": "RefreshLayoutConsts.SIZE.LARGE",
            "computed": true
          }
        ]
      },
      "required": false,
      "description": "Size of the refresh indicator, see RefreshControl.SIZE.\\n@platform android"
    },
    "progressViewOffset": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Progress view top offset\\n@platform android"
    }
  },
  "composes": [
    "View"
  ],
  "type": "component",
  "filepath": "Libraries/Components/RefreshControl/RefreshControl.js",
  "componentName": "RefreshControl",
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
      "path": "Examples/UIExplorer/js/RefreshControlExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @providesModule RefreshControlExample\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst \{\\n  ScrollView,\\n  StyleSheet,\\n  RefreshControl,\\n  Text,\\n  TouchableWithoutFeedback,\\n  View,\\n} = ReactNative;\\n\\nconst styles = StyleSheet.create(\{\\n  row: \{\\n    borderColor: 'grey',\\n    borderWidth: 1,\\n    padding: 20,\\n    backgroundColor: '#3a5795',\\n    margin: 5,\\n  },\\n  text: \{\\n    alignSelf: 'center',\\n    color: '#fff',\\n  },\\n  scrollview: \{\\n    flex: 1,\\n  },\\n});\\n\\nclass Row extends React.Component \{\\n  _onClick = () => \{\\n    this.props.onClick(this.props.data);\\n  };\\n\\n  render() \{\\n    return (\\n     <TouchableWithoutFeedback onPress=\{this._onClick} >\\n        <View style=\{styles.row}>\\n          <Text style=\{styles.text}>\\n            \{this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}\\n          </Text>\\n        </View>\\n      </TouchableWithoutFeedback>\\n    );\\n  }\\n}\\n\\nclass RefreshControlExample extends React.Component \{\\n  static title = '<RefreshControl>';\\n  static description = 'Adds pull-to-refresh support to a scrollview.';\\n\\n  state = \{\\n    isRefreshing: false,\\n    loaded: 0,\\n    rowData: Array.from(new Array(20)).map(\\n      (val, i) => (\{text: 'Initial row ' + i, clicks: 0})),\\n  };\\n\\n  _onClick = (row) => \{\\n    row.clicks++;\\n    this.setState(\{\\n      rowData: this.state.rowData,\\n    });\\n  };\\n\\n  render() \{\\n    const rows = this.state.rowData.map((row, ii) => \{\\n      return <Row key=\{ii} data=\{row} onClick=\{this._onClick}/>;\\n    });\\n    return (\\n      <ScrollView\\n        style=\{styles.scrollview}\\n        refreshControl=\{\\n          <RefreshControl\\n            refreshing=\{this.state.isRefreshing}\\n            onRefresh=\{this._onRefresh}\\n            tintColor=\\"#ff0000\\"\\n            title=\\"Loading...\\"\\n            titleColor=\\"#00ff00\\"\\n            colors=\{['#ff0000', '#00ff00', '#0000ff']}\\n            progressBackgroundColor=\\"#ffff00\\"\\n          />\\n        }>\\n        \{rows}\\n      </ScrollView>\\n    );\\n  }\\n\\n  _onRefresh = () => \{\\n    this.setState(\{isRefreshing: true});\\n    setTimeout(() => \{\\n      // prepend 10 items\\n      const rowData = Array.from(new Array(10))\\n      .map((val, i) => (\{\\n        text: 'Loaded row ' + (+this.state.loaded + i),\\n        clicks: 0,\\n      }))\\n      .concat(this.state.rowData);\\n\\n      this.setState(\{\\n        loaded: this.state.loaded + 10,\\n        isRefreshing: false,\\n        rowData: rowData,\\n      });\\n    }, 5000);\\n  };\\n}\\n\\nmodule.exports = RefreshControlExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"refreshcontrol","title":"RefreshControl","layout":"autodocs","category":"components","permalink":"docs/refreshcontrol.html","platform":"cross","next":"scrollview","previous":"progressviewios","sidebar":true,"runnable":true,"path":"Libraries/Components/RefreshControl/RefreshControl.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;