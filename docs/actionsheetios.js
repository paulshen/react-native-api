/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 30,
      "source": "showActionSheetWithOptions(options: Object, callback: Function) \{\\n    invariant(\\n      typeof options === 'object' && options !== null,\\n      'Options must be a valid object'\\n    );\\n    invariant(\\n      typeof callback === 'function',\\n      'Must provide a valid callback'\\n    );\\n    RCTActionSheetManager.showActionSheetWithOptions(\\n      \{...options, tintColor: processColor(options.tintColor)},\\n      callback\\n    );\\n  }",
      "docblock": "/**\\n   * Display an iOS action sheet. The \`options\` object must contain one or more\\n   * of:\\n   *\\n   * - \`options\` (array of strings) - a list of button titles (required)\\n   * - \`cancelButtonIndex\` (int) - index of cancel button in \`options\`\\n   * - \`destructiveButtonIndex\` (int) - index of destructive button in \`options\`\\n   * - \`title\` (string) - a title to show above the action sheet\\n   * - \`message\` (string) - a message to show below the title\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Object",
          "name": "options"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "showActionSheetWithOptions"
    },
    \{
      "line": 59,
      "source": "showShareActionSheetWithOptions(\\n    options: Object,\\n    failureCallback: Function,\\n    successCallback: Function\\n  ) \{\\n    invariant(\\n      typeof options === 'object' && options !== null,\\n      'Options must be a valid object'\\n    );\\n    invariant(\\n      typeof failureCallback === 'function',\\n      'Must provide a valid failureCallback'\\n    );\\n    invariant(\\n      typeof successCallback === 'function',\\n      'Must provide a valid successCallback'\\n    );\\n    RCTActionSheetManager.showShareActionSheetWithOptions(\\n      \{...options, tintColor: processColor(options.tintColor)},\\n      failureCallback,\\n      successCallback\\n    );\\n  }",
      "docblock": "/**\\n   * Display the iOS share sheet. The \`options\` object should contain\\n   * one or both of \`message\` and \`url\` and can additionally have\\n   * a \`subject\` or \`excludedActivityTypes\`:\\n   *\\n   * - \`url\` (string) - a URL to share\\n   * - \`message\` (string) - a message to share\\n   * - \`subject\` (string) - a subject for the message\\n   * - \`excludedActivityTypes\` (array) - the activities to exclude from the ActionSheet\\n   *\\n   * NOTE: if \`url\` points to a local file, or is a base64-encoded\\n   * uri, the file it points to will be loaded and shared directly.\\n   * In this way, you can share images, videos, PDF files, etc.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Object",
          "name": "options"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "failureCallback"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "successCallback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "showShareActionSheetWithOptions"
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 19,
  "name": "ActionSheetIOS",
  "docblock": "/**\\n */\\n",
  "requires": [
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
  "filepath": "Libraries/ActionSheetIOS/ActionSheetIOS.js",
  "componentName": "ActionSheetIOS",
  "componentPlatform": "ios",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/ActionSheetIOSExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule ActionSheetIOSExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  ActionSheetIOS,\\n  StyleSheet,\\n  takeSnapshot,\\n  Text,\\n  View,\\n} = ReactNative;\\n\\nvar BUTTONS = [\\n  'Option 0',\\n  'Option 1',\\n  'Option 2',\\n  'Delete',\\n  'Cancel',\\n];\\nvar DESTRUCTIVE_INDEX = 3;\\nvar CANCEL_INDEX = 4;\\n\\nclass ActionSheetExample extends React.Component \{\\n  state = \{\\n    clicked: 'none',\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text onPress=\{this.showActionSheet} style=\{style.button}>\\n          Click to show the ActionSheet\\n        </Text>\\n        <Text>\\n          Clicked button: \{this.state.clicked}\\n        </Text>\\n      </View>\\n    );\\n  }\\n\\n  showActionSheet = () => \{\\n    ActionSheetIOS.showActionSheetWithOptions(\{\\n      options: BUTTONS,\\n      cancelButtonIndex: CANCEL_INDEX,\\n      destructiveButtonIndex: DESTRUCTIVE_INDEX,\\n    },\\n    (buttonIndex) => \{\\n      this.setState(\{ clicked: BUTTONS[buttonIndex] });\\n    });\\n  };\\n}\\n\\nclass ActionSheetTintExample extends React.Component \{\\n  state = \{\\n    clicked: 'none',\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text onPress=\{this.showActionSheet} style=\{style.button}>\\n          Click to show the ActionSheet\\n        </Text>\\n        <Text>\\n          Clicked button: \{this.state.clicked}\\n        </Text>\\n      </View>\\n    );\\n  }\\n\\n  showActionSheet = () => \{\\n    ActionSheetIOS.showActionSheetWithOptions(\{\\n      options: BUTTONS,\\n      cancelButtonIndex: CANCEL_INDEX,\\n      destructiveButtonIndex: DESTRUCTIVE_INDEX,\\n      tintColor: 'green',\\n    },\\n    (buttonIndex) => \{\\n      this.setState(\{ clicked: BUTTONS[buttonIndex] });\\n    });\\n  };\\n}\\n\\nclass ShareActionSheetExample extends React.Component \{\\n  state = \{\\n    text: ''\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text onPress=\{this.showShareActionSheet} style=\{style.button}>\\n          Click to show the Share ActionSheet\\n        </Text>\\n        <Text>\\n          \{this.state.text}\\n        </Text>\\n      </View>\\n    );\\n  }\\n\\n  showShareActionSheet = () => \{\\n    ActionSheetIOS.showShareActionSheetWithOptions(\{\\n      url: this.props.url,\\n      message: 'message to go with the shared url',\\n      subject: 'a subject to go in the email heading',\\n      excludedActivityTypes: [\\n        'com.apple.UIKit.activity.PostToTwitter'\\n      ]\\n    },\\n    (error) => alert(error),\\n    (completed, method) => \{\\n      var text;\\n      if (completed) \{\\n        text = \`Shared via $\{method}\`;\\n      } else \{\\n        text = 'You didn\\\\'t share';\\n      }\\n      this.setState(\{text});\\n    });\\n  };\\n}\\n\\nclass ShareScreenshotExample extends React.Component \{\\n  state = \{\\n    text: ''\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text onPress=\{this.showShareActionSheet} style=\{style.button}>\\n          Click to show the Share ActionSheet\\n        </Text>\\n        <Text>\\n          \{this.state.text}\\n        </Text>\\n      </View>\\n    );\\n  }\\n\\n  showShareActionSheet = () => \{\\n    // Take the snapshot (returns a temp file uri)\\n    takeSnapshot('window').then((uri) => \{\\n      // Share image data\\n      ActionSheetIOS.showShareActionSheetWithOptions(\{\\n        url: uri,\\n        excludedActivityTypes: [\\n          'com.apple.UIKit.activity.PostToTwitter'\\n        ]\\n      },\\n      (error) => alert(error),\\n      (completed, method) => \{\\n        var text;\\n        if (completed) \{\\n          text = \`Shared via $\{method}\`;\\n        } else \{\\n          text = 'You didn\\\\'t share';\\n        }\\n        this.setState(\{text});\\n      });\\n    }).catch((error) => alert(error));\\n  };\\n}\\n\\nvar style = StyleSheet.create(\{\\n  button: \{\\n    marginBottom: 10,\\n    fontWeight: '500',\\n  }\\n});\\n\\nexports.title = 'ActionSheetIOS';\\nexports.description = 'Interface to show iOS\\\\' action sheets';\\nexports.examples = [\\n  \{\\n    title: 'Show Action Sheet',\\n    render(): React.Element<any> \{ return <ActionSheetExample />; }\\n  },\\n  \{\\n    title: 'Show Action Sheet with tinted buttons',\\n    render(): React.Element<any> \{ return <ActionSheetTintExample />; }\\n  },\\n  \{\\n    title: 'Show Share Action Sheet',\\n    render(): React.Element<any> \{\\n      return <ShareActionSheetExample url=\\"https://code.facebook.com\\" />;\\n    }\\n  },\\n  \{\\n    title: 'Share Local Image',\\n    render(): React.Element<any> \{\\n      return <ShareActionSheetExample url=\\"bunny.png\\" />;\\n    }\\n  },\\n  \{\\n    title: 'Share Screenshot',\\n    render(): React.Element<any> \{\\n      return <ShareScreenshotExample />;\\n    }\\n  }\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"actionsheetios","title":"ActionSheetIOS","layout":"autodocs","category":"APIs","permalink":"docs/actionsheetios.html","platform":"ios","next":"adsupportios","previous":"accessibilityinfo","sidebar":true,"runnable":true,"path":"Libraries/ActionSheetIOS/ActionSheetIOS.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;