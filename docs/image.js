/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A React component for displaying different types of images,\\nincluding network images, static resources, temporary local images, and\\nimages from local disk, such as the camera roll.\\n\\nThis example shows both fetching and displaying an image from local\\nstorage as well as one from network.\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, View, Image } from 'react-native';\\n\\nclass DisplayAnImage extends Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <Image\\n          source=\{require\('./img/favicon.png')}\\n        />\\n        <Image\\n          style=\{\{width: 50, height: 50}}\\n          source=\{\{uri: 'https://facebook.github.io/react/img/logo_og.png'}}\\n        />\\n      </View>\\n    );\\n  }\\n}\\n\\n// App registration and rendering\\nAppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);\\n\`\`\`\\n\\nYou can also add \`style\` to an image:\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, View, Image, StyleSheet } from 'react-native';\\n\\nconst styles = StyleSheet.create(\{\\n  stretch: \{\\n    width: 50,\\n    height: 200\\n  }\\n});\\n\\nclass DisplayAnImageWithStyle extends Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <Image\\n          style=\{styles.stretch}\\n          source=\{require\('./img/favicon.png')}\\n        />\\n      </View>\\n    );\\n  }\\n}\\n\\n// App registration and rendering\\nAppRegistry.registerComponent(\\n  'DisplayAnImageWithStyle',\\n  () => DisplayAnImageWithStyle\\n);\\n\`\`\`\\n\\n### GIF and WebP support on Android\\n\\nBy default, GIF and WebP are not supported on Android.\\n\\nYou will need to add some optional modules in \`android/app/build.gradle\`, depending on the needs of your app.\\n\\n\`\`\`\\ndependencies \{\\n  // If your app supports Android versions before Ice Cream Sandwich (API level 14)\\n  compile 'com.facebook.fresco:animated-base-support:0.11.0'\\n\\n  // For animated GIF support\\n  compile 'com.facebook.fresco:animated-gif:0.11.0'\\n\\n  // For WebP support, including animated WebP\\n  compile 'com.facebook.fresco:animated-webp:0.11.0'\\n  compile 'com.facebook.fresco:webpsupport:0.11.0'\\n\\n  // For WebP support, without animations\\n  compile 'com.facebook.fresco:webpsupport:0.11.0'\\n}\\n\`\`\`\\n\\nAlso, if you use GIF with ProGuard, you will need to add this rule in \`proguard-rules.pro\` :\\n\`\`\`\\n-keep class com.facebook.imagepipeline.animated.factory.AnimatedFactoryImpl \{\\n  public AnimatedFactoryImpl(com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, com.facebook.imagepipeline.core.ExecutorSupplier);\\n}\\n\`\`\`",
  "methods": [
    \{
      "name": "getSize",
      "docblock": "Retrieve the width and height (in pixels) of an image prior to displaying it.\\nThis method can fail if the image cannot be found, or fails to download.\\n\\nIn order to retrieve the image dimensions, the image may first need to be\\nloaded or downloaded, after which it will be cached. This means that in\\nprinciple you could use this method to preload images, however it is not\\noptimized for that purpose, and may in future be implemented in a way that\\ndoes not fully load/download the image data. A proper, supported way to\\npreload images will be provided as a separate API.\\n\\n@param uri The location of the image.\\n@param success The function that will be called if the image was successfully found and width\\nand height retrieved.\\n@param failure The function that will be called if there was an error, such as failing to\\nto retrieve the image.\\n\\n@returns void\\n\\n@platform ios",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "name": "uri",
          "description": "The location of the image.",
          "type": \{
            "names": [
              "string"
            ]
          }
        },
        \{
          "name": "success",
          "description": "The function that will be called if the image was successfully found and width\\nand height retrieved.",
          "type": \{
            "names": [
              "function"
            ]
          }
        },
        \{
          "name": "failure",
          "description": "The function that will be called if there was an error, such as failing to\\nto retrieve the image.",
          "type": \{
            "names": [
              "function"
            ]
          }
        }
      ],
      "returns": \{
        "description": "void",
        "type": [
          null
        ]
      },
      "description": "Retrieve the width and height (in pixels) of an image prior to displaying it.\\nThis method can fail if the image cannot be found, or fails to download.\\n\\nIn order to retrieve the image dimensions, the image may first need to be\\nloaded or downloaded, after which it will be cached. This means that in\\nprinciple you could use this method to preload images, however it is not\\noptimized for that purpose, and may in future be implemented in a way that\\ndoes not fully load/download the image data. A proper, supported way to\\npreload images will be provided as a separate API."
    },
    \{
      "name": "prefetch",
      "docblock": "Prefetches a remote image for later use by downloading it to the disk\\ncache\\n\\n@param url The remote location of the image.\\n\\n@return The prefetched image.",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "name": "url",
          "description": "The remote location of the image.",
          "type": \{
            "names": [
              "string"
            ]
          }
        }
      ],
      "returns": \{
        "description": "The prefetched image.",
        "type": [
          null
        ]
      },
      "description": "Prefetches a remote image for later use by downloading it to the disk\\ncache"
    }
  ],
  "props": \{
    "style": \{
      "type": \{
        "name": "stylesheet",
        "value": "ImageStylePropTypes"
      },
      "required": false,
      "description": "> \`ImageResizeMode\` is an \`Enum\` for different image resizing modes, set via the\\n> \`resizeMode\` style property on \`Image\` components. The values are \`contain\`, \`cover\`,\\n> \`stretch\`, \`center\`, \`repeat\`."
    },
    "source": \{
      "type": \{
        "name": "custom",
        "raw": "ImageSourcePropType"
      },
      "required": false,
      "description": "The image source (either a remote URL or a local file resource).\\n\\nThis prop can also contain several remote URLs, specified together with\\ntheir width and height and potentially with scale/other URI arguments.\\nThe native side will then choose the best \`uri\` to display based on the\\nmeasured size of the image container. A \`cache\` property can be added to\\ncontrol how networked request interacts with the local cache."
    },
    "defaultSource": \{
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
              "width": \{
                "name": "number",
                "required": false
              },
              "height": \{
                "name": "number",
                "required": false
              },
              "scale": \{
                "name": "number",
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
      "description": "A static image to display while loading the image source.\\n\\n- \`uri\` - a string representing the resource identifier for the image, which\\nshould be either a local file path or the name of a static image resource\\n(which should be wrapped in the \`require\('./path/to/image.png')\` function).\\n- \`width\`, \`height\` - can be specified if known at build time, in which case\\nthese will be used to set the default \`<Image/>\` component dimensions.\\n- \`scale\` - used to indicate the scale factor of the image. Defaults to 1.0 if\\nunspecified, meaning that one image pixel equates to one display point / DIP.\\n- \`number\` - Opaque type returned by something like \`require\('./image.jpg')\`.\\n\\n@platform ios"
    },
    "accessible": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, indicates the image is an accessibility element.\\n@platform ios"
    },
    "accessibilityLabel": \{
      "type": \{
        "name": "node"
      },
      "required": false,
      "description": "The text that's read by the screen reader when the user interacts with\\nthe image.\\n@platform ios"
    },
    "blurRadius": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "blurRadius: the blur radius of the blur filter added to the image\\n@platform ios"
    },
    "capInsets": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": "When the image is resized, the corners of the size specified\\nby \`capInsets\` will stay a fixed size, but the center content and borders\\nof the image will be stretched.  This is useful for creating resizable\\nrounded buttons, shadows, and other resizable assets.  More info in the\\n[official Apple documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets).\\n\\n@platform ios"
    },
    "resizeMethod": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'auto'",
            "computed": false
          },
          \{
            "value": "'resize'",
            "computed": false
          },
          \{
            "value": "'scale'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "The mechanism that should be used to resize the image when the image's dimensions\\ndiffer from the image view's dimensions. Defaults to \`auto\`.\\n\\n- \`auto\`: Use heuristics to pick between \`resize\` and \`scale\`.\\n\\n- \`resize\`: A software operation which changes the encoded image in memory before it\\ngets decoded. This should be used instead of \`scale\` when the image is much larger\\nthan the view.\\n\\n- \`scale\`: The image gets drawn downscaled or upscaled. Compared to \`resize\`, \`scale\` is\\nfaster (usually hardware accelerated) and produces higher quality images. This\\nshould be used if the image is smaller than the view. It should also be used if the\\nimage is slightly bigger than the view.\\n\\nMore details about \`resize\` and \`scale\` can be found at http://frescolib.org/docs/resizing-rotating.html.\\n\\n@platform android"
    },
    "resizeMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'cover'",
            "computed": false
          },
          \{
            "value": "'contain'",
            "computed": false
          },
          \{
            "value": "'stretch'",
            "computed": false
          },
          \{
            "value": "'repeat'",
            "computed": false
          },
          \{
            "value": "'center'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines how to resize the image when the frame doesn't match the raw\\nimage dimensions.\\n\\n- \`cover\`: Scale the image uniformly (maintain the image's aspect ratio)\\nso that both dimensions (width and height) of the image will be equal\\nto or larger than the corresponding dimension of the view (minus padding).\\n\\n- \`contain\`: Scale the image uniformly (maintain the image's aspect ratio)\\nso that both dimensions (width and height) of the image will be equal to\\nor less than the corresponding dimension of the view (minus padding).\\n\\n- \`stretch\`: Scale width and height independently, This may change the\\naspect ratio of the src.\\n\\n- \`repeat\`: Repeat the image to cover the frame of the view. The\\nimage will keep it's size and aspect ratio. (iOS only)"
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "A unique identifier for this element to be used in UI Automation\\ntesting scripts."
    },
    "onLayout": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on mount and layout changes with\\n\`\{nativeEvent: \{layout: \{x, y, width, height}}}\`."
    },
    "onLoadStart": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on load start.\\n\\ne.g., \`onLoadStart=\{(e) => this.setState(\{loading: true})}\`"
    },
    "onProgress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on download progress with \`\{nativeEvent: \{loaded, total}}\`.\\n@platform ios"
    },
    "onError": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on load error with \`\{nativeEvent: \{error}}\`."
    },
    "onPartialLoad": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked when a partial load of the image is complete. The definition of\\nwhat constitutes a \\"partial load\\" is loader specific though this is meant\\nfor progressive JPEG loads.\\n@platform ios"
    },
    "onLoad": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked when load completes successfully."
    },
    "onLoadEnd": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked when load either succeeds or fails."
    }
  },
  "type": "component",
  "filepath": "Libraries/Image/Image.ios.js",
  "componentName": "Image",
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
      "path": "Examples/UIExplorer/js/ImageExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule ImageExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  ActivityIndicator,\\n  Image,\\n  Platform,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = ReactNative;\\n\\nvar base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';\\n\\nvar ImageCapInsetsExample = require\('./ImageCapInsetsExample');\\nconst IMAGE_PREFETCH_URL = 'http://origami.design/public/images/bird-logo.png?r=1&t=' + Date.now();\\nvar prefetchTask = Image.prefetch(IMAGE_PREFETCH_URL);\\n\\nvar NetworkImageCallbackExample = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{\\n      events: [],\\n      startLoadPrefetched: false,\\n      mountTime: new Date(),\\n    };\\n  },\\n\\n  componentWillMount() \{\\n    this.setState(\{mountTime: new Date()});\\n  },\\n\\n  render: function() \{\\n    var \{ mountTime } = this.state;\\n\\n    return (\\n      <View>\\n        <Image\\n          source=\{this.props.source}\\n          style=\{[styles.base, \{overflow: 'visible'}]}\\n          onLoadStart=\{() => this._loadEventFired(\`✔ onLoadStart (+$\{new Date() - mountTime}ms)\`)}\\n          onLoad=\{(event) => \{\\n            // Currently this image source feature is only available on iOS.\\n            if (event.nativeEvent.source) \{\\n              const url = event.nativeEvent.source.url;\\n              this._loadEventFired(\`✔ onLoad (+$\{new Date() - mountTime}ms) for URL $\{url}\`);\\n            } else \{\\n              this._loadEventFired(\`✔ onLoad (+$\{new Date() - mountTime}ms)\`);\\n            }\\n          }}\\n          onLoadEnd=\{() => \{\\n            this._loadEventFired(\`✔ onLoadEnd (+$\{new Date() - mountTime}ms)\`);\\n            this.setState(\{startLoadPrefetched: true}, () => \{\\n              prefetchTask.then(() => \{\\n                this._loadEventFired(\`✔ Prefetch OK (+$\{new Date() - mountTime}ms)\`);\\n              }, error => \{\\n                this._loadEventFired(\`✘ Prefetch failed (+$\{new Date() - mountTime}ms)\`);\\n              });\\n            });\\n          }}\\n        />\\n        \{this.state.startLoadPrefetched ?\\n          <Image\\n            source=\{this.props.prefetchedSource}\\n            style=\{[styles.base, \{overflow: 'visible'}]}\\n            onLoadStart=\{() => this._loadEventFired(\`✔ (prefetched) onLoadStart (+$\{new Date() - mountTime}ms)\`)}\\n            onLoad=\{(event) => \{\\n              // Currently this image source feature is only available on iOS.\\n              if (event.nativeEvent.source) \{\\n                const url = event.nativeEvent.source.url;\\n                this._loadEventFired(\`✔ (prefetched) onLoad (+$\{new Date() - mountTime}ms) for URL $\{url}\`);\\n              } else \{\\n                this._loadEventFired(\`✔ (prefetched) onLoad (+$\{new Date() - mountTime}ms)\`);\\n              }\\n            }}\\n            onLoadEnd=\{() => this._loadEventFired(\`✔ (prefetched) onLoadEnd (+$\{new Date() - mountTime}ms)\`)}\\n          />\\n          : null}\\n        <Text style=\{\{marginTop: 20}}>\\n          \{this.state.events.join('\\\\n')}\\n        </Text>\\n      </View>\\n    );\\n  },\\n\\n  _loadEventFired(event) \{\\n    this.setState((state) => \{\\n      return state.events = [...state.events, event];\\n    });\\n  }\\n});\\n\\nvar NetworkImageExample = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{\\n      error: false,\\n      loading: false,\\n      progress: 0\\n    };\\n  },\\n  render: function() \{\\n    var loader = this.state.loading ?\\n      <View style=\{styles.progress}>\\n        <Text>\{this.state.progress}%</Text>\\n        <ActivityIndicator style=\{\{marginLeft:5}} />\\n      </View> : null;\\n    return this.state.error ?\\n      <Text>\{this.state.error}</Text> :\\n      <Image\\n        source=\{this.props.source}\\n        style=\{[styles.base, \{overflow: 'visible'}]}\\n        onLoadStart=\{(e) => this.setState(\{loading: true})}\\n        onError=\{(e) => this.setState(\{error: e.nativeEvent.error, loading: false})}\\n        onProgress=\{(e) => this.setState(\{progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total)})}\\n        onLoad=\{() => this.setState(\{loading: false, error: false})}>\\n        \{loader}\\n      </Image>;\\n  }\\n});\\n\\nvar ImageSizeExample = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{\\n      width: 0,\\n      height: 0,\\n    };\\n  },\\n  componentDidMount: function() \{\\n    Image.getSize(this.props.source.uri, (width, height) => \{\\n      this.setState(\{width, height});\\n    });\\n  },\\n  render: function() \{\\n    return (\\n      <View style=\{\{flexDirection: 'row'}}>\\n        <Image\\n          style=\{\{\\n            width: 60,\\n            height: 60,\\n            backgroundColor: 'transparent',\\n            marginRight: 10,\\n          }}\\n          source=\{this.props.source} />\\n        <Text>\\n          Actual dimensions:\{'\\\\n'}\\n          Width: \{this.state.width}, Height: \{this.state.height}\\n        </Text>\\n      </View>\\n    );\\n  },\\n});\\n\\nvar MultipleSourcesExample = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{\\n      width: 30,\\n      height: 30,\\n    };\\n  },\\n  render: function() \{\\n    return (\\n      <View>\\n        <View style=\{\{flexDirection: 'row', justifyContent: 'space-between'}}>\\n          <Text\\n            style=\{styles.touchableText}\\n            onPress=\{this.decreaseImageSize} >\\n            Decrease image size\\n          </Text>\\n          <Text\\n            style=\{styles.touchableText}\\n            onPress=\{this.increaseImageSize} >\\n            Increase image size\\n          </Text>\\n        </View>\\n        <Text>Container image size: \{this.state.width}x\{this.state.height} </Text>\\n        <View\\n          style=\{\{height: this.state.height, width: this.state.width}} >\\n          <Image\\n            style=\{\{flex: 1}}\\n            source=\{[\\n              \{uri: 'https://facebook.github.io/react/img/logo_small.png', width: 38, height: 38},\\n              \{uri: 'https://facebook.github.io/react/img/logo_small_2x.png', width: 76, height: 76},\\n              \{uri: 'https://facebook.github.io/react/img/logo_og.png', width: 400, height: 400}\\n            ]}\\n          />\\n        </View>\\n      </View>\\n    );\\n  },\\n  increaseImageSize: function() \{\\n    if (this.state.width >= 100) \{\\n      return;\\n    }\\n    this.setState(\{\\n      width: this.state.width + 10,\\n      height: this.state.height + 10,\\n    });\\n  },\\n  decreaseImageSize: function() \{\\n    if (this.state.width <= 10) \{\\n      return;\\n    }\\n    this.setState(\{\\n      width: this.state.width - 10,\\n      height: this.state.height - 10,\\n    });\\n  },\\n});\\n\\nexports.displayName = (undefined: ?string);\\nexports.framework = 'React';\\nexports.title = '<Image>';\\nexports.description = 'Base component for displaying different types of images.';\\n\\nexports.examples = [\\n  \{\\n    title: 'Plain Network Image',\\n    description: 'If the \`source\` prop \`uri\` property is prefixed with ' +\\n    '\\"http\\", then it will be downloaded from the network.',\\n    render: function() \{\\n      return (\\n        <Image\\n          source=\{\{uri: 'https://facebook.github.io/react/img/logo_og.png'}}\\n          style=\{styles.base}\\n        />\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Plain Static Image',\\n    description: 'Static assets should be placed in the source code tree, and ' +\\n    'required in the same way as JavaScript modules.',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image source=\{require\('./uie_thumb_normal.png')} style=\{styles.icon} />\\n          <Image source=\{require\('./uie_thumb_selected.png')} style=\{styles.icon} />\\n          <Image source=\{require\('./uie_comment_normal.png')} style=\{styles.icon} />\\n          <Image source=\{require\('./uie_comment_highlighted.png')} style=\{styles.icon} />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Image Loading Events',\\n    render: function() \{\\n      return (\\n        <NetworkImageCallbackExample source=\{\{uri: 'http://origami.design/public/images/bird-logo.png?r=1&t=' + Date.now()}}\\n          prefetchedSource=\{\{uri: IMAGE_PREFETCH_URL}}/>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Error Handler',\\n    render: function() \{\\n      return (\\n        <NetworkImageExample source=\{\{uri: 'https://TYPO_ERROR_facebook.github.io/react/img/logo_og.png'}} />\\n      );\\n    },\\n    platform: 'ios',\\n  },\\n  \{\\n    title: 'Image Download Progress',\\n    render: function() \{\\n      return (\\n        <NetworkImageExample source=\{\{uri: 'http://origami.design/public/images/bird-logo.png?r=1'}}/>\\n      );\\n    },\\n    platform: 'ios',\\n  },\\n  \{\\n    title: 'defaultSource',\\n    description: 'Show a placeholder image when a network image is loading',\\n    render: function() \{\\n      return (\\n        <Image\\n          defaultSource=\{require\('./bunny.png')}\\n          source=\{\{uri: 'https://facebook.github.io/origami/public/images/birds.jpg'}}\\n          style=\{styles.base}\\n        />\\n      );\\n    },\\n    platform: 'ios',\\n  },\\n  \{\\n    title: 'Cache Policy',\\n    description: 'First image has never been loaded before and is instructed not to load unless in cache.' +\\n    'Placeholder image from above will stay. Second image is the same but forced to load regardless of' +\\n    ' local cache state.',\\n    render: function () \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            defaultSource=\{require\('./bunny.png')}\\n            source=\{\{\\n              uri: smallImage.uri + '?cacheBust=notinCache' + Date.now(),\\n              cache: 'only-if-cached'\\n            }}\\n            style=\{styles.base}\\n          />\\n          <Image\\n            defaultSource=\{require\('./bunny.png')}\\n            source=\{\{\\n              uri: smallImage.uri + '?cacheBust=notinCache' + Date.now(),\\n              cache: 'reload'\\n            }}\\n            style=\{styles.base}\\n          />\\n        </View>\\n      );\\n    },\\n    platform: 'ios',\\n  },\\n  \{\\n    title: 'Border Color',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            source=\{smallImage}\\n            style=\{[\\n              styles.base,\\n              styles.background,\\n              \{borderWidth: 3, borderColor: '#f099f0'}\\n            ]}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Border Width',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            source=\{smallImage}\\n            style=\{[\\n              styles.base,\\n              styles.background,\\n              \{borderWidth: 5, borderColor: '#f099f0'}\\n            ]}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Border Radius',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            style=\{[styles.base, \{borderRadius: 5}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{borderRadius: 19}]}\\n            source=\{fullImage}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Background Color',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image source=\{smallImage} style=\{styles.base} />\\n          <Image\\n            style=\{[\\n              styles.base,\\n              styles.leftMargin,\\n              \{backgroundColor: 'rgba(0, 0, 100, 0.25)'}\\n            ]}\\n            source=\{smallImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{backgroundColor: 'red'}]}\\n            source=\{smallImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{backgroundColor: 'black'}]}\\n            source=\{smallImage}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Opacity',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            style=\{[styles.base, \{opacity: 1}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.8}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.6}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.4}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.2}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0}]}\\n            source=\{fullImage}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Nesting',\\n    render: function() \{\\n      return (\\n        <Image\\n          style=\{\{width: 60, height: 60, backgroundColor: 'transparent'}}\\n          source=\{fullImage}>\\n          <Text style=\{styles.nestedText}>\\n            React\\n          </Text>\\n        </Image>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Tint Color',\\n    description: 'The \`tintColor\` style prop changes all the non-alpha ' +\\n      'pixels to the tint color.',\\n    render: function() \{\\n      return (\\n        <View>\\n          <View style=\{styles.horizontal}>\\n            <Image\\n              source=\{require\('./uie_thumb_normal.png')}\\n              style=\{[styles.icon, \{borderRadius: 5, tintColor: '#5ac8fa' }]}\\n            />\\n            <Image\\n              source=\{require\('./uie_thumb_normal.png')}\\n              style=\{[styles.icon, styles.leftMargin, \{borderRadius: 5, tintColor: '#4cd964' }]}\\n            />\\n            <Image\\n              source=\{require\('./uie_thumb_normal.png')}\\n              style=\{[styles.icon, styles.leftMargin, \{borderRadius: 5, tintColor: '#ff2d55' }]}\\n            />\\n            <Image\\n              source=\{require\('./uie_thumb_normal.png')}\\n              style=\{[styles.icon, styles.leftMargin, \{borderRadius: 5, tintColor: '#8e8e93' }]}\\n            />\\n          </View>\\n          <Text style=\{styles.sectionText}>\\n            It also works with downloaded images:\\n          </Text>\\n          <View style=\{styles.horizontal}>\\n            <Image\\n              source=\{smallImage}\\n              style=\{[styles.base, \{borderRadius: 5, tintColor: '#5ac8fa' }]}\\n            />\\n            <Image\\n              source=\{smallImage}\\n              style=\{[styles.base, styles.leftMargin, \{borderRadius: 5, tintColor: '#4cd964' }]}\\n            />\\n            <Image\\n              source=\{smallImage}\\n              style=\{[styles.base, styles.leftMargin, \{borderRadius: 5, tintColor: '#ff2d55' }]}\\n            />\\n            <Image\\n              source=\{smallImage}\\n              style=\{[styles.base, styles.leftMargin, \{borderRadius: 5, tintColor: '#8e8e93' }]}\\n            />\\n          </View>\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Resize Mode',\\n    description: 'The \`resizeMode\` style prop controls how the image is ' +\\n      'rendered within the frame.',\\n    render: function() \{\\n      return (\\n        <View>\\n          \{[smallImage, fullImage].map((image, index) => \{\\n            return (\\n            <View key=\{index}>\\n              <View style=\{styles.horizontal}>\\n                <View>\\n                  <Text style=\{[styles.resizeModeText]}>\\n                    Contain\\n                  </Text>\\n                  <Image\\n                    style=\{styles.resizeMode}\\n                    resizeMode=\{Image.resizeMode.contain}\\n                    source=\{image}\\n                  />\\n                </View>\\n                <View style=\{styles.leftMargin}>\\n                  <Text style=\{[styles.resizeModeText]}>\\n                    Cover\\n                  </Text>\\n                  <Image\\n                    style=\{styles.resizeMode}\\n                    resizeMode=\{Image.resizeMode.cover}\\n                    source=\{image}\\n                  />\\n                </View>\\n              </View>\\n              <View style=\{styles.horizontal}>\\n                <View>\\n                  <Text style=\{[styles.resizeModeText]}>\\n                    Stretch\\n                  </Text>\\n                  <Image\\n                    style=\{styles.resizeMode}\\n                    resizeMode=\{Image.resizeMode.stretch}\\n                    source=\{image}\\n                  />\\n                </View>\\n                \{ Platform.OS === 'ios' ?\\n                  <View style=\{styles.leftMargin}>\\n                    <Text style=\{[styles.resizeModeText]}>\\n                      Repeat\\n                    </Text>\\n                    <Image\\n                      style=\{styles.resizeMode}\\n                      resizeMode=\{Image.resizeMode.repeat}\\n                      source=\{image}\\n                    />\\n                  </View>\\n                : null }\\n                \{ Platform.OS === 'android' ?\\n                  <View style=\{styles.leftMargin}>\\n                    <Text style=\{[styles.resizeModeText]}>\\n                      Center\\n                    </Text>\\n                    <Image\\n                      style=\{styles.resizeMode}\\n                      resizeMode=\{Image.resizeMode.center}\\n                      source=\{image}\\n                    />\\n                  </View>\\n                : null }\\n              </View>\\n            </View>\\n          );\\n        })}\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Animated GIF',\\n    render: function() \{\\n      return (\\n        <Image\\n          style=\{styles.gif}\\n          source=\{\{uri: 'https://38.media.tumblr.com/9e9bd08c6e2d10561dd1fb4197df4c4e/tumblr_mfqekpMktw1rn90umo1_500.gif'}}\\n        />\\n      );\\n    },\\n    platform: 'ios',\\n  },\\n  \{\\n    title: 'Base64 image',\\n    render: function() \{\\n      return (\\n        <Image\\n          style=\{styles.base64}\\n          source=\{\{uri: base64Icon, scale: 3}}\\n        />\\n      );\\n    },\\n    platform: 'ios',\\n  },\\n  \{\\n    title: 'Cap Insets',\\n    description:\\n      'When the image is resized, the corners of the size specified ' +\\n      'by capInsets will stay a fixed size, but the center content and ' +\\n      'borders of the image will be stretched. This is useful for creating ' +\\n      'resizable rounded buttons, shadows, and other resizable assets.',\\n    render: function() \{\\n      return <ImageCapInsetsExample />;\\n    },\\n    platform: 'ios',\\n  },\\n  \{\\n    title: 'Image Size',\\n    render: function() \{\\n      return <ImageSizeExample source=\{fullImage} />;\\n    },\\n  },\\n  \{\\n    title: 'MultipleSourcesExample',\\n    description:\\n      'The \`source\` prop allows passing in an array of uris, so that native to choose which image ' +\\n      'to diplay based on the size of the of the target image',\\n    render: function() \{\\n      return <MultipleSourcesExample />;\\n    },\\n  },\\n  \{\\n    title: 'Legacy local image',\\n    description:\\n      'Images shipped with the native bundle, but not managed ' +\\n      'by the JS packager',\\n    render: function() \{\\n      return (\\n        <Image\\n          source=\{\{uri: 'legacy_image', width: 120, height: 120}}\\n        />\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Bundled images',\\n    description:\\n      'Images shipped in a separate native bundle',\\n    render: function() \{\\n      return (\\n        <View style=\{\{flexDirection: 'row'}}>\\n          <Image\\n            source=\{\{\\n              url: 'ImageInBundle',\\n              bundle: 'UIExplorerBundle',\\n              width: 100,\\n              height: 100,\\n            }}\\n            style=\{\{borderColor: 'yellow', borderWidth: 4}}\\n          />\\n          <Image\\n            source=\{\{\\n              url: 'ImageInAssetCatalog',\\n              bundle: 'UIExplorerBundle',\\n              width: 100,\\n              height: 100,\\n            }}\\n            style=\{\{marginLeft: 10, borderColor: 'blue', borderWidth: 4}}\\n          />\\n        </View>\\n      );\\n    },\\n    platform: 'ios',\\n  },\\n];\\n\\nvar fullImage = \{uri: 'https://facebook.github.io/react/img/logo_og.png'};\\nvar smallImage = \{uri: 'https://facebook.github.io/react/img/logo_small_2x.png'};\\n\\nvar styles = StyleSheet.create(\{\\n  base: \{\\n    width: 38,\\n    height: 38,\\n  },\\n  progress: \{\\n    flex: 1,\\n    alignItems: 'center',\\n    flexDirection: 'row',\\n    width: 100\\n  },\\n  leftMargin: \{\\n    marginLeft: 10,\\n  },\\n  background: \{\\n    backgroundColor: '#222222'\\n  },\\n  sectionText: \{\\n    marginVertical: 6,\\n  },\\n  nestedText: \{\\n    marginLeft: 12,\\n    marginTop: 20,\\n    backgroundColor: 'transparent',\\n    color: 'white'\\n  },\\n  resizeMode: \{\\n    width: 90,\\n    height: 60,\\n    borderWidth: 0.5,\\n    borderColor: 'black'\\n  },\\n  resizeModeText: \{\\n    fontSize: 11,\\n    marginBottom: 3,\\n  },\\n  icon: \{\\n    width: 15,\\n    height: 15,\\n  },\\n  horizontal: \{\\n    flexDirection: 'row',\\n  },\\n  gif: \{\\n    flex: 1,\\n    height: 200,\\n  },\\n  base64: \{\\n    flex: 1,\\n    height: 50,\\n    resizeMode: 'contain',\\n  },\\n  touchableText: \{\\n    fontWeight: '500',\\n    color: 'blue',\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"image","title":"Image","layout":"autodocs","category":"components","permalink":"docs/image.html","platform":"cross","next":"keyboardavoidingview","previous":"flatlist","sidebar":true,"runnable":true,"path":"Libraries/Image/Image.ios.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;