/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A performant interface for rendering simple, flat lists, supporting the most handy features:\\n\\n - Fully cross-platform.\\n - Optional horizontal mode.\\n - Configurable viewability callbacks.\\n - Header support.\\n - Footer support.\\n - Separator support.\\n - Pull to Refresh.\\n - Scroll loading.\\n - ScrollToIndex support.\\n\\nIf you need section support, use [\`<SectionList>\`](docs/sectionlist.html).\\n\\nMinimal Example:\\n\\n    <FlatList\\n      data=\{[\{key: 'a'}, \{key: 'b'}]}\\n      renderItem=\{(\{item}) => <Text>\{item.key}</Text>}\\n    />\\n\\nMore complex example demonstrating \`PureComponent\` usage for perf optimization and avoiding bugs.\\n\\n- By binding the \`onPressItem\` handler, the props will remain \`===\` and \`PureComponent\` will\\n  prevent wasteful re-renders unless the actual \`id\`, \`selected\`, or \`title\` props change, even\\n  if the inner \`SomeOtherWidget\` has no such optimizations.\\n- By passing \`extraData=\{this.state}\` to \`FlatList\` we make sure \`FlatList\` itself will re-render\\n  when the \`state.selected\` changes. Without setting this prop, \`FlatList\` would not know it\\n  needs to re-render any items because it is also a \`PureComponent\` and the prop comparison will\\n  not show any changes.\\n- \`keyExtractor\` tells the list to use the \`id\`s for the react keys.\\n\\n\\n    class MyListItem extends React.PureComponent \{\\n      _onPress = () => \{\\n        this.props.onPressItem(this.props.id);\\n      };\\n\\n      render() \{\\n        return (\\n          <SomeOtherWidget\\n            \{...this.props}\\n            onPress=\{this._onPress}\\n          />\\n        )\\n      }\\n    }\\n\\n    class MyList extends React.PureComponent \{\\n      state = \{selected: (new Map(): Map<string, boolean>)};\\n\\n      _keyExtractor = (item, index) => item.id;\\n\\n      _onPressItem = (id: string) => \{\\n        // updater functions are preferred for transactional updates\\n        this.setState((state) => \{\\n          // copy the map rather than modifying state.\\n          const selected = new Map(state.selected);\\n          selected.set(id, !state.get(id)); // toggle\\n          return \{selected};\\n        });\\n      };\\n\\n      _renderItem = (\{item}) => (\\n        <MyListItem\\n          id=\{item.id}\\n          onPressItem=\{this._onPressItem}\\n          selected=\{!!this.state.selected.get(item.id)}\\n          title=\{item.title}\\n        />\\n      );\\n\\n      render() \{\\n        return (\\n          <FlatList\\n            data=\{this.props.data}\\n            extraData=\{this.state}\\n            keyExtractor=\{this._keyExtractor}\\n            renderItem=\{this._renderItem}\\n          />\\n        );\\n      }\\n    }\\n\\nThis is a convenience wrapper around [\`<VirtualizedList>\`](docs/virtualizedlist.html),\\nand thus inherits it's props (as well as those of \`ScrollView\`) that aren't explicitly listed\\nhere, along with the following caveats:\\n\\n- Internal state is not preserved when content scrolls out of the render window. Make sure all\\n  your data is captured in the item data or external stores like Flux, Redux, or Relay.\\n- This is a \`PureComponent\` which means that it will not re-render if \`props\` remain shallow-\\n  equal. Make sure that everything your \`renderItem\` function depends on is passed as a prop\\n  (e.g. \`extraData\`) that is not \`===\` after updates, otherwise your UI may not update on\\n  changes. This includes the \`data\` prop and parent component state.\\n- In order to constrain memory and enable smooth scrolling, content is rendered asynchronously\\n  offscreen. This means it's possible to scroll faster than the fill rate ands momentarily see\\n  blank content. This is a tradeoff that can be adjusted to suit the needs of each application,\\n  and we are working on improving it behind the scenes.\\n- By default, the list looks for a \`key\` prop on each item and uses that for the React key.\\n  Alternatively, you can provide a custom \`keyExtractor\` prop.\\n\\nNOTE: \`removeClippedSubviews\` might not be necessary and may cause bugs. If you see issues with\\ncontent not rendering, e.g when using \`LayoutAnimation\`, try setting\\n\`removeClippedSubviews=\{false}\`, and we may change the default in the future after more\\nexperimentation in production apps.",
  "methods": [
    \{
      "name": "scrollToEnd",
      "docblock": "Scrolls to the end of the content. May be janky without \`getItemLayout\` prop.",
      "modifiers": [],
      "params": [
        \{
          "name": "params",
          "optional": true,
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Scrolls to the end of the content. May be janky without \`getItemLayout\` prop."
    },
    \{
      "name": "scrollToIndex",
      "docblock": "Scrolls to the item at a the specified index such that it is positioned in the viewable area\\nsuch that \`viewPosition\` 0 places it at the top, 1 at the bottom, and 0.5 centered in the\\nmiddle. \`viewOffset\` is a fixed number of pixels to offset the final target position.\\n\\nNote: cannot scroll to locations outside the render window without specifying the\\n\`getItemLayout\` prop.",
      "modifiers": [],
      "params": [
        \{
          "name": "params",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Scrolls to the item at a the specified index such that it is positioned in the viewable area\\nsuch that \`viewPosition\` 0 places it at the top, 1 at the bottom, and 0.5 centered in the\\nmiddle. \`viewOffset\` is a fixed number of pixels to offset the final target position.\\n\\nNote: cannot scroll to locations outside the render window without specifying the\\n\`getItemLayout\` prop."
    },
    \{
      "name": "scrollToItem",
      "docblock": "Requires linear scan through data - use \`scrollToIndex\` instead if possible.\\n\\nNote: cannot scroll to locations outside the render window without specifying the\\n\`getItemLayout\` prop.",
      "modifiers": [],
      "params": [
        \{
          "name": "params",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Requires linear scan through data - use \`scrollToIndex\` instead if possible.\\n\\nNote: cannot scroll to locations outside the render window without specifying the\\n\`getItemLayout\` prop."
    },
    \{
      "name": "scrollToOffset",
      "docblock": "Scroll to a specific content pixel offset, like a normal \`ScrollView\`.",
      "modifiers": [],
      "params": [
        \{
          "name": "params",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Scroll to a specific content pixel offset, like a normal \`ScrollView\`."
    },
    \{
      "name": "recordInteraction",
      "docblock": "Tells the list an interaction has occured, which should trigger viewability calculations, e.g.\\nif \`waitForInteractions\` is true and the user has not scrolled. This is typically called by\\ntaps on items or by navigation actions.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Tells the list an interaction has occured, which should trigger viewability calculations, e.g.\\nif \`waitForInteractions\` is true and the user has not scrolled. This is typically called by\\ntaps on items or by navigation actions."
    }
  ],
  "props": \{
    "renderItem": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{item: ItemT, index: number}) => ?React.Element<any>",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{item: ItemT, index: number}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "item",
                      "value": \{
                        "name": "ItemT",
                        "required": true
                      }
                    },
                    \{
                      "key": "index",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>",
            "nullable": true
          }
        }
      },
      "required": true,
      "description": "Takes an item from \`data\` and renders it into the list. Typical usage:\\n\\n    _renderItem = (\{item}) => (\\n      <TouchableOpacity onPress=\{() => this._onPress(item)}>\\n        <Text>\{item.title}}</Text>\\n      </TouchableOpacity>\\n    );\\n    ...\\n    <FlatList data=\{[\{title: 'Title Text', key: 'item1'}]} renderItem=\{this._renderItem} />\\n\\nProvides additional metadata like \`index\` if you need it."
    },
    "data": \{
      "flowType": \{
        "name": "Array",
        "elements": [
          \{
            "name": "ItemT"
          }
        ],
        "raw": "Array<ItemT>",
        "nullable": true
      },
      "required": true,
      "description": "For simplicity, data is just a plain array. If you want to use something else, like an\\nimmutable list, use the underlying \`VirtualizedList\` directly."
    },
    "ItemSeparatorComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered in between each item, but not at the top or bottom."
    },
    "ListFooterComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the bottom of all the items."
    },
    "ListHeaderComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the top of all the items."
    },
    "columnWrapperStyle": \{
      "flowType": \{
        "name": "StyleObj"
      },
      "required": false,
      "description": "Optional custom style for multi-item rows generated when numColumns > 1."
    },
    "extraData": \{
      "flowType": \{
        "name": "any"
      },
      "required": false,
      "description": "A marker property for telling the list to re-render (since it implements \`PureComponent\`). If\\nany of your \`renderItem\`, Header, Footer, etc. functions depend on anything outside of the\\n\`data\` prop, stick it here and treat it immutably."
    },
    "getItemLayout": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(data: ?Array<ItemT>, index: number) =>\\n  \{length: number, offset: number, index: number}",
        "signature": \{
          "arguments": [
            \{
              "name": "data",
              "type": \{
                "name": "Array",
                "elements": [
                  \{
                    "name": "ItemT"
                  }
                ],
                "raw": "Array<ItemT>",
                "nullable": true
              }
            },
            \{
              "name": "index",
              "type": \{
                "name": "number"
              }
            }
          ],
          "return": \{
            "name": "signature",
            "type": "object",
            "raw": "\{length: number, offset: number, index: number}",
            "signature": \{
              "properties": [
                \{
                  "key": "length",
                  "value": \{
                    "name": "number",
                    "required": true
                  }
                },
                \{
                  "key": "offset",
                  "value": \{
                    "name": "number",
                    "required": true
                  }
                },
                \{
                  "key": "index",
                  "value": \{
                    "name": "number",
                    "required": true
                  }
                }
              ]
            }
          }
        }
      },
      "required": false,
      "description": "\`getItemLayout\` is an optional optimizations that let us skip measurement of dynamic content if\\nyou know the height of items a priori. \`getItemLayout\` is the most efficient, and is easy to\\nuse if you have fixed height items, for example:\\n\\n    getItemLayout=\{(data, index) => (\\n      \{length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}\\n    )}\\n\\nRemember to include separator length (height or width) in your offset calculation if you\\nspecify \`ItemSeparatorComponent\`."
    },
    "horizontal": \{
      "flowType": \{
        "name": "boolean",
        "nullable": true
      },
      "required": false,
      "description": "If true, renders items next to each other horizontally instead of stacked vertically."
    },
    "initialNumToRender": \{
      "flowType": \{
        "name": "number"
      },
      "required": true,
      "description": "How many items to render in the initial batch. This should be enough to fill the screen but not\\nmuch more. Note these items will never be unmounted as part of the windowed rendering in order\\nto improve perceived performance of scroll-to-top actions."
    },
    "keyExtractor": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(item: ItemT, index: number) => string",
        "signature": \{
          "arguments": [
            \{
              "name": "item",
              "type": \{
                "name": "ItemT"
              }
            },
            \{
              "name": "index",
              "type": \{
                "name": "number"
              }
            }
          ],
          "return": \{
            "name": "string"
          }
        }
      },
      "required": true,
      "description": "Used to extract a unique key for a given item at the specified index. Key is used for caching\\nand as the react key to track item re-ordering. The default extractor checks \`item.key\`, then\\nfalls back to using the index, like React does."
    },
    "numColumns": \{
      "flowType": \{
        "name": "number"
      },
      "required": true,
      "description": "Multiple columns can only be rendered with \`horizontal=\{false}\` and will zig-zag like a\\n\`flexWrap\` layout. Items should all be the same height - masonry layouts are not supported.",
      "defaultValue": \{
        "value": "1",
        "computed": false
      }
    },
    "onEndReached": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{distanceFromEnd: number}) => void",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{distanceFromEnd: number}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "distanceFromEnd",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Called once when the scroll position gets within \`onEndReachedThreshold\` of the rendered\\ncontent."
    },
    "onEndReachedThreshold": \{
      "flowType": \{
        "name": "number",
        "nullable": true
      },
      "required": false,
      "description": "How far from the end (in units of visible length of the list) the bottom edge of the\\nlist must be from the end of the content to trigger the \`onEndReached\` callback.\\nThus a value of 0.5 will trigger \`onEndReached\` when the end of the content is\\nwithin half the visible length of the list."
    },
    "onRefresh": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": \{
          "arguments": [],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "If provided, a standard RefreshControl will be added for \\"Pull to Refresh\\" functionality. Make\\nsure to also set the \`refreshing\` prop correctly."
    },
    "onViewableItemsChanged": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{\\n  viewableItems: Array<ViewToken>,\\n  changed: Array<ViewToken>,\\n}) => void",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{\\n  viewableItems: Array<ViewToken>,\\n  changed: Array<ViewToken>,\\n}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "viewableItems",
                      "value": \{
                        "name": "Array",
                        "elements": [
                          \{
                            "name": "ViewToken"
                          }
                        ],
                        "raw": "Array<ViewToken>",
                        "required": true
                      }
                    },
                    \{
                      "key": "changed",
                      "value": \{
                        "name": "Array",
                        "elements": [
                          \{
                            "name": "ViewToken"
                          }
                        ],
                        "raw": "Array<ViewToken>",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Called when the viewability of rows changes, as defined by the \`viewabilityConfig\` prop."
    },
    "legacyImplementation": \{
      "flowType": \{
        "name": "boolean",
        "nullable": true
      },
      "required": false,
      "description": ""
    },
    "refreshing": \{
      "flowType": \{
        "name": "boolean",
        "nullable": true
      },
      "required": false,
      "description": "Set this true while waiting for new data from a refresh."
    },
    "viewabilityConfig": \{
      "flowType": \{
        "name": "ViewabilityConfig"
      },
      "required": false,
      "description": "See \`ViewabilityHelper\` for flow type and further documentation."
    },
    "getItem": \{
      "defaultValue": \{
        "value": "undefined",
        "computed": true
      }
    },
    "getItemCount": \{
      "defaultValue": \{
        "value": "undefined",
        "computed": true
      }
    }
  },
  "type": "component",
  "filepath": "Libraries/Lists/FlatList.js",
  "componentName": "FlatList",
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
      "path": "Examples/UIExplorer/js/FlatListExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule FlatListExample\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst \{\\n  Animated,\\n  FlatList,\\n  StyleSheet,\\n  View,\\n} = ReactNative;\\n\\nconst UIExplorerPage = require\('./UIExplorerPage');\\n\\nconst infoLog = require\('infoLog');\\n\\nconst \{\\n  FooterComponent,\\n  HeaderComponent,\\n  ItemComponent,\\n  PlainInput,\\n  SeparatorComponent,\\n  Spindicator,\\n  genItemData,\\n  getItemLayout,\\n  pressItem,\\n  renderSmallSwitchOption,\\n} = require\('./ListExampleShared');\\n\\nconst AnimatedFlatList = Animated.createAnimatedComponent(FlatList);\\n\\nconst VIEWABILITY_CONFIG = \{\\n  minimumViewTime: 3000,\\n  viewAreaCoveragePercentThreshold: 100,\\n  waitForInteraction: true,\\n};\\n\\nclass FlatListExample extends React.PureComponent \{\\n  static title = '<FlatList>';\\n  static description = 'Performant, scrollable list of data.';\\n\\n  state = \{\\n    data: genItemData(100),\\n    debug: false,\\n    horizontal: false,\\n    filterText: '',\\n    fixedHeight: true,\\n    logViewable: false,\\n    virtualized: true,\\n  };\\n\\n  _onChangeFilterText = (filterText) => \{\\n    this.setState(\{filterText});\\n  };\\n\\n  _onChangeScrollToIndex = (text) => \{\\n    this._listRef.getNode().scrollToIndex(\{viewPosition: 0.5, index: Number(text)});\\n  };\\n\\n  _scrollPos = new Animated.Value(0);\\n  _scrollSinkX = Animated.event(\\n    [\{nativeEvent: \{ contentOffset: \{ x: this._scrollPos } }}],\\n    \{useNativeDriver: true},\\n  );\\n  _scrollSinkY = Animated.event(\\n    [\{nativeEvent: \{ contentOffset: \{ y: this._scrollPos } }}],\\n    \{useNativeDriver: true},\\n  );\\n\\n  componentDidUpdate() \{\\n    this._listRef.getNode().recordInteraction(); // e.g. flipping logViewable switch\\n  }\\n\\n  render() \{\\n    const filterRegex = new RegExp(String(this.state.filterText), 'i');\\n    const filter = (item) => (\\n      filterRegex.test(item.text) || filterRegex.test(item.title)\\n    );\\n    const filteredData = this.state.data.filter(filter);\\n    return (\\n      <UIExplorerPage\\n        noSpacer=\{true}\\n        noScroll=\{true}>\\n        <View style=\{styles.searchRow}>\\n          <View style=\{styles.options}>\\n            <PlainInput\\n              onChangeText=\{this._onChangeFilterText}\\n              placeholder=\\"Search...\\"\\n              value=\{this.state.filterText}\\n            />\\n            <PlainInput\\n              onChangeText=\{this._onChangeScrollToIndex}\\n              placeholder=\\"scrollToIndex...\\"\\n            />\\n          </View>\\n          <View style=\{styles.options}>\\n            \{renderSmallSwitchOption(this, 'virtualized')}\\n            \{renderSmallSwitchOption(this, 'horizontal')}\\n            \{renderSmallSwitchOption(this, 'fixedHeight')}\\n            \{renderSmallSwitchOption(this, 'logViewable')}\\n            \{renderSmallSwitchOption(this, 'debug')}\\n            <Spindicator value=\{this._scrollPos} />\\n          </View>\\n        </View>\\n        <SeparatorComponent />\\n        <AnimatedFlatList\\n          ItemSeparatorComponent=\{SeparatorComponent}\\n          ListHeaderComponent=\{HeaderComponent}\\n          ListFooterComponent=\{FooterComponent}\\n          data=\{filteredData}\\n          debug=\{this.state.debug}\\n          disableVirtualization=\{!this.state.virtualized}\\n          getItemLayout=\{this.state.fixedHeight ?\\n            this._getItemLayout :\\n            undefined\\n          }\\n          horizontal=\{this.state.horizontal}\\n          key=\{(this.state.horizontal ? 'h' : 'v') +\\n            (this.state.fixedHeight ? 'f' : 'd')\\n          }\\n          legacyImplementation=\{false}\\n          numColumns=\{1}\\n          onEndReached=\{this._onEndReached}\\n          onRefresh=\{this._onRefresh}\\n          onScroll=\{this.state.horizontal ? this._scrollSinkX : this._scrollSinkY}\\n          onViewableItemsChanged=\{this._onViewableItemsChanged}\\n          ref=\{this._captureRef}\\n          refreshing=\{false}\\n          renderItem=\{this._renderItemComponent}\\n          viewabilityConfig=\{VIEWABILITY_CONFIG}\\n        />\\n      </UIExplorerPage>\\n    );\\n  }\\n  _captureRef = (ref) => \{ this._listRef = ref; };\\n  _getItemLayout = (data: any, index: number) => \{\\n    return getItemLayout(data, index, this.state.horizontal);\\n  };\\n  _onEndReached = () => \{\\n    this.setState((state) => (\{\\n      data: state.data.concat(genItemData(100, state.data.length)),\\n    }));\\n  };\\n  _onRefresh = () => alert('onRefresh: nothing to refresh :P');\\n  _renderItemComponent = (\{item}) => \{\\n    return (\\n      <ItemComponent\\n        item=\{item}\\n        horizontal=\{this.state.horizontal}\\n        fixedHeight=\{this.state.fixedHeight}\\n        onPress=\{this._pressItem}\\n      />\\n    );\\n  };\\n  // This is called when items change viewability by scrolling into or out of\\n  // the viewable area.\\n  _onViewableItemsChanged = (info: \{\\n      changed: Array<\{\\n        key: string,\\n        isViewable: boolean,\\n        item: any,\\n        index: ?number,\\n        section?: any,\\n      }>\\n    }\\n  ) => \{\\n    // Impressions can be logged here\\n    if (this.state.logViewable) \{\\n      infoLog(\\n        'onViewableItemsChanged: ',\\n        info.changed.map((v) => (\{...v, item: '...'})),\\n      );\\n    }\\n  };\\n  _pressItem = (key: number) => \{\\n    this._listRef.getNode().recordInteraction();\\n    pressItem(this, key);\\n  };\\n  _listRef: AnimatedFlatList;\\n}\\n\\n\\nconst styles = StyleSheet.create(\{\\n  options: \{\\n    flexDirection: 'row',\\n    flexWrap: 'wrap',\\n    alignItems: 'center',\\n  },\\n  searchRow: \{\\n    paddingHorizontal: 10,\\n  },\\n});\\n\\nmodule.exports = FlatListExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"flatlist","title":"FlatList","layout":"autodocs","category":"components","permalink":"docs/flatlist.html","platform":"cross","next":"image","previous":"drawerlayoutandroid","sidebar":true,"runnable":true,"path":"Libraries/Lists/FlatList.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;