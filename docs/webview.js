/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "\`WebView\` renders web content in a native view.\\n\\n\`\`\`\\nimport React, \{ Component } from 'react';\\nimport \{ WebView } from 'react-native';\\n\\nclass MyWeb extends Component \{\\n  render() \{\\n    return (\\n      <WebView\\n        source=\{\{uri: 'https://github.com/facebook/react-native'}}\\n        style=\{\{marginTop: 20}}\\n      />\\n    );\\n  }\\n}\\n\`\`\`\\n\\nYou can use this component to navigate back and forth in the web view's\\nhistory and configure various properties for the web content.",
  "methods": [],
  "props": \{
    "html": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "",
      "deprecationMessage": "Use the \`source\` prop instead."
    },
    "url": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "",
      "deprecationMessage": "Use the \`source\` prop instead."
    },
    "source": \{
      "type": \{
        "name": "union",
        "value": [
          \{
            "name": "shape",
            "value": \{
              "uri": \{
                "name": "string",
                "required": false
              },
              "method": \{
                "name": "string",
                "required": false
              },
              "headers": \{
                "name": "object",
                "required": false
              },
              "body": \{
                "name": "string",
                "required": false
              }
            }
          },
          \{
            "name": "shape",
            "value": \{
              "html": \{
                "name": "string",
                "required": false
              },
              "baseUrl": \{
                "name": "string",
                "required": false
              }
            }
          },
          \{
            "name": "number"
          }
        ]
      },
      "required": false,
      "description": "Loads static html or a uri (with optional headers) in the WebView."
    },
    "renderError": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that returns a view to show if there's an error."
    },
    "renderLoading": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that returns a loading indicator."
    },
    "onLoad": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that is invoked when the \`WebView\` has finished loading."
    },
    "onLoadEnd": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that is invoked when the \`WebView\` load succeeds or fails."
    },
    "onLoadStart": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that is invoked when the \`WebView\` starts loading."
    },
    "onError": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that is invoked when the \`WebView\` load fails."
    },
    "bounces": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean value that determines whether the web view bounces\\nwhen it reaches the edge of the content. The default value is \`true\`.\\n@platform ios"
    },
    "decelerationRate": \{
      "type": \{
        "name": "custom",
        "raw": "ScrollView.propTypes.decelerationRate"
      },
      "required": false,
      "description": "A floating-point number that determines how quickly the scroll view\\ndecelerates after the user lifts their finger. You may also use the\\nstring shortcuts \`\\"normal\\"\` and \`\\"fast\\"\` which match the underlying iOS\\nsettings for \`UIScrollViewDecelerationRateNormal\` and\\n\`UIScrollViewDecelerationRateFast\` respectively:\\n\\n  - normal: 0.998\\n  - fast: 0.99 (the default for iOS web view)\\n@platform ios"
    },
    "scrollEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean value that determines whether scrolling is enabled in the\\n\`WebView\`. The default value is \`true\`.\\n@platform ios"
    },
    "automaticallyAdjustContentInsets": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Controls whether to adjust the content inset for web views that are\\nplaced behind a navigation bar, tab bar, or toolbar. The default value\\nis \`true\`."
    },
    "contentInset": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": "The amount by which the web view content is inset from the edges of\\nthe scroll view. Defaults to \{top: 0, left: 0, bottom: 0, right: 0}."
    },
    "onNavigationStateChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that is invoked when the \`WebView\` loading starts or ends."
    },
    "onMessage": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "A function that is invoked when the webview calls \`window.postMessage\`.\\nSetting this property will inject a \`postMessage\` global into your\\nwebview, but will still call pre-existing values of \`postMessage\`.\\n\\n\`window.postMessage\` accepts one argument, \`data\`, which will be\\navailable on the event object, \`event.nativeEvent.data\`. \`data\`\\nmust be a string."
    },
    "startInLoadingState": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean value that forces the \`WebView\` to show the loading view\\non the first load."
    },
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "The style to apply to the \`WebView\`."
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
      "description": "Determines the types of data converted to clickable URLs in the web view’s content.\\nBy default only phone numbers are detected.\\n\\nYou can provide one type or an array of many types.\\n\\nPossible values for \`dataDetectorTypes\` are:\\n\\n- \`'phoneNumber'\`\\n- \`'link'\`\\n- \`'address'\`\\n- \`'calendarEvent'\`\\n- \`'none'\`\\n- \`'all'\`\\n\\n@platform ios"
    },
    "javaScriptEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean value to enable JavaScript in the \`WebView\`. Used on Android only\\nas JavaScript is enabled by default on iOS. The default value is \`true\`.\\n@platform android"
    },
    "domStorageEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean value to control whether DOM Storage is enabled. Used only in\\nAndroid.\\n@platform android"
    },
    "injectedJavaScript": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Set this to provide JavaScript that will be injected into the web page\\nwhen the view loads."
    },
    "userAgent": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Sets the user-agent for the \`WebView\`.\\n@platform android"
    },
    "scalesPageToFit": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean that controls whether the web content is scaled to fit\\nthe view and enables the user to change the scale. The default value\\nis \`true\`."
    },
    "onShouldStartLoadWithRequest": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function that allows custom handling of any web view requests. Return\\n\`true\` from the function to continue loading the request and \`false\`\\nto stop loading.\\n@platform ios"
    },
    "allowsInlineMediaPlayback": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean that determines whether HTML5 videos play inline or use the\\nnative full-screen controller. The default value is \`false\`.\\n\\n**NOTE** : In order for video to play inline, not only does this\\nproperty need to be set to \`true\`, but the video element in the HTML\\ndocument must also include the \`webkit-playsinline\` attribute.\\n@platform ios"
    },
    "mediaPlaybackRequiresUserAction": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Boolean that determines whether HTML5 audio and video requires the user\\nto tap them before they start playing. The default value is \`true\`."
    }
  },
  "composes": [
    "View"
  ],
  "type": "component",
  "filepath": "Libraries/Components/WebView/WebView.ios.js",
  "componentName": "WebView",
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
      "path": "Examples/UIExplorer/js/WebViewExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule WebViewExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  Text,\\n  TextInput,\\n  TouchableWithoutFeedback,\\n  TouchableOpacity,\\n  View,\\n  WebView\\n} = ReactNative;\\n\\nvar HEADER = '#3b5998';\\nvar BGWASH = 'rgba(255,255,255,0.8)';\\nvar DISABLED_WASH = 'rgba(255,255,255,0.25)';\\n\\nvar TEXT_INPUT_REF = 'urlInput';\\nvar WEBVIEW_REF = 'webview';\\nvar DEFAULT_URL = 'https://m.facebook.com';\\n\\nclass WebViewExample extends React.Component \{\\n  state = \{\\n    url: DEFAULT_URL,\\n    status: 'No Page Loaded',\\n    backButtonEnabled: false,\\n    forwardButtonEnabled: false,\\n    loading: true,\\n    scalesPageToFit: true,\\n  };\\n\\n  inputText = '';\\n\\n  handleTextInputChange = (event) => \{\\n    var url = event.nativeEvent.text;\\n    if (!/^[a-zA-Z-_]+:/.test(url)) \{\\n      url = 'http://' + url;\\n    }\\n    this.inputText = url;\\n  };\\n\\n  render() \{\\n    this.inputText = this.state.url;\\n\\n    return (\\n      <View style=\{[styles.container]}>\\n        <View style=\{[styles.addressBarRow]}>\\n          <TouchableOpacity\\n            onPress=\{this.goBack}\\n            style=\{this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}>\\n            <Text>\\n               \{'<'}\\n            </Text>\\n          </TouchableOpacity>\\n          <TouchableOpacity\\n            onPress=\{this.goForward}\\n            style=\{this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}>\\n            <Text>\\n              \{'>'}\\n            </Text>\\n          </TouchableOpacity>\\n          <TextInput\\n            ref=\{TEXT_INPUT_REF}\\n            autoCapitalize=\\"none\\"\\n            defaultValue=\{this.state.url}\\n            onSubmitEditing=\{this.onSubmitEditing}\\n            onChange=\{this.handleTextInputChange}\\n            clearButtonMode=\\"while-editing\\"\\n            style=\{styles.addressBarTextInput}\\n          />\\n          <TouchableOpacity onPress=\{this.pressGoButton}>\\n            <View style=\{styles.goButton}>\\n              <Text>\\n                 Go!\\n              </Text>\\n            </View>\\n          </TouchableOpacity>\\n        </View>\\n        <WebView\\n          ref=\{WEBVIEW_REF}\\n          automaticallyAdjustContentInsets=\{false}\\n          style=\{styles.webView}\\n          source=\{\{uri: this.state.url}}\\n          javaScriptEnabled=\{true}\\n          domStorageEnabled=\{true}\\n          decelerationRate=\\"normal\\"\\n          onNavigationStateChange=\{this.onNavigationStateChange}\\n          onShouldStartLoadWithRequest=\{this.onShouldStartLoadWithRequest}\\n          startInLoadingState=\{true}\\n          scalesPageToFit=\{this.state.scalesPageToFit}\\n        />\\n        <View style=\{styles.statusBar}>\\n          <Text style=\{styles.statusBarText}>\{this.state.status}</Text>\\n        </View>\\n      </View>\\n    );\\n  }\\n\\n  goBack = () => \{\\n    this.refs[WEBVIEW_REF].goBack();\\n  };\\n\\n  goForward = () => \{\\n    this.refs[WEBVIEW_REF].goForward();\\n  };\\n\\n  reload = () => \{\\n    this.refs[WEBVIEW_REF].reload();\\n  };\\n\\n  onShouldStartLoadWithRequest = (event) => \{\\n    // Implement any custom loading logic here, don't forget to return!\\n    return true;\\n  };\\n\\n  onNavigationStateChange = (navState) => \{\\n    this.setState(\{\\n      backButtonEnabled: navState.canGoBack,\\n      forwardButtonEnabled: navState.canGoForward,\\n      url: navState.url,\\n      status: navState.title,\\n      loading: navState.loading,\\n      scalesPageToFit: true\\n    });\\n  };\\n\\n  onSubmitEditing = (event) => \{\\n    this.pressGoButton();\\n  };\\n\\n  pressGoButton = () => \{\\n    var url = this.inputText.toLowerCase();\\n    if (url === this.state.url) \{\\n      this.reload();\\n    } else \{\\n      this.setState(\{\\n        url: url,\\n      });\\n    }\\n    // dismiss keyboard\\n    this.refs[TEXT_INPUT_REF].blur();\\n  };\\n}\\n\\nclass Button extends React.Component \{\\n  _handlePress = () => \{\\n    if (this.props.enabled !== false && this.props.onPress) \{\\n      this.props.onPress();\\n    }\\n  };\\n\\n  render() \{\\n    return (\\n      <TouchableWithoutFeedback onPress=\{this._handlePress}>\\n        <View style=\{styles.button}>\\n          <Text>\{this.props.text}</Text>\\n        </View>\\n      </TouchableWithoutFeedback>\\n    );\\n  }\\n}\\n\\nclass ScaledWebView extends React.Component \{\\n  state = \{\\n    scalingEnabled: true,\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <WebView\\n          style=\{\{\\n            backgroundColor: BGWASH,\\n            height: 200,\\n          }}\\n          source=\{\{uri: 'https://facebook.github.io/react/'}}\\n          scalesPageToFit=\{this.state.scalingEnabled}\\n        />\\n        <View style=\{styles.buttons}>\\n        \{ this.state.scalingEnabled ?\\n          <Button\\n            text=\\"Scaling:ON\\"\\n            enabled=\{true}\\n            onPress=\{() => this.setState(\{scalingEnabled: false})}\\n          /> :\\n          <Button\\n            text=\\"Scaling:OFF\\"\\n            enabled=\{true}\\n            onPress=\{() => this.setState(\{scalingEnabled: true})}\\n          /> }\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass MessagingTest extends React.Component \{\\n  webview = null\\n\\n  state = \{\\n    messagesReceivedFromWebView: 0,\\n    message: '',\\n  }\\n\\n  onMessage = e => this.setState(\{\\n    messagesReceivedFromWebView: this.state.messagesReceivedFromWebView + 1,\\n    message: e.nativeEvent.data,\\n  })\\n\\n  postMessage = () => \{\\n    if (this.webview) \{\\n      this.webview.postMessage('\\"Hello\\" from React Native!');\\n    }\\n  }\\n\\n  render(): ReactElement<any> \{\\n    const \{messagesReceivedFromWebView, message} = this.state;\\n\\n    return (\\n      <View style=\{[styles.container, \{ height: 200 }]}>\\n        <View style=\{styles.container}>\\n          <Text>Messages received from web view: \{messagesReceivedFromWebView}</Text>\\n          <Text>\{message || '(No message)'}</Text>\\n          <View style=\{styles.buttons}>\\n            <Button text=\\"Send Message to Web View\\" enabled onPress=\{this.postMessage} />\\n          </View>\\n        </View>\\n        <View style=\{styles.container}>\\n          <WebView\\n            ref=\{webview => \{ this.webview = webview; }}\\n            style=\{\{\\n              backgroundColor: BGWASH,\\n              height: 100,\\n            }}\\n            source=\{require\('./messagingtest.html')}\\n            onMessage=\{this.onMessage}\\n          />\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass InjectJS extends React.Component \{\\n  webview = null;\\n  injectJS = () => \{\\n    const script = 'document.write(\\"Injected JS \\")';  // eslint-disable-line quotes\\n    if (this.webview) \{\\n      this.webview.injectJavaScript(script);\\n    }\\n  }\\n  render() \{\\n    return (\\n      <View>\\n        <WebView\\n          ref=\{webview => \{ this.webview = webview; }}\\n          style=\{\{\\n            backgroundColor: BGWASH,\\n            height: 300,\\n          }}\\n          source=\{\{uri: 'https://www.facebook.com'}}\\n          scalesPageToFit=\{true}\\n        />\\n        <View style=\{styles.buttons}>\\n          <Button text=\\"Inject JS\\" enabled onPress=\{this.injectJS} />\\n        </View>\\n    </View>\\n    );\\n  }\\n}\\n\\n\\nvar styles = StyleSheet.create(\{\\n  container: \{\\n    flex: 1,\\n    backgroundColor: HEADER,\\n  },\\n  addressBarRow: \{\\n    flexDirection: 'row',\\n    padding: 8,\\n  },\\n  webView: \{\\n    backgroundColor: BGWASH,\\n    height: 350,\\n  },\\n  addressBarTextInput: \{\\n    backgroundColor: BGWASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n    borderWidth: 1,\\n    height: 24,\\n    paddingLeft: 10,\\n    paddingTop: 3,\\n    paddingBottom: 3,\\n    flex: 1,\\n    fontSize: 14,\\n  },\\n  navButton: \{\\n    width: 20,\\n    padding: 3,\\n    marginRight: 3,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    backgroundColor: BGWASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n  },\\n  disabledButton: \{\\n    width: 20,\\n    padding: 3,\\n    marginRight: 3,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    backgroundColor: DISABLED_WASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n  },\\n  goButton: \{\\n    height: 24,\\n    padding: 3,\\n    marginLeft: 8,\\n    alignItems: 'center',\\n    backgroundColor: BGWASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n    alignSelf: 'stretch',\\n  },\\n  statusBar: \{\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    paddingLeft: 5,\\n    height: 22,\\n  },\\n  statusBarText: \{\\n    color: 'white',\\n    fontSize: 13,\\n  },\\n  spinner: \{\\n    width: 20,\\n    marginRight: 6,\\n  },\\n  buttons: \{\\n    flexDirection: 'row',\\n    height: 30,\\n    backgroundColor: 'black',\\n    alignItems: 'center',\\n    justifyContent: 'space-between',\\n  },\\n  button: \{\\n    flex: 0.5,\\n    width: 0,\\n    margin: 5,\\n    borderColor: 'gray',\\n    borderWidth: 1,\\n    backgroundColor: 'gray',\\n  },\\n});\\n\\nconst HTML = \`\\n<!DOCTYPE html>\\\\n\\n<html>\\n  <head>\\n    <title>Hello Static World</title>\\n    <meta http-equiv=\\"content-type\\" content=\\"text/html; charset=utf-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=320, user-scalable=no\\">\\n    <style type=\\"text/css\\">\\n      body \{\\n        margin: 0;\\n        padding: 0;\\n        font: 62.5% arial, sans-serif;\\n        background: #ccc;\\n      }\\n      h1 \{\\n        padding: 45px;\\n        margin: 0;\\n        text-align: center;\\n        color: #33f;\\n      }\\n    </style>\\n  </head>\\n  <body>\\n    <h1>Hello Static World</h1>\\n  </body>\\n</html>\\n\`;\\n\\nexports.displayName = (undefined: ?string);\\nexports.title = '<WebView>';\\nexports.description = 'Base component to display web content';\\nexports.examples = [\\n  \{\\n    title: 'Simple Browser',\\n    render(): React.Element<any> \{ return <WebViewExample />; }\\n  },\\n  \{\\n    title: 'Scale Page to Fit',\\n    render(): React.Element<any> \{ return <ScaledWebView/>; }\\n  },\\n  \{\\n    title: 'Bundled HTML',\\n    render(): React.Element<any> \{\\n      return (\\n        <WebView\\n          style=\{\{\\n            backgroundColor: BGWASH,\\n            height: 100,\\n          }}\\n          source=\{require\('./helloworld.html')}\\n          scalesPageToFit=\{true}\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Static HTML',\\n    render(): React.Element<any> \{\\n      return (\\n        <WebView\\n          style=\{\{\\n            backgroundColor: BGWASH,\\n            height: 100,\\n          }}\\n          source=\{\{html: HTML}}\\n          scalesPageToFit=\{true}\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'POST Test',\\n    render(): React.Element<any> \{\\n      return (\\n        <WebView\\n          style=\{\{\\n            backgroundColor: BGWASH,\\n            height: 100,\\n          }}\\n          source=\{\{\\n            uri: 'http://www.posttestserver.com/post.php',\\n            method: 'POST',\\n            body: 'foo=bar&bar=foo'\\n          }}\\n          scalesPageToFit=\{false}\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Messaging Test',\\n    render(): ReactElement<any> \{ return <MessagingTest />; }\\n  },\\n  \{\\n    title: 'Inject JavaScript',\\n    render(): React.Element<any> \{ return <InjectJS />; }\\n  },\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"webview","title":"WebView","layout":"autodocs","category":"components","permalink":"docs/webview.html","platform":"cross","next":"accessibilityinfo","previous":"virtualizedlist","sidebar":true,"runnable":true,"path":"Libraries/Components/WebView/WebView.ios.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;