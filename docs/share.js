/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "Share",
  "docblock": "/**\\n */\\n",
  "methods": [
    \{
      "line": 59,
      "source": "static share(content: Content, options: Options = \{}): Promise<Object> \{\\n    invariant(\\n      typeof content === 'object' && content !== null,\\n      'Content to share must be a valid object'\\n    );\\n    invariant(\\n      typeof content.url === 'string' || typeof content.message === 'string',\\n      'At least one of URL and message is required'\\n    );\\n    invariant(\\n      typeof options === 'object' && options !== null,\\n      'Options must be a valid object'\\n    );\\n\\n    if (Platform.OS === 'android') \{\\n      invariant(\\n        !content.title || typeof content.title === 'string',\\n        'Invalid title: title should be a string.'\\n      );\\n      return ShareModule.share(content, options.dialogTitle);\\n    } else if (Platform.OS === 'ios') \{\\n      return new Promise((resolve, reject) => \{\\n        ActionSheetManager.showShareActionSheetWithOptions(\\n          \{...content, ...options, tintColor: processColor(options.tintColor)},\\n          (error) => reject(error),\\n          (success, activityType) => \{\\n            if (success) \{\\n              resolve(\{\\n                'action': 'sharedAction',\\n                'activityType': activityType\\n              });\\n            } else \{\\n              resolve(\{\\n                'action': 'dismissedAction'\\n              });\\n            }\\n          }\\n        );\\n      });\\n    } else \{\\n      return Promise.reject(new Error('Unsupported platform'));\\n    }\\n  }",
      "docblock": "/**\\n   * Open a dialog to share text content.\\n   *\\n   * In iOS, Returns a Promise which will be invoked an object containing \`action\`, \`activityType\`.\\n   * If the user dismissed the dialog, the Promise will still be resolved with action being \`Share.dismissedAction\`\\n   * and all the other keys being undefined.\\n   *\\n   * In Android, Returns a Promise which always be resolved with action being \`Share.sharedAction\`.\\n   *\\n   * ### Content\\n   *\\n   *  - \`message\` - a message to share\\n   *  - \`title\` - title of the message\\n   *\\n   * #### iOS\\n   *\\n   *  - \`url\` - an URL to share\\n   *\\n   * At least one of URL and message is required.\\n   *\\n   * ### Options\\n   *\\n   * #### iOS\\n   *\\n   * - \`excludedActivityTypes\`\\n   * - \`tintColor\`\\n   *\\n   * #### Android\\n   *\\n   * - \`dialogTitle\`\\n   *\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Content\\",\\"length\\":1}",
          "name": "content"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Options\\",\\"length\\":1}",
          "name": "options"
        }
      ],
      "tparams": null,
      "returntypehint": "Promise<Object>",
      "name": "share"
    },
    \{
      "line": 106,
      "source": "static get sharedAction() \{ return 'sharedAction'; }",
      "docblock": "/**\\n   * The content was successfully shared.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "sharedAction"
    },
    \{
      "line": 112,
      "source": "static get dismissedAction() \{ return 'dismissedAction'; }",
      "docblock": "/**\\n   * The dialog has been dismissed.\\n   * @platform ios\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "dismissedAction"
    }
  ],
  "type": "api",
  "line": 25,
  "requires": [
    \{
      "name": "Platform"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "fbjs/lib/invariant"
    },
    \{
      "name": "processColor"
    }
  ],
  "filepath": "Libraries/Share/Share.js",
  "componentName": "Share",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/ShareExample.js",
      "title": "",
      "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule ShareExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  View,\\n  Text,\\n  TouchableHighlight,\\n  Share,\\n} = ReactNative;\\n\\nexports.framework = 'React';\\nexports.title = 'Share';\\nexports.description = 'Share data with other Apps.';\\nexports.examples = [\{\\n  title: 'Share Text Content',\\n  render() \{\\n    return <ShareMessageExample />;\\n  }\\n}];\\n\\nclass ShareMessageExample extends React.Component \{\\n  _shareMessage: Function;\\n  _shareText: Function;\\n  _showResult: Function;\\n  state: any;\\n\\n  constructor(props) \{\\n    super(props);\\n\\n    this._shareMessage = this._shareMessage.bind(this);\\n    this._shareText = this._shareText.bind(this);\\n    this._showResult = this._showResult.bind(this);\\n\\n    this.state = \{\\n      result: ''\\n    };\\n  }\\n\\n  render() \{\\n    return (\\n      <View>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{this._shareMessage}>\\n          <View style=\{styles.button}>\\n            <Text>Click to share message</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{this._shareText}>\\n          <View style=\{styles.button}>\\n            <Text>Click to share message, URL and title</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <Text>\{this.state.result}</Text>\\n      </View>\\n    );\\n  }\\n\\n  _shareMessage() \{\\n    Share.share(\{\\n      message: 'React Native | A framework for building native apps using React'\\n    })\\n    .then(this._showResult)\\n    .catch((error) => this.setState(\{result: 'error: ' + error.message}));\\n  }\\n\\n  _shareText() \{\\n    Share.share(\{\\n      message: 'A framework for building native apps using React',\\n      url: 'http://facebook.github.io/react-native/',\\n      title: 'React Native'\\n    }, \{\\n      dialogTitle: 'Share React Native website',\\n      excludedActivityTypes: [\\n        'com.apple.UIKit.activity.PostToTwitter'\\n      ],\\n      tintColor: 'green'\\n    })\\n    .then(this._showResult)\\n    .catch((error) => this.setState(\{result: 'error: ' + error.message}));\\n  }\\n\\n  _showResult(result) \{\\n    if (result.action === Share.sharedAction) \{\\n      if (result.activityType) \{\\n        this.setState(\{result: 'shared with an activityType: ' + result.activityType});\\n      } else \{\\n        this.setState(\{result: 'shared'});\\n      }\\n    } else if (result.action === Share.dismissedAction) \{\\n      this.setState(\{result: 'dismissed'});\\n    }\\n  }\\n\\n}\\n\\n\\nvar styles = StyleSheet.create(\{\\n  wrapper: \{\\n    borderRadius: 5,\\n    marginBottom: 5,\\n  },\\n  button: \{\\n    backgroundColor: '#eeeeee',\\n    padding: 10,\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"share","title":"Share","layout":"autodocs","category":"APIs","permalink":"docs/share.html","platform":"cross","next":"statusbarios","previous":"settings","sidebar":true,"runnable":true,"path":"Libraries/Share/Share.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;