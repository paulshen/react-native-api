/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "Use \`SegmentedControlIOS\` to render a UISegmentedControl iOS.\\n\\n#### Programmatically changing selected index\\n\\nThe selected index can be changed on the fly by assigning the\\nselectIndex prop to a state variable, then changing that variable.\\nNote that the state variable would need to be updated as the user\\nselects a value and changes the index, as shown in the example below.\\n\\n\`\`\`\`\\n<SegmentedControlIOS\\n  values=\{['One', 'Two']}\\n  selectedIndex=\{this.state.selectedIndex}\\n  onChange=\{(event) => \{\\n    this.setState(\{selectedIndex: event.nativeEvent.selectedSegmentIndex});\\n  }}\\n/>\\n\`\`\`\`",
  "methods": [],
  "props": \{
    "values": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "string"
        }
      },
      "required": false,
      "description": "The labels for the control's segment buttons, in order.",
      "defaultValue": \{
        "value": "[]",
        "computed": false
      }
    },
    "selectedIndex": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "The index in \`props.values\` of the segment to be (pre)selected."
    },
    "onValueChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the user taps a segment;\\npasses the segment's value as an argument"
    },
    "onChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the user taps a segment;\\npasses the event as an argument"
    },
    "enabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If false the user won't be able to interact with the control.\\nDefault value is true.",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "tintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Accent color of the control."
    },
    "momentary": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true, then selecting a segment won't persist visually.\\nThe \`onValueChange\` callback will still work as expected."
    }
  },
  "composes": [
    "View"
  ],
  "type": "component",
  "filepath": "Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js",
  "componentName": "SegmentedControlIOS",
  "componentPlatform": "ios",
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
      "path": "Examples/UIExplorer/js/SegmentedControlIOSExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule SegmentedControlIOSExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  SegmentedControlIOS,\\n  Text,\\n  View,\\n  StyleSheet\\n} = ReactNative;\\n\\nclass BasicSegmentedControlExample extends React.Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <View style=\{\{marginBottom: 10}}>\\n          <SegmentedControlIOS values=\{['One', 'Two']} />\\n        </View>\\n        <View>\\n          <SegmentedControlIOS values=\{['One', 'Two', 'Three', 'Four', 'Five']} />\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass PreSelectedSegmentedControlExample extends React.Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <View>\\n          <SegmentedControlIOS values=\{['One', 'Two']} selectedIndex=\{0} />\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass MomentarySegmentedControlExample extends React.Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <View>\\n          <SegmentedControlIOS values=\{['One', 'Two']} momentary=\{true} />\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass DisabledSegmentedControlExample extends React.Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <View>\\n          <SegmentedControlIOS enabled=\{false} values=\{['One', 'Two']} selectedIndex=\{1} />\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass ColorSegmentedControlExample extends React.Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <View style=\{\{marginBottom: 10}}>\\n          <SegmentedControlIOS tintColor=\\"#ff0000\\" values=\{['One', 'Two', 'Three', 'Four']} selectedIndex=\{0} />\\n        </View>\\n        <View>\\n          <SegmentedControlIOS tintColor=\\"#00ff00\\" values=\{['One', 'Two', 'Three']} selectedIndex=\{1} />\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass EventSegmentedControlExample extends React.Component \{\\n  state = \{\\n    values: ['One', 'Two', 'Three'],\\n    value: 'Not selected',\\n    selectedIndex: undefined\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text style=\{styles.text} >\\n          Value: \{this.state.value}\\n        </Text>\\n        <Text style=\{styles.text} >\\n          Index: \{this.state.selectedIndex}\\n        </Text>\\n        <SegmentedControlIOS\\n          values=\{this.state.values}\\n          selectedIndex=\{this.state.selectedIndex}\\n          onChange=\{this._onChange}\\n          onValueChange=\{this._onValueChange} />\\n      </View>\\n    );\\n  }\\n\\n  _onChange = (event) => \{\\n    this.setState(\{\\n      selectedIndex: event.nativeEvent.selectedSegmentIndex,\\n    });\\n  };\\n\\n  _onValueChange = (value) => \{\\n    this.setState(\{\\n      value: value,\\n    });\\n  };\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  text: \{\\n    fontSize: 14,\\n    textAlign: 'center',\\n    fontWeight: '500',\\n    margin: 10,\\n  },\\n});\\n\\nexports.title = '<SegmentedControlIOS>';\\nexports.displayName = 'SegmentedControlExample';\\nexports.description = 'Native segmented control';\\nexports.examples = [\\n  \{\\n    title: 'Segmented controls can have values',\\n    render(): React.Element<any> \{ return <BasicSegmentedControlExample />; }\\n  },\\n  \{\\n    title: 'Segmented controls can have a pre-selected value',\\n    render(): React.Element<any> \{ return <PreSelectedSegmentedControlExample />; }\\n  },\\n  \{\\n    title: 'Segmented controls can be momentary',\\n    render(): React.Element<any> \{ return <MomentarySegmentedControlExample />; }\\n  },\\n  \{\\n    title: 'Segmented controls can be disabled',\\n    render(): React.Element<any> \{ return <DisabledSegmentedControlExample />; }\\n  },\\n  \{\\n    title: 'Custom colors can be provided',\\n    render(): React.Element<any> \{ return <ColorSegmentedControlExample />; }\\n  },\\n  \{\\n    title: 'Change events can be detected',\\n    render(): React.Element<any> \{ return <EventSegmentedControlExample />; }\\n  }\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"segmentedcontrolios","title":"SegmentedControlIOS","layout":"autodocs","category":"components","permalink":"docs/segmentedcontrolios.html","platform":"ios","next":"slider","previous":"sectionlist","sidebar":true,"runnable":true,"path":"Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;