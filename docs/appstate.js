/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "AppState",
  "docblock": "/**\\n * \`AppState\` can tell you if the app is in the foreground or background,\\n * and notify you when the state changes.\\n *\\n * AppState is frequently used to determine the intent and proper behavior when\\n * handling push notifications.\\n *\\n * ### App States\\n *\\n *  - \`active\` - The app is running in the foreground\\n *  - \`background\` - The app is running in the background. The user is either\\n *     in another app or on the home screen\\n *  - \`inactive\` - This is a state that occurs when transitioning between\\n *  \\t foreground & background, and during periods of inactivity such as\\n *  \\t entering the Multitasking view or in the event of an incoming call\\n *\\n * For more information, see\\n * [Apple's documentation](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html)\\n *\\n * ### Basic Usage\\n *\\n * To see the current state, you can check \`AppState.currentState\`, which\\n * will be kept up-to-date. However, \`currentState\` will be null at launch\\n * while \`AppState\` retrieves it over the bridge.\\n *\\n * \`\`\`\\n * import React, \{Component} from 'react'\\n * import \{AppState, Text} from 'react-native'\\n *\\n * class AppStateExample extends Component \{\\n *\\n *   state = \{\\n *     appState: AppState.currentState\\n *   }\\n *\\n *   componentDidMount() \{\\n *     AppState.addEventListener('change', this._handleAppStateChange);\\n *   }\\n *\\n *   componentWillUnmount() \{\\n *     AppState.removeEventListener('change', this._handleAppStateChange);\\n *   }\\n *\\n *   _handleAppStateChange = (nextAppState) => \{\\n *     if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') \{\\n *       console.log('App has come to the foreground!')\\n *     }\\n *     this.setState(\{appState: nextAppState});\\n *   }\\n *\\n *   render() \{\\n *     return (\\n *       <Text>Current state is: \{this.state.appState}</Text>\\n *     );\\n *   }\\n *\\n * }\\n * \`\`\`\\n *\\n * This example will only ever appear to say \\"Current state is: active\\" because\\n * the app is only visible to the user when in the \`active\` state, and the null\\n * state will happen only momentarily.\\n */\\n",
  "methods": [
    \{
      "line": 92,
      "source": "constructor() \{\\n    super(RCTAppState);\\n\\n    this.isAvailable = true;\\n    this._eventHandlers = \{\\n      change: new Map(),\\n      memoryWarning: new Map(),\\n    };\\n\\n    // TODO: Remove the 'active' fallback after \`initialAppState\` is exported by\\n    // the Android implementation.\\n    this.currentState = RCTAppState.initialAppState || 'active';\\n\\n    // TODO: this is a terrible solution - in order to ensure \`currentState\` prop\\n    // is up to date, we have to register an observer that updates it whenever\\n    // the state changes, even if nobody cares. We should just deprecate the\\n    // \`currentState\` property and get rid of this.\\n    this.addListener(\\n      'appStateDidChange',\\n      (appStateData) => \{\\n        this.currentState = appStateData.app_state;\\n      }\\n    );\\n\\n    // TODO: see above - this request just populates the value of \`currentState\`\\n    // when the module is first initialized. Would be better to get rid of the prop\\n    // and expose \`getCurrentAppState\` method directly.\\n    RCTAppState.getCurrentAppState(\\n      (appStateData) => \{\\n        this.currentState = appStateData.app_state;\\n      },\\n      logError\\n    );\\n  }",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "constructor"
    },
    \{
      "line": 137,
      "source": "addEventListener(\\n    type: string,\\n    handler: Function\\n  ) \{\\n    invariant(\\n      ['change', 'memoryWarning'].indexOf(type) !== -1,\\n      'Trying to subscribe to unknown event: \\"%s\\"', type\\n    );\\n    if (type === 'change') \{\\n      this._eventHandlers[type].set(handler, this.addListener(\\n        'appStateDidChange',\\n        (appStateData) => \{\\n          handler(appStateData.app_state);\\n        }\\n      ));\\n    } else if (type === 'memoryWarning') \{\\n      this._eventHandlers[type].set(handler, this.addListener(\\n        'memoryWarning',\\n        handler\\n      ));\\n    }\\n  }",
      "docblock": "/**\\n   * Add a handler to AppState changes by listening to the \`change\` event type\\n   * and providing the handler\\n   *\\n   * TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate\\n   * \`addEventListener\` and \`removeEventListener\` and just use \`addListener\` and\\n   * \`listener.remove()\` directly. That will be a breaking change though, as both\\n   * the method and event names are different (addListener events are currently\\n   * required to be globally unique).\\n   */\\n",
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
      "line": 163,
      "source": "removeEventListener(\\n    type: string,\\n    handler: Function\\n  ) \{\\n    invariant(\\n      ['change', 'memoryWarning'].indexOf(type) !== -1,\\n      'Trying to remove listener for unknown event: \\"%s\\"', type\\n    );\\n    if (!this._eventHandlers[type].has(handler)) \{\\n      return;\\n    }\\n    this._eventHandlers[type].get(handler).remove();\\n    this._eventHandlers[type].delete(handler);\\n  }",
      "docblock": "/**\\n   * Remove a handler by passing the \`change\` event type and the handler\\n   */\\n",
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
    }
  ],
  "superClass": "NativeEventEmitter",
  "type": "api",
  "line": 86,
  "requires": [
    \{
      "name": "EventEmitter"
    },
    \{
      "name": "NativeEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "logError"
    },
    \{
      "name": "fbjs/lib/invariant"
    }
  ],
  "filepath": "Libraries/AppState/AppState.js",
  "componentName": "AppState",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/AppStateExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @providesModule AppStateExample\\n * @flow\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst \{\\n  AppState,\\n  Text,\\n  View\\n} = ReactNative;\\n\\nclass AppStateSubscription extends React.Component \{\\n  state = \{\\n    appState: AppState.currentState,\\n    previousAppStates: [],\\n    memoryWarnings: 0,\\n  };\\n\\n  componentDidMount() \{\\n    AppState.addEventListener('change', this._handleAppStateChange);\\n    AppState.addEventListener('memoryWarning', this._handleMemoryWarning);\\n  }\\n\\n  componentWillUnmount() \{\\n    AppState.removeEventListener('change', this._handleAppStateChange);\\n    AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);\\n  }\\n\\n  _handleMemoryWarning = () => \{\\n    this.setState(\{memoryWarnings: this.state.memoryWarnings + 1});\\n  };\\n\\n  _handleAppStateChange = (appState) => \{\\n    var previousAppStates = this.state.previousAppStates.slice();\\n    previousAppStates.push(this.state.appState);\\n    this.setState(\{\\n      appState,\\n      previousAppStates,\\n    });\\n  };\\n\\n  render() \{\\n    if (this.props.showMemoryWarnings) \{\\n      return (\\n        <View>\\n          <Text>\{this.state.memoryWarnings}</Text>\\n        </View>\\n      );\\n    }\\n    if (this.props.showCurrentOnly) \{\\n      return (\\n        <View>\\n          <Text>\{this.state.appState}</Text>\\n        </View>\\n      );\\n    }\\n    return (\\n      <View>\\n        <Text>\{JSON.stringify(this.state.previousAppStates)}</Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nexports.title = 'AppState';\\nexports.description = 'app background status';\\nexports.examples = [\\n  \{\\n    title: 'AppState.currentState',\\n    description: 'Can be null on app initialization',\\n    render() \{ return <Text>\{AppState.currentState}</Text>; }\\n  },\\n  \{\\n    title: 'Subscribed AppState:',\\n    description: 'This changes according to the current state, so you can only ever see it rendered as \\"active\\"',\\n    render(): React.Element<any> \{ return <AppStateSubscription showCurrentOnly=\{true} />; }\\n  },\\n  \{\\n    title: 'Previous states:',\\n    render(): React.Element<any> \{ return <AppStateSubscription showCurrentOnly=\{false} />; }\\n  },\\n  \{\\n    platform: 'ios',\\n    title: 'Memory Warnings',\\n    description: 'In the IOS simulator, hit Shift+Command+M to simulate a memory warning.',\\n    render(): React.Element<any> \{ return <AppStateSubscription showMemoryWarnings=\{true} />; }\\n  },\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"appstate","title":"AppState","layout":"autodocs","category":"APIs","permalink":"docs/appstate.html","platform":"cross","next":"asyncstorage","previous":"appregistry","sidebar":true,"runnable":true,"path":"Libraries/AppState/AppState.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;