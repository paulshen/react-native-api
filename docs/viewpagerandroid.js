/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "Container that allows to flip left and right between child views. Each\\nchild view of the \`ViewPagerAndroid\` will be treated as a separate page\\nand will be stretched to fill the \`ViewPagerAndroid\`.\\n\\nIt is important all children are \`<View>\`s and not composite components.\\nYou can set style properties like \`padding\` or \`backgroundColor\` for each\\nchild.\\n\\nExample:\\n\\n\`\`\`\\nrender: function() \{\\n  return (\\n    <ViewPagerAndroid\\n      style=\{styles.viewPager}\\n      initialPage=\{0}>\\n      <View style=\{styles.pageStyle}>\\n        <Text>First page</Text>\\n      </View>\\n      <View style=\{styles.pageStyle}>\\n        <Text>Second page</Text>\\n      </View>\\n    </ViewPagerAndroid>\\n  );\\n}\\n\\n...\\n\\nvar styles = \{\\n  ...\\n  pageStyle: \{\\n    alignItems: 'center',\\n    padding: 20,\\n  }\\n}\\n\`\`\`",
  "methods": [],
  "props": \{
    "initialPage": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Index of initial page that should be selected. Use \`setPage\` method to\\nupdate the page, and \`onPageSelected\` to monitor page changes",
      "flowType": \{
        "name": "number"
      }
    },
    "onPageScroll": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Executed when transitioning between pages (ether because of animation for\\nthe requested page change or when user is swiping/dragging between pages)\\nThe \`event.nativeEvent\` object for this callback will carry following data:\\n - position - index of first page from the left that is currently visible\\n - offset - value from range [0,1) describing stage between page transitions.\\n   Value x means that (1 - x) fraction of the page at \\"position\\" index is\\n   visible, and x fraction of the next page is visible.",
      "flowType": \{
        "name": "Function"
      }
    },
    "onPageScrollStateChanged": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Function called when the page scrolling state has changed.\\nThe page scrolling state can be in 3 states:\\n- idle, meaning there is no interaction with the page scroller happening at the time\\n- dragging, meaning there is currently an interaction with the page scroller\\n- settling, meaning that there was an interaction with the page scroller, and the\\n  page scroller is now finishing it's closing or opening animation",
      "flowType": \{
        "name": "Function"
      }
    },
    "onPageSelected": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "This callback will be called once ViewPager finish navigating to selected page\\n(when user swipes between pages). The \`event.nativeEvent\` object passed to this\\ncallback will have following fields:\\n - position - index of page that has been selected",
      "flowType": \{
        "name": "Function"
      }
    },
    "pageMargin": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Blank space to show between pages. This is only visible while scrolling, pages are still\\nedge-to-edge.",
      "flowType": \{
        "name": "number"
      }
    },
    "keyboardDismissMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "\\"none\\"",
            "computed": false
          },
          \{
            "value": "'on-drag'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines whether the keyboard gets dismissed in response to a drag.\\n  - 'none' (the default), drags do not dismiss the keyboard.\\n  - 'on-drag', the keyboard is dismissed when a drag begins.",
      "flowType": \{
        "name": "union",
        "raw": "'none' | 'on-drag'",
        "elements": [
          \{
            "name": "literal",
            "value": "'none'"
          },
          \{
            "name": "literal",
            "value": "'on-drag'"
          }
        ]
      }
    },
    "scrollEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When false, the content does not scroll.\\nThe default value is true.",
      "flowType": \{
        "name": "boolean"
      }
    }
  },
  "composes": [
    "View"
  ],
  "typedef": [
    \{
      "name": "ViewPagerScrollState",
      "description": null,
      "type": \{
        "names": [
          "$Enum"
        ]
      },
      "values": [
        \{
          "type": \{
            "names": [
              "string"
            ]
          },
          "description": null,
          "name": "idle"
        },
        \{
          "type": \{
            "names": [
              "string"
            ]
          },
          "description": null,
          "name": "dragging"
        },
        \{
          "type": \{
            "names": [
              "string"
            ]
          },
          "description": null,
          "name": "settling"
        }
      ]
    }
  ],
  "type": "component",
  "filepath": "Libraries/Components/ViewPager/ViewPagerAndroid.android.js",
  "componentName": "ViewPagerAndroid",
  "componentPlatform": "android",
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
      "path": "Examples/UIExplorer/js/ViewPagerAndroidExample.android.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @providesModule ViewPagerAndroidExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Image,\\n  StyleSheet,\\n  Text,\\n  TouchableWithoutFeedback,\\n  TouchableOpacity,\\n  View,\\n  ViewPagerAndroid,\\n} = ReactNative;\\n\\nimport type \{ ViewPagerScrollState } from 'ViewPagerAndroid';\\n\\nvar PAGES = 5;\\nvar BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];\\nvar IMAGE_URIS = [\\n  'https://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',\\n  'https://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',\\n  'https://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',\\n  'https://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',\\n  'https://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',\\n];\\n\\nclass LikeCount extends React.Component \{\\n  state = \{\\n    likes: 7,\\n  };\\n\\n  onClick = () => \{\\n    this.setState(\{likes: this.state.likes + 1});\\n  };\\n\\n  render() \{\\n    var thumbsUp = '\\\\uD83D\\\\uDC4D';\\n    return (\\n      <View style=\{styles.likeContainer}>\\n        <TouchableOpacity onPress=\{this.onClick} style=\{styles.likeButton}>\\n          <Text style=\{styles.likesText}>\\n            \{thumbsUp + ' Like'}\\n          </Text>\\n        </TouchableOpacity>\\n        <Text style=\{styles.likesText}>\\n          \{this.state.likes + ' likes'}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass Button extends React.Component \{\\n  _handlePress = () => \{\\n    if (this.props.enabled && this.props.onPress) \{\\n      this.props.onPress();\\n    }\\n  };\\n\\n  render() \{\\n    return (\\n      <TouchableWithoutFeedback onPress=\{this._handlePress}>\\n        <View style=\{[styles.button, this.props.enabled ? \{} : styles.buttonDisabled]}>\\n          <Text style=\{styles.buttonText}>\{this.props.text}</Text>\\n        </View>\\n      </TouchableWithoutFeedback>\\n    );\\n  }\\n}\\n\\nclass ProgressBar extends React.Component \{\\n  render() \{\\n    var fractionalPosition = (this.props.progress.position + this.props.progress.offset);\\n    var progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;\\n    return (\\n      <View style=\{[styles.progressBarContainer, \{width: this.props.size}]}>\\n        <View style=\{[styles.progressBar, \{width: progressBarSize}]}/>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass ViewPagerAndroidExample extends React.Component \{\\n  static title = '<ViewPagerAndroid>';\\n  static description = 'Container that allows to flip left and right between child views.';\\n\\n  state = \{\\n    page: 0,\\n    animationsAreEnabled: true,\\n    scrollEnabled: true,\\n    progress: \{\\n      position: 0,\\n      offset: 0,\\n    },\\n  };\\n\\n  onPageSelected = (e) => \{\\n    this.setState(\{page: e.nativeEvent.position});\\n  };\\n\\n  onPageScroll = (e) => \{\\n    this.setState(\{progress: e.nativeEvent});\\n  };\\n\\n  onPageScrollStateChanged = (state : ViewPagerScrollState) => \{\\n    this.setState(\{scrollState: state});\\n  };\\n\\n  move = (delta) => \{\\n    var page = this.state.page + delta;\\n    this.go(page);\\n  };\\n\\n  go = (page) => \{\\n    if (this.state.animationsAreEnabled) \{\\n      this.viewPager.setPage(page);\\n    } else \{\\n      this.viewPager.setPageWithoutAnimation(page);\\n    }\\n\\n    this.setState(\{page});\\n  };\\n\\n  render() \{\\n    var pages = [];\\n    for (var i = 0; i < PAGES; i++) \{\\n      var pageStyle = \{\\n        backgroundColor: BGCOLOR[i % BGCOLOR.length],\\n        alignItems: 'center',\\n        padding: 20,\\n      };\\n      pages.push(\\n        <View key=\{i} style=\{pageStyle} collapsable=\{false}>\\n          <Image\\n            style=\{styles.image}\\n            source=\{\{uri: IMAGE_URIS[i % BGCOLOR.length]}}\\n          />\\n          <LikeCount />\\n       </View>\\n      );\\n    }\\n    var \{ page, animationsAreEnabled } = this.state;\\n    return (\\n      <View style=\{styles.container}>\\n        <ViewPagerAndroid\\n          style=\{styles.viewPager}\\n          initialPage=\{0}\\n          scrollEnabled=\{this.state.scrollEnabled}\\n          onPageScroll=\{this.onPageScroll}\\n          onPageSelected=\{this.onPageSelected}\\n          onPageScrollStateChanged=\{this.onPageScrollStateChanged}\\n          pageMargin=\{10}\\n          ref=\{viewPager => \{ this.viewPager = viewPager; }}>\\n          \{pages}\\n        </ViewPagerAndroid>\\n        <View style=\{styles.buttons}>\\n          <Button\\n            enabled=\{true}\\n            text=\{this.state.scrollEnabled ? 'Scroll Enabled' : 'Scroll Disabled'}\\n            onPress=\{() => this.setState(\{scrollEnabled: !this.state.scrollEnabled})}\\n          />\\n        </View>\\n        <View style=\{styles.buttons}>\\n          \{ animationsAreEnabled ?\\n            <Button\\n              text=\\"Turn off animations\\"\\n              enabled=\{true}\\n              onPress=\{() => this.setState(\{animationsAreEnabled: false})}\\n            /> :\\n            <Button\\n              text=\\"Turn animations back on\\"\\n              enabled=\{true}\\n              onPress=\{() => this.setState(\{animationsAreEnabled: true})}\\n            /> }\\n          <Text style=\{styles.scrollStateText}>ScrollState[ \{this.state.scrollState} ]</Text>\\n        </View>\\n        <View style=\{styles.buttons}>\\n          <Button text=\\"Start\\" enabled=\{page > 0} onPress=\{() => this.go(0)}/>\\n          <Button text=\\"Prev\\" enabled=\{page > 0} onPress=\{() => this.move(-1)}/>\\n          <Text style=\{styles.buttonText}>Page \{page + 1} / \{PAGES}</Text>\\n          <ProgressBar size=\{100} progress=\{this.state.progress}/>\\n          <Button text=\\"Next\\" enabled=\{page < PAGES - 1} onPress=\{() => this.move(1)}/>\\n          <Button text=\\"Last\\" enabled=\{page < PAGES - 1} onPress=\{() => this.go(PAGES - 1)}/>\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  buttons: \{\\n    flexDirection: 'row',\\n    height: 30,\\n    backgroundColor: 'black',\\n    alignItems: 'center',\\n    justifyContent: 'space-between',\\n  },\\n  button: \{\\n    flex: 1,\\n    width: 0,\\n    margin: 5,\\n    borderColor: 'gray',\\n    borderWidth: 1,\\n    backgroundColor: 'gray',\\n  },\\n  buttonDisabled: \{\\n    backgroundColor: 'black',\\n    opacity: 0.5,\\n  },\\n  buttonText: \{\\n    color: 'white',\\n  },\\n  scrollStateText: \{\\n    color: '#99d1b7',\\n  },\\n  container: \{\\n    flex: 1,\\n    backgroundColor: 'white',\\n  },\\n  image: \{\\n    width: 300,\\n    height: 200,\\n    padding: 20,\\n  },\\n  likeButton: \{\\n    backgroundColor: 'rgba(0, 0, 0, 0.1)',\\n    borderColor: '#333333',\\n    borderWidth: 1,\\n    borderRadius: 5,\\n    flex: 1,\\n    margin: 8,\\n    padding: 8,\\n  },\\n  likeContainer: \{\\n    flexDirection: 'row',\\n  },\\n  likesText: \{\\n    flex: 1,\\n    fontSize: 18,\\n    alignSelf: 'center',\\n  },\\n  progressBarContainer: \{\\n    height: 10,\\n    margin: 10,\\n    borderColor: '#eeeeee',\\n    borderWidth: 2,\\n  },\\n  progressBar: \{\\n    alignSelf: 'flex-start',\\n    flex: 1,\\n    backgroundColor: '#eeeeee',\\n  },\\n  viewPager: \{\\n    flex: 1,\\n  },\\n});\\n\\nmodule.exports = ViewPagerAndroidExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"viewpagerandroid","title":"ViewPagerAndroid","layout":"autodocs","category":"components","permalink":"docs/viewpagerandroid.html","platform":"android","next":"virtualizedlist","previous":"view","sidebar":true,"runnable":true,"path":"Libraries/Components/ViewPager/ViewPagerAndroid.android.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;