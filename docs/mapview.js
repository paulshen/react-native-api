/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "**IMPORTANT: This component is now DEPRECATED and will be removed\\nin January 2017 (React Native version 0.42). This component only supports\\niOS.**\\n\\n**Please use\\n[react-native-maps](https://github.com/airbnb/react-native-maps) by Airbnb\\ninstead of this component.** Our friends at Airbnb have done an amazing job\\nbuilding a cross-platform \`MapView\` component that is more feature\\ncomplete. It is used extensively (over 9k installs / month).\\n\\n\`MapView\` is used to display embeddable maps and annotations using\\n\`MKMapView\`.\\n\\n\`\`\`\\nimport React, \{ Component } from 'react';\\nimport \{ MapView } from 'react-native';\\n\\nclass MapMyRide extends Component \{\\n  render() \{\\n    return (\\n      <MapView\\n        style=\{\{height: 200, margin: 40}}\\n        showsUserLocation=\{true}\\n      />\\n    );\\n  }\\n}\\n\`\`\`",
  "methods": [],
  "props": \{
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "Used to style and layout the \`MapView\`."
    },
    "showsUserLocation": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\` the app will ask for the user's location and display it on\\nthe map. Default value is \`false\`.\\n\\n**NOTE**: You'll need to add the \`NSLocationWhenInUseUsageDescription\`\\nkey in Info.plist to enable geolocation, otherwise it will fail silently."
    },
    "followUserLocation": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\` the map will follow the user's location whenever it changes.\\nNote that this has no effect unless \`showsUserLocation\` is enabled.\\nDefault value is \`true\`."
    },
    "showsPointsOfInterest": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\` points of interest won't be displayed on the map.\\nDefault value is \`true\`."
    },
    "showsCompass": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\`, compass won't be displayed on the map.\\nDefault value is \`true\`."
    },
    "showsAnnotationCallouts": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\` the map will show the callouts for all annotations without\\nthe user having to click on the annotation.\\nDefault value is \`false\`."
    },
    "zoomEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\` the user won't be able to pinch/zoom the map.\\nDefault value is \`true\`."
    },
    "rotateEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When this property is set to \`true\` and a valid camera is associated with\\nthe map, the camera's heading angle is used to rotate the plane of the\\nmap around its center point.\\n\\nWhen this property is set to \`false\`, the\\ncamera's heading angle is ignored and the map is always oriented so\\nthat true north is situated at the top of the map view"
    },
    "pitchEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When this property is set to \`true\` and a valid camera is associated\\nwith the map, the camera's pitch angle is used to tilt the plane\\nof the map.\\n\\nWhen this property is set to \`false\`, the camera's pitch\\nangle is ignored and the map is always displayed as if the user\\nis looking straight down onto it."
    },
    "scrollEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\` the user won't be able to change the map region being displayed.\\nDefault value is \`true\`."
    },
    "mapType": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'standard'",
            "computed": false
          },
          \{
            "value": "'satellite'",
            "computed": false
          },
          \{
            "value": "'hybrid'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "The map type to be displayed.\\n\\n- \`standard\`: Standard road map (default).\\n- \`satellite\`: Satellite view.\\n- \`hybrid\`: Satellite view with roads and points of interest overlaid."
    },
    "region": \{
      "type": \{
        "name": "shape",
        "value": \{
          "latitude": \{
            "name": "number",
            "description": "Coordinates for the center of the map.",
            "required": true
          },
          "longitude": \{
            "name": "number",
            "required": true
          },
          "latitudeDelta": \{
            "name": "number",
            "description": "Distance between the minimum and the maximum latitude/longitude\\nto be displayed.",
            "required": false
          },
          "longitudeDelta": \{
            "name": "number",
            "required": false
          }
        }
      },
      "required": false,
      "description": "The region to be displayed by the map.\\n\\nThe region is defined by the center coordinates and the span of\\ncoordinates to display."
    },
    "annotations": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "shape",
          "value": \{
            "latitude": \{
              "name": "number",
              "description": "The location of the annotation.",
              "required": true
            },
            "longitude": \{
              "name": "number",
              "required": true
            },
            "animateDrop": \{
              "name": "bool",
              "description": "Whether the pin drop should be animated or not",
              "required": false
            },
            "draggable": \{
              "name": "bool",
              "description": "Whether the pin should be draggable or not",
              "required": false
            },
            "onDragStateChange": \{
              "name": "func",
              "description": "Event that fires when the annotation drag state changes.",
              "required": false
            },
            "onFocus": \{
              "name": "func",
              "description": "Event that fires when the annotation gets was tapped by the user\\nand the callout view was displayed.",
              "required": false
            },
            "onBlur": \{
              "name": "func",
              "description": "Event that fires when another annotation or the mapview itself\\nwas tapped and a previously shown annotation will be closed.",
              "required": false
            },
            "title": \{
              "name": "string",
              "description": "Annotation title and subtile.",
              "required": false
            },
            "subtitle": \{
              "name": "string",
              "required": false
            },
            "leftCalloutView": \{
              "name": "element",
              "description": "Callout views.",
              "required": false
            },
            "rightCalloutView": \{
              "name": "element",
              "required": false
            },
            "detailCalloutView": \{
              "name": "element",
              "required": false
            },
            "tintColor": \{
              "name": "custom",
              "raw": "ColorPropType",
              "description": "The pin color. This can be any valid color string, or you can use one\\nof the predefined PinColors constants. Applies to both standard pins\\nand custom pin images.\\n\\nNote that on iOS 8 and earlier, only the standard PinColor constants\\nare supported for regular pins. For custom pin images, any tintColor\\nvalue is supported on all iOS versions.",
              "required": false
            },
            "image": \{
              "name": "custom",
              "raw": "Image.propTypes.source",
              "description": "Custom pin image. This must be a static image resource inside the app.",
              "required": false
            },
            "view": \{
              "name": "element",
              "description": "Custom pin view. If set, this replaces the pin or custom pin image.",
              "required": false
            },
            "id": \{
              "name": "string",
              "description": "annotation id",
              "required": false
            },
            "hasLeftCallout": \{
              "name": "custom",
              "raw": "deprecatedPropType(\\n  React.PropTypes.bool,\\n  'Use \`leftCalloutView\` instead.'\\n)",
              "description": "Deprecated. Use the left/right/detailsCalloutView props instead.",
              "required": false
            },
            "hasRightCallout": \{
              "name": "custom",
              "raw": "deprecatedPropType(\\n  React.PropTypes.bool,\\n  'Use \`rightCalloutView\` instead.'\\n)",
              "required": false
            },
            "onLeftCalloutPress": \{
              "name": "custom",
              "raw": "deprecatedPropType(\\n  React.PropTypes.func,\\n  'Use \`leftCalloutView\` instead.'\\n)",
              "required": false
            },
            "onRightCalloutPress": \{
              "name": "custom",
              "raw": "deprecatedPropType(\\n  React.PropTypes.func,\\n  'Use \`rightCalloutView\` instead.'\\n)",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": "Map annotations with title and subtitle."
    },
    "overlays": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "shape",
          "value": \{
            "coordinates": \{
              "name": "arrayOf",
              "value": \{
                "name": "shape",
                "value": \{
                  "latitude": \{
                    "name": "number",
                    "required": true
                  },
                  "longitude": \{
                    "name": "number",
                    "required": true
                  }
                }
              },
              "description": "Polyline coordinates",
              "required": false
            },
            "lineWidth": \{
              "name": "number",
              "description": "Line attributes",
              "required": false
            },
            "strokeColor": \{
              "name": "custom",
              "raw": "ColorPropType",
              "required": false
            },
            "fillColor": \{
              "name": "custom",
              "raw": "ColorPropType",
              "required": false
            },
            "id": \{
              "name": "string",
              "description": "Overlay id",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": "Map overlays"
    },
    "maxDelta": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Maximum size of the area that can be displayed."
    },
    "minDelta": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Minimum size of the area that can be displayed."
    },
    "legalLabelInsets": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": "Insets for the map's legal label, originally at bottom left of the map."
    },
    "onRegionChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called continuously when the user is dragging the map."
    },
    "onRegionChangeComplete": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called once, when the user is done moving the map."
    },
    "onAnnotationPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Deprecated. Use annotation \`onFocus\` and \`onBlur\` instead."
    },
    "active": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "@platform android"
    }
  },
  "composes": [
    "View"
  ],
  "typedef": [
    \{
      "name": "AnnotationDragState",
      "description": "State of an annotation on the map.",
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
          "description": "Annotation is not being touched.",
          "name": "idle"
        },
        \{
          "type": \{
            "names": [
              "string"
            ]
          },
          "description": "Annotation dragging has began.",
          "name": "starting"
        },
        \{
          "type": \{
            "names": [
              "string"
            ]
          },
          "description": "Annotation is being dragged.",
          "name": "dragging"
        },
        \{
          "type": \{
            "names": [
              "string"
            ]
          },
          "description": "Annotation dragging is being canceled.",
          "name": "canceling"
        },
        \{
          "type": \{
            "names": [
              "string"
            ]
          },
          "description": "Annotation dragging has ended.",
          "name": "ending"
        }
      ]
    }
  ],
  "type": "component",
  "filepath": "Libraries/Components/MapView/MapView.js",
  "componentName": "MapView",
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
      "path": "Examples/UIExplorer/js/MapViewExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule MapViewExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{ PropTypes } = React;\\nvar \{\\n  Image,\\n  MapView,\\n  StyleSheet,\\n  Text,\\n  TextInput,\\n  TouchableOpacity,\\n  View,\\n} = ReactNative;\\n\\nvar regionText = \{\\n  latitude: '0',\\n  longitude: '0',\\n  latitudeDelta: '0',\\n  longitudeDelta: '0',\\n};\\n\\nvar MapRegionInput = React.createClass(\{\\n\\n  propTypes: \{\\n    region: PropTypes.shape(\{\\n      latitude: PropTypes.number.isRequired,\\n      longitude: PropTypes.number.isRequired,\\n      latitudeDelta: PropTypes.number,\\n      longitudeDelta: PropTypes.number,\\n    }),\\n    onChange: PropTypes.func.isRequired,\\n  },\\n\\n  getInitialState() \{\\n    return \{\\n      region: \{\\n        latitude: 0,\\n        longitude: 0,\\n      }\\n    };\\n  },\\n\\n  componentWillReceiveProps: function(nextProps) \{\\n    this.setState(\{\\n      region: nextProps.region || this.getInitialState().region\\n    });\\n  },\\n\\n  render: function() \{\\n    var region = this.state.region || this.getInitialState().region;\\n    return (\\n      <View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Latitude'}\\n          </Text>\\n          <TextInput\\n            value=\{'' + region.latitude}\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLatitude}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Longitude'}\\n          </Text>\\n          <TextInput\\n            value=\{'' + region.longitude}\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLongitude}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Latitude delta'}\\n          </Text>\\n          <TextInput\\n            value=\{\\n              region.latitudeDelta == null ? '' : String(region.latitudeDelta)\\n            }\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLatitudeDelta}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Longitude delta'}\\n          </Text>\\n          <TextInput\\n            value=\{\\n              region.longitudeDelta == null ? '' : String(region.longitudeDelta)\\n            }\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLongitudeDelta}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.changeButton}>\\n          <Text onPress=\{this._change}>\\n            \{'Change'}\\n          </Text>\\n        </View>\\n      </View>\\n    );\\n  },\\n\\n  _onChangeLatitude: function(e) \{\\n    regionText.latitude = e.nativeEvent.text;\\n  },\\n\\n  _onChangeLongitude: function(e) \{\\n    regionText.longitude = e.nativeEvent.text;\\n  },\\n\\n  _onChangeLatitudeDelta: function(e) \{\\n    regionText.latitudeDelta = e.nativeEvent.text;\\n  },\\n\\n  _onChangeLongitudeDelta: function(e) \{\\n    regionText.longitudeDelta = e.nativeEvent.text;\\n  },\\n\\n  _change: function() \{\\n    this.setState(\{\\n      region: \{\\n        latitude: parseFloat(regionText.latitude),\\n        longitude: parseFloat(regionText.longitude),\\n        latitudeDelta: parseFloat(regionText.latitudeDelta),\\n        longitudeDelta: parseFloat(regionText.longitudeDelta),\\n      },\\n    });\\n    this.props.onChange(this.state.region);\\n  },\\n\\n});\\n\\nclass MapViewExample extends React.Component \{\\n  state = \{\\n    isFirstLoad: true,\\n    mapRegion: undefined,\\n    mapRegionInput: undefined,\\n    annotations: [],\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <MapView\\n          style=\{styles.map}\\n          onRegionChange=\{this._onRegionChange}\\n          onRegionChangeComplete=\{this._onRegionChangeComplete}\\n          region=\{this.state.mapRegion}\\n          annotations=\{this.state.annotations}\\n        />\\n        <MapRegionInput\\n          onChange=\{this._onRegionInputChanged}\\n          region=\{this.state.mapRegionInput}\\n        />\\n      </View>\\n    );\\n  }\\n\\n  _getAnnotations = (region) => \{\\n    return [\{\\n      longitude: region.longitude,\\n      latitude: region.latitude,\\n      title: 'You Are Here',\\n    }];\\n  };\\n\\n  _onRegionChange = (region) => \{\\n    this.setState(\{\\n      mapRegionInput: region,\\n    });\\n  };\\n\\n  _onRegionChangeComplete = (region) => \{\\n    if (this.state.isFirstLoad) \{\\n      this.setState(\{\\n        mapRegionInput: region,\\n        annotations: this._getAnnotations(region),\\n        isFirstLoad: false,\\n      });\\n    }\\n  };\\n\\n  _onRegionInputChanged = (region) => \{\\n    this.setState(\{\\n      mapRegion: region,\\n      mapRegionInput: region,\\n      annotations: this._getAnnotations(region),\\n    });\\n  };\\n}\\n\\nclass AnnotationExample extends React.Component \{\\n  state = \{\\n    isFirstLoad: true,\\n    annotations: [],\\n    mapRegion: undefined,\\n  };\\n\\n  render() \{\\n    if (this.state.isFirstLoad) \{\\n      var onRegionChangeComplete = (region) => \{\\n        this.setState(\{\\n          isFirstLoad: false,\\n          annotations: [\{\\n            longitude: region.longitude,\\n            latitude: region.latitude,\\n            ...this.props.annotation,\\n          }],\\n        });\\n      };\\n    }\\n\\n    return (\\n      <MapView\\n        showsAnnotationCallouts=\{this.props.showsAnnotationCallouts}\\n        style=\{styles.map}\\n        onRegionChangeComplete=\{onRegionChangeComplete}\\n        region=\{this.state.mapRegion}\\n        annotations=\{this.state.annotations}\\n      />\\n    );\\n  }\\n}\\n\\nclass DraggableAnnotationExample extends React.Component \{\\n  state = \{\\n    isFirstLoad: true,\\n    annotations: [],\\n    mapRegion: undefined,\\n  };\\n\\n  createAnnotation = (longitude, latitude) => \{\\n    return \{\\n      longitude,\\n      latitude,\\n      draggable: true,\\n      onDragStateChange: (event) => \{\\n        if (event.state === 'idle') \{\\n          this.setState(\{\\n            annotations: [this.createAnnotation(event.longitude, event.latitude)],\\n          });\\n        }\\n        console.log('Drag state: ' + event.state);\\n      },\\n    };\\n  };\\n\\n  render() \{\\n    if (this.state.isFirstLoad) \{\\n      var onRegionChangeComplete = (region) => \{\\n        //When the MapView loads for the first time, we can create the annotation at the\\n        //region that was loaded.\\n        this.setState(\{\\n          isFirstLoad: false,\\n          annotations: [this.createAnnotation(region.longitude, region.latitude)],\\n        });\\n      };\\n    }\\n\\n    return (\\n      <MapView\\n        style=\{styles.map}\\n        onRegionChangeComplete=\{onRegionChangeComplete}\\n        region=\{this.state.mapRegion}\\n        annotations=\{this.state.annotations}\\n      />\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  map: \{\\n    height: 150,\\n    margin: 10,\\n    borderWidth: 1,\\n    borderColor: '#000000',\\n  },\\n  row: \{\\n    flexDirection: 'row',\\n    justifyContent: 'space-between',\\n  },\\n  textInput: \{\\n    width: 150,\\n    height: 20,\\n    borderWidth: 0.5,\\n    borderColor: '#aaaaaa',\\n    fontSize: 13,\\n    padding: 4,\\n  },\\n  changeButton: \{\\n    alignSelf: 'center',\\n    marginTop: 5,\\n    padding: 3,\\n    borderWidth: 0.5,\\n    borderColor: '#777777',\\n  },\\n});\\n\\nexports.displayName = (undefined: ?string);\\nexports.title = '<MapView>';\\nexports.description = 'Base component to display maps';\\nexports.examples = [\\n  \{\\n    title: 'Map',\\n    render() \{\\n      return <MapViewExample />;\\n    }\\n  },\\n  \{\\n    title: 'showsUserLocation + followUserLocation',\\n    render() \{\\n      return (\\n        <MapView\\n          style=\{styles.map}\\n          showsUserLocation=\{true}\\n          followUserLocation=\{true}\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Callout example',\\n    render() \{\\n      return <AnnotationExample style=\{styles.map} annotation=\{\{\\n        title: 'More Info...',\\n        rightCalloutView: (\\n          <TouchableOpacity\\n            onPress=\{() => \{\\n              alert('You Are Here');\\n            }}>\\n            <Image\\n              style=\{\{width:30, height:30}}\\n              source=\{require\('./uie_thumb_selected.png')}\\n            />\\n          </TouchableOpacity>\\n        ),\\n      }}/>;\\n    }\\n  },\\n  \{\\n    title: 'Show callouts by default example',\\n    render() \{\\n      return <AnnotationExample\\n        style=\{styles.map}\\n        annotation=\{\{\\n          title: 'More Info...',\\n          rightCalloutView: (\\n            <TouchableOpacity\\n              onPress=\{() => \{\\n                alert('You Are Here');\\n              }}>\\n              <Image\\n                style=\{\{width:30, height:30}}\\n                source=\{require\('./uie_thumb_selected.png')}\\n              />\\n            </TouchableOpacity>\\n          ),\\n        }}\\n        showsAnnotationCallouts=\{true}\\n      />;\\n    }\\n  },\\n  \{\\n    title: 'Annotation focus example',\\n    render() \{\\n      return <AnnotationExample style=\{styles.map} annotation=\{\{\\n        title: 'More Info...',\\n        onFocus: () => \{\\n          alert('Annotation gets focus');\\n        },\\n        onBlur: () => \{\\n          alert('Annotation lost focus');\\n        }\\n      }}/>;\\n    }\\n  },\\n  \{\\n    title: 'Draggable pin',\\n    render() \{\\n      return <DraggableAnnotationExample/>;\\n    }\\n  },\\n  \{\\n    title: 'Custom pin color',\\n    render() \{\\n      return <AnnotationExample style=\{styles.map} annotation=\{\{\\n        title: 'You Are Purple',\\n        tintColor: MapView.PinColors.PURPLE,\\n      }}/>;\\n    }\\n  },\\n  \{\\n    title: 'Custom pin image',\\n    render() \{\\n      return <AnnotationExample style=\{styles.map} annotation=\{\{\\n        title: 'Thumbs Up!',\\n        image: require\('./uie_thumb_big.png'),\\n      }}/>;\\n    }\\n  },\\n  \{\\n    title: 'Custom pin view',\\n    render() \{\\n      return <AnnotationExample style=\{styles.map} annotation=\{\{\\n        title: 'Thumbs Up!',\\n        view: <View style=\{\{\\n          alignItems: 'center',\\n        }}>\\n          <Text style=\{\{fontWeight: 'bold', color: '#f007'}}>\\n            Thumbs Up!\\n          </Text>\\n          <Image\\n            style=\{\{width: 90, height: 65, resizeMode: 'cover'}}\\n            source=\{require\('./uie_thumb_big.png')}\\n          />\\n        </View>,\\n      }}/>;\\n    }\\n  },\\n  \{\\n    title: 'Custom overlay',\\n    render() \{\\n      return <MapView\\n        style=\{styles.map}\\n        region=\{\{\\n          latitude: 39.06,\\n          longitude: -95.22,\\n        }}\\n        overlays=\{[\{\\n          coordinates:[\\n            \{latitude: 32.47, longitude: -107.85},\\n            \{latitude: 45.13, longitude: -94.48},\\n            \{latitude: 39.27, longitude: -83.25},\\n            \{latitude: 32.47, longitude: -107.85},\\n          ],\\n          strokeColor: '#f007',\\n          lineWidth: 3,\\n        }]}\\n      />;\\n    }\\n  },\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"mapview","title":"MapView","layout":"autodocs","category":"components","permalink":"docs/mapview.html","platform":"cross","next":"modal","previous":"listview","sidebar":true,"runnable":true,"path":"Libraries/Components/MapView/MapView.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;