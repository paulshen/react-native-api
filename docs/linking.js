/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "Linking",
  "docblock": "/**\\n * \`Linking\` gives you a general interface to interact with both incoming\\n * and outgoing app links.\\n *\\n * ### Basic Usage\\n *\\n * #### Handling deep links\\n *\\n * If your app was launched from an external url registered to your app you can\\n * access and handle it from any component you want with\\n *\\n * \`\`\`\\n * componentDidMount() \{\\n *   var url = Linking.getInitialURL().then((url) => \{\\n *     if (url) \{\\n *       console.log('Initial url is: ' + url);\\n *     }\\n *   }).catch(err => console.error('An error occurred', err));\\n * }\\n * \`\`\`\\n *\\n * NOTE: For instructions on how to add support for deep linking on Android,\\n * refer to [Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links](http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters).\\n *\\n * If you wish to receive the intent in an existing instance of MainActivity,\\n * you may set the \`launchMode\` of MainActivity to \`singleTask\` in\\n * \`AndroidManifest.xml\`. See [\`<activity>\`](http://developer.android.com/guide/topics/manifest/activity-element.html)\\n * documentation for more information.\\n *\\n * \`\`\`\\n * <activity\\n *   android:name=\\".MainActivity\\"\\n *   android:launchMode=\\"singleTask\\">\\n * \`\`\`\\n *\\n * NOTE: On iOS you'll need to link \`RCTLinking\` to your project by following\\n * the steps described [here](docs/linking-libraries-ios.html#manual-linking).\\n * In case you also want to listen to incoming app links during your app's\\n * execution you'll need to add the following lines to you \`*AppDelegate.m\`:\\n *\\n * \`\`\`\\n * #import \\"RCTLinkingManager.h\\"\\n *\\n * - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\\n *   sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\\n * \{\\n *   return [RCTLinkingManager application:application openURL:url\\n *                       sourceApplication:sourceApplication annotation:annotation];\\n * }\\n *\\n * // Only if your app is using [Universal Links](https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html).\\n * - (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity\\n *  restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler\\n * \{\\n *  return [RCTLinkingManager application:application\\n *                   continueUserActivity:userActivity\\n *                     restorationHandler:restorationHandler];\\n * }\\n *\\n * \`\`\`\\n *\\n * And then on your React component you'll be able to listen to the events on\\n * \`Linking\` as follows\\n *\\n * \`\`\`\\n * componentDidMount() \{\\n *   Linking.addEventListener('url', this._handleOpenURL);\\n * },\\n * componentWillUnmount() \{\\n *   Linking.removeEventListener('url', this._handleOpenURL);\\n * },\\n * _handleOpenURL(event) \{\\n *   console.log(event.url);\\n * }\\n * \`\`\`\\n * #### Opening external links\\n *\\n * To start the corresponding activity for a link (web URL, email, contact etc.), call\\n *\\n * \`\`\`\\n * Linking.openURL(url).catch(err => console.error('An error occurred', err));\\n * \`\`\`\\n *\\n * If you want to check if any installed app can handle a given URL beforehand you can call\\n * \`\`\`\\n * Linking.canOpenURL(url).then(supported => \{\\n *   if (!supported) \{\\n *     console.log('Can\\\\'t handle url: ' + url);\\n *   } else \{\\n *     return Linking.openURL(url);\\n *   }\\n * }).catch(err => console.error('An error occurred', err));\\n * \`\`\`\\n */\\n",
  "methods": [
    \{
      "line": 119,
      "source": "constructor() \{\\n    super(LinkingManager);\\n  }",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "constructor"
    },
    \{
      "line": 127,
      "source": "addEventListener(type: string, handler: Function) \{\\n    this.addListener(type, handler);\\n  }",
      "docblock": "/**\\n   * Add a handler to Linking changes by listening to the \`url\` event type\\n   * and providing the handler\\n   */\\n",
      "modifiers": [],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "type"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "addEventListener"
    },
    \{
      "line": 134,
      "source": "removeEventListener(type: string, handler: Function ) \{\\n    this.removeListener(type, handler);\\n  }",
      "docblock": "/**\\n   * Remove a handler by passing the \`url\` event type and the handler\\n   */\\n",
      "modifiers": [],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "type"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "removeEventListener"
    },
    \{
      "line": 149,
      "source": "openURL(url: string): Promise<any> \{\\n    this._validateURL(url);\\n    return LinkingManager.openURL(url);\\n  }",
      "docblock": "/**\\n   * Try to open the given \`url\` with any of the installed apps.\\n   *\\n   * You can use other URLs, like a location (e.g. \\"geo:37.484847,-122.148386\\"), a contact,\\n   * or any other URL that can be opened with the installed apps.\\n   *\\n   * NOTE: This method will fail if the system doesn't know how to open the specified URL.\\n   * If you're passing in a non-http(s) URL, it's best to check \{@code canOpenURL} first.\\n   *\\n   * NOTE: For web URLs, the protocol (\\"http://\\", \\"https://\\") must be set accordingly!\\n   */\\n",
      "modifiers": [],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "url"
        }
      ],
      "tparams": null,
      "returntypehint": "Promise<any>",
      "name": "openURL"
    },
    \{
      "line": 164,
      "source": "canOpenURL(url: string): Promise<boolean> \{\\n    this._validateURL(url);\\n    return LinkingManager.canOpenURL(url);\\n  }",
      "docblock": "/**\\n   * Determine whether or not an installed app can handle a given URL.\\n   *\\n   * NOTE: For web URLs, the protocol (\\"http://\\", \\"https://\\") must be set accordingly!\\n   *\\n   * NOTE: As of iOS 9, your app needs to provide the \`LSApplicationQueriesSchemes\` key\\n   * inside \`Info.plist\` or canOpenURL will always return false.\\n   *\\n   * @param URL the URL to open\\n   */\\n",
      "modifiers": [],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "url"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"boolean\\",\\"length\\":1}],\\"length\\":4}",
      "name": "canOpenURL"
    },
    \{
      "line": 175,
      "source": "getInitialURL(): Promise<?string> \{\\n    return LinkingManager.getInitialURL();\\n  }",
      "docblock": "/**\\n   * If the app launch was triggered by an app link,\\n   * it will give the link url, otherwise it will give \`null\`\\n   *\\n   * NOTE: To support deep linking on Android, refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}],\\"length\\":5}",
      "name": "getInitialURL"
    }
  ],
  "superClass": "NativeEventEmitter",
  "type": "api",
  "line": 117,
  "requires": [
    \{
      "name": "NativeEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "Platform"
    },
    \{
      "name": "fbjs/lib/invariant"
    }
  ],
  "filepath": "Libraries/Linking/Linking.js",
  "componentName": "Linking",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/LinkingExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n * @providesModule LinkingExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Linking,\\n  StyleSheet,\\n  Text,\\n  TouchableOpacity,\\n  View,\\n} = ReactNative;\\nvar UIExplorerBlock = require\('./UIExplorerBlock');\\n\\nclass OpenURLButton extends React.Component \{\\n  static propTypes = \{\\n    url: React.PropTypes.string,\\n  };\\n\\n  handleClick = () => \{\\n    Linking.canOpenURL(this.props.url).then(supported => \{\\n      if (supported) \{\\n        Linking.openURL(this.props.url);\\n      } else \{\\n        console.log('Don\\\\'t know how to open URI: ' + this.props.url);\\n      }\\n    });\\n  };\\n\\n  render() \{\\n    return (\\n      <TouchableOpacity\\n        onPress=\{this.handleClick}>\\n        <View style=\{styles.button}>\\n          <Text style=\{styles.text}>Open \{this.props.url}</Text>\\n        </View>\\n      </TouchableOpacity>\\n    );\\n  }\\n}\\n\\nclass IntentAndroidExample extends React.Component \{\\n  static title = 'Linking';\\n  static description = 'Shows how to use Linking to open URLs.';\\n\\n  render() \{\\n    return (\\n      <UIExplorerBlock title=\\"Open external URLs\\">\\n        <OpenURLButton url=\{'https://www.facebook.com'} />\\n        <OpenURLButton url=\{'http://www.facebook.com'} />\\n        <OpenURLButton url=\{'http://facebook.com'} />\\n        <OpenURLButton url=\{'fb://notifications'} />\\n        <OpenURLButton url=\{'geo:37.484847,-122.148386'} />\\n        <OpenURLButton url=\{'tel:9876543210'} />\\n      </UIExplorerBlock>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  container: \{\\n    flex: 1,\\n    backgroundColor: 'white',\\n    padding: 10,\\n    paddingTop: 30,\\n  },\\n  button: \{\\n    padding: 10,\\n    backgroundColor: '#3B5998',\\n    marginBottom: 10,\\n  },\\n  text: \{\\n    color: 'white',\\n  },\\n});\\n\\nmodule.exports = IntentAndroidExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"linking","title":"Linking","layout":"autodocs","category":"APIs","permalink":"docs/linking.html","platform":"cross","next":"nativemethodsmixin","previous":"layoutanimation","sidebar":true,"runnable":true,"path":"Libraries/Linking/Linking.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;