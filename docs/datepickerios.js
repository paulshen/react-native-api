/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "Use \`DatePickerIOS\` to render a date/time picker (selector) on iOS.  This is\\na controlled component, so you must hook in to the \`onDateChange\` callback\\nand update the \`date\` prop in order for the component to update, otherwise\\nthe user's change will be reverted immediately to reflect \`props.date\` as the\\nsource of truth.",
  "methods": [],
  "props": \{
    "date": \{
      "type": \{
        "name": "instanceOf",
        "value": "Date"
      },
      "required": true,
      "description": "The currently selected date."
    },
    "onDateChange": \{
      "type": \{
        "name": "func"
      },
      "required": true,
      "description": "Date change handler.\\n\\nThis is called when the user changes the date or time in the UI.\\nThe first and only argument is a Date object representing the new\\ndate and time."
    },
    "maximumDate": \{
      "type": \{
        "name": "instanceOf",
        "value": "Date"
      },
      "required": false,
      "description": "Maximum date.\\n\\nRestricts the range of possible date/time values."
    },
    "minimumDate": \{
      "type": \{
        "name": "instanceOf",
        "value": "Date"
      },
      "required": false,
      "description": "Minimum date.\\n\\nRestricts the range of possible date/time values."
    },
    "mode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'date'",
            "computed": false
          },
          \{
            "value": "'time'",
            "computed": false
          },
          \{
            "value": "'datetime'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "The date picker mode.",
      "defaultValue": \{
        "value": "'datetime'",
        "computed": false
      }
    },
    "minuteInterval": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "1",
            "computed": false
          },
          \{
            "value": "2",
            "computed": false
          },
          \{
            "value": "3",
            "computed": false
          },
          \{
            "value": "4",
            "computed": false
          },
          \{
            "value": "5",
            "computed": false
          },
          \{
            "value": "6",
            "computed": false
          },
          \{
            "value": "10",
            "computed": false
          },
          \{
            "value": "12",
            "computed": false
          },
          \{
            "value": "15",
            "computed": false
          },
          \{
            "value": "20",
            "computed": false
          },
          \{
            "value": "30",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "The interval at which minutes can be selected."
    },
    "timeZoneOffsetInMinutes": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Timezone offset in minutes.\\n\\nBy default, the date picker will use the device's timezone. With this\\nparameter, it is possible to force a certain timezone offset. For\\ninstance, to show times in Pacific Standard Time, pass -7 * 60."
    }
  },
  "composes": [
    "View"
  ],
  "type": "component",
  "filepath": "Libraries/Components/DatePicker/DatePickerIOS.ios.js",
  "componentName": "DatePickerIOS",
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
      "path": "Examples/UIExplorer/js/DatePickerIOSExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule DatePickerIOSExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  DatePickerIOS,\\n  StyleSheet,\\n  Text,\\n  TextInput,\\n  View,\\n} = ReactNative;\\n\\nclass DatePickerExample extends React.Component \{\\n  static defaultProps = \{\\n    date: new Date(),\\n    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,\\n  };\\n\\n  state = \{\\n    date: this.props.date,\\n    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,\\n  };\\n\\n  onDateChange = (date) => \{\\n    this.setState(\{date: date});\\n  };\\n\\n  onTimezoneChange = (event) => \{\\n    var offset = parseInt(event.nativeEvent.text, 10);\\n    if (isNaN(offset)) \{\\n      return;\\n    }\\n    this.setState(\{timeZoneOffsetInHours: offset});\\n  };\\n\\n  render() \{\\n    // Ideally, the timezone input would be a picker rather than a\\n    // text input, but we don't have any pickers yet :(\\n    return (\\n      <View>\\n        <WithLabel label=\\"Value:\\">\\n          <Text>\{\\n            this.state.date.toLocaleDateString() +\\n            ' ' +\\n            this.state.date.toLocaleTimeString()\\n          }</Text>\\n        </WithLabel>\\n        <WithLabel label=\\"Timezone:\\">\\n          <TextInput\\n            onChange=\{this.onTimezoneChange}\\n            style=\{styles.textinput}\\n            value=\{this.state.timeZoneOffsetInHours.toString()}\\n          />\\n          <Text> hours from UTC</Text>\\n        </WithLabel>\\n        <Heading label=\\"Date + time picker\\" />\\n        <DatePickerIOS\\n          date=\{this.state.date}\\n          mode=\\"datetime\\"\\n          timeZoneOffsetInMinutes=\{this.state.timeZoneOffsetInHours * 60}\\n          onDateChange=\{this.onDateChange}\\n        />\\n        <Heading label=\\"Date picker\\" />\\n        <DatePickerIOS\\n          date=\{this.state.date}\\n          mode=\\"date\\"\\n          timeZoneOffsetInMinutes=\{this.state.timeZoneOffsetInHours * 60}\\n          onDateChange=\{this.onDateChange}\\n        />\\n        <Heading label=\\"Time picker, 10-minute interval\\" />\\n        <DatePickerIOS\\n          date=\{this.state.date}\\n          mode=\\"time\\"\\n          timeZoneOffsetInMinutes=\{this.state.timeZoneOffsetInHours * 60}\\n          onDateChange=\{this.onDateChange}\\n          minuteInterval=\{10}\\n        />\\n      </View>\\n    );\\n  }\\n}\\n\\nclass WithLabel extends React.Component \{\\n  render() \{\\n    return (\\n      <View style=\{styles.labelContainer}>\\n        <View style=\{styles.labelView}>\\n          <Text style=\{styles.label}>\\n            \{this.props.label}\\n          </Text>\\n        </View>\\n        \{this.props.children}\\n      </View>\\n    );\\n  }\\n}\\n\\nclass Heading extends React.Component \{\\n  render() \{\\n    return (\\n      <View style=\{styles.headingContainer}>\\n        <Text style=\{styles.heading}>\\n          \{this.props.label}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nexports.displayName = (undefined: ?string);\\nexports.title = '<DatePickerIOS>';\\nexports.description = 'Select dates and times using the native UIDatePicker.';\\nexports.examples = [\\n\{\\n  title: '<DatePickerIOS>',\\n  render: function(): React.Element<any> \{\\n    return <DatePickerExample />;\\n  },\\n}];\\n\\nvar styles = StyleSheet.create(\{\\n  textinput: \{\\n    height: 26,\\n    width: 50,\\n    borderWidth: 0.5,\\n    borderColor: '#0f0f0f',\\n    padding: 4,\\n    fontSize: 13,\\n  },\\n  labelContainer: \{\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    marginVertical: 2,\\n  },\\n  labelView: \{\\n    marginRight: 10,\\n    paddingVertical: 2,\\n  },\\n  label: \{\\n    fontWeight: '500',\\n  },\\n  headingContainer: \{\\n    padding: 4,\\n    backgroundColor: '#f6f7f8',\\n  },\\n  heading: \{\\n    fontWeight: '500',\\n    fontSize: 14,\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"datepickerios","title":"DatePickerIOS","layout":"autodocs","category":"components","permalink":"docs/datepickerios.html","platform":"ios","next":"drawerlayoutandroid","previous":"button","sidebar":true,"runnable":true,"path":"Libraries/Components/DatePicker/DatePickerIOS.ios.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;