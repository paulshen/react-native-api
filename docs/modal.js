/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "The Modal component is a simple way to present content above an enclosing view.\\n\\n_Note: If you need more control over how to present modals over the rest of your app,\\nthen consider using a top-level Navigator._\\n\\n\`\`\`javascript\\nimport React, \{ Component } from 'react';\\nimport \{ Modal, Text, TouchableHighlight, View } from 'react-native';\\n\\nclass ModalExample extends Component \{\\n\\n  state = \{\\n    modalVisible: false,\\n  }\\n\\n  setModalVisible(visible) \{\\n    this.setState(\{modalVisible: visible});\\n  }\\n\\n  render() \{\\n    return (\\n      <View style=\{\{marginTop: 22}}>\\n        <Modal\\n          animationType=\{\\"slide\\"}\\n          transparent=\{false}\\n          visible=\{this.state.modalVisible}\\n          onRequestClose=\{() => \{alert(\\"Modal has been closed.\\")}}\\n          >\\n         <View style=\{\{marginTop: 22}}>\\n          <View>\\n            <Text>Hello World!</Text>\\n\\n            <TouchableHighlight onPress=\{() => \{\\n              this.setModalVisible(!this.state.modalVisible)\\n            }}>\\n              <Text>Hide Modal</Text>\\n            </TouchableHighlight>\\n\\n          </View>\\n         </View>\\n        </Modal>\\n\\n        <TouchableHighlight onPress=\{() => \{\\n          this.setModalVisible(true)\\n        }}>\\n          <Text>Show Modal</Text>\\n        </TouchableHighlight>\\n\\n      </View>\\n    );\\n  }\\n}\\n\`\`\`",
  "methods": [],
  "props": \{
    "animationType": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'none'",
            "computed": false
          },
          \{
            "value": "'slide'",
            "computed": false
          },
          \{
            "value": "'fade'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "The \`animationType\` prop controls how the modal animates.\\n\\n- \`slide\` slides in from the bottom\\n- \`fade\` fades into view\\n- \`none\` appears without an animation\\n\\nDefault is set to \`none\`."
    },
    "transparent": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "The \`transparent\` prop determines whether your modal will fill the entire view. Setting this to \`true\` will render the modal over a transparent background."
    },
    "hardwareAccelerated": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "The \`hardwareAccelerated\` prop controls whether to force hardware acceleration for the underlying window.\\n@platform android",
      "defaultValue": \{
        "value": "false",
        "computed": false
      }
    },
    "visible": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "The \`visible\` prop determines whether your modal is visible.",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "onRequestClose": \{
      "type": \{
        "name": "custom",
        "raw": "Platform.OS === 'android' ? PropTypes.func.isRequired : PropTypes.func"
      },
      "required": false,
      "description": "The \`onRequestClose\` callback is called when the user taps the hardware back button.\\n@platform android"
    },
    "onShow": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "The \`onShow\` prop allows passing a function that will be called once the modal has been shown."
    },
    "animated": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "",
      "deprecationMessage": "Use the \`animationType\` prop instead."
    },
    "supportedOrientations": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "enum",
          "value": [
            \{
              "value": "'portrait'",
              "computed": false
            },
            \{
              "value": "'portrait-upside-down'",
              "computed": false
            },
            \{
              "value": "'landscape'",
              "computed": false
            },
            \{
              "value": "'landscape-left'",
              "computed": false
            },
            \{
              "value": "'landscape-right'",
              "computed": false
            }
          ]
        }
      },
      "required": false,
      "description": "The \`supportedOrientations\` prop allows the modal to be rotated to any of the specified orientations.\\nOn iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.\\n@platform ios"
    },
    "onOrientationChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "The \`onOrientationChange\` callback is called when the orientation changes while the modal is being displayed.\\nThe orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.\\n@platform ios"
    }
  },
  "type": "component",
  "filepath": "Libraries/Modal/Modal.js",
  "componentName": "Modal",
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
      "path": "Examples/UIExplorer/js/ModalExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule ModalExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Modal,\\n  Picker,\\n  StyleSheet,\\n  Switch,\\n  Text,\\n  TouchableHighlight,\\n  View,\\n} = ReactNative;\\n\\nconst Item = Picker.Item;\\n\\nexports.displayName = (undefined: ?string);\\nexports.framework = 'React';\\nexports.title = '<Modal>';\\nexports.description = 'Component for presenting modal views.';\\n\\nclass Button extends React.Component \{\\n  state = \{\\n    active: false,\\n  };\\n\\n  _onHighlight = () => \{\\n    this.setState(\{active: true});\\n  };\\n\\n  _onUnhighlight = () => \{\\n    this.setState(\{active: false});\\n  };\\n\\n  render() \{\\n    var colorStyle = \{\\n      color: this.state.active ? '#fff' : '#000',\\n    };\\n    return (\\n      <TouchableHighlight\\n        onHideUnderlay=\{this._onUnhighlight}\\n        onPress=\{this.props.onPress}\\n        onShowUnderlay=\{this._onHighlight}\\n        style=\{[styles.button, this.props.style]}\\n        underlayColor=\\"#a9d9d4\\">\\n          <Text style=\{[styles.buttonText, colorStyle]}>\{this.props.children}</Text>\\n      </TouchableHighlight>\\n    );\\n  }\\n}\\n\\nconst supportedOrientationsPickerValues = [\\n  ['portrait'],\\n  ['landscape'],\\n  ['landscape-left'],\\n  ['portrait', 'landscape-right'],\\n  ['portrait', 'landscape'],\\n  [],\\n];\\n\\nclass ModalExample extends React.Component \{\\n  state = \{\\n    animationType: 'none',\\n    modalVisible: false,\\n    transparent: false,\\n    selectedSupportedOrientation: 0,\\n    currentOrientation: 'unknown',\\n  };\\n\\n  _setModalVisible = (visible) => \{\\n    this.setState(\{modalVisible: visible});\\n  };\\n\\n  _setAnimationType = (type) => \{\\n    this.setState(\{animationType: type});\\n  };\\n\\n  _toggleTransparent = () => \{\\n    this.setState(\{transparent: !this.state.transparent});\\n  };\\n\\n  render() \{\\n    var modalBackgroundStyle = \{\\n      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',\\n    };\\n    var innerContainerTransparentStyle = this.state.transparent\\n      ? \{backgroundColor: '#fff', padding: 20}\\n      : null;\\n    var activeButtonStyle = \{\\n      backgroundColor: '#ddd'\\n    };\\n\\n    return (\\n      <View>\\n        <Modal\\n          animationType=\{this.state.animationType}\\n          transparent=\{this.state.transparent}\\n          visible=\{this.state.modalVisible}\\n          onRequestClose=\{() => this._setModalVisible(false)}\\n          supportedOrientations=\{supportedOrientationsPickerValues[this.state.selectedSupportedOrientation]}\\n          onOrientationChange=\{evt => this.setState(\{currentOrientation: evt.nativeEvent.orientation})}\\n          >\\n          <View style=\{[styles.container, modalBackgroundStyle]}>\\n            <View style=\{[styles.innerContainer, innerContainerTransparentStyle]}>\\n              <Text>This modal was presented \{this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>\\n              <Text>It is currently displayed in \{this.state.currentOrientation} mode.</Text>\\n              <Button\\n                onPress=\{this._setModalVisible.bind(this, false)}\\n                style=\{styles.modalButton}>\\n                Close\\n              </Button>\\n            </View>\\n          </View>\\n        </Modal>\\n        <View style=\{styles.row}>\\n          <Text style=\{styles.rowTitle}>Animation Type</Text>\\n          <Button onPress=\{this._setAnimationType.bind(this, 'none')} style=\{this.state.animationType === 'none' ? activeButtonStyle : \{}}>\\n            none\\n          </Button>\\n          <Button onPress=\{this._setAnimationType.bind(this, 'slide')} style=\{this.state.animationType === 'slide' ? activeButtonStyle : \{}}>\\n            slide\\n          </Button>\\n          <Button onPress=\{this._setAnimationType.bind(this, 'fade')} style=\{this.state.animationType === 'fade' ? activeButtonStyle : \{}}>\\n            fade\\n          </Button>\\n        </View>\\n\\n        <View style=\{styles.row}>\\n          <Text style=\{styles.rowTitle}>Transparent</Text>\\n          <Switch value=\{this.state.transparent} onValueChange=\{this._toggleTransparent} />\\n        </View>\\n\\n        <View>\\n          <Text style=\{styles.rowTitle}>Supported orientations</Text>\\n          <Picker\\n            selectedValue=\{this.state.selectedSupportedOrientation}\\n            onValueChange=\{(_, i) => this.setState(\{selectedSupportedOrientation: i})}\\n            itemStyle=\{styles.pickerItem}\\n            >\\n            <Item label=\\"Portrait\\" value=\{0} />\\n            <Item label=\\"Landscape\\" value=\{1} />\\n            <Item label=\\"Landscape left\\" value=\{2} />\\n            <Item label=\\"Portrait and landscape right\\" value=\{3} />\\n            <Item label=\\"Portrait and landscape\\" value=\{4} />\\n            <Item label=\\"Default supportedOrientations\\" value=\{5} />\\n          </Picker>\\n        </View>\\n\\n        <Button onPress=\{this._setModalVisible.bind(this, true)}>\\n          Present\\n        </Button>\\n      </View>\\n    );\\n  }\\n}\\n\\nexports.examples = [\\n  \{\\n    title: 'Modal Presentation',\\n    description: 'Modals can be presented with or without animation',\\n    render: () => <ModalExample />,\\n  },\\n];\\n\\nvar styles = StyleSheet.create(\{\\n  container: \{\\n    flex: 1,\\n    justifyContent: 'center',\\n    padding: 20,\\n  },\\n  innerContainer: \{\\n    borderRadius: 10,\\n    alignItems: 'center',\\n  },\\n  row: \{\\n    alignItems: 'center',\\n    flex: 1,\\n    flexDirection: 'row',\\n    marginBottom: 20,\\n  },\\n  rowTitle: \{\\n    flex: 1,\\n    fontWeight: 'bold',\\n  },\\n  button: \{\\n    borderRadius: 5,\\n    flexGrow: 1,\\n    height: 44,\\n    alignSelf: 'stretch',\\n    justifyContent: 'center',\\n    overflow: 'hidden',\\n  },\\n  buttonText: \{\\n    fontSize: 18,\\n    margin: 5,\\n    textAlign: 'center',\\n  },\\n  modalButton: \{\\n    marginTop: 10,\\n  },\\n  pickerItem: \{\\n    fontSize: 16,\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"modal","title":"Modal","layout":"autodocs","category":"components","permalink":"docs/modal.html","platform":"cross","next":"navigatorios","previous":"listview","sidebar":true,"runnable":true,"path":"Libraries/Modal/Modal.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;