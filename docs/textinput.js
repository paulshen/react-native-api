/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A foundational component for inputting text into the app via a\\nkeyboard. Props provide configurability for several features, such as\\nauto-correction, auto-capitalization, placeholder text, and different keyboard\\ntypes, such as a numeric keypad.\\n\\nThe simplest use case is to plop down a \`TextInput\` and subscribe to the\\n\`onChangeText\` events to read the user input. There are also other events,\\nsuch as \`onSubmitEditing\` and \`onFocus\` that can be subscribed to. A simple\\nexample:\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, TextInput } from 'react-native';\\n\\nclass UselessTextInput extends Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{ text: 'Useless Placeholder' };\\n  }\\n\\n  render() \{\\n    return (\\n      <TextInput\\n        style=\{\{height: 40, borderColor: 'gray', borderWidth: 1}}\\n        onChangeText=\{(text) => this.setState(\{text})}\\n        value=\{this.state.text}\\n      />\\n    );\\n  }\\n}\\n\\n// App registration and rendering\\nAppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);\\n\`\`\`\\n\\nNote that some props are only available with \`multiline=\{true/false}\`.\\nAdditionally, border styles that apply to only one side of the element\\n(e.g., \`borderBottomColor\`, \`borderLeftWidth\`, etc.) will not be applied if\\n\`multiline=false\`. To achieve the same effect, you can wrap your \`TextInput\`\\nin a \`View\`:\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, View, TextInput } from 'react-native';\\n\\nclass UselessTextInput extends Component \{\\n  render() \{\\n    return (\\n      <TextInput\\n        \{...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below\\n        editable = \{true}\\n        maxLength = \{40}\\n      />\\n    );\\n  }\\n}\\n\\nclass UselessTextInputMultiline extends Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{\\n      text: 'Useless Multiline Placeholder',\\n    };\\n  }\\n\\n  // If you type something in the text box that is a color, the background will change to that\\n  // color.\\n  render() \{\\n    return (\\n     <View style=\{\{\\n       backgroundColor: this.state.text,\\n       borderBottomColor: '#000000',\\n       borderBottomWidth: 1 }}\\n     >\\n       <UselessTextInput\\n         multiline = \{true}\\n         numberOfLines = \{4}\\n         onChangeText=\{(text) => this.setState(\{text})}\\n         value=\{this.state.text}\\n       />\\n     </View>\\n    );\\n  }\\n}\\n\\n// App registration and rendering\\nAppRegistry.registerComponent(\\n 'AwesomeProject',\\n () => UselessTextInputMultiline\\n);\\n\`\`\`\\n\\n\`TextInput\` has by default a border at the bottom of its view. This border\\nhas its padding set by the background image provided by the system, and it\\ncannot be changed. Solutions to avoid this is to either not set height\\nexplicitly, case in which the system will take care of displaying the border\\nin the correct position, or to not display the border by setting\\n\`underlineColorAndroid\` to transparent.\\n\\nNote that on Android performing text selection in input can change\\napp's activity \`windowSoftInputMode\` param to \`adjustResize\`.\\nThis may cause issues with components that have position: 'absolute'\\nwhile keyboard is active. To avoid this behavior either specify \`windowSoftInputMode\`\\nin AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html )\\nor control this param programmatically with native code.",
  "methods": [
    \{
      "name": "isFocused",
      "docblock": "Returns \`true\` if the input is currently focused; \`false\` otherwise.",
      "modifiers": [],
      "params": [],
      "returns": \{
        "type": [
          null
        ]
      },
      "description": "Returns \`true\` if the input is currently focused; \`false\` otherwise."
    },
    \{
      "name": "clear",
      "docblock": "Removes all text from the \`TextInput\`.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Removes all text from the \`TextInput\`."
    }
  ],
  "props": \{
    "autoCapitalize": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'none'",
            "computed": false
          },
          \{
            "value": "'sentences'",
            "computed": false
          },
          \{
            "value": "'words'",
            "computed": false
          },
          \{
            "value": "'characters'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Can tell \`TextInput\` to automatically capitalize certain characters.\\n\\n- \`characters\`: all characters.\\n- \`words\`: first letter of each word.\\n- \`sentences\`: first letter of each sentence (*default*).\\n- \`none\`: don't auto capitalize anything."
    },
    "autoCorrect": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\`, disables auto-correct. The default value is \`true\`."
    },
    "spellCheck": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\`, disables spell-check style (i.e. red underlines).\\nThe default value is inherited from \`autoCorrect\`.\\n@platform ios"
    },
    "autoFocus": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, focuses the input on \`componentDidMount\`.\\nThe default value is \`false\`."
    },
    "editable": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\`, text is not editable. The default value is \`true\`."
    },
    "keyboardType": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "\\"default\\"",
            "computed": false
          },
          \{
            "value": "'email-address'",
            "computed": false
          },
          \{
            "value": "'numeric'",
            "computed": false
          },
          \{
            "value": "'phone-pad'",
            "computed": false
          },
          \{
            "value": "\\"ascii-capable\\"",
            "computed": false
          },
          \{
            "value": "'numbers-and-punctuation'",
            "computed": false
          },
          \{
            "value": "'url'",
            "computed": false
          },
          \{
            "value": "'number-pad'",
            "computed": false
          },
          \{
            "value": "'name-phone-pad'",
            "computed": false
          },
          \{
            "value": "'decimal-pad'",
            "computed": false
          },
          \{
            "value": "'twitter'",
            "computed": false
          },
          \{
            "value": "'web-search'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines which keyboard to open, e.g.\`numeric\`.\\n\\nThe following values work across platforms:\\n\\n- \`default\`\\n- \`numeric\`\\n- \`email-address\`\\n- \`phone-pad\`"
    },
    "keyboardAppearance": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'default'",
            "computed": false
          },
          \{
            "value": "'light'",
            "computed": false
          },
          \{
            "value": "'dark'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines the color of the keyboard.\\n@platform ios"
    },
    "returnKeyType": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "\\"done\\"",
            "computed": false
          },
          \{
            "value": "'go'",
            "computed": false
          },
          \{
            "value": "'next'",
            "computed": false
          },
          \{
            "value": "'search'",
            "computed": false
          },
          \{
            "value": "'send'",
            "computed": false
          },
          \{
            "value": "\\"none\\"",
            "computed": false
          },
          \{
            "value": "'previous'",
            "computed": false
          },
          \{
            "value": "\\"default\\"",
            "computed": false
          },
          \{
            "value": "'emergency-call'",
            "computed": false
          },
          \{
            "value": "'google'",
            "computed": false
          },
          \{
            "value": "'join'",
            "computed": false
          },
          \{
            "value": "'route'",
            "computed": false
          },
          \{
            "value": "'yahoo'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines how the return key should look. On Android you can also use\\n\`returnKeyLabel\`.\\n\\n*Cross platform*\\n\\nThe following values work across platforms:\\n\\n- \`done\`\\n- \`go\`\\n- \`next\`\\n- \`search\`\\n- \`send\`\\n\\n*Android Only*\\n\\nThe following values work on Android only:\\n\\n- \`none\`\\n- \`previous\`\\n\\n*iOS Only*\\n\\nThe following values work on iOS only:\\n\\n- \`default\`\\n- \`emergency-call\`\\n- \`google\`\\n- \`join\`\\n- \`route\`\\n- \`yahoo\`"
    },
    "returnKeyLabel": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Sets the return key to the label. Use it instead of \`returnKeyType\`.\\n@platform android"
    },
    "maxLength": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Limits the maximum number of characters that can be entered. Use this\\ninstead of implementing the logic in JS to avoid flicker."
    },
    "numberOfLines": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Sets the number of lines for a \`TextInput\`. Use it with multiline set to\\n\`true\` to be able to fill the lines.\\n@platform android"
    },
    "disableFullscreenUI": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When \`false\`, if there is a small amount of space available around a text input\\n(e.g. landscape orientation on a phone), the OS may choose to have the user edit\\nthe text inside of a full screen text input mode. When \`true\`, this feature is\\ndisabled and users will always edit the text directly inside of the text input.\\nDefaults to \`false\`.\\n@platform android"
    },
    "enablesReturnKeyAutomatically": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, the keyboard disables the return key when there is no text and\\nautomatically enables it when there is text. The default value is \`false\`.\\n@platform ios"
    },
    "multiline": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, the text input can be multiple lines.\\nThe default value is \`false\`."
    },
    "textBreakStrategy": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'simple'",
            "computed": false
          },
          \{
            "value": "'highQuality'",
            "computed": false
          },
          \{
            "value": "'balanced'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Set text break strategy on Android API Level 23+, possible values are \`simple\`, \`highQuality\`, \`balanced\`\\nThe default value is \`simple\`.\\n@platform android"
    },
    "onBlur": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input is blurred."
    },
    "onFocus": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input is focused."
    },
    "onChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input's text changes."
    },
    "onChangeText": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input's text changes.\\nChanged text is passed as an argument to the callback handler."
    },
    "onContentSizeChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input's content size changes.\\nThis will be called with\\n\`\{ nativeEvent: \{ contentSize: \{ width, height } } }\`.\\n\\nOnly called for multiline text inputs."
    },
    "onEndEditing": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when text input ends."
    },
    "onSelectionChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input selection is changed.\\nThis will be called with\\n\`\{ nativeEvent: \{ selection: \{ start, end } } }\`."
    },
    "onSubmitEditing": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input's submit button is pressed.\\nInvalid if \`multiline=\{true}\` is specified."
    },
    "onKeyPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when a key is pressed.\\nThis will be called with \`\{ nativeEvent: \{ key: keyValue } }\`\\nwhere \`keyValue\` is \`'Enter'\` or \`'Backspace'\` for respective keys and\\nthe typed-in character otherwise including \`' '\` for space.\\nFires before \`onChange\` callbacks.\\n@platform ios"
    },
    "onLayout": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on mount and layout changes with \`\{x, y, width, height}\`."
    },
    "onScroll": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on content scroll with \`\{ nativeEvent: \{ contentOffset: \{ x, y } } }\`.\\nMay also contain other properties from ScrollEvent but on Android contentSize\\nis not provided for performance reasons."
    },
    "placeholder": \{
      "type": \{
        "name": "node"
      },
      "required": false,
      "description": "The string that will be rendered before text input has been entered."
    },
    "placeholderTextColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The text color of the placeholder string."
    },
    "secureTextEntry": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, the text input obscures the text entered so that sensitive text\\nlike passwords stay secure. The default value is \`false\`."
    },
    "selectionColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The highlight and cursor color of the text input."
    },
    "selectionState": \{
      "type": \{
        "name": "instanceOf",
        "value": "DocumentSelectionState"
      },
      "required": false,
      "description": "An instance of \`DocumentSelectionState\`, this is some state that is responsible for\\nmaintaining selection information for a document.\\n\\nSome functionality that can be performed with this instance is:\\n\\n- \`blur()\`\\n- \`focus()\`\\n- \`update()\`\\n\\n> You can reference \`DocumentSelectionState\` in\\n> [\`vendor/document/selection/DocumentSelectionState.js\`](https://github.com/facebook/react-native/blob/master/Libraries/vendor/document/selection/DocumentSelectionState.js)\\n\\n@platform ios"
    },
    "selection": \{
      "type": \{
        "name": "shape",
        "value": \{
          "start": \{
            "name": "number",
            "required": true
          },
          "end": \{
            "name": "number",
            "required": false
          }
        }
      },
      "required": false,
      "description": "The start and end of the text input's selection. Set start and end to\\nthe same value to position the cursor."
    },
    "value": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The value to show for the text input. \`TextInput\` is a controlled\\ncomponent, which means the native value will be forced to match this\\nvalue prop if provided. For most uses, this works great, but in some\\ncases this may cause flickering - one common cause is preventing edits\\nby keeping value the same. In addition to simply setting the same value,\\neither set \`editable=\{false}\`, or set/update \`maxLength\` to prevent\\nunwanted edits without flicker."
    },
    "defaultValue": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Provides an initial value that will change when the user starts typing.\\nUseful for simple use-cases where you do not want to deal with listening\\nto events and updating the value prop to keep the controlled state in sync."
    },
    "clearButtonMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'never'",
            "computed": false
          },
          \{
            "value": "'while-editing'",
            "computed": false
          },
          \{
            "value": "'unless-editing'",
            "computed": false
          },
          \{
            "value": "'always'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "When the clear button should appear on the right side of the text view.\\n@platform ios"
    },
    "clearTextOnFocus": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, clears the text field automatically when editing begins.\\n@platform ios"
    },
    "selectTextOnFocus": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, all text will automatically be selected on focus."
    },
    "blurOnSubmit": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, the text field will blur when submitted.\\nThe default value is true for single-line fields and false for\\nmultiline fields. Note that for multiline fields, setting \`blurOnSubmit\`\\nto \`true\` means that pressing return will blur the field and trigger the\\n\`onSubmitEditing\` event instead of inserting a newline into the field."
    },
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "Text.propTypes.style"
      },
      "required": false,
      "description": "Note that not all Text styles are supported,\\nsee [Issue#7070](https://github.com/facebook/react-native/issues/7070)\\nfor more detail.\\n\\n[Styles](docs/style.html)"
    },
    "underlineColorAndroid": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The color of the \`TextInput\` underline.\\n@platform android"
    },
    "inlineImageLeft": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "If defined, the provided image resource will be rendered on the left.\\n@platform android"
    },
    "inlineImagePadding": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Padding between the inline image, if any, and the text input itself.\\n@platform android"
    },
    "dataDetectorTypes": \{
      "type": \{
        "name": "union",
        "value": [
          \{
            "name": "enum",
            "value": [
              \{
                "value": "'phoneNumber'",
                "computed": false
              },
              \{
                "value": "'link'",
                "computed": false
              },
              \{
                "value": "'address'",
                "computed": false
              },
              \{
                "value": "'calendarEvent'",
                "computed": false
              },
              \{
                "value": "'none'",
                "computed": false
              },
              \{
                "value": "'all'",
                "computed": false
              }
            ]
          },
          \{
            "name": "arrayOf",
            "value": \{
              "name": "enum",
              "value": [
                \{
                  "value": "'phoneNumber'",
                  "computed": false
                },
                \{
                  "value": "'link'",
                  "computed": false
                },
                \{
                  "value": "'address'",
                  "computed": false
                },
                \{
                  "value": "'calendarEvent'",
                  "computed": false
                },
                \{
                  "value": "'none'",
                  "computed": false
                },
                \{
                  "value": "'all'",
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "required": false,
      "description": "Determines the types of data converted to clickable URLs in the text input.\\nOnly valid if \`multiline=\{true}\` and \`editable=\{false}\`.\\nBy default no data types are detected.\\n\\nYou can provide one type or an array of many types.\\n\\nPossible values for \`dataDetectorTypes\` are:\\n\\n- \`'phoneNumber'\`\\n- \`'link'\`\\n- \`'address'\`\\n- \`'calendarEvent'\`\\n- \`'none'\`\\n- \`'all'\`\\n\\n@platform ios"
    },
    "caretHidden": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\`, caret is hidden. The default value is \`false\`."
    }
  },
  "composes": [
    "ViewPropTypes"
  ],
  "type": "component",
  "filepath": "Libraries/Components/TextInput/TextInput.js",
  "componentName": "TextInput",
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
      "path": "Examples/UIExplorer/js/TextInputExample.ios.js",
      "title": "IOS",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule TextInputExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Text,\\n  TextInput,\\n  View,\\n  StyleSheet,\\n} = ReactNative;\\n\\nclass WithLabel extends React.Component \{\\n  render() \{\\n    return (\\n      <View style=\{styles.labelContainer}>\\n        <View style=\{styles.label}>\\n          <Text>\{this.props.label}</Text>\\n        </View>\\n        \{this.props.children}\\n      </View>\\n    );\\n  }\\n}\\n\\nclass TextEventsExample extends React.Component \{\\n  state = \{\\n    curText: '<No Event>',\\n    prevText: '<No Event>',\\n    prev2Text: '<No Event>',\\n    prev3Text: '<No Event>',\\n  };\\n\\n  updateText = (text) => \{\\n    this.setState((state) => \{\\n      return \{\\n        curText: text,\\n        prevText: state.curText,\\n        prev2Text: state.prevText,\\n        prev3Text: state.prev2Text,\\n      };\\n    });\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <TextInput\\n          autoCapitalize=\\"none\\"\\n          placeholder=\\"Enter text to see events\\"\\n          autoCorrect=\{false}\\n          onFocus=\{() => this.updateText('onFocus')}\\n          onBlur=\{() => this.updateText('onBlur')}\\n          onChange=\{(event) => this.updateText(\\n            'onChange text: ' + event.nativeEvent.text\\n          )}\\n          onEndEditing=\{(event) => this.updateText(\\n            'onEndEditing text: ' + event.nativeEvent.text\\n          )}\\n          onSubmitEditing=\{(event) => this.updateText(\\n            'onSubmitEditing text: ' + event.nativeEvent.text\\n          )}\\n          onSelectionChange=\{(event) => this.updateText(\\n            'onSelectionChange range: ' +\\n              event.nativeEvent.selection.start + ',' +\\n              event.nativeEvent.selection.end\\n          )}\\n          onKeyPress=\{(event) => \{\\n            this.updateText('onKeyPress key: ' + event.nativeEvent.key);\\n          }}\\n          style=\{styles.default}\\n        />\\n        <Text style=\{styles.eventLabel}>\\n          \{this.state.curText}\{'\\\\n'}\\n          (prev: \{this.state.prevText})\{'\\\\n'}\\n          (prev2: \{this.state.prev2Text})\{'\\\\n'}\\n          (prev3: \{this.state.prev3Text})\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass RewriteExample extends React.Component \{\\n  state: any;\\n\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{text: ''};\\n  }\\n  render() \{\\n    var limit = 20;\\n    var remainder = limit - this.state.text.length;\\n    var remainderColor = remainder > 5 ? 'blue' : 'red';\\n    return (\\n      <View style=\{styles.rewriteContainer}>\\n        <TextInput\\n          multiline=\{false}\\n          maxLength=\{limit}\\n          onChangeText=\{(text) => \{\\n            text = text.replace(/ /g, '_');\\n            this.setState(\{text});\\n          }}\\n          style=\{styles.default}\\n          value=\{this.state.text}\\n        />\\n        <Text style=\{[styles.remainder, \{color: remainderColor}]}>\\n          \{remainder}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass RewriteExampleInvalidCharacters extends React.Component \{\\n  state: any;\\n\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{text: ''};\\n  }\\n  render() \{\\n    return (\\n      <View style=\{styles.rewriteContainer}>\\n        <TextInput\\n          multiline=\{false}\\n          onChangeText=\{(text) => \{\\n            this.setState(\{text: text.replace(/\\\\s/g, '')});\\n          }}\\n          style=\{styles.default}\\n          value=\{this.state.text}\\n        />\\n      </View>\\n    );\\n  }\\n}\\n\\nclass TokenizedTextExample extends React.Component \{\\n  state: any;\\n\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{text: 'Hello #World'};\\n  }\\n  render() \{\\n\\n    //define delimiter\\n    let delimiter = /\\\\s+/;\\n\\n    //split string\\n    let _text = this.state.text;\\n    let token, index, parts = [];\\n    while (_text) \{\\n      delimiter.lastIndex = 0;\\n      token = delimiter.exec(_text);\\n      if (token === null) \{\\n        break;\\n      }\\n      index = token.index;\\n      if (token[0].length === 0) \{\\n        index = 1;\\n      }\\n      parts.push(_text.substr(0, index));\\n      parts.push(token[0]);\\n      index = index + token[0].length;\\n      _text = _text.slice(index);\\n    }\\n    parts.push(_text);\\n\\n    //highlight hashtags\\n    parts = parts.map((text) => \{\\n      if (/^#/.test(text)) \{\\n        return <Text key=\{text} style=\{styles.hashtag}>\{text}</Text>;\\n      } else \{\\n        return text;\\n      }\\n    });\\n\\n    return (\\n      <View>\\n        <TextInput\\n          multiline=\{true}\\n          style=\{styles.multiline}\\n          onChangeText=\{(text) => \{\\n            this.setState(\{text});\\n          }}>\\n          <Text>\{parts}</Text>\\n        </TextInput>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass BlurOnSubmitExample extends React.Component \{\\n  focusNextField = (nextField) => \{\\n    this.refs[nextField].focus();\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <TextInput\\n          ref=\\"1\\"\\n          style=\{styles.default}\\n          placeholder=\\"blurOnSubmit = false\\"\\n          returnKeyType=\\"next\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('2')}\\n        />\\n        <TextInput\\n          ref=\\"2\\"\\n          style=\{styles.default}\\n          keyboardType=\\"email-address\\"\\n          placeholder=\\"blurOnSubmit = false\\"\\n          returnKeyType=\\"next\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('3')}\\n        />\\n        <TextInput\\n          ref=\\"3\\"\\n          style=\{styles.default}\\n          keyboardType=\\"url\\"\\n          placeholder=\\"blurOnSubmit = false\\"\\n          returnKeyType=\\"next\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('4')}\\n        />\\n        <TextInput\\n          ref=\\"4\\"\\n          style=\{styles.default}\\n          keyboardType=\\"numeric\\"\\n          placeholder=\\"blurOnSubmit = false\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('5')}\\n        />\\n        <TextInput\\n          ref=\\"5\\"\\n          style=\{styles.default}\\n          keyboardType=\\"numbers-and-punctuation\\"\\n          placeholder=\\"blurOnSubmit = true\\"\\n          returnKeyType=\\"done\\"\\n        />\\n      </View>\\n    );\\n  }\\n}\\n\\ntype SelectionExampleState = \{\\n  selection: \{\\n    start: number;\\n    end?: number;\\n  };\\n  value: string;\\n};\\n\\nclass SelectionExample extends React.Component \{\\n  state: SelectionExampleState;\\n\\n  _textInput: any;\\n\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{\\n      selection: \{start: 0, end: 0},\\n      value: props.value\\n    };\\n  }\\n\\n  onSelectionChange(\{nativeEvent: \{selection}}) \{\\n    this.setState(\{selection});\\n  }\\n\\n  getRandomPosition() \{\\n    var length = this.state.value.length;\\n    return Math.round(Math.random() * length);\\n  }\\n\\n  select(start, end) \{\\n    this._textInput.focus();\\n    this.setState(\{selection: \{start, end}});\\n  }\\n\\n  selectRandom() \{\\n    var positions = [this.getRandomPosition(), this.getRandomPosition()].sort();\\n    this.select(...positions);\\n  }\\n\\n  placeAt(position) \{\\n    this.select(position, position);\\n  }\\n\\n  placeAtRandom() \{\\n    this.placeAt(this.getRandomPosition());\\n  }\\n\\n  render() \{\\n    var length = this.state.value.length;\\n\\n    return (\\n      <View>\\n        <TextInput\\n          multiline=\{this.props.multiline}\\n          onChangeText=\{(value) => this.setState(\{value})}\\n          onSelectionChange=\{this.onSelectionChange.bind(this)}\\n          ref=\{textInput => (this._textInput = textInput)}\\n          selection=\{this.state.selection}\\n          style=\{this.props.style}\\n          value=\{this.state.value}\\n        />\\n        <View>\\n          <Text>\\n            selection = \{JSON.stringify(this.state.selection)}\\n          </Text>\\n          <Text onPress=\{this.placeAt.bind(this, 0)}>\\n            Place at Start (0, 0)\\n          </Text>\\n          <Text onPress=\{this.placeAt.bind(this, length)}>\\n            Place at End (\{length}, \{length})\\n          </Text>\\n          <Text onPress=\{this.placeAtRandom.bind(this)}>\\n            Place at Random\\n          </Text>\\n          <Text onPress=\{this.select.bind(this, 0, length)}>\\n            Select All\\n          </Text>\\n          <Text onPress=\{this.selectRandom.bind(this)}>\\n            Select Random\\n          </Text>\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  page: \{\\n    paddingBottom: 300,\\n  },\\n  default: \{\\n    height: 26,\\n    borderWidth: 0.5,\\n    borderColor: '#0f0f0f',\\n    flex: 1,\\n    fontSize: 13,\\n    padding: 4,\\n  },\\n  multiline: \{\\n    borderWidth: 0.5,\\n    borderColor: '#0f0f0f',\\n    flex: 1,\\n    fontSize: 13,\\n    height: 50,\\n    padding: 4,\\n    marginBottom: 4,\\n  },\\n  multilineExpandable: \{\\n    height: 'auto',\\n    maxHeight: 100,\\n  },\\n  multilineWithFontStyles: \{\\n    color: 'blue',\\n    fontWeight: 'bold',\\n    fontSize: 18,\\n    fontFamily: 'Cochin',\\n    height: 60,\\n  },\\n  multilineChild: \{\\n    width: 50,\\n    height: 40,\\n    position: 'absolute',\\n    right: 5,\\n    backgroundColor: 'red',\\n  },\\n  eventLabel: \{\\n    margin: 3,\\n    fontSize: 12,\\n  },\\n  labelContainer: \{\\n    flexDirection: 'row',\\n    marginVertical: 2,\\n    flex: 1,\\n  },\\n  label: \{\\n    width: 115,\\n    alignItems: 'flex-end',\\n    marginRight: 10,\\n    paddingTop: 2,\\n  },\\n  rewriteContainer: \{\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n  },\\n  remainder: \{\\n    textAlign: 'right',\\n    width: 24,\\n  },\\n  hashtag: \{\\n    color: 'blue',\\n    fontWeight: 'bold',\\n  },\\n});\\n\\nexports.displayName = (undefined: ?string);\\nexports.title = '<TextInput>';\\nexports.description = 'Single and multi-line text inputs.';\\nexports.examples = [\\n  \{\\n    title: 'Auto-focus',\\n    render: function() \{\\n      return (\\n        <TextInput\\n          autoFocus=\{true}\\n          style=\{styles.default}\\n          accessibilityLabel=\\"I am the accessibility label for text input\\"\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: \\"Live Re-Write (<sp>  ->  '_') + maxLength\\",\\n    render: function() \{\\n      return <RewriteExample />;\\n    }\\n  },\\n  \{\\n    title: 'Live Re-Write (no spaces allowed)',\\n    render: function() \{\\n      return <RewriteExampleInvalidCharacters />;\\n    }\\n  },\\n  \{\\n    title: 'Auto-capitalize',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"none\\">\\n            <TextInput\\n              autoCapitalize=\\"none\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"sentences\\">\\n            <TextInput\\n              autoCapitalize=\\"sentences\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"words\\">\\n            <TextInput\\n              autoCapitalize=\\"words\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"characters\\">\\n            <TextInput\\n              autoCapitalize=\\"characters\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Auto-correct',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"true\\">\\n            <TextInput autoCorrect=\{true} style=\{styles.default} />\\n          </WithLabel>\\n          <WithLabel label=\\"false\\">\\n            <TextInput autoCorrect=\{false} style=\{styles.default} />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Keyboard types',\\n    render: function() \{\\n      var keyboardTypes = [\\n        'default',\\n        'ascii-capable',\\n        'numbers-and-punctuation',\\n        'url',\\n        'number-pad',\\n        'phone-pad',\\n        'name-phone-pad',\\n        'email-address',\\n        'decimal-pad',\\n        'twitter',\\n        'web-search',\\n        'numeric',\\n      ];\\n      var examples = keyboardTypes.map((type) => \{\\n        return (\\n          <WithLabel key=\{type} label=\{type}>\\n            <TextInput\\n              keyboardType=\{type}\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        );\\n      });\\n      return <View>\{examples}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Keyboard appearance',\\n    render: function() \{\\n      var keyboardAppearance = [\\n        'default',\\n        'light',\\n        'dark',\\n      ];\\n      var examples = keyboardAppearance.map((type) => \{\\n        return (\\n          <WithLabel key=\{type} label=\{type}>\\n            <TextInput\\n              keyboardAppearance=\{type}\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        );\\n      });\\n      return <View>\{examples}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Return key types',\\n    render: function() \{\\n      var returnKeyTypes = [\\n        'default',\\n        'go',\\n        'google',\\n        'join',\\n        'next',\\n        'route',\\n        'search',\\n        'send',\\n        'yahoo',\\n        'done',\\n        'emergency-call',\\n      ];\\n      var examples = returnKeyTypes.map((type) => \{\\n        return (\\n          <WithLabel key=\{type} label=\{type}>\\n            <TextInput\\n              returnKeyType=\{type}\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        );\\n      });\\n      return <View>\{examples}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Enable return key automatically',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"true\\">\\n            <TextInput enablesReturnKeyAutomatically=\{true} style=\{styles.default} />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Secure text entry',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"true\\">\\n            <TextInput secureTextEntry=\{true} style=\{styles.default} defaultValue=\\"abc\\" />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Event handling',\\n    render: function(): React.Element<any> \{ return <TextEventsExample />; },\\n  },\\n  \{\\n    title: 'Colored input text',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            style=\{[styles.default, \{color: 'blue'}]}\\n            defaultValue=\\"Blue\\"\\n          />\\n          <TextInput\\n            style=\{[styles.default, \{color: 'green'}]}\\n            defaultValue=\\"Green\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Colored highlight/cursor for text input',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            style=\{styles.default}\\n            selectionColor=\{\\"green\\"}\\n            defaultValue=\\"Highlight me\\"\\n          />\\n          <TextInput\\n            style=\{styles.default}\\n            selectionColor=\{\\"rgba(86, 76, 205, 1)\\"}\\n            defaultValue=\\"Highlight me\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Clear button mode',\\n    render: function () \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"never\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"never\\"\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"while editing\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"while-editing\\"\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"unless editing\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"unless-editing\\"\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"always\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"always\\"\\n            />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Clear and select',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"clearTextOnFocus\\">\\n            <TextInput\\n              placeholder=\\"text is cleared on focus\\"\\n              defaultValue=\\"text is cleared on focus\\"\\n              style=\{styles.default}\\n              clearTextOnFocus=\{true}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"selectTextOnFocus\\">\\n            <TextInput\\n              placeholder=\\"text is selected on focus\\"\\n              defaultValue=\\"text is selected on focus\\"\\n              style=\{styles.default}\\n              selectTextOnFocus=\{true}\\n            />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Blur on submit',\\n    render: function(): React.Element<any> \{ return <BlurOnSubmitExample />; },\\n  },\\n  \{\\n    title: 'Multiline blur on submit',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            style=\{styles.multiline}\\n            placeholder=\\"blurOnSubmit = true\\"\\n            returnKeyType=\\"next\\"\\n            blurOnSubmit=\{true}\\n            multiline=\{true}\\n            onSubmitEditing=\{event => alert(event.nativeEvent.text)}\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Multiline',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            placeholder=\\"multiline text input\\"\\n            multiline=\{true}\\n            style=\{styles.multiline}\\n          />\\n          <TextInput\\n            placeholder=\\"multiline text input with font styles and placeholder\\"\\n            multiline=\{true}\\n            clearTextOnFocus=\{true}\\n            autoCorrect=\{true}\\n            autoCapitalize=\\"words\\"\\n            placeholderTextColor=\\"red\\"\\n            keyboardType=\\"url\\"\\n            style=\{[styles.multiline, styles.multilineWithFontStyles]}\\n          />\\n          <TextInput\\n            placeholder=\\"multiline text input with max length\\"\\n            maxLength=\{5}\\n            multiline=\{true}\\n            style=\{styles.multiline}\\n          />\\n          <TextInput\\n            placeholder=\\"uneditable multiline text input\\"\\n            editable=\{false}\\n            multiline=\{true}\\n            style=\{styles.multiline}\\n          />\\n          <TextInput\\n            defaultValue=\\"uneditable multiline text input with phone number detection: 88888888.\\"\\n            editable=\{false}\\n            multiline=\{true}\\n            style=\{styles.multiline}\\n            dataDetectorTypes=\\"phoneNumber\\"\\n          />\\n          <TextInput\\n            placeholder=\\"multiline with children\\"\\n            multiline=\{true}\\n            enablesReturnKeyAutomatically=\{true}\\n            returnKeyType=\\"go\\"\\n            style=\{styles.multiline}>\\n            <View style=\{styles.multilineChild}/>\\n          </TextInput>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Auto-expanding',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            placeholder=\\"height increases with content\\"\\n            defaultValue=\\"React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about - learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.\\"\\n            multiline=\{true}\\n            enablesReturnKeyAutomatically=\{true}\\n            returnKeyType=\\"go\\"\\n            style=\{[styles.multiline, styles.multilineExpandable]}\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Attributed text',\\n    render: function() \{\\n      return <TokenizedTextExample />;\\n    }\\n  },\\n  \{\\n    title: 'Text selection & cursor placement',\\n    render: function() \{\\n      return (\\n        <View>\\n          <SelectionExample\\n            style=\{styles.default}\\n            value=\\"text selection can be changed\\"\\n          />\\n          <SelectionExample\\n            multiline\\n            style=\{styles.multiline}\\n            value=\{\\"multiline text selection\\\\ncan also be changed\\"}\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'TextInput maxLength',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"maxLength: 5\\">\\n            <TextInput\\n              maxLength=\{5}\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"maxLength: 5 with placeholder\\">\\n            <TextInput\\n              maxLength=\{5}\\n              placeholder=\\"ZIP code entry\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"maxLength: 5 with default value already set\\">\\n            <TextInput\\n              maxLength=\{5}\\n              defaultValue=\\"94025\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"maxLength: 5 with very long default value already set\\">\\n            <TextInput\\n              maxLength=\{5}\\n              defaultValue=\\"9402512345\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n];\\n"
    },
    \{
      "path": "Examples/UIExplorer/js/TextInputExample.android.js",
      "title": "ANDROID",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule TextInputExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Text,\\n  TextInput,\\n  View,\\n  StyleSheet,\\n} = ReactNative;\\n\\nclass TextEventsExample extends React.Component \{\\n  state = \{\\n    curText: '<No Event>',\\n    prevText: '<No Event>',\\n    prev2Text: '<No Event>',\\n  };\\n\\n  updateText = (text) => \{\\n    this.setState((state) => \{\\n      return \{\\n        curText: text,\\n        prevText: state.curText,\\n        prev2Text: state.prevText,\\n      };\\n    });\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <TextInput\\n          autoCapitalize=\\"none\\"\\n          placeholder=\\"Enter text to see events\\"\\n          autoCorrect=\{false}\\n          onFocus=\{() => this.updateText('onFocus')}\\n          onBlur=\{() => this.updateText('onBlur')}\\n          onChange=\{(event) => this.updateText(\\n            'onChange text: ' + event.nativeEvent.text\\n          )}\\n          onEndEditing=\{(event) => this.updateText(\\n            'onEndEditing text: ' + event.nativeEvent.text\\n          )}\\n          onSubmitEditing=\{(event) => this.updateText(\\n            'onSubmitEditing text: ' + event.nativeEvent.text\\n          )}\\n          style=\{styles.singleLine}\\n        />\\n        <Text style=\{styles.eventLabel}>\\n          \{this.state.curText}\{'\\\\n'}\\n          (prev: \{this.state.prevText})\{'\\\\n'}\\n          (prev2: \{this.state.prev2Text})\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass AutoExpandingTextInput extends React.Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{\\n      text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',\\n      height: 0,\\n    };\\n  }\\n  render() \{\\n    return (\\n      <TextInput\\n        \{...this.props}\\n        multiline=\{true}\\n        onContentSizeChange=\{(event) => \{\\n          this.setState(\{height: event.nativeEvent.contentSize.height});\\n        }}\\n        onChangeText=\{(text) => \{\\n          this.setState(\{text});\\n        }}\\n        style=\{[styles.default, \{height: Math.max(35, this.state.height)}]}\\n        value=\{this.state.text}\\n      />\\n    );\\n  }\\n}\\n\\nclass RewriteExample extends React.Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{text: ''};\\n  }\\n  render() \{\\n    var limit = 20;\\n    var remainder = limit - this.state.text.length;\\n    var remainderColor = remainder > 5 ? 'blue' : 'red';\\n    return (\\n      <View style=\{styles.rewriteContainer}>\\n        <TextInput\\n          multiline=\{false}\\n          maxLength=\{limit}\\n          onChangeText=\{(text) => \{\\n            text = text.replace(/ /g, '_');\\n            this.setState(\{text});\\n          }}\\n          style=\{styles.default}\\n          value=\{this.state.text}\\n        />\\n        <Text style=\{[styles.remainder, \{color: remainderColor}]}>\\n          \{remainder}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass TokenizedTextExample extends React.Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{text: 'Hello #World'};\\n  }\\n  render() \{\\n\\n    //define delimiter\\n    let delimiter = /\\\\s+/;\\n\\n    //split string\\n    let _text = this.state.text;\\n    let token, index, parts = [];\\n    while (_text) \{\\n      delimiter.lastIndex = 0;\\n      token = delimiter.exec(_text);\\n      if (token === null) \{\\n        break;\\n      }\\n      index = token.index;\\n      if (token[0].length === 0) \{\\n        index = 1;\\n      }\\n      parts.push(_text.substr(0, index));\\n      parts.push(token[0]);\\n      index = index + token[0].length;\\n      _text = _text.slice(index);\\n    }\\n    parts.push(_text);\\n\\n    //highlight hashtags\\n    parts = parts.map((text) => \{\\n      if (/^#/.test(text)) \{\\n        return <Text key=\{text} style=\{styles.hashtag}>\{text}</Text>;\\n      } else \{\\n        return text;\\n      }\\n    });\\n\\n    return (\\n      <View>\\n        <TextInput\\n          multiline=\{true}\\n          style=\{styles.multiline}\\n          onChangeText=\{(text) => \{\\n            this.setState(\{text});\\n          }}>\\n          <Text>\{parts}</Text>\\n        </TextInput>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass BlurOnSubmitExample extends React.Component \{\\n  focusNextField = (nextField) => \{\\n    this.refs[nextField].focus();\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <TextInput\\n          ref=\\"1\\"\\n          style=\{styles.singleLine}\\n          placeholder=\\"blurOnSubmit = false\\"\\n          returnKeyType=\\"next\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('2')}\\n        />\\n        <TextInput\\n          ref=\\"2\\"\\n          style=\{styles.singleLine}\\n          keyboardType=\\"email-address\\"\\n          placeholder=\\"blurOnSubmit = false\\"\\n          returnKeyType=\\"next\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('3')}\\n        />\\n        <TextInput\\n          ref=\\"3\\"\\n          style=\{styles.singleLine}\\n          keyboardType=\\"url\\"\\n          placeholder=\\"blurOnSubmit = false\\"\\n          returnKeyType=\\"next\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('4')}\\n        />\\n        <TextInput\\n          ref=\\"4\\"\\n          style=\{styles.singleLine}\\n          keyboardType=\\"numeric\\"\\n          placeholder=\\"blurOnSubmit = false\\"\\n          blurOnSubmit=\{false}\\n          onSubmitEditing=\{() => this.focusNextField('5')}\\n        />\\n        <TextInput\\n          ref=\\"5\\"\\n          style=\{styles.singleLine}\\n          keyboardType=\\"numbers-and-punctuation\\"\\n          placeholder=\\"blurOnSubmit = true\\"\\n          returnKeyType=\\"done\\"\\n        />\\n      </View>\\n    );\\n  }\\n}\\n\\nclass ToggleDefaultPaddingExample extends React.Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{hasPadding: false};\\n  }\\n  render() \{\\n    return (\\n      <View>\\n        <TextInput style=\{this.state.hasPadding ? \{ padding: 0 } : null}/>\\n        <Text onPress=\{() => this.setState(\{hasPadding: !this.state.hasPadding})}>\\n          Toggle padding\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\ntype SelectionExampleState = \{\\n  selection: \{\\n    start: number;\\n    end: number;\\n  };\\n  value: string;\\n};\\n\\nclass SelectionExample extends React.Component \{\\n  state: SelectionExampleState;\\n\\n  _textInput: any;\\n\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{\\n      selection: \{start: 0, end: 0},\\n      value: props.value\\n    };\\n  }\\n\\n  onSelectionChange(\{nativeEvent: \{selection}}) \{\\n    this.setState(\{selection});\\n  }\\n\\n  getRandomPosition() \{\\n    var length = this.state.value.length;\\n    return Math.round(Math.random() * length);\\n  }\\n\\n  select(start, end) \{\\n    this._textInput.focus();\\n    this.setState(\{selection: \{start, end}});\\n  }\\n\\n  selectRandom() \{\\n    var positions = [this.getRandomPosition(), this.getRandomPosition()].sort();\\n    this.select(...positions);\\n  }\\n\\n  placeAt(position) \{\\n    this.select(position, position);\\n  }\\n\\n  placeAtRandom() \{\\n    this.placeAt(this.getRandomPosition());\\n  }\\n\\n  render() \{\\n    var length = this.state.value.length;\\n\\n    return (\\n      <View>\\n        <TextInput\\n          multiline=\{this.props.multiline}\\n          onChangeText=\{(value) => this.setState(\{value})}\\n          onSelectionChange=\{this.onSelectionChange.bind(this)}\\n          ref=\{textInput => (this._textInput = textInput)}\\n          selection=\{this.state.selection}\\n          style=\{this.props.style}\\n          value=\{this.state.value}\\n        />\\n        <View>\\n          <Text>\\n            selection = \{JSON.stringify(this.state.selection)}\\n          </Text>\\n          <Text onPress=\{this.placeAt.bind(this, 0)}>\\n            Place at Start (0, 0)\\n          </Text>\\n          <Text onPress=\{this.placeAt.bind(this, length)}>\\n            Place at End (\{length}, \{length})\\n          </Text>\\n          <Text onPress=\{this.placeAtRandom.bind(this)}>\\n            Place at Random\\n          </Text>\\n          <Text onPress=\{this.select.bind(this, 0, length)}>\\n            Select All\\n          </Text>\\n          <Text onPress=\{this.selectRandom.bind(this)}>\\n            Select Random\\n          </Text>\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  multiline: \{\\n    height: 60,\\n    fontSize: 16,\\n    padding: 4,\\n    marginBottom: 10,\\n  },\\n  eventLabel: \{\\n    margin: 3,\\n    fontSize: 12,\\n  },\\n  singleLine: \{\\n    fontSize: 16,\\n    padding: 4,\\n  },\\n  singleLineWithHeightTextInput: \{\\n    height: 30,\\n  },\\n  hashtag: \{\\n    color: 'blue',\\n    fontWeight: 'bold',\\n  },\\n});\\n\\nexports.title = '<TextInput>';\\nexports.description = 'Single and multi-line text inputs.';\\nexports.examples = [\\n  \{\\n    title: 'Auto-focus',\\n    render: function() \{\\n      return (\\n        <TextInput\\n          autoFocus=\{true}\\n          style=\{styles.singleLine}\\n          accessibilityLabel=\\"I am the accessibility label for text input\\"\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: \\"Live Re-Write (<sp>  ->  '_')\\",\\n    render: function() \{\\n      return <RewriteExample />;\\n    }\\n  },\\n  \{\\n    title: 'Auto-capitalize',\\n    render: function() \{\\n      var autoCapitalizeTypes = [\\n        'none',\\n        'sentences',\\n        'words',\\n        'characters',\\n      ];\\n      var examples = autoCapitalizeTypes.map((type) => \{\\n        return (\\n          <TextInput\\n            key=\{type}\\n            autoCapitalize=\{type}\\n            placeholder=\{'autoCapitalize: ' + type}\\n            style=\{styles.singleLine}\\n          />\\n        );\\n      });\\n      return <View>\{examples}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Auto-correct',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            autoCorrect=\{true}\\n            placeholder=\\"This has autoCorrect\\"\\n            style=\{styles.singleLine}\\n          />\\n          <TextInput\\n            autoCorrect=\{false}\\n            placeholder=\\"This does not have autoCorrect\\"\\n            style=\{styles.singleLine}\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Keyboard types',\\n    render: function() \{\\n      var keyboardTypes = [\\n        'default',\\n        'email-address',\\n        'numeric',\\n        'phone-pad',\\n      ];\\n      var examples = keyboardTypes.map((type) => \{\\n        return (\\n          <TextInput\\n            key=\{type}\\n            keyboardType=\{type}\\n            placeholder=\{'keyboardType: ' + type}\\n            style=\{styles.singleLine}\\n          />\\n        );\\n      });\\n      return <View>\{examples}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Blur on submit',\\n    render: function(): React.Element \{ return <BlurOnSubmitExample />; },\\n  },\\n  \{\\n    title: 'Event handling',\\n    render: function(): React.Element \{ return <TextEventsExample />; },\\n  },\\n  \{\\n    title: 'Colors and text inputs',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            style=\{[styles.singleLine]}\\n            defaultValue=\\"Default color text\\"\\n          />\\n          <TextInput\\n            style=\{[styles.singleLine, \{color: 'green'}]}\\n            defaultValue=\\"Green Text\\"\\n          />\\n          <TextInput\\n            placeholder=\\"Default placeholder text color\\"\\n            style=\{styles.singleLine}\\n          />\\n          <TextInput\\n            placeholder=\\"Red placeholder text color\\"\\n            placeholderTextColor=\\"red\\"\\n            style=\{styles.singleLine}\\n          />\\n          <TextInput\\n            placeholder=\\"Default underline color\\"\\n            style=\{styles.singleLine}\\n          />\\n          <TextInput\\n            placeholder=\\"Blue underline color\\"\\n            style=\{styles.singleLine}\\n            underlineColorAndroid=\\"blue\\"\\n          />\\n          <TextInput\\n            defaultValue=\\"Same BackgroundColor as View \\"\\n            style=\{[styles.singleLine, \{backgroundColor: 'rgba(100, 100, 100, 0.3)'}]}>\\n            <Text style=\{\{backgroundColor: 'rgba(100, 100, 100, 0.3)'}}>\\n              Darker backgroundColor\\n            </Text>\\n          </TextInput>\\n          <TextInput\\n            defaultValue=\\"Highlight Color is red\\"\\n            selectionColor=\{'red'}\\n            style=\{styles.singleLine}>\\n          </TextInput>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Text input, themes and heights',\\n    render: function() \{\\n      return (\\n        <TextInput\\n          placeholder=\\"If you set height, beware of padding set from themes\\"\\n          style=\{[styles.singleLineWithHeightTextInput]}\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'fontFamily, fontWeight and fontStyle',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            style=\{[styles.singleLine, \{fontFamily: 'sans-serif'}]}\\n            placeholder=\\"Custom fonts like Sans-Serif are supported\\"\\n          />\\n          <TextInput\\n            style=\{[styles.singleLine, \{fontFamily: 'sans-serif', fontWeight: 'bold'}]}\\n            placeholder=\\"Sans-Serif bold\\"\\n          />\\n          <TextInput\\n            style=\{[styles.singleLine, \{fontFamily: 'sans-serif', fontStyle: 'italic'}]}\\n            placeholder=\\"Sans-Serif italic\\"\\n          />\\n          <TextInput\\n            style=\{[styles.singleLine, \{fontFamily: 'serif'}]}\\n            placeholder=\\"Serif\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Passwords',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            defaultValue=\\"iloveturtles\\"\\n            secureTextEntry=\{true}\\n            style=\{styles.singleLine}\\n          />\\n          <TextInput\\n            secureTextEntry=\{true}\\n            style=\{[styles.singleLine, \{color: 'red'}]}\\n            placeholder=\\"color is supported too\\"\\n            placeholderTextColor=\\"red\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Editable',\\n    render: function() \{\\n      return (\\n        <TextInput\\n           defaultValue=\\"Can't touch this! (>'-')> ^(' - ')^ <('-'<) (>'-')> ^(' - ')^\\"\\n           editable=\{false}\\n           style=\{styles.singleLine}\\n         />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Multiline',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            autoCorrect=\{true}\\n            placeholder=\\"multiline, aligned top-left\\"\\n            placeholderTextColor=\\"red\\"\\n            multiline=\{true}\\n            style=\{[styles.multiline, \{textAlign: 'left', textAlignVertical: 'top'}]}\\n          />\\n          <TextInput\\n            autoCorrect=\{true}\\n            placeholder=\\"multiline, aligned center\\"\\n            placeholderTextColor=\\"green\\"\\n            multiline=\{true}\\n            style=\{[styles.multiline, \{textAlign: 'center', textAlignVertical: 'center'}]}\\n          />\\n          <TextInput\\n            autoCorrect=\{true}\\n            multiline=\{true}\\n            style=\{[styles.multiline, \{color: 'blue'}, \{textAlign: 'right', textAlignVertical: 'bottom'}]}>\\n            <Text style=\{styles.multiline}>multiline with children, aligned bottom-right</Text>\\n          </TextInput>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Fixed number of lines',\\n    platform: 'android',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput numberOfLines=\{2}\\n            multiline=\{true}\\n            placeholder=\\"Two line input\\"\\n          />\\n          <TextInput numberOfLines=\{5}\\n            multiline=\{true}\\n            placeholder=\\"Five line input\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Auto-expanding',\\n    render: function() \{\\n      return (\\n        <View>\\n          <AutoExpandingTextInput\\n            placeholder=\\"height increases with content\\"\\n            enablesReturnKeyAutomatically=\{true}\\n            returnKeyType=\\"done\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Attributed text',\\n    render: function() \{\\n      return <TokenizedTextExample />;\\n    }\\n  },\\n  \{\\n    title: 'Return key',\\n    render: function() \{\\n      var returnKeyTypes = [\\n        'none',\\n        'go',\\n        'search',\\n        'send',\\n        'done',\\n        'previous',\\n        'next',\\n      ];\\n      var returnKeyLabels = [\\n        'Compile',\\n        'React Native',\\n      ];\\n      var examples = returnKeyTypes.map((type) => \{\\n        return (\\n          <TextInput\\n            key=\{type}\\n            returnKeyType=\{type}\\n            placeholder=\{'returnKeyType: ' + type}\\n            style=\{styles.singleLine}\\n          />\\n        );\\n      });\\n      var types = returnKeyLabels.map((type) => \{\\n        return (\\n          <TextInput\\n            key=\{type}\\n            returnKeyLabel=\{type}\\n            placeholder=\{'returnKeyLabel: ' + type}\\n            style=\{styles.singleLine}\\n          />\\n        );\\n      });\\n      return <View>\{examples}\{types}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Inline Images',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            inlineImageLeft=\\"ic_menu_black_24dp\\"\\n            placeholder=\\"This has drawableLeft set\\"\\n            style=\{styles.singleLine}\\n          />\\n          <TextInput\\n            inlineImageLeft=\\"ic_menu_black_24dp\\"\\n            inlineImagePadding=\{30}\\n            placeholder=\\"This has drawableLeft and drawablePadding set\\"\\n            style=\{styles.singleLine}\\n          />\\n          <TextInput\\n            placeholder=\\"This does not have drawable props set\\"\\n            style=\{styles.singleLine}\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Toggle Default Padding',\\n    render: function(): React.Element \{ return <ToggleDefaultPaddingExample />; },\\n  },\\n  \{\\n    title: 'Text selection & cursor placement',\\n    render: function() \{\\n      return (\\n        <View>\\n          <SelectionExample\\n            style=\{styles.default}\\n            value=\\"text selection can be changed\\"\\n          />\\n          <SelectionExample\\n            multiline\\n            style=\{styles.multiline}\\n            value=\{\\"multiline text selection\\\\ncan also be changed\\"}\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"textinput","title":"TextInput","layout":"autodocs","category":"components","permalink":"docs/textinput.html","platform":"cross","next":"toolbarandroid","previous":"text","sidebar":true,"runnable":true,"path":"Libraries/Components/TextInput/TextInput.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;