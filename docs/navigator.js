/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "\`Navigator\` handles the transition between different scenes in your app.\\nIt is implemented in JavaScript and is available on both iOS and Android. If\\nyou are targeting iOS only, you may also want to consider using\\n[\`NavigatorIOS\`](docs/navigatorios.html) as it leverages native UIKit\\nnavigation.\\n\\nTo set up the \`Navigator\` you provide one or more objects called routes,\\nto identify each scene. You also provide a \`renderScene\` function that\\nrenders the scene for each route object.\\n\\n\`\`\`\\nimport React, \{ Component } from 'react';\\nimport \{ Text, Navigator, TouchableHighlight } from 'react-native';\\n\\nexport default class NavAllDay extends Component \{\\n  render() \{\\n    return (\\n      <Navigator\\n        initialRoute=\{\{ title: 'Awesome Scene', index: 0 }}\\n        renderScene=\{(route, navigator) =>\\n          <Text>Hello \{route.title}!</Text>\\n        }\\n        style=\{\{padding: 100}}\\n      />\\n    );\\n  }\\n}\\n\`\`\`\\n\\nIn the above example, \`initialRoute\` is used to specify the first route. It\\ncontains a \`title\` property that identifies the route. The \`renderScene\`\\nprop returns a function that displays text based on the route's title.\\n\\n### Additional Scenes\\n\\nThe first example demonstrated one scene. To set up multiple scenes, you pass\\nthe \`initialRouteStack\` prop to \`Navigator\`:\\n\\n\`\`\`\\nrender() \{\\n  const routes = [\\n    \{title: 'First Scene', index: 0},\\n    \{title: 'Second Scene', index: 1},\\n  ];\\n  return (\\n    <Navigator\\n      initialRoute=\{routes[0]}\\n      initialRouteStack=\{routes}\\n      renderScene=\{(route, navigator) =>\\n        <TouchableHighlight onPress=\{() => \{\\n          if (route.index === 0) \{\\n            navigator.push(routes[1]);\\n          } else \{\\n            navigator.pop();\\n          }\\n        }}>\\n        <Text>Hello \{route.title}!</Text>\\n        </TouchableHighlight>\\n      }\\n      style=\{\{padding: 100}}\\n    />\\n  );\\n}\\n\`\`\`\\n\\nIn the above example, a \`routes\` variable is defined with two route objects\\nrepresenting two scenes. Each route has an \`index\` property that is used to\\nmanage the scene being rendered. The \`renderScene\` method is changed to\\neither push or pop the navigator depending on the current route's index.\\nFinally, the \`Text\` component in the scene is now wrapped in a\\n\`TouchableHighlight\` component to help trigger the navigator transitions.\\n\\n### Navigation Bar\\n\\nYou can optionally pass in your own navigation bar by returning a\\n\`Navigator.NavigationBar\` component to the \`navigationBar\` prop in\\n\`Navigator\`. You can configure the navigation bar properties, through\\nthe \`routeMapper\` prop. There you set up the left, right, and title\\nproperties of the navigation bar:\\n\\n\`\`\`\\n<Navigator\\n  renderScene=\{(route, navigator) =>\\n    // ...\\n  }\\n  navigationBar=\{\\n     <Navigator.NavigationBar\\n       routeMapper=\{\{\\n         LeftButton: (route, navigator, index, navState) =>\\n          \{ return (<Text>Cancel</Text>); },\\n         RightButton: (route, navigator, index, navState) =>\\n           \{ return (<Text>Done</Text>); },\\n         Title: (route, navigator, index, navState) =>\\n           \{ return (<Text>Awesome Nav Bar</Text>); },\\n       }}\\n       style=\{\{backgroundColor: 'gray'}}\\n     />\\n  }\\n/>\\n\`\`\`\\n\\nWhen configuring the left, right, and title items for the navigation bar,\\nyou have access to info such as the current route object and navigation\\nstate. This allows you to customize the title for each scene as well as\\nthe buttons. For example, you can choose to hide the left button for one of\\nthe scenes.\\n\\nTypically you want buttons to represent the left and right buttons. Building\\non the previous example, you can set this up as follows:\\n\\n\`\`\`\\nLeftButton: (route, navigator, index, navState) =>\\n  \{\\n    if (route.index === 0) \{\\n      return null;\\n    } else \{\\n      return (\\n        <TouchableHighlight onPress=\{() => navigator.pop()}>\\n          <Text>Back</Text>\\n        </TouchableHighlight>\\n      );\\n    }\\n  },\\n\`\`\`\\n\\nThis sets up a left navigator bar button that's visible on scenes after the\\nthe first one. When the button is tapped the navigator is popped.\\n\\nAnother type of navigation bar, with breadcrumbs, is provided by\\n\`Navigator.BreadcrumbNavigationBar\`. You can also provide your own navigation\\nbar by passing it through the \`navigationBar\` prop. See the\\n[UIExplorer](https://github.com/facebook/react-native/tree/master/Examples/UIExplorer)\\ndemo to try out both built-in navigation bars out and see how to use them.\\n\\n### Scene Transitions\\n\\nTo change the animation or gesture properties of the scene, provide a\\n\`configureScene\` prop to get the config object for a given route:\\n\\n\`\`\`\\n<Navigator\\n  renderScene=\{(route, navigator) =>\\n    // ...\\n  }\\n  configureScene=\{(route, routeStack) =>\\n    Navigator.SceneConfigs.FloatFromBottom}\\n/>\\n\`\`\`\\nIn the above example, the newly pushed scene will float up from the bottom.\\nSee \`Navigator.SceneConfigs\` for default animations and more info on\\navailable [scene config options](docs/navigator.html#configurescene).",
  "methods": [
    \{
      "name": "immediatelyResetRouteStack",
      "docblock": "Reset every scene with an array of routes.\\n\\n@param \{RouteStack} nextRouteStack Next route stack to reinitialize.\\nAll existing route stacks are destroyed and potentially recreated. There\\nis no accompanying animation and this method immediately replaces and\\nre-renders the navigation bar and the stack items.",
      "modifiers": [],
      "params": [
        \{
          "name": "nextRouteStack",
          "description": "Next route stack to reinitialize.\\nAll existing route stacks are destroyed and potentially recreated. There\\nis no accompanying animation and this method immediately replaces and\\nre-renders the navigation bar and the stack items.",
          "type": \{
            "names": [
              "RouteStack"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Reset every scene with an array of routes."
    },
    \{
      "name": "jumpTo",
      "docblock": "Transition to an existing scene without unmounting.\\n@param \{object} route Route to transition to. The specified route must\\nbe in the currently mounted set of routes defined in \`routeStack\`.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route to transition to. The specified route must\\nbe in the currently mounted set of routes defined in \`routeStack\`.",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Transition to an existing scene without unmounting."
    },
    \{
      "name": "jumpForward",
      "docblock": "Jump forward to the next scene in the route stack.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Jump forward to the next scene in the route stack."
    },
    \{
      "name": "jumpBack",
      "docblock": "Jump backward without unmounting the current scene.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Jump backward without unmounting the current scene."
    },
    \{
      "name": "push",
      "docblock": "Navigate forward to a new scene, squashing any scenes that you could\\njump forward to.\\n@param \{object} route Route to push into the navigator stack.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route to push into the navigator stack.",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Navigate forward to a new scene, squashing any scenes that you could\\njump forward to."
    },
    \{
      "name": "popN",
      "docblock": "Go back N scenes at once. When N=1, behavior matches \`pop()\`.\\nWhen N is invalid(negative or bigger than current routes count), do nothing.\\n@param \{number} n The number of scenes to pop. Should be an integer.",
      "modifiers": [],
      "params": [
        \{
          "name": "n",
          "description": "The number of scenes to pop. Should be an integer.",
          "type": \{
            "names": [
              "number"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Go back N scenes at once. When N=1, behavior matches \`pop()\`.\\nWhen N is invalid(negative or bigger than current routes count), do nothing."
    },
    \{
      "name": "pop",
      "docblock": "Transition back and unmount the current scene.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Transition back and unmount the current scene."
    },
    \{
      "name": "replaceAtIndex",
      "docblock": "Replace a scene as specified by an index.\\n@param \{object} route Route representing the new scene to render.\\n@param \{number} index The route in the stack that should be replaced.\\n  If negative, it counts from the back of the stack.\\n@param \{Function} cb Callback function when the scene has been replaced.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route representing the new scene to render.",
          "type": \{
            "names": [
              "object"
            ]
          }
        },
        \{
          "name": "index",
          "description": "The route in the stack that should be replaced.\\n  If negative, it counts from the back of the stack.",
          "type": \{
            "names": [
              "number"
            ]
          }
        },
        \{
          "name": "cb",
          "description": "Callback function when the scene has been replaced.",
          "type": \{
            "names": [
              "Function"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Replace a scene as specified by an index."
    },
    \{
      "name": "replace",
      "docblock": "Replace the current scene with a new route.\\n@param \{object} route Route that replaces the current scene.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route that replaces the current scene.",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Replace the current scene with a new route."
    },
    \{
      "name": "replacePrevious",
      "docblock": "Replace the previous scene.\\n@param \{object} route Route that replaces the previous scene.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route that replaces the previous scene.",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Replace the previous scene."
    },
    \{
      "name": "popToTop",
      "docblock": "Pop to the first scene in the stack, unmounting every other scene.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Pop to the first scene in the stack, unmounting every other scene."
    },
    \{
      "name": "popToRoute",
      "docblock": "Pop to a particular scene, as specified by its route.\\nAll scenes after it will be unmounted.\\n@param \{object} route Route to pop to.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route to pop to.",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Pop to a particular scene, as specified by its route.\\nAll scenes after it will be unmounted."
    },
    \{
      "name": "replacePreviousAndPop",
      "docblock": "Replace the previous scene and pop to it.\\n@param \{object} route Route that replaces the previous scene.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route that replaces the previous scene.",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Replace the previous scene and pop to it."
    },
    \{
      "name": "resetTo",
      "docblock": "Navigate to a new scene and reset route stack.\\n@param \{object} route Route to navigate to.",
      "modifiers": [],
      "params": [
        \{
          "name": "route",
          "description": "Route to navigate to.",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Navigate to a new scene and reset route stack."
    },
    \{
      "name": "getCurrentRoutes",
      "docblock": "Returns the current list of routes.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Returns the current list of routes."
    }
  ],
  "props": \{
    "configureScene": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Optional function where you can configure scene animations and\\ngestures. Will be invoked with \`route\` and \`routeStack\` parameters,\\nwhere \`route\` corresponds to the current scene being rendered by the\\n\`Navigator\` and \`routeStack\` is the set of currently mounted routes\\nthat the navigator could transition to.\\n\\nThe function should return a scene configuration object.\\n\\n\`\`\`\\n(route, routeStack) => Navigator.SceneConfigs.FloatFromRight\\n\`\`\`\\n\\nAvailable scene configuration options are:\\n\\n - Navigator.SceneConfigs.PushFromRight (default)\\n - Navigator.SceneConfigs.FloatFromRight\\n - Navigator.SceneConfigs.FloatFromLeft\\n - Navigator.SceneConfigs.FloatFromBottom\\n - Navigator.SceneConfigs.FloatFromBottomAndroid\\n - Navigator.SceneConfigs.FadeAndroid\\n - Navigator.SceneConfigs.SwipeFromLeft\\n - Navigator.SceneConfigs.HorizontalSwipeJump\\n - Navigator.SceneConfigs.HorizontalSwipeJumpFromRight\\n - Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft\\n - Navigator.SceneConfigs.VerticalUpSwipeJump\\n - Navigator.SceneConfigs.VerticalDownSwipeJump",
      "defaultValue": \{
        "value": "() => NavigatorSceneConfigs.PushFromRight",
        "computed": false
      }
    },
    "renderScene": \{
      "type": \{
        "name": "func"
      },
      "required": true,
      "description": "Required function which renders the scene for a given route. Will be\\ninvoked with the \`route\` and the \`navigator\` object.\\n\\n\`\`\`\\n(route, navigator) =>\\n  <MySceneComponent title=\{route.title} navigator=\{navigator} />\\n\`\`\`"
    },
    "initialRoute": \{
      "type": \{
        "name": "object"
      },
      "required": false,
      "description": "The initial route for navigation. A route is an object that the navigator\\nwill use to identify each scene it renders.\\n\\nIf both \`initialRoute\` and \`initialRouteStack\` props are passed to\\n\`Navigator\`, then \`initialRoute\` must be in a route in\\n\`initialRouteStack\`. If \`initialRouteStack\` is passed as a prop but\\n\`initialRoute\` is not, then \`initialRoute\` will default internally to\\nthe last item in \`initialRouteStack\`."
    },
    "initialRouteStack": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "object"
        }
      },
      "required": false,
      "description": "Pass this in to provide a set of routes to initially mount. This prop\\nis required if \`initialRoute\` is not provided to the navigator. If this\\nprop is not passed in, it will default internally to an array\\ncontaining only \`initialRoute\`."
    },
    "onWillFocus": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Pass in a function to get notified with the target route when\\nthe navigator component is mounted and before each navigator transition."
    },
    "onDidFocus": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Will be called with the new route of each scene after the transition is\\ncomplete or after the initial mounting."
    },
    "navigationBar": \{
      "type": \{
        "name": "node"
      },
      "required": false,
      "description": "Use this to provide an optional component representing a navigation bar\\nthat is persisted across scene transitions. This component will receive\\ntwo props: \`navigator\` and \`navState\` representing the navigator\\ncomponent and its state. The component is re-rendered when the route\\nchanges."
    },
    "navigator": \{
      "type": \{
        "name": "object"
      },
      "required": false,
      "description": "Optionally pass in the navigator object from a parent \`Navigator\`."
    },
    "sceneStyle": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "Styles to apply to the container of each scene.",
      "defaultValue": \{
        "value": "styles.defaultSceneStyle",
        "computed": true
      }
    }
  },
  "type": "component",
  "filepath": "Libraries/CustomComponents/Navigator/Navigator.js",
  "componentName": "Navigator",
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
  "examples": []
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"navigator","title":"Navigator","layout":"autodocs","category":"components","permalink":"docs/navigator.html","platform":"cross","next":"navigatorios","previous":"modal","sidebar":true,"runnable":false,"path":"Libraries/CustomComponents/Navigator/Navigator.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;