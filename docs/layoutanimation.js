/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 152,
      "source": "function configureNext(config: Config, onAnimationDidEnd?: Function) \{\\n  if (__DEV__) \{\\n    checkConfig(config, 'config', 'LayoutAnimation.configureNext');\\n  }\\n  UIManager.configureNextLayoutAnimation(\\n    config, onAnimationDidEnd || function() \{}, function() \{ /* unused */ }\\n  );\\n}",
      "docblock": "/**\\n   * Schedules an animation to happen on the next layout.\\n   *\\n   * @param config Specifies animation properties:\\n   *\\n   *   - \`duration\` in milliseconds\\n   *   - \`create\`, config for animating in new views (see \`Anim\` type)\\n   *   - \`update\`, config for animating views that have been updated\\n   * (see \`Anim\` type)\\n   *\\n   * @param onAnimationDidEnd Called when the animation finished.\\n   * Only supported on iOS.\\n   * @param onError Called on error. Only supported on iOS.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Config\\",\\"length\\":1}",
          "name": "config"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onAnimationDidEnd?"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "configureNext"
    },
    \{
      "line": 156,
      "source": "function create(duration: number, type, creationProp): Config \{\\n  return \{\\n    duration,\\n    create: \{\\n      type,\\n      property: creationProp,\\n    },\\n    update: \{\\n      type,\\n    },\\n    delete: \{\\n      type,\\n      property: creationProp,\\n    },\\n  };\\n}",
      "docblock": "/**\\n   * Helper for creating a config for \`configureNext\`.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "duration"
        },
        \{
          "typehint": null,
          "name": "type"
        },
        \{
          "typehint": null,
          "name": "creationProp"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Config\\",\\"length\\":1}",
      "name": "create"
    },
    \{
      "line": 159,
      "source": "function checkConfig(config: Config, location: string, name: string) \{\\n  checkPropTypes(\{config: configType}, \{config}, location, name);\\n}",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Config\\",\\"length\\":1}",
          "name": "config"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "location"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "name"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "checkConfig"
    }
  ],
  "properties": [
    \{
      "name": "Types",
      "type": \{
        "name": "CallExpression"
      },
      "docblock": "",
      "source": "Types",
      "modifiers": [
        "static"
      ],
      "propertySource": "keyMirror(TypesEnum)"
    },
    \{
      "name": "Properties",
      "type": \{
        "name": "CallExpression"
      },
      "docblock": "",
      "source": "Properties",
      "modifiers": [
        "static"
      ],
      "propertySource": "keyMirror(PropertiesEnum)"
    },
    \{
      "name": "Presets",
      "type": \{
        "name": "ObjectExpression"
      },
      "docblock": "",
      "source": "Presets",
      "modifiers": [
        "static"
      ],
      "propertySource": "\{\\n  easeInEaseOut: create(\\n    300, Types.easeInEaseOut, Properties.opacity\\n  ),\\n  linear: create(\\n    500, Types.linear, Properties.opacity\\n  ),\\n  spring: \{\\n    duration: 700,\\n    create: \{\\n      type: Types.linear,\\n      property: Properties.opacity,\\n    },\\n    update: \{\\n      type: Types.spring,\\n      springDamping: 0.4,\\n    },\\n    delete: \{\\n      type: Types.linear,\\n      property: Properties.opacity,\\n    },\\n  },\\n}"
    },
    \{
      "name": "easeInEaseOut",
      "type": \{
        "name": "CallExpression"
      },
      "docblock": "",
      "source": "easeInEaseOut: configureNext.bind(\\n    null, Presets.easeInEaseOut\\n  )",
      "modifiers": [
        "static"
      ],
      "propertySource": "configureNext.bind(\\n    null, Presets.easeInEaseOut\\n  )"
    },
    \{
      "name": "linear",
      "type": \{
        "name": "CallExpression"
      },
      "docblock": "",
      "source": "linear: configureNext.bind(\\n    null, Presets.linear\\n  )",
      "modifiers": [
        "static"
      ],
      "propertySource": "configureNext.bind(\\n    null, Presets.linear\\n  )"
    },
    \{
      "name": "spring",
      "type": \{
        "name": "CallExpression"
      },
      "docblock": "",
      "source": "spring: configureNext.bind(\\n    null, Presets.spring\\n  )",
      "modifiers": [
        "static"
      ],
      "propertySource": "configureNext.bind(\\n    null, Presets.spring\\n  )"
    }
  ],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 137,
  "name": "LayoutAnimation",
  "docblock": "/**\\n * Automatically animates views to their new positions when the\\n * next layout happens.\\n *\\n * A common way to use this API is to call it before calling \`setState\`.\\n *\\n * Note that in order to get this to work on **Android** you need to set the following flags via \`UIManager\`:\\n *\\n *     UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);\\n */\\n",
  "requires": [
    \{
      "name": "UIManager"
    },
    \{
      "name": "fbjs/lib/keyMirror"
    },
    \{
      "name": "react"
    }
  ],
  "filepath": "Libraries/LayoutAnimation/LayoutAnimation.js",
  "componentName": "LayoutAnimation",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/LayoutAnimationExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule LayoutAnimationExample\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst \{\\n  LayoutAnimation,\\n  StyleSheet,\\n  Text,\\n  View,\\n  TouchableOpacity,\\n} = ReactNative;\\n\\nclass AddRemoveExample extends React.Component \{\\n  state = \{\\n    views: [],\\n  };\\n\\n  componentWillUpdate() \{\\n    LayoutAnimation.easeInEaseOut();\\n  }\\n\\n  _onPressAddView = () => \{\\n    this.setState((state) => (\{views: [...state.views, \{}]}));\\n  };\\n\\n  _onPressRemoveView = () => \{\\n    this.setState((state) => (\{views: state.views.slice(0, -1)}));\\n  };\\n\\n  render() \{\\n    const views = this.state.views.map((view, i) =>\\n      <View key=\{i} style=\{styles.view}>\\n        <Text>\{i}</Text>\\n      </View>\\n    );\\n    return (\\n      <View style=\{styles.container}>\\n        <TouchableOpacity onPress=\{this._onPressAddView}>\\n          <View style=\{styles.button}>\\n            <Text>Add view</Text>\\n          </View>\\n        </TouchableOpacity>\\n        <TouchableOpacity onPress=\{this._onPressRemoveView}>\\n          <View style=\{styles.button}>\\n            <Text>Remove view</Text>\\n          </View>\\n        </TouchableOpacity>\\n        <View style=\{styles.viewContainer}>\\n          \{views}\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nconst GreenSquare = () =>\\n  <View style=\{styles.greenSquare}>\\n    <Text>Green square</Text>\\n  </View>;\\n\\nconst BlueSquare = () =>\\n  <View style=\{styles.blueSquare}>\\n    <Text>Blue square</Text>\\n  </View>;\\n\\nclass CrossFadeExample extends React.Component \{\\n  state = \{\\n    toggled: false,\\n  };\\n\\n  _onPressToggle = () => \{\\n    LayoutAnimation.easeInEaseOut();\\n    this.setState((state) => (\{toggled: !state.toggled}));\\n  };\\n\\n  render() \{\\n    return (\\n      <View style=\{styles.container}>\\n        <TouchableOpacity onPress=\{this._onPressToggle}>\\n          <View style=\{styles.button}>\\n            <Text>Toggle</Text>\\n          </View>\\n        </TouchableOpacity>\\n        <View style=\{styles.viewContainer}>\\n          \{\\n            this.state.toggled ?\\n            <GreenSquare /> :\\n            <BlueSquare />\\n          }\\n        </View>\\n      </View>\\n    );\\n  }\\n}\\n\\nconst styles = StyleSheet.create(\{\\n  container: \{\\n    flex: 1,\\n  },\\n  button: \{\\n    borderRadius: 5,\\n    backgroundColor: '#eeeeee',\\n    padding: 10,\\n    marginBottom: 10,\\n  },\\n  buttonText: \{\\n    fontSize: 16,\\n  },\\n  viewContainer: \{\\n    flex: 1,\\n    flexDirection: 'row',\\n    flexWrap: 'wrap',\\n  },\\n  view: \{\\n    height: 54,\\n    width: 54,\\n    backgroundColor: 'red',\\n    margin: 8,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  greenSquare: \{\\n    width: 150,\\n    height: 150,\\n    backgroundColor: 'green',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  blueSquare: \{\\n    width: 150,\\n    height: 150,\\n    backgroundColor: 'blue',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n});\\n\\nexports.title = 'Layout Animation';\\nexports.description = 'Layout animation';\\nexports.examples = [\{\\n  title: 'Add and remove views',\\n  render(): React.Element<any> \{\\n    return <AddRemoveExample />;\\n  },\\n}, \{\\n  title: 'Cross fade views',\\n  render(): React.Element<any> \{\\n    return <CrossFadeExample />;\\n  },\\n}];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"layoutanimation","title":"LayoutAnimation","layout":"autodocs","category":"APIs","permalink":"docs/layoutanimation.html","platform":"cross","next":"linking","previous":"keyboard","sidebar":true,"runnable":true,"path":"Libraries/LayoutAnimation/LayoutAnimation.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;