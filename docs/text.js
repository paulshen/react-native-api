/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A React component for displaying text.\\n\\n\`Text\` supports nesting, styling, and touch handling.\\n\\nIn the following example, the nested title and body text will inherit the \`fontFamily\` from\\n\`styles.baseText\`, but the title provides its own additional styles.  The title and body will\\nstack on top of each other on account of the literal newlines:\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, Text, StyleSheet } from 'react-native';\\n\\nclass TextInANest extends Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{\\n      titleText: \\"Bird's Nest\\",\\n      bodyText: 'This is not really a bird nest.'\\n    };\\n  }\\n\\n  render() \{\\n    return (\\n      <Text style=\{styles.baseText}>\\n        <Text style=\{styles.titleText} onPress=\{this.onPressTitle}>\\n          \{this.state.titleText}\{'\\\\n'}\{'\\\\n'}\\n        </Text>\\n        <Text numberOfLines=\{5}>\\n          \{this.state.bodyText}\\n        </Text>\\n      </Text>\\n    );\\n  }\\n}\\n\\nconst styles = StyleSheet.create(\{\\n  baseText: \{\\n    fontFamily: 'Cochin',\\n  },\\n  titleText: \{\\n    fontSize: 20,\\n    fontWeight: 'bold',\\n  },\\n});\\n\\n// App registration and rendering\\nAppRegistry.registerComponent('TextInANest', () => TextInANest);\\n\`\`\`",
  "methods": [],
  "props": \{
    "ellipsizeMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'head'",
            "computed": false
          },
          \{
            "value": "'middle'",
            "computed": false
          },
          \{
            "value": "'tail'",
            "computed": false
          },
          \{
            "value": "'clip'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "When \`numberOfLines\` is set, this prop defines how text will be truncated.\\n\`numberOfLines\` must be set in conjunction with this prop.\\n\\nThis can be one of the following values:\\n\\n- \`head\` - The line is displayed so that the end fits in the container and the missing text\\nat the beginning of the line is indicated by an ellipsis glyph. e.g., \\"...wxyz\\"\\n- \`middle\` - The line is displayed so that the beginning and end fit in the container and the\\nmissing text in the middle is indicated by an ellipsis glyph. \\"ab...yz\\"\\n- \`tail\` - The line is displayed so that the beginning fits in the container and the\\nmissing text at the end of the line is indicated by an ellipsis glyph. e.g., \\"abcd...\\"\\n- \`clip\` - Lines are not drawn past the edge of the text container.\\n\\nThe default is \`tail\`.\\n\\n> \`clip\` is working only for iOS",
      "defaultValue": \{
        "value": "'tail'",
        "computed": false
      }
    },
    "numberOfLines": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Used to truncate the text with an ellipsis after computing the text\\nlayout, including line wrapping, such that the total number of lines\\ndoes not exceed this number.\\n\\nThis prop is commonly used with \`ellipsizeMode\`."
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
      "description": "Set text break strategy on Android API Level 23+, possible values are \`simple\`, \`highQuality\`, \`balanced\`\\nThe default value is \`highQuality\`.\\n@platform android"
    },
    "onLayout": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on mount and layout changes with\\n\\n  \`\{nativeEvent: \{layout: \{x, y, width, height}}}\`"
    },
    "onPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "This function is called on press.\\n\\ne.g., \`onPress=\{() => console.log('1st')}\`"
    },
    "onLongPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "This function is called on long press.\\n\\ne.g., \`onLongPress=\{this.increaseSize}>\`"
    },
    "pressRetentionOffset": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": "When the scroll view is disabled, this defines how far your touch may\\nmove off of the button, before deactivating the button. Once deactivated,\\ntry moving it back and you'll see that the button is once again\\nreactivated! Move it back and forth several times while the scroll view\\nis disabled. Ensure you pass in a constant to reduce memory allocations."
    },
    "selectable": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Lets the user select text, to use the native copy and paste functionality."
    },
    "selectionColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The highlight color of the text.\\n@platform android"
    },
    "suppressHighlighting": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When \`true\`, no visual change is made when text is pressed down. By\\ndefault, a gray oval highlights the text on press down.\\n@platform ios"
    },
    "style": \{
      "type": \{
        "name": "stylesheet",
        "value": "TextStylePropTypes"
      },
      "required": false,
      "description": ""
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view in end-to-end tests."
    },
    "allowFontScaling": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Specifies whether fonts should scale to respect Text Size accessibility settings. The\\ndefault is \`true\`.",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "accessible": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When set to \`true\`, indicates that the view is an accessibility element. The default value\\nfor a \`Text\` element is \`true\`.\\n\\nSee the\\n[Accessibility guide](docs/accessibility.html#accessible-ios-android)\\nfor more information.",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "adjustsFontSizeToFit": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Specifies whether font should be scaled down automatically to fit given style constraints.\\n@platform ios"
    },
    "minimumFontScale": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).\\n@platform ios"
    },
    "disabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Specifies the disabled state of the text view for testing purposes\\n@platform android",
      "defaultValue": \{
        "value": "false",
        "computed": false
      }
    }
  },
  "fullDescription": "\\n\\n## Nested Text\\n\\nBoth iOS and Android allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (\`NSAttributedString\` on iOS, \`SpannableString\` on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, Text } from 'react-native';\\n\\nclass BoldAndBeautiful extends Component \{\\n  render() \{\\n    return (\\n      <Text style=\{\{fontWeight: 'bold'}}>\\n        I am bold\\n        <Text style=\{\{color: 'red'}}>\\n          and red\\n        </Text>\\n      </Text>\\n    );\\n  }\\n}\\n\\nAppRegistry.registerComponent('BoldAndBeautiful', () => BoldAndBeautiful);\\n\`\`\`\\n\\nBehind the scenes, React Native converts this to a flat \`NSAttributedString\` or \`SpannableString\` that contains the following information:\\n\\n\`\`\`javascript\\n\\"I am bold and red\\"\\n0-9: bold\\n9-17: bold, red\\n\`\`\`\\n\\n## Nested Views (iOS Only)\\n\\nOn iOS, you can nest views within your Text component. Here's an example:\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, Text, View } from 'react-native';\\n\\nclass BlueIsCool extends Component \{\\n  render() \{\\n    return (\\n      <Text>\\n        There is a blue square\\n        <View style=\{\{width: 50, height: 50, backgroundColor: 'steelblue'}} />\\n        in between my text.\\n      </Text>\\n    );\\n  }\\n}\\n\\nAppRegistry.registerComponent('BlueIsCool', () => BlueIsCool);\\n\`\`\`\\n\\n> In order to use this feature, you must give the view a \`width\` and a \`height\`.\\n\\n## Containers\\n\\nThe \`<Text>\` element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of a \`<Text>\` are no longer rectangles, but wrap when they see the end of the line.\\n\\n\`\`\`javascript\\n<Text>\\n  <Text>First part and </Text>\\n  <Text>second part</Text>\\n</Text>\\n// Text container: all the text flows as if it was one\\n// |First part |\\n// |and second |\\n// |part       |\\n\\n<View>\\n  <Text>First part and </Text>\\n  <Text>second part</Text>\\n</View>\\n// View container: each text is its own block\\n// |First part |\\n// |and        |\\n// |second part|\\n\`\`\`\\n\\n## Limited Style Inheritance\\n\\nOn the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:\\n\\n\`\`\`css\\n/* CSS, *not* React Native */\\nhtml \{\\n  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;\\n  font-size: 11px;\\n  color: #141823;\\n}\\n\`\`\`\\n\\nAll elements in the document will inherit this font unless they or one of their parents specifies a new rule.\\n\\nIn React Native, we are more strict about it: **you must wrap all the text nodes inside of a \`<Text>\` component**; you cannot have a text node directly under a \`<View>\`.\\n\\n\`\`\`javascript\\n// BAD: will raise exception, can't have a text node as child of a <View>\\n<View>\\n  Some text\\n</View>\\n\\n// GOOD\\n<View>\\n  <Text>\\n    Some text\\n  </Text>\\n</View>\\n\`\`\`\\n\\nYou also lose the ability to set up a default font for an entire subtree. The recommended way to use consistent fonts and sizes across your application is to create a component \`MyAppText\` that includes them and use this component across your app. You can also use this component to make more specific components like \`MyAppHeaderText\` for other kinds of text.\\n\\n\`\`\`javascript\\n<View>\\n  <MyAppText>Text styled with the default font for the entire application</MyAppText>\\n  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>\\n</View>\\n\`\`\`\\n\\nAssuming that \`MyAppText\` is a component that simply renders out its children into a \`Text\` component with styling, then \`MyAppHeaderText\` can be defined as follows:\\n\\n\`\`\`javascript\\nclass MyAppHeaderText extends Component \{\\n  render() \{\\n    <MyAppText>\\n      <Text style=\{\{fontSize: 20}}>\\n        \{this.props.children}\\n      </Text>\\n    </MyAppText>\\n  }\\n}\\n\`\`\`\\n\\nComposing \`MyAppText\` in this way ensures that we get the styles from a top-level component, but leaves us the ability to add / override them in specific use cases.\\n\\nReact Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.\\n\\n\`\`\`javascript\\n<Text style=\{\{fontWeight: 'bold'}}>\\n  I am bold\\n  <Text style=\{\{color: 'red'}}>\\n    and red\\n  </Text>\\n</Text>\\n\`\`\`\\n\\nWe believe that this more constrained way to style text will yield better apps:\\n\\n- (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.\\n\\n- (Implementor) The implementation of React Native is also simplified. We do not need to have a \`fontFamily\` field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.\\n",
  "type": "component",
  "filepath": "Libraries/Text/Text.js",
  "componentName": "Text",
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
      "path": "Examples/UIExplorer/js/TextExample.ios.js",
      "title": "IOS",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule TextExample\\n */\\n'use strict';\\n\\nconst Platform = require\('Platform');\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Image,\\n  StyleSheet,\\n  Text,\\n  View,\\n  LayoutAnimation,\\n} = ReactNative;\\n\\nclass Entity extends React.Component \{\\n  render() \{\\n    return (\\n      <Text style=\{\{fontWeight: '500', color: '#527fe4'}}>\\n        \{this.props.children}\\n      </Text>\\n    );\\n  }\\n}\\n\\nclass AttributeToggler extends React.Component \{\\n  state = \{fontWeight: 'bold', fontSize: 15};\\n\\n  toggleWeight = () => \{\\n    this.setState(\{\\n      fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'\\n    });\\n  };\\n\\n  increaseSize = () => \{\\n    this.setState(\{\\n      fontSize: this.state.fontSize + 1\\n    });\\n  };\\n\\n  render() \{\\n    var curStyle = \{fontWeight: this.state.fontWeight, fontSize: this.state.fontSize};\\n    return (\\n      <View>\\n        <Text style=\{curStyle}>\\n          Tap the controls below to change attributes.\\n        </Text>\\n        <Text>\\n          <Text>See how it will even work on <Text style=\{curStyle}>this nested text</Text></Text>\\n        </Text>\\n        <Text\\n          style=\{\{backgroundColor: '#ffaaaa', marginTop: 5}}\\n          onPress=\{this.toggleWeight}>\\n          Toggle Weight\\n        </Text>\\n        <Text\\n          style=\{\{backgroundColor: '#aaaaff', marginTop: 5}}\\n          onPress=\{this.increaseSize}>\\n          Increase Size\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nvar AdjustingFontSize = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{dynamicText:'', shouldRender: true,};\\n  },\\n  reset: function() \{\\n    LayoutAnimation.easeInEaseOut();\\n    this.setState(\{\\n      shouldRender: false,\\n    });\\n    setTimeout(()=>\{\\n      LayoutAnimation.easeInEaseOut();\\n      this.setState(\{\\n        dynamicText: '',\\n        shouldRender: true,\\n      });\\n    }, 300);\\n  },\\n  addText: function() \{\\n    this.setState(\{\\n      dynamicText: this.state.dynamicText + (Math.floor((Math.random() * 10) % 2) ? ' foo' : ' bar'),\\n    });\\n  },\\n  removeText: function() \{\\n    this.setState(\{\\n      dynamicText: this.state.dynamicText.slice(0, this.state.dynamicText.length - 4),\\n    });\\n  },\\n  render: function() \{\\n\\n    if (!this.state.shouldRender) \{\\n      return (<View/>);\\n    }\\n    return (\\n      <View>\\n        <Text lineBreakMode=\\"tail\\" numberOfLines=\{1} style=\{\{fontSize: 36, marginVertical:6}}>\\n          Truncated text is baaaaad.\\n        </Text>\\n        <Text numberOfLines=\{1} adjustsFontSizeToFit=\{true} style=\{\{fontSize: 40, marginVertical:6}}>\\n          Shrinking to fit available space is much better!\\n        </Text>\\n\\n        <Text adjustsFontSizeToFit=\{true} numberOfLines=\{1} style=\{\{fontSize:30, marginVertical:6}}>\\n        \{'Add text to me to watch me shrink!' + ' ' + this.state.dynamicText}\\n        </Text>\\n\\n        <Text adjustsFontSizeToFit=\{true} numberOfLines=\{4} style=\{\{fontSize:20, marginVertical:6}}>\\n        \{'Multiline text component shrinking is supported, watch as this reeeeaaaally loooooong teeeeeeext grooooows and then shriiiinks as you add text to me! ioahsdia soady auydoa aoisyd aosdy ' + ' ' + this.state.dynamicText}\\n        </Text>\\n\\n        <Text adjustsFontSizeToFit=\{true} numberOfLines=\{1} style=\{\{marginVertical:6}}>\\n          <Text style=\{\{fontSize:14}}>\\n            \{'Differently sized nested elements will shrink together. '}\\n          </Text>\\n          <Text style=\{\{fontSize:20}}>\\n            \{'LARGE TEXT! ' + this.state.dynamicText}\\n          </Text>\\n        </Text>\\n\\n        <View style=\{\{flexDirection:'row', justifyContent:'space-around', marginTop: 5, marginVertical:6}}>\\n          <Text\\n            style=\{\{backgroundColor: '#ffaaaa'}}\\n            onPress=\{this.reset}>\\n            Reset\\n          </Text>\\n          <Text\\n            style=\{\{backgroundColor: '#aaaaff'}}\\n            onPress=\{this.removeText}>\\n            Remove Text\\n          </Text>\\n          <Text\\n            style=\{\{backgroundColor: '#aaffaa'}}\\n            onPress=\{this.addText}>\\n            Add Text\\n          </Text>\\n        </View>\\n      </View>\\n    );\\n  }\\n});\\n\\nexports.title = '<Text>';\\nexports.description = 'Base component for rendering styled text.';\\nexports.displayName = 'TextExample';\\nexports.examples = [\\n\{\\n  title: 'Wrap',\\n  render: function() \{\\n    return (\\n      <Text>\\n        The text should wrap if it goes on multiple lines. See, this is going to\\n        the next line.\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Padding',\\n  render: function() \{\\n    return (\\n      <Text style=\{\{padding: 10}}>\\n        This text is indented by 10px padding on all sides.\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Font Family',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontFamily: (Platform.isTVOS ? 'Times' : 'Cochin')}}>\\n          Cochin\\n        </Text>\\n        <Text style=\{\{fontFamily: (Platform.isTVOS ? 'Times' : 'Cochin'), fontWeight: 'bold'}}>\\n          Cochin bold\\n        </Text>\\n        <Text style=\{\{fontFamily: 'Helvetica'}}>\\n          Helvetica\\n        </Text>\\n        <Text style=\{\{fontFamily: 'Helvetica', fontWeight: 'bold'}}>\\n          Helvetica bold\\n        </Text>\\n        <Text style=\{\{fontFamily: (Platform.isTVOS ? 'Courier' : 'Verdana')}}>\\n          Verdana\\n        </Text>\\n        <Text style=\{\{fontFamily: (Platform.isTVOS ? 'Courier' : 'Verdana'), fontWeight: 'bold'}}>\\n          Verdana bold\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Font Size',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontSize: 23}}>\\n          Size 23\\n        </Text>\\n        <Text style=\{\{fontSize: 8}}>\\n          Size 8\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Color',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{color: 'red'}}>\\n          Red color\\n        </Text>\\n        <Text style=\{\{color: 'blue'}}>\\n          Blue color\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Font Weight',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontSize: 20, fontWeight: '100'}}>\\n          Move fast and be ultralight\\n        </Text>\\n        <Text style=\{\{fontSize: 20, fontWeight: '200'}}>\\n          Move fast and be light\\n        </Text>\\n        <Text style=\{\{fontSize: 20, fontWeight: 'normal'}}>\\n          Move fast and be normal\\n        </Text>\\n        <Text style=\{\{fontSize: 20, fontWeight: 'bold'}}>\\n          Move fast and be bold\\n        </Text>\\n        <Text style=\{\{fontSize: 20, fontWeight: '900'}}>\\n          Move fast and be ultrabold\\n        </Text>\\n      </View>\\n    );\\n  },\\n},  \{\\n  title: 'Font Style',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontStyle: 'normal'}}>\\n          Normal text\\n        </Text>\\n        <Text style=\{\{fontStyle: 'italic'}}>\\n          Italic text\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Selectable',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text selectable=\{true}>\\n          This text is <Text style=\{\{fontWeight: 'bold'}}>selectable</Text> if you click-and-hold.\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Text Decoration',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{textDecorationLine: 'underline', textDecorationStyle: 'solid'}}>\\n          Solid underline\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'underline', textDecorationStyle: 'double', textDecorationColor: '#ff0000'}}>\\n          Double underline with custom color\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'underline', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40'}}>\\n          Dashed underline with custom color\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'underline', textDecorationStyle: 'dotted', textDecorationColor: 'blue'}}>\\n          Dotted underline with custom color\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'none'}}>\\n          None textDecoration\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>\\n          Solid line-through\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#ff0000'}}>\\n          Double line-through with custom color\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'line-through', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40'}}>\\n          Dashed line-through with custom color\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'line-through', textDecorationStyle: 'dotted', textDecorationColor: 'blue'}}>\\n          Dotted line-through with custom color\\n        </Text>\\n        <Text style=\{\{textDecorationLine: 'underline line-through'}}>\\n          Both underline and line-through\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Nested',\\n  description: 'Nested text components will inherit the styles of their ' +\\n    'parents (only backgroundColor is inherited from non-Text parents).  ' +\\n    '<Text> only supports other <Text> and raw text (strings) as children.',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text>\\n          (Normal text,\\n          <Text style=\{\{fontWeight: 'bold'}}>\\n            (and bold\\n            <Text style=\{\{fontSize: 11, color: '#527fe4'}}>\\n              (and tiny inherited bold blue)\\n            </Text>\\n            )\\n          </Text>\\n          )\\n        </Text>\\n        <Text style=\{\{opacity:0.7}}>\\n          (opacity\\n            <Text>\\n              (is inherited\\n                <Text style=\{\{opacity:0.7}}>\\n                  (and accumulated\\n                    <Text style=\{\{backgroundColor:'#ffaaaa'}}>\\n                      (and also applies to the background)\\n                    </Text>\\n                  )\\n                </Text>\\n              )\\n            </Text>\\n          )\\n        </Text>\\n        <Text style=\{\{fontSize: 12}}>\\n          <Entity>Entity Name</Entity>\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Text Align',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text>\\n          auto (default) - english LTR\\n        </Text>\\n        <Text>\\n          أحب اللغة العربية auto (default) - arabic RTL\\n        </Text>\\n        <Text style=\{\{textAlign: 'left'}}>\\n          left left left left left left left left left left left left left left left\\n        </Text>\\n        <Text style=\{\{textAlign: 'center'}}>\\n          center center center center center center center center center center center\\n        </Text>\\n        <Text style=\{\{textAlign: 'right'}}>\\n          right right right right right right right right right right right right right\\n        </Text>\\n        <Text style=\{\{textAlign: 'justify'}}>\\n          justify: this text component\{\\"'\\"}s contents are laid out with \\"textAlign: justify\\"\\n          and as you can see all of the lines except the last one span the\\n          available width of the parent container.\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Letter Spacing',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{letterSpacing: 0}}>\\n          letterSpacing = 0\\n        </Text>\\n        <Text style=\{\{letterSpacing: 2, marginTop: 5}}>\\n          letterSpacing = 2\\n        </Text>\\n        <Text style=\{\{letterSpacing: 9, marginTop: 5}}>\\n          letterSpacing = 9\\n        </Text>\\n        <Text style=\{\{letterSpacing: -1, marginTop: 5}}>\\n          letterSpacing = -1\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Spaces',\\n  render: function() \{\\n    return (\\n      <Text>\\n        A \{'generated'} \{' '} \{'string'} and    some &nbsp;&nbsp;&nbsp; spaces\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Line Height',\\n  render: function() \{\\n    return (\\n      <Text>\\n        <Text style=\{\{lineHeight: 35}}>\\n          A lot of space between the lines of this long passage that should\\n          wrap once.\\n        </Text>\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Empty Text',\\n  description: 'It\\\\'s ok to have Text with zero or null children.',\\n  render: function() \{\\n    return (\\n      <Text />\\n    );\\n  },\\n}, \{\\n  title: 'Toggling Attributes',\\n  render: function(): React.Element<any> \{\\n    return <AttributeToggler />;\\n  },\\n}, \{\\n  title: 'backgroundColor attribute',\\n  description: 'backgroundColor is inherited from all types of views.',\\n  render: function() \{\\n    return (\\n      <Text style=\{\{backgroundColor: 'yellow'}}>\\n        Yellow container background,\\n        <Text style=\{\{backgroundColor: '#ffaaaa'}}>\\n          \{' '}red background,\\n          <Text style=\{\{backgroundColor: '#aaaaff'}}>\\n            \{' '}blue background,\\n            <Text>\\n              \{' '}inherited blue background,\\n              <Text style=\{\{backgroundColor: '#aaffaa'}}>\\n                \{' '}nested green background.\\n              </Text>\\n            </Text>\\n          </Text>\\n        </Text>\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'numberOfLines attribute',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text numberOfLines=\{1}>\\n          Maximum of one line, no matter how much I write here. If I keep writing, it\{\\"'\\"}ll just truncate after one line.\\n        </Text>\\n        <Text numberOfLines=\{2} style=\{\{marginTop: 20}}>\\n          Maximum of two lines, no matter how much I write here. If I keep writing, it\{\\"'\\"}ll just truncate after two lines.\\n        </Text>\\n        <Text style=\{\{marginTop: 20}}>\\n          No maximum lines specified, no matter how much I write here. If I keep writing, it\{\\"'\\"}ll just keep going and going.\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Text highlighting (tap the link to see highlight)',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text>Lorem ipsum dolor sit amet, <Text suppressHighlighting=\{false} style=\{\{backgroundColor: 'white', textDecorationLine: 'underline', color: 'blue'}} onPress=\{() => null}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</Text> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'allowFontScaling attribute',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text>\\n          By default, text will respect Text Size accessibility setting on iOS.\\n          It means that all font sizes will be increased or descreased depending on the value of Text Size setting in\\n          \{\\" \\"}<Text style=\{\{fontWeight: 'bold'}}>Settings.app - Display & Brightness - Text Size</Text>\\n        </Text>\\n        <Text style=\{\{marginTop: 10}}>\\n          You can disable scaling for your Text component by passing \{\\"\\\\\\"\\"}allowFontScaling=\{\\"\{\\"}false\{\\"}\\\\\\"\\"} prop.\\n        </Text>\\n        <Text allowFontScaling=\{false} style=\{\{marginTop: 20}}>\\n          This text will not scale.\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Inline views',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text>\\n          This text contains an inline blue view <View style=\{\{width: 25, height: 25, backgroundColor: 'steelblue'}} /> and\\n          an inline image <Image source=\{require\('./flux.png')} style=\{\{width: 30, height: 11, resizeMode: 'cover'}}/>. Neat, huh?\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Text shadow',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontSize: 20, textShadowOffset: \{width: 2, height: 2}, textShadowRadius: 1, textShadowColor: '#00cccc'}}>\\n          Demo text shadow\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Ellipsize mode',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text numberOfLines=\{1}>\\n          This very long text should be truncated with dots in the end.\\n        </Text>\\n        <Text ellipsizeMode=\\"middle\\" numberOfLines=\{1}>\\n          This very long text should be truncated with dots in the middle.\\n        </Text>\\n        <Text ellipsizeMode=\\"head\\" numberOfLines=\{1}>\\n          This very long text should be truncated with dots in the beginning.\\n        </Text>\\n        <Text ellipsizeMode=\\"clip\\" numberOfLines=\{1}>\\n          This very looooooooooooooooooooooooooooong text should be clipped.\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Font variants',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontVariant: ['small-caps']}}>\\n          Small Caps\{'\\\\n'}\\n        </Text>\\n        <Text style=\{\{fontFamily: (Platform.isTVOS ? 'Times' : 'Hoefler Text'), fontVariant: ['oldstyle-nums']}}>\\n          Old Style nums 0123456789\{'\\\\n'}\\n        </Text>\\n        <Text style=\{\{fontFamily: (Platform.isTVOS ? 'Times' : 'Hoefler Text'), fontVariant: ['lining-nums']}}>\\n          Lining nums 0123456789\{'\\\\n'}\\n        </Text>\\n        <Text style=\{\{fontVariant: ['tabular-nums']}}>\\n          Tabular nums\{'\\\\n'}\\n          1111\{'\\\\n'}\\n          2222\{'\\\\n'}\\n        </Text>\\n        <Text style=\{\{fontVariant: ['proportional-nums']}}>\\n          Proportional nums\{'\\\\n'}\\n          1111\{'\\\\n'}\\n          2222\{'\\\\n'}\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Dynamic Font Size Adjustment',\\n  render: function(): React.Element<any> \{\\n    return <AdjustingFontSize />;\\n  },\\n}];\\n"
    },
    \{
      "path": "Examples/UIExplorer/js/TextExample.android.js",
      "title": "ANDROID",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule TextExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Image,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = ReactNative;\\nvar UIExplorerBlock = require\('./UIExplorerBlock');\\nvar UIExplorerPage = require\('./UIExplorerPage');\\n\\nclass Entity extends React.Component \{\\n  render() \{\\n    return (\\n      <Text style=\{\{fontWeight: 'bold', color: '#527fe4'}}>\\n        \{this.props.children}\\n      </Text>\\n    );\\n  }\\n}\\n\\nclass AttributeToggler extends React.Component \{\\n  state = \{fontWeight: 'bold', fontSize: 15};\\n\\n  toggleWeight = () => \{\\n    this.setState(\{\\n      fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'\\n    });\\n  };\\n\\n  increaseSize = () => \{\\n    this.setState(\{\\n      fontSize: this.state.fontSize + 1\\n    });\\n  };\\n\\n  render() \{\\n    var curStyle = \{fontWeight: this.state.fontWeight, fontSize: this.state.fontSize};\\n    return (\\n      <View>\\n        <Text style=\{curStyle}>\\n          Tap the controls below to change attributes.\\n        </Text>\\n        <Text>\\n          <Text>See how it will even work on <Text style=\{curStyle}>this nested text</Text></Text>\\n        </Text>\\n        <Text>\\n          <Text onPress=\{this.toggleWeight}>Toggle Weight</Text>\\n          \{' (with highlight onPress)'}\\n        </Text>\\n        <Text onPress=\{this.increaseSize} suppressHighlighting=\{true}>\\n          Increase Size (suppressHighlighting true)\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass TextExample extends React.Component \{\\n  static title = '<Text>';\\n  static description = 'Base component for rendering styled text.';\\n\\n  render() \{\\n    return (\\n      <UIExplorerPage title=\\"<Text>\\">\\n        <UIExplorerBlock title=\\"Wrap\\">\\n          <Text>\\n            The text should wrap if it goes on multiple lines.\\n            See, this is going to the next line.\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Padding\\">\\n          <Text style=\{\{padding: 10}}>\\n            This text is indented by 10px padding on all sides.\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Font Family\\">\\n          <Text style=\{\{fontFamily: 'sans-serif'}}>\\n            Sans-Serif\\n          </Text>\\n          <Text style=\{\{fontFamily: 'sans-serif', fontWeight: 'bold'}}>\\n            Sans-Serif Bold\\n          </Text>\\n          <Text style=\{\{fontFamily: 'serif'}}>\\n            Serif\\n          </Text>\\n          <Text style=\{\{fontFamily: 'serif', fontWeight: 'bold'}}>\\n            Serif Bold\\n          </Text>\\n          <Text style=\{\{fontFamily: 'monospace'}}>\\n            Monospace\\n          </Text>\\n          <Text style=\{\{fontFamily: 'monospace', fontWeight: 'bold'}}>\\n            Monospace Bold (After 5.0)\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Android Material Design fonts\\">\\n          <View style=\{\{flexDirection: 'row', alignItems: 'flex-start'}}>\\n            <View style=\{\{flex: 1}}>\\n              <Text style=\{\{fontFamily: 'sans-serif'}}>\\n                Roboto Regular\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif', fontStyle: 'italic'}}>\\n                Roboto Italic\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif', fontWeight: 'bold'}}>\\n                Roboto Bold\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: 'bold'}}>\\n                Roboto Bold Italic\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-light'}}>\\n                Roboto Light\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-light', fontStyle: 'italic'}}>\\n                Roboto Light Italic\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-thin'}}>\\n                Roboto Thin (After 4.2)\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-thin', fontStyle: 'italic'}}>\\n                Roboto Thin Italic (After 4.2)\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-condensed'}}>\\n                Roboto Condensed\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-condensed', fontStyle: 'italic'}}>\\n                Roboto Condensed Italic\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-condensed', fontWeight: 'bold'}}>\\n                Roboto Condensed Bold\\n              </Text>\\n              <Text style=\{\{\\n                  fontFamily: 'sans-serif-condensed',\\n                  fontStyle: 'italic',\\n                  fontWeight: 'bold'}}>\\n                Roboto Condensed Bold Italic\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-medium'}}>\\n                Roboto Medium (After 5.0)\\n              </Text>\\n              <Text style=\{\{fontFamily: 'sans-serif-medium', fontStyle: 'italic'}}>\\n                Roboto Medium Italic (After 5.0)\\n              </Text>\\n            </View>\\n          </View>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Custom Fonts\\">\\n          <View style=\{\{flexDirection: 'row', alignItems: 'flex-start'}}>\\n            <View style=\{\{flex: 1}}>\\n              <Text style=\{\{fontFamily: 'notoserif'}}>\\n                NotoSerif Regular\\n              </Text>\\n              <Text style=\{\{fontFamily: 'notoserif', fontStyle: 'italic', fontWeight: 'bold'}}>\\n                NotoSerif Bold Italic\\n              </Text>\\n              <Text style=\{\{fontFamily: 'notoserif', fontStyle: 'italic'}}>\\n                NotoSerif Italic (Missing Font file)\\n              </Text>\\n            </View>\\n          </View>\\n        </UIExplorerBlock>\\n\\n        <UIExplorerBlock title=\\"Font Size\\">\\n          <Text style=\{\{fontSize: 23}}>\\n            Size 23\\n          </Text>\\n          <Text style=\{\{fontSize: 8}}>\\n            Size 8\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Color\\">\\n          <Text style=\{\{color: 'red'}}>\\n            Red color\\n          </Text>\\n          <Text style=\{\{color: 'blue'}}>\\n            Blue color\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Font Weight\\">\\n          <Text style=\{\{fontWeight: 'bold'}}>\\n            Move fast and be bold\\n          </Text>\\n          <Text style=\{\{fontWeight: 'normal'}}>\\n            Move fast and be bold\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Font Style\\">\\n          <Text style=\{\{fontStyle: 'italic'}}>\\n            Move fast and be bold\\n          </Text>\\n          <Text style=\{\{fontStyle: 'normal'}}>\\n            Move fast and be bold\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Font Style and Weight\\">\\n          <Text style=\{\{fontStyle: 'italic', fontWeight: 'bold'}}>\\n            Move fast and be bold\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Text Decoration\\">\\n          <Text style=\{\{textDecorationLine: 'underline'}}>\\n            Solid underline\\n          </Text>\\n          <Text style=\{\{textDecorationLine: 'none'}}>\\n            None textDecoration\\n          </Text>\\n          <Text style=\{\{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>\\n            Solid line-through\\n          </Text>\\n          <Text style=\{\{textDecorationLine: 'underline line-through'}}>\\n            Both underline and line-through\\n          </Text>\\n          <Text>\\n            Mixed text with <Text style=\{\{textDecorationLine: 'underline'}}>underline</Text> and <Text style=\{\{textDecorationLine: 'line-through'}}>line-through</Text> text nodes\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Nested\\">\\n          <Text onPress=\{() => console.log('1st')}>\\n            (Normal text,\\n            <Text style=\{\{fontWeight: 'bold'}} onPress=\{() => console.log('2nd')}>\\n              (and bold\\n              <Text style=\{\{fontStyle: 'italic', fontSize: 11, color: '#527fe4'}} onPress=\{() => console.log('3rd')}>\\n                (and tiny bold italic blue\\n                <Text style=\{\{fontWeight: 'normal', fontStyle: 'normal'}} onPress=\{() => console.log('4th')}>\\n                  (and tiny normal blue)\\n                </Text>\\n                )\\n              </Text>\\n              )\\n            </Text>\\n            )\\n          </Text>\\n          <Text style=\{\{fontFamily: 'serif'}} onPress=\{() => console.log('1st')}>\\n            (Serif\\n            <Text style=\{\{fontStyle: 'italic', fontWeight: 'bold'}} onPress=\{() => console.log('2nd')}>\\n              (Serif Bold Italic\\n              <Text\\n                style=\{\{fontFamily: 'monospace', fontStyle: 'normal', fontWeight: 'normal'}}\\n                onPress=\{() => console.log('3rd')}>\\n                (Monospace Normal\\n                <Text\\n                  style=\{\{fontFamily: 'sans-serif', fontWeight: 'bold'}}\\n                  onPress=\{() => console.log('4th')}>\\n                  (Sans-Serif Bold\\n                  <Text style=\{\{fontWeight: 'normal'}} onPress=\{() => console.log('5th')}>\\n                    (and Sans-Serif Normal)\\n                  </Text>\\n                  )\\n                </Text>\\n                )\\n              </Text>\\n              )\\n            </Text>\\n            )\\n          </Text>\\n          <Text style=\{\{fontSize: 12}}>\\n            <Entity>Entity Name</Entity>\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Text Align\\">\\n          <Text>\\n            auto (default) - english LTR\\n          </Text>\\n          <Text>\\n            أحب اللغة العربية auto (default) - arabic RTL\\n          </Text>\\n          <Text style=\{\{textAlign: 'left'}}>\\n            left left left left left left left left left left left left left left left\\n          </Text>\\n          <Text style=\{\{textAlign: 'center'}}>\\n            center center center center center center center center center center center\\n          </Text>\\n          <Text style=\{\{textAlign: 'right'}}>\\n            right right right right right right right right right right right right right\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Unicode\\">\\n          <View>\\n            <View style=\{\{flexDirection: 'row'}}>\\n              <Text style=\{\{backgroundColor: 'red'}}>\\n                星际争霸是世界上最好的游戏。\\n              </Text>\\n            </View>\\n            <View>\\n              <Text style=\{\{backgroundColor: 'red'}}>\\n                星际争霸是世界上最好的游戏。\\n              </Text>\\n            </View>\\n            <View style=\{\{alignItems: 'center'}}>\\n              <Text style=\{\{backgroundColor: 'red'}}>\\n                星际争霸是世界上最好的游戏。\\n              </Text>\\n            </View>\\n            <View>\\n              <Text style=\{\{backgroundColor: 'red'}}>\\n                星际争霸是世界上最好的游戏。星际争霸是世界上最好的游戏。星际争霸是世界上最好的游戏。星际争霸是世界上最好的游戏。\\n              </Text>\\n            </View>\\n          </View>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Spaces\\">\\n          <Text>\\n            A \{'generated'} \{' '} \{'string'} and    some &nbsp;&nbsp;&nbsp; spaces\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Line Height\\">\\n          <Text style=\{\{lineHeight: 35}}>\\n            Holisticly formulate inexpensive ideas before best-of-breed benefits. <Text style=\{\{fontSize: 20}}>Continually</Text> expedite magnetic potentialities rather than client-focused interfaces.\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Empty Text\\">\\n          <Text />\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Toggling Attributes\\">\\n          <AttributeToggler />\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"backgroundColor attribute\\">\\n          <Text style=\{\{backgroundColor: '#ffaaaa'}}>\\n            Red background,\\n            <Text style=\{\{backgroundColor: '#aaaaff'}}>\\n              \{' '}blue background,\\n              <Text>\\n                \{' '}inherited blue background,\\n                <Text style=\{\{backgroundColor: '#aaffaa'}}>\\n                  \{' '}nested green background.\\n                </Text>\\n              </Text>\\n            </Text>\\n          </Text>\\n          <Text style=\{\{backgroundColor: 'rgba(100, 100, 100, 0.3)'}}>\\n            Same alpha as background,\\n            <Text>\\n              Inherited alpha from background,\\n              <Text style=\{\{backgroundColor: 'rgba(100, 100, 100, 0.3)'}}>\\n                Reapply alpha\\n              </Text>\\n            </Text>\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"containerBackgroundColor attribute\\">\\n          <View style=\{\{flexDirection: 'row', height: 85}}>\\n            <View style=\{\{backgroundColor: '#ffaaaa', width: 150}} />\\n            <View style=\{\{backgroundColor: '#aaaaff', width: 150}} />\\n          </View>\\n          <Text style=\{[styles.backgroundColorText, \{top: -80}]}>\\n            Default containerBackgroundColor (inherited) + backgroundColor wash\\n          </Text>\\n          <Text style=\{[styles.backgroundColorText, \{top: -70, backgroundColor: 'transparent'}]}>\\n            \{\\"containerBackgroundColor: 'transparent' + backgroundColor wash\\"}\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"numberOfLines attribute\\">\\n          <Text numberOfLines=\{1}>\\n            Maximum of one line no matter now much I write here. If I keep writing it\{\\"'\\"}ll just truncate after one line\\n          </Text>\\n          <Text numberOfLines=\{2} style=\{\{marginTop: 20}}>\\n            Maximum of two lines no matter now much I write here. If I keep writing it\{\\"'\\"}ll just truncate after two lines\\n          </Text>\\n          <Text style=\{\{marginTop: 20}}>\\n            No maximum lines specified no matter now much I write here. If I keep writing it\{\\"'\\"}ll just keep going and going\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"selectable attribute\\">\\n          <Text selectable>\\n            This text is selectable if you click-and-hold, and will offer the native Android selection menus.\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"selectionColor attribute\\">\\n          <Text selectable selectionColor=\\"orange\\">\\n            This text will have a orange highlight on selection.\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Inline images\\">\\n          <Text>\\n            This text contains an inline image <Image source=\{require\('./flux.png')}/>. Neat, huh?\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Text shadow\\">\\n          <Text style=\{\{fontSize: 20, textShadowOffset: \{width: 2, height: 2}, textShadowRadius: 1, textShadowColor: '#00cccc'}}>\\n            Demo text shadow\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Ellipsize mode\\">\\n          <Text numberOfLines=\{1}>\\n            This very long text should be truncated with dots in the end.\\n          </Text>\\n          <Text ellipsizeMode=\\"middle\\" numberOfLines=\{1}>\\n            This very long text should be truncated with dots in the middle.\\n          </Text>\\n          <Text ellipsizeMode=\\"head\\" numberOfLines=\{1}>\\n            This very long text should be truncated with dots in the beginning.\\n          </Text>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Include Font Padding\\">\\n          <View style=\{\{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10}}>\\n            <View style=\{\{alignItems: 'center'}}>\\n              <Text style=\{styles.includeFontPaddingText}>\\n                Ey\\n              </Text>\\n              <Text>Default</Text>\\n            </View>\\n            <View style=\{\{alignItems: 'center'}}>\\n              <Text style=\{[styles.includeFontPaddingText, \{includeFontPadding: false, marginLeft: 10}]}>\\n                Ey\\n              </Text>\\n              <Text>includeFontPadding: false</Text>\\n            </View>\\n          </View>\\n          <Text>By default Android will put extra space above text to allow for upper-case accents or other ascenders. With some fonts, this can make text look slightly misaligned when centered vertically.</Text>\\n        </UIExplorerBlock>\\n      </UIExplorerPage>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  backgroundColorText: \{\\n    left: 5,\\n    backgroundColor: 'rgba(100, 100, 100, 0.3)'\\n  },\\n  includeFontPaddingText: \{\\n    fontSize: 120,\\n    fontFamily: 'sans-serif',\\n    backgroundColor: '#EEEEEE',\\n    color: '#000000',\\n    textAlignVertical: 'center',\\n    alignSelf: 'center',\\n  }\\n});\\n\\nmodule.exports = TextExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"text","title":"Text","layout":"autodocs","category":"components","permalink":"docs/text.html","platform":"cross","next":"textinput","previous":"tabbarios-item","sidebar":true,"runnable":true,"path":"Libraries/Text/Text.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;