/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 44,
      "source": "show: function (\\n    message: string,\\n    duration: number\\n  ): void \{\\n    RCTToastAndroid.show(message, duration);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "message"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "duration"
        }
      ],
      "tparams": null,
      "returntypehint": "void",
      "name": "show"
    },
    \{
      "line": 51,
      "source": "showWithGravity: function (\\n    message: string,\\n    duration: number,\\n    gravity: number,\\n  ): void \{\\n    RCTToastAndroid.showWithGravity(message, duration, gravity);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "message"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "duration"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "gravity"
        }
      ],
      "tparams": null,
      "returntypehint": "void",
      "name": "showWithGravity"
    }
  ],
  "properties": [
    \{
      "name": "SHORT",
      "type": \{
        "name": "MemberExpression"
      },
      "docblock": "// Toast duration constants",
      "source": "SHORT: RCTToastAndroid.SHORT",
      "modifiers": [
        "static"
      ],
      "propertySource": "RCTToastAndroid.SHORT"
    },
    \{
      "name": "LONG",
      "type": \{
        "name": "MemberExpression"
      },
      "docblock": "",
      "source": "LONG: RCTToastAndroid.LONG",
      "modifiers": [
        "static"
      ],
      "propertySource": "RCTToastAndroid.LONG"
    },
    \{
      "name": "TOP",
      "type": \{
        "name": "MemberExpression"
      },
      "docblock": "// Toast gravity constants",
      "source": "TOP: RCTToastAndroid.TOP",
      "modifiers": [
        "static"
      ],
      "propertySource": "RCTToastAndroid.TOP"
    },
    \{
      "name": "BOTTOM",
      "type": \{
        "name": "MemberExpression"
      },
      "docblock": "",
      "source": "BOTTOM: RCTToastAndroid.BOTTOM",
      "modifiers": [
        "static"
      ],
      "propertySource": "RCTToastAndroid.BOTTOM"
    },
    \{
      "name": "CENTER",
      "type": \{
        "name": "MemberExpression"
      },
      "docblock": "",
      "source": "CENTER: RCTToastAndroid.CENTER",
      "modifiers": [
        "static"
      ],
      "propertySource": "RCTToastAndroid.CENTER"
    }
  ],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 33,
  "name": "ToastAndroid",
  "docblock": "/**\\n * This exposes the native ToastAndroid module as a JS module. This has a function 'show'\\n * which takes the following parameters:\\n *\\n * 1. String message: A string with the text to toast\\n * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG\\n *\\n * There is also a function \`showWithGravity\` to specify the layout gravity. May be\\n * ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER.\\n *\\n * Basic usage:\\n * \`\`\`javascript\\n * ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);\\n * ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);\\n * \`\`\`\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/Components/ToastAndroid/ToastAndroid.android.js",
  "componentName": "ToastAndroid",
  "componentPlatform": "android",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/ToastAndroidExample.android.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule ToastAndroidExample\\n */\\n\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  Text,\\n  ToastAndroid,\\n  TouchableWithoutFeedback,\\n} = ReactNative;\\n\\nvar UIExplorerBlock = require\('UIExplorerBlock');\\nvar UIExplorerPage = require\('UIExplorerPage');\\n\\nclass ToastExample extends React.Component \{\\n  static title = 'Toast Example';\\n  static description = 'Example that demonstrates the use of an Android Toast to provide feedback.';\\n  state = \{};\\n\\n  render() \{\\n    return (\\n      <UIExplorerPage title=\\"ToastAndroid\\">\\n        <UIExplorerBlock title=\\"Simple toast\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{() =>\\n              ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT)}>\\n            <Text style=\{styles.text}>Click me.</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Toast with long duration\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{() =>\\n              ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)}>\\n            <Text style=\{styles.text}>Click me.</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Toast with top gravity\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{() =>\\n              ToastAndroid.showWithGravity(\\n                'This is a toast with top gravity',\\n                ToastAndroid.SHORT,\\n                ToastAndroid.TOP,\\n              )\\n            }>\\n            <Text style=\{styles.text}>Click me.</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Toast with center gravity\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{() =>\\n              ToastAndroid.showWithGravity(\\n                'This is a toast with center gravity',\\n                ToastAndroid.SHORT,\\n                ToastAndroid.CENTER,\\n              )\\n            }>\\n            <Text style=\{styles.text}>Click me.</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Toast with bottom gravity\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{() =>\\n              ToastAndroid.showWithGravity(\\n                'This is a toast with bottom gravity',\\n                ToastAndroid.SHORT,\\n                ToastAndroid.BOTTOM,\\n              )\\n            }>\\n            <Text style=\{styles.text}>Click me.</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n      </UIExplorerPage>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  text: \{\\n    color: 'black',\\n  },\\n});\\n\\nmodule.exports = ToastExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"toastandroid","title":"ToastAndroid","layout":"autodocs","category":"APIs","permalink":"docs/toastandroid.html","platform":"android","next":"vibration","previous":"timepickerandroid","sidebar":true,"runnable":true,"path":"Libraries/Components/ToastAndroid/ToastAndroid.android.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;