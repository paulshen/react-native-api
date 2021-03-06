/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "Renders the native picker component on iOS and Android. Example:\\n\\n    <Picker\\n      selectedValue=\{this.state.language}\\n      onValueChange=\{(lang) => this.setState(\{language: lang})}>\\n      <Picker.Item label=\\"Java\\" value=\\"java\\" />\\n      <Picker.Item label=\\"JavaScript\\" value=\\"js\\" />\\n    </Picker>",
  "methods": [],
  "props": \{
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "pickerStyleType"
      },
      "required": false,
      "description": "",
      "flowType": \{
        "name": "$FlowFixMe"
      }
    },
    "selectedValue": \{
      "type": \{
        "name": "any"
      },
      "required": false,
      "description": "Value matching value of one of the items. Can be a string or an integer.",
      "flowType": \{
        "name": "any"
      }
    },
    "onValueChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback for when an item is selected. This is called with the following parameters:\\n  - \`itemValue\`: the \`value\` prop of the item that was selected\\n  - \`itemPosition\`: the index of the selected item in this picker",
      "flowType": \{
        "name": "Function"
      }
    },
    "enabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If set to false, the picker will be disabled, i.e. the user will not be able to make a\\nselection.\\n@platform android",
      "flowType": \{
        "name": "boolean"
      }
    },
    "mode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'dialog'",
            "computed": false
          },
          \{
            "value": "'dropdown'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "On Android, specifies how to display the selection items when the user taps on the picker:\\n\\n  - 'dialog': Show a modal dialog. This is the default.\\n  - 'dropdown': Shows a dropdown anchored to the picker view\\n\\n@platform android",
      "flowType": \{
        "name": "union",
        "raw": "'dialog' | 'dropdown'",
        "elements": [
          \{
            "name": "literal",
            "value": "'dialog'"
          },
          \{
            "name": "literal",
            "value": "'dropdown'"
          }
        ]
      },
      "defaultValue": \{
        "value": "'dialog'",
        "computed": false
      }
    },
    "itemStyle": \{
      "type": \{
        "name": "custom",
        "raw": "itemStylePropType"
      },
      "required": false,
      "description": "Style to apply to each of the item labels.\\n@platform ios",
      "flowType": \{
        "name": "$FlowFixMe"
      }
    },
    "prompt": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Prompt string for this picker, used on Android in dialog mode as the title of the dialog.\\n@platform android",
      "flowType": \{
        "name": "string"
      }
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view in end-to-end tests.",
      "flowType": \{
        "name": "string"
      }
    }
  },
  "composes": [
    "View"
  ],
  "type": "component",
  "filepath": "Libraries/Components/Picker/Picker.js",
  "componentName": "Picker",
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
      "path": "Examples/UIExplorer/js/PickerExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule PickerExample\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst StyleSheet = require\('StyleSheet');\\nconst UIExplorerBlock = require\('UIExplorerBlock');\\nconst UIExplorerPage = require\('UIExplorerPage');\\n\\nconst \{\\n  Picker,\\n  Text,\\n} = ReactNative;\\n\\nconst Item = Picker.Item;\\n\\nclass PickerExample extends React.Component \{\\n  static title = '<Picker>';\\n  static description = 'Provides multiple options to choose from, using either a dropdown menu or a dialog.';\\n\\n  state = \{\\n    selected1: 'key1',\\n    selected2: 'key1',\\n    selected3: 'key1',\\n    color: 'red',\\n    mode: Picker.MODE_DIALOG,\\n  };\\n\\n  render() \{\\n    return (\\n      <UIExplorerPage title=\\"<Picker>\\">\\n        <UIExplorerBlock title=\\"Basic Picker\\">\\n          <Picker\\n            style=\{styles.picker}\\n            selectedValue=\{this.state.selected1}\\n            onValueChange=\{this.onValueChange.bind(this, 'selected1')}>\\n            <Item label=\\"hello\\" value=\\"key0\\" />\\n            <Item label=\\"world\\" value=\\"key1\\" />\\n          </Picker>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Disabled picker\\">\\n          <Picker style=\{styles.picker} enabled=\{false} selectedValue=\{this.state.selected1}>\\n            <Item label=\\"hello\\" value=\\"key0\\" />\\n            <Item label=\\"world\\" value=\\"key1\\" />\\n          </Picker>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Dropdown Picker\\">\\n          <Picker\\n            style=\{styles.picker}\\n            selectedValue=\{this.state.selected2}\\n            onValueChange=\{this.onValueChange.bind(this, 'selected2')}\\n            mode=\\"dropdown\\">\\n            <Item label=\\"hello\\" value=\\"key0\\" />\\n            <Item label=\\"world\\" value=\\"key1\\" />\\n          </Picker>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Picker with prompt message\\">\\n          <Picker\\n            style=\{styles.picker}\\n            selectedValue=\{this.state.selected3}\\n            onValueChange=\{this.onValueChange.bind(this, 'selected3')}\\n            prompt=\\"Pick one, just one\\">\\n            <Item label=\\"hello\\" value=\\"key0\\" />\\n            <Item label=\\"world\\" value=\\"key1\\" />\\n          </Picker>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Picker with no listener\\">\\n          <Picker style=\{styles.picker}>\\n            <Item label=\\"hello\\" value=\\"key0\\" />\\n            <Item label=\\"world\\" value=\\"key1\\" />\\n          </Picker>\\n          <Text>\\n            Cannot change the value of this picker because it doesn't update selectedValue.\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Colorful pickers\\">\\n          <Picker\\n            style=\{[styles.picker, \{color: 'white', backgroundColor: '#333'}]}\\n            selectedValue=\{this.state.color}\\n            onValueChange=\{this.onValueChange.bind(this, 'color')}\\n            mode=\\"dropdown\\">\\n            <Item label=\\"red\\" color=\\"red\\" value=\\"red\\" />\\n            <Item label=\\"green\\" color=\\"green\\" value=\\"green\\" />\\n            <Item label=\\"blue\\" color=\\"blue\\" value=\\"blue\\" />\\n          </Picker>\\n          <Picker\\n            style=\{styles.picker}\\n            selectedValue=\{this.state.color}\\n            onValueChange=\{this.onValueChange.bind(this, 'color')}\\n            mode=\\"dialog\\">\\n            <Item label=\\"red\\" color=\\"red\\" value=\\"red\\" />\\n            <Item label=\\"green\\" color=\\"green\\" value=\\"green\\" />\\n            <Item label=\\"blue\\" color=\\"blue\\" value=\\"blue\\" />\\n          </Picker>\\n        </UIExplorerBlock>\\n      </UIExplorerPage>\\n    );\\n  }\\n\\n  changeMode = () => \{\\n    const newMode = this.state.mode === Picker.MODE_DIALOG\\n        ? Picker.MODE_DROPDOWN\\n        : Picker.MODE_DIALOG;\\n    this.setState(\{mode: newMode});\\n  };\\n\\n  onValueChange = (key: string, value: string) => \{\\n    const newState = \{};\\n    newState[key] = value;\\n    this.setState(newState);\\n  };\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  picker: \{\\n    width: 100,\\n  },\\n});\\n\\nmodule.exports = PickerExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"picker","title":"Picker","layout":"autodocs","category":"components","permalink":"docs/picker.html","platform":"cross","next":"pickerios","previous":"navigatorios","sidebar":true,"runnable":true,"path":"Libraries/Components/Picker/Picker.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;