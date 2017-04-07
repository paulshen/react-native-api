/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "Alert",
  "docblock": "/**\\n * Launches an alert dialog with the specified title and message.\\n *\\n * Optionally provide a list of buttons. Tapping any button will fire the\\n * respective onPress callback and dismiss the alert. By default, the only\\n * button will be an 'OK' button.\\n *\\n * This is an API that works both on iOS and Android and can show static\\n * alerts. To show an alert that prompts the user to enter some information,\\n * see \`AlertIOS\`; entering text in an alert is common on iOS only.\\n *\\n * ## iOS\\n *\\n * On iOS you can specify any number of buttons. Each button can optionally\\n * specify a style, which is one of 'default', 'cancel' or 'destructive'.\\n *\\n * ## Android\\n *\\n * On Android at most three buttons can be specified. Android has a concept\\n * of a neutral, negative and a positive button:\\n *\\n *   - If you specify one button, it will be the 'positive' one (such as 'OK')\\n *   - Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')\\n *   - Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')\\n *\\n * By default alerts on Android can be dismissed by tapping outside of the alert\\n * box. This event can be handled by providing an optional \`options\` parameter,\\n * with an \`onDismiss\` callback property \`\{ onDismiss: () => \{} }\`.\\n *\\n * Alternatively, the dismissing behavior can be disabled altogether by providing\\n * an optional \`options\` parameter with the \`cancelable\` property set to \`false\`\\n * i.e. \`\{ cancelable: false }\`\\n *\\n * Example usage:\\n * \`\`\`\\n * // Works on both iOS and Android\\n * Alert.alert(\\n *   'Alert Title',\\n *   'My Alert Msg',\\n *   [\\n *     \{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},\\n *     \{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},\\n *     \{text: 'OK', onPress: () => console.log('OK Pressed')},\\n *   ],\\n *   \{ cancelable: false }\\n * )\\n * \`\`\`\\n */\\n",
  "methods": [
    \{
      "line": 81,
      "source": "static alert(\\n    title: ?string,\\n    message?: ?string,\\n    buttons?: Buttons,\\n    options?: Options,\\n    type?: AlertType,\\n  ): void \{\\n    if (Platform.OS === 'ios') \{\\n      if (typeof type !== 'undefined') \{\\n        console.warn('Alert.alert() with a 5th \\"type\\" parameter is deprecated and will be removed. Use AlertIOS.prompt() instead.');\\n        AlertIOS.alert(title, message, buttons, type);\\n        return;\\n      }\\n      AlertIOS.alert(title, message, buttons);\\n    } else if (Platform.OS === 'android') \{\\n      AlertAndroid.alert(title, message, buttons, options);\\n    }\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}",
          "name": "title"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}",
          "name": "message?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Buttons\\",\\"length\\":1}",
          "name": "buttons?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Options\\",\\"length\\":1}",
          "name": "options?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AlertType\\",\\"length\\":1}",
          "name": "type?"
        }
      ],
      "tparams": null,
      "returntypehint": "void",
      "name": "alert"
    }
  ],
  "type": "api",
  "line": 79,
  "requires": [
    \{
      "name": "AlertIOS"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "Platform"
    }
  ],
  "filepath": "Libraries/Alert/Alert.js",
  "componentName": "Alert",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/AlertExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @providesModule AlertExample\\n */\\n\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Alert,\\n  StyleSheet,\\n  Text,\\n  TouchableHighlight,\\n  View,\\n} = ReactNative;\\n\\nvar UIExplorerBlock = require\('./UIExplorerBlock');\\n\\n// corporate ipsum > lorem ipsum\\nvar alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +\\n                   'catalysts for change. Dynamically revolutionize.';\\n\\n/**\\n * Simple alert examples.\\n */\\nclass SimpleAlertExampleBlock extends React.Component \{\\n  render() \{\\n    return (\\n      <View>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => Alert.alert(\\n            'Alert Title',\\n            alertMessage,\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with message and default button</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => Alert.alert(\\n            'Alert Title',\\n            alertMessage,\\n            [\\n              \{text: 'OK', onPress: () => console.log('OK Pressed!')},\\n            ]\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with one button</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => Alert.alert(\\n            'Alert Title',\\n            alertMessage,\\n            [\\n              \{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},\\n              \{text: 'OK', onPress: () => console.log('OK Pressed!')},\\n            ]\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with two buttons</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => Alert.alert(\\n            'Alert Title',\\n            null,\\n            [\\n              \{text: 'Foo', onPress: () => console.log('Foo Pressed!')},\\n              \{text: 'Bar', onPress: () => console.log('Bar Pressed!')},\\n              \{text: 'Baz', onPress: () => console.log('Baz Pressed!')},\\n            ]\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with three buttons</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => Alert.alert(\\n            'Foo Title',\\n            alertMessage,\\n            '..............'.split('').map((dot, index) => (\{\\n              text: 'Button ' + index,\\n              onPress: () => console.log('Pressed ' + index)\\n            }))\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with too many buttons</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => Alert.alert(\\n            'Alert Title',\\n            null,\\n            [\\n              \{text: 'OK', onPress: () => console.log('OK Pressed!')},\\n            ],\\n            \{\\n              cancelable: false\\n            }\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert that cannot be dismissed</Text>\\n          </View>\\n        </TouchableHighlight>\\n      </View>\\n    );\\n  }\\n}\\n\\nclass AlertExample extends React.Component \{\\n  static title = 'Alert';\\n\\n  static description = 'Alerts display a concise and informative message ' +\\n  'and prompt the user to make a decision.';\\n\\n  render() \{\\n    return (\\n      <UIExplorerBlock title=\{'Alert'}>\\n        <SimpleAlertExampleBlock />\\n      </UIExplorerBlock>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  wrapper: \{\\n    borderRadius: 5,\\n    marginBottom: 5,\\n  },\\n  button: \{\\n    backgroundColor: '#eeeeee',\\n    padding: 10,\\n  },\\n});\\n\\nmodule.exports = \{\\n  AlertExample,\\n  SimpleAlertExampleBlock,\\n};\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"alert","title":"Alert","layout":"autodocs","category":"APIs","permalink":"docs/alert.html","platform":"cross","next":"alertios","previous":"adsupportios","sidebar":true,"runnable":true,"path":"Libraries/Alert/Alert.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;