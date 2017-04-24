/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A component used to select a single value from a range of values.",
  "methods": [],
  "props": \{
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "Used to style and layout the \`Slider\`.  See \`StyleSheet.js\` and\\n\`ViewStylePropTypes.js\` for more info."
    },
    "value": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Initial value of the slider. The value should be between minimumValue\\nand maximumValue, which default to 0 and 1 respectively.\\nDefault value is 0.\\n\\n*This is not a controlled component*, you don't need to update the\\nvalue during dragging.",
      "defaultValue": \{
        "value": "0",
        "computed": false
      }
    },
    "step": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Step value of the slider. The value should be\\nbetween 0 and (maximumValue - minimumValue).\\nDefault value is 0.",
      "defaultValue": \{
        "value": "0",
        "computed": false
      }
    },
    "minimumValue": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Initial minimum value of the slider. Default value is 0.",
      "defaultValue": \{
        "value": "0",
        "computed": false
      }
    },
    "maximumValue": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Initial maximum value of the slider. Default value is 1.",
      "defaultValue": \{
        "value": "1",
        "computed": false
      }
    },
    "minimumTrackTintColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The color used for the track to the left of the button.\\nOverrides the default blue gradient image on iOS."
    },
    "maximumTrackTintColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The color used for the track to the right of the button.\\nOverrides the default blue gradient image on iOS."
    },
    "disabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true the user won't be able to move the slider.\\nDefault value is false.",
      "defaultValue": \{
        "value": "false",
        "computed": false
      }
    },
    "trackImage": \{
      "type": \{
        "name": "custom",
        "raw": "Image.propTypes.source"
      },
      "required": false,
      "description": "Assigns a single image for the track. Only static images are supported.\\nThe center pixel of the image will be stretched to fill the track.\\n@platform ios"
    },
    "minimumTrackImage": \{
      "type": \{
        "name": "custom",
        "raw": "Image.propTypes.source"
      },
      "required": false,
      "description": "Assigns a minimum track image. Only static images are supported. The\\nrightmost pixel of the image will be stretched to fill the track.\\n@platform ios"
    },
    "maximumTrackImage": \{
      "type": \{
        "name": "custom",
        "raw": "Image.propTypes.source"
      },
      "required": false,
      "description": "Assigns a maximum track image. Only static images are supported. The\\nleftmost pixel of the image will be stretched to fill the track.\\n@platform ios"
    },
    "thumbImage": \{
      "type": \{
        "name": "custom",
        "raw": "Image.propTypes.source"
      },
      "required": false,
      "description": "Sets an image for the thumb. Only static images are supported.\\n@platform ios"
    },
    "thumbTintColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "Color of the foreground switch grip.\\n@platform android"
    },
    "onValueChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback continuously called while the user is dragging the slider."
    },
    "onSlidingComplete": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback called when the user finishes changing the value (e.g. when\\nthe slider is released)."
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view in UI automation tests."
    }
  },
  "composes": [
    "View"
  ],
  "type": "component",
  "filepath": "Libraries/Components/Slider/Slider.js",
  "componentName": "Slider",
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
      "path": "Examples/UIExplorer/js/SliderExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule SliderExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Slider,\\n  Text,\\n  StyleSheet,\\n  View,\\n} = ReactNative;\\n\\nclass SliderExample extends React.Component \{\\n  static defaultProps = \{\\n    value: 0,\\n  };\\n\\n  state = \{\\n    value: this.props.value,\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text style=\{styles.text} >\\n          \{this.state.value && +this.state.value.toFixed(3)}\\n        </Text>\\n        <Slider\\n          \{...this.props}\\n          onValueChange=\{(value) => this.setState(\{value: value})} />\\n      </View>\\n    );\\n  }\\n}\\n\\nclass SlidingCompleteExample extends React.Component \{\\n  state = \{\\n    slideCompletionValue: 0,\\n    slideCompletionCount: 0,\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <SliderExample\\n          \{...this.props}\\n          onSlidingComplete=\{(value) => this.setState(\{\\n              slideCompletionValue: value,\\n              slideCompletionCount: this.state.slideCompletionCount + 1})} />\\n        <Text>\\n          Completions: \{this.state.slideCompletionCount} Value: \{this.state.slideCompletionValue}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  slider: \{\\n    height: 10,\\n    margin: 10,\\n  },\\n  text: \{\\n    fontSize: 14,\\n    textAlign: 'center',\\n    fontWeight: '500',\\n    margin: 10,\\n  },\\n});\\n\\nexports.title = '<Slider>';\\nexports.displayName = 'SliderExample';\\nexports.description = 'Slider input for numeric values';\\nexports.examples = [\\n  \{\\n    title: 'Default settings',\\n    render(): React.Element<any> \{\\n      return <SliderExample />;\\n    }\\n  },\\n  \{\\n    title: 'Initial value: 0.5',\\n    render(): React.Element<any> \{\\n      return <SliderExample value=\{0.5} />;\\n    }\\n  },\\n  \{\\n    title: 'minimumValue: -1, maximumValue: 2',\\n    render(): React.Element<any> \{\\n      return (\\n        <SliderExample\\n          minimumValue=\{-1}\\n          maximumValue=\{2}\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'step: 0.25',\\n    render(): React.Element<any> \{\\n      return <SliderExample step=\{0.25} />;\\n    }\\n  },\\n  \{\\n    title: 'onSlidingComplete',\\n    render(): React.Element<any> \{\\n      return (\\n        <SlidingCompleteExample />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Custom min/max track tint color',\\n    render(): React.Element<any> \{\\n      return (\\n        <SliderExample\\n          minimumTrackTintColor=\{'blue'}\\n          maximumTrackTintColor=\{'red'}\\n          value=\{0.5}\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Custom thumb color',\\n    platform: 'android',\\n    render(): React.Element<any> \{\\n      return <SliderExample thumbTintColor=\{'blue'} />;\\n    }\\n  },\\n  \{\\n    title: 'Custom thumb image',\\n    platform: 'ios',\\n    render(): React.Element<any> \{\\n      return <SliderExample thumbImage=\{require\('./uie_thumb_big.png')} />;\\n    }\\n  },\\n  \{\\n    title: 'Custom track image',\\n    platform: 'ios',\\n    render(): React.Element<any> \{\\n      return <SliderExample trackImage=\{require\('./slider.png')} />;\\n    }\\n  },\\n  \{\\n    title: 'Custom min/max track image',\\n    platform: 'ios',\\n    render(): React.Element<any> \{\\n      return (\\n        <SliderExample\\n          minimumTrackImage=\{require\('./slider-left.png')}\\n          maximumTrackImage=\{require\('./slider-right.png')}\\n        />\\n      );\\n    }\\n  },\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"slider","title":"Slider","layout":"autodocs","category":"components","permalink":"docs/slider.html","platform":"cross","next":"snapshotviewios","previous":"segmentedcontrolios","sidebar":true,"runnable":true,"path":"Libraries/Components/Slider/Slider.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;