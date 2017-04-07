/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 28,
      "source": "getString(): Promise<string> \{\\n    return Clipboard.getString();\\n  }",
      "docblock": "/**\\n   * Get content of string type, this method returns a \`Promise\`, so you can use following code to get clipboard content\\n   * \`\`\`javascript\\n   * async _getContent() \{\\n   *   var content = await Clipboard.getString();\\n   * }\\n   * \`\`\`\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}],\\"length\\":4}",
      "name": "getString"
    },
    \{
      "line": 40,
      "source": "setString(content: string) \{\\n    Clipboard.setString(content);\\n  }",
      "docblock": "/**\\n   * Set content of string type. You can use following code to set clipboard content\\n   * \`\`\`javascript\\n   * _setContent() \{\\n   *   Clipboard.setString('hello world');\\n   * }\\n   * \`\`\`\\n   * @param the content to be stored in the clipboard.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "content"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "setString"
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 19,
  "name": "Clipboard",
  "docblock": "/**\\n * \`Clipboard\` gives you an interface for setting and getting content from Clipboard on both iOS and Android\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/Components/Clipboard/Clipboard.js",
  "componentName": "Clipboard",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/ClipboardExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule ClipboardExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Clipboard,\\n  View,\\n  Text,\\n} = ReactNative;\\n\\nclass ClipboardExample extends React.Component \{\\n  state = \{\\n    content: 'Content will appear here'\\n  };\\n\\n  _setClipboardContent = async () => \{\\n    Clipboard.setString('Hello World');\\n    try \{\\n      var content = await Clipboard.getString();\\n      this.setState(\{content});\\n    } catch (e) \{\\n      this.setState(\{content:e.message});\\n    }\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text onPress=\{this._setClipboardContent} style=\{\{color: 'blue'}}>\\n          Tap to put \\"Hello World\\" in the clipboard\\n        </Text>\\n        <Text style=\{\{color: 'red', marginTop: 20}}>\\n          \{this.state.content}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nexports.title = 'Clipboard';\\nexports.description = 'Show Clipboard contents.';\\nexports.examples = [\\n  \{\\n    title: 'Clipboard.setString() and getString()',\\n    render() \{\\n      return <ClipboardExample/>;\\n    }\\n  }\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"clipboard","title":"Clipboard","layout":"autodocs","category":"APIs","permalink":"docs/clipboard.html","platform":"cross","next":"datepickerandroid","previous":"cameraroll","sidebar":true,"runnable":true,"path":"Libraries/Components/Clipboard/Clipboard.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;