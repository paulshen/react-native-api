/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 176,
      "source": "addEventListener(\\n    eventName: ChangeEventName,\\n    handler: Function\\n  ): \{remove: () => void} \{\\n    const listener = NetInfoEventEmitter.addListener(\\n      DEVICE_CONNECTIVITY_EVENT,\\n      (appStateData) => \{\\n        handler(appStateData.network_info);\\n      }\\n    );\\n    _subscriptions.set(handler, listener);\\n    return \{\\n      remove: () => NetInfo.removeEventListener(eventName, handler)\\n    };\\n  }",
      "docblock": "/**\\n   * Invokes the listener whenever network status changes.\\n   * The listener receives one of the connectivity types listed above.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"ChangeEventName\\",\\"length\\":1}",
          "name": "eventName"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": "\{remove: () => void}",
      "name": "addEventListener"
    },
    \{
      "line": 195,
      "source": "removeEventListener(\\n    eventName: ChangeEventName,\\n    handler: Function\\n  ): void \{\\n    const listener = _subscriptions.get(handler);\\n    if (!listener) \{\\n      return;\\n    }\\n    listener.remove();\\n    _subscriptions.delete(handler);\\n  }",
      "docblock": "/**\\n   * Removes the listener for network status changes.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"ChangeEventName\\",\\"length\\":1}",
          "name": "eventName"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": "void",
      "name": "removeEventListener"
    },
    \{
      "line": 211,
      "source": "fetch(): Promise<any> \{\\n    return RCTNetInfo.getCurrentConnectivity().then(resp => resp.network_info);\\n  }",
      "docblock": "/**\\n   * Returns a promise that resolves with one of the connectivity types listed\\n   * above.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "Promise<any>",
      "name": "fetch"
    },
    \{
      "line": 261,
      "source": "isConnectionExpensive(): Promise<boolean> \{\\n    return (\\n      Platform.OS === 'android' ? RCTNetInfo.isConnectionMetered() : Promise.reject(new Error('Currently not supported on iOS'))\\n    );\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"boolean\\",\\"length\\":1}],\\"length\\":4}",
      "name": "isConnectionExpensive"
    }
  ],
  "properties": [
    \{
      "name": "isConnected",
      "type": \{
        "name": "ObjectExpression"
      },
      "docblock": "/**\\n   * An object with the same methods as above but the listener receives a\\n   * boolean which represents the internet connectivity.\\n   * Use this if you are only interested with whether the device has internet\\n   * connectivity.\\n   */\\n",
      "source": "isConnected: \{\\n    addEventListener(\\n      eventName: ChangeEventName,\\n      handler: Function\\n    ): \{remove: () => void} \{\\n      const listener = (connection) => \{\\n        handler(_isConnected(connection));\\n      };\\n      _isConnectedSubscriptions.set(handler, listener);\\n      NetInfo.addEventListener(\\n        eventName,\\n        listener\\n      );\\n      return \{\\n        remove: () => NetInfo.isConnected.removeEventListener(eventName, handler)\\n      };\\n    },\\n\\n    removeEventListener(\\n      eventName: ChangeEventName,\\n      handler: Function\\n    ): void \{\\n      const listener = _isConnectedSubscriptions.get(handler);\\n      NetInfo.removeEventListener(\\n        eventName,\\n        /* $FlowFixMe(>=0.36.0 site=react_native_fb,react_native_oss) Flow error\\n         * detected during the deploy of Flow v0.36.0. To see the error, remove\\n         * this comment and run Flow */\\n        listener\\n      );\\n      _isConnectedSubscriptions.delete(handler);\\n    },\\n\\n    fetch(): Promise<any> \{\\n      return NetInfo.fetch().then(\\n        (connection) => _isConnected(connection)\\n      );\\n    },\\n  }",
      "modifiers": [
        "static"
      ],
      "propertySource": ""
    }
  ],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 171,
  "name": "NetInfo",
  "docblock": "/**\\n * NetInfo exposes info about online/offline status\\n *\\n * \`\`\`\\n * NetInfo.fetch().done((reach) => \{\\n *   console.log('Initial: ' + reach);\\n * });\\n * function handleFirstConnectivityChange(reach) \{\\n *   console.log('First change: ' + reach);\\n *   NetInfo.removeEventListener(\\n *     'change',\\n *     handleFirstConnectivityChange\\n *   );\\n * }\\n * NetInfo.addEventListener(\\n *   'change',\\n *   handleFirstConnectivityChange\\n * );\\n * \`\`\`\\n *\\n * ### IOS\\n *\\n * Asynchronously determine if the device is online and on a cellular network.\\n *\\n * - \`none\` - device is offline\\n * - \`wifi\` - device is online and connected via wifi, or is the iOS simulator\\n * - \`cell\` - device is connected via Edge, 3G, WiMax, or LTE\\n * - \`unknown\` - error case and the network status is unknown\\n *\\n * ### Android\\n *\\n * To request network info, you need to add the following line to your\\n * app's \`AndroidManifest.xml\`:\\n *\\n * \`<uses-permission android:name=\\"android.permission.ACCESS_NETWORK_STATE\\" />\`\\n * Asynchronously determine if the device is connected and details about that connection.\\n *\\n * Android Connectivity Types.\\n *\\n * - \`NONE\` - device is offline\\n * - \`BLUETOOTH\` - The Bluetooth data connection.\\n * - \`DUMMY\` -  Dummy data connection.\\n * - \`ETHERNET\` - The Ethernet data connection.\\n * - \`MOBILE\` - The Mobile data connection.\\n * - \`MOBILE_DUN\` - A DUN-specific Mobile data connection.\\n * - \`MOBILE_HIPRI\` - A High Priority Mobile data connection.\\n * - \`MOBILE_MMS\` - An MMS-specific Mobile data connection.\\n * - \`MOBILE_SUPL\` -  A SUPL-specific Mobile data connection.\\n * - \`VPN\` -  A virtual network using one or more native bearers. Requires API Level 21\\n * - \`WIFI\` - The WIFI data connection.\\n * - \`WIMAX\` -  The WiMAX data connection.\\n * - \`UNKNOWN\` - Unknown data connection.\\n *\\n * The rest ConnectivityStates are hidden by the Android API, but can be used if necessary.\\n *\\n * ### isConnectionExpensive\\n *\\n * Available on Android. Detect if the current active connection is metered or not. A network is\\n * classified as metered when the user is sensitive to heavy data usage on that connection due to\\n * monetary costs, data limitations or battery/performance issues.\\n *\\n * \`\`\`\\n * NetInfo.isConnectionExpensive()\\n * .then(isConnectionExpensive => \{\\n *   console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));\\n * })\\n * .catch(error => \{\\n *   console.error(error);\\n * });\\n * \`\`\`\\n *\\n * ### isConnected\\n *\\n * Available on all platforms. Asynchronously fetch a boolean to determine\\n * internet connectivity.\\n *\\n * \`\`\`\\n * NetInfo.isConnected.fetch().then(isConnected => \{\\n *   console.log('First, is ' + (isConnected ? 'online' : 'offline'));\\n * });\\n * function handleFirstConnectivityChange(isConnected) \{\\n *   console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\\n *   NetInfo.isConnected.removeEventListener(\\n *     'change',\\n *     handleFirstConnectivityChange\\n *   );\\n * }\\n * NetInfo.isConnected.addEventListener(\\n *   'change',\\n *   handleFirstConnectivityChange\\n * );\\n * \`\`\`\\n */\\n",
  "requires": [
    \{
      "name": "Map"
    },
    \{
      "name": "NativeEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "Platform"
    }
  ],
  "filepath": "Libraries/Network/NetInfo.js",
  "componentName": "NetInfo",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/NetInfoExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule NetInfoExample\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst \{\\n  NetInfo,\\n  Text,\\n  View,\\n  TouchableWithoutFeedback,\\n} = ReactNative;\\n\\nclass ConnectionInfoSubscription extends React.Component \{\\n  state = \{\\n    connectionInfoHistory: [],\\n  };\\n\\n  componentDidMount() \{\\n    NetInfo.addEventListener(\\n        'change',\\n        this._handleConnectionInfoChange\\n    );\\n  }\\n\\n  componentWillUnmount() \{\\n    NetInfo.removeEventListener(\\n        'change',\\n        this._handleConnectionInfoChange\\n    );\\n  }\\n\\n  _handleConnectionInfoChange = (connectionInfo) => \{\\n    const connectionInfoHistory = this.state.connectionInfoHistory.slice();\\n    connectionInfoHistory.push(connectionInfo);\\n    this.setState(\{\\n      connectionInfoHistory,\\n    });\\n  };\\n\\n  render() \{\\n    return (\\n        <View>\\n          <Text>\{JSON.stringify(this.state.connectionInfoHistory)}</Text>\\n        </View>\\n    );\\n  }\\n}\\n\\nclass ConnectionInfoCurrent extends React.Component \{\\n  state = \{\\n    connectionInfo: null,\\n  };\\n\\n  componentDidMount() \{\\n    NetInfo.addEventListener(\\n        'change',\\n        this._handleConnectionInfoChange\\n    );\\n    NetInfo.fetch().done(\\n        (connectionInfo) => \{ this.setState(\{connectionInfo}); }\\n    );\\n  }\\n\\n  componentWillUnmount() \{\\n    NetInfo.removeEventListener(\\n        'change',\\n        this._handleConnectionInfoChange\\n    );\\n  }\\n\\n  _handleConnectionInfoChange = (connectionInfo) => \{\\n    this.setState(\{\\n      connectionInfo,\\n    });\\n  };\\n\\n  render() \{\\n    return (\\n        <View>\\n          <Text>\{this.state.connectionInfo}</Text>\\n        </View>\\n    );\\n  }\\n}\\n\\nclass IsConnected extends React.Component \{\\n  state = \{\\n    isConnected: null,\\n  };\\n\\n  componentDidMount() \{\\n    NetInfo.isConnected.addEventListener(\\n        'change',\\n        this._handleConnectivityChange\\n    );\\n    NetInfo.isConnected.fetch().done(\\n        (isConnected) => \{ this.setState(\{isConnected}); }\\n    );\\n  }\\n\\n  componentWillUnmount() \{\\n    NetInfo.isConnected.removeEventListener(\\n        'change',\\n        this._handleConnectivityChange\\n    );\\n  }\\n\\n  _handleConnectivityChange = (isConnected) => \{\\n    this.setState(\{\\n      isConnected,\\n    });\\n  };\\n\\n  render() \{\\n    return (\\n        <View>\\n          <Text>\{this.state.isConnected ? 'Online' : 'Offline'}</Text>\\n        </View>\\n    );\\n  }\\n}\\n\\nclass IsConnectionExpensive extends React.Component \{\\n  state = \{\\n    isConnectionExpensive: (null : ?boolean),\\n  };\\n\\n  _checkIfExpensive = () => \{\\n    NetInfo.isConnectionExpensive().then(\\n        isConnectionExpensive => \{ this.setState(\{isConnectionExpensive}); }\\n    );\\n  };\\n\\n  render() \{\\n    return (\\n        <View>\\n          <TouchableWithoutFeedback onPress=\{this._checkIfExpensive}>\\n            <View>\\n              <Text>Click to see if connection is expensive:\\n                \{this.state.isConnectionExpensive === true ? 'Expensive' :\\n                this.state.isConnectionExpensive === false ? 'Not expensive'\\n                : 'Unknown'}\\n              </Text>\\n            </View>\\n          </TouchableWithoutFeedback>\\n        </View>\\n    );\\n  }\\n}\\n\\nexports.title = 'NetInfo';\\nexports.description = 'Monitor network status';\\nexports.examples = [\\n  \{\\n    title: 'NetInfo.isConnected',\\n    description: 'Asynchronously load and observe connectivity',\\n    render(): React.Element<any> \{ return <IsConnected />; }\\n  },\\n  \{\\n    title: 'NetInfo.update',\\n    description: 'Asynchronously load and observe connectionInfo',\\n    render(): React.Element<any> \{ return <ConnectionInfoCurrent />; }\\n  },\\n  \{\\n    title: 'NetInfo.updateHistory',\\n    description: 'Observed updates to connectionInfo',\\n    render(): React.Element<any> \{ return <ConnectionInfoSubscription />; }\\n  },\\n  \{\\n    platform: 'android',\\n    title: 'NetInfo.isConnectionExpensive (Android)',\\n    description: 'Asynchronously check isConnectionExpensive',\\n    render(): React.Element<any> \{ return <IsConnectionExpensive />; }\\n  },\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"netinfo","title":"NetInfo","layout":"autodocs","category":"APIs","permalink":"docs/netinfo.html","platform":"cross","next":"panresponder","previous":"nativemethodsmixin","sidebar":true,"runnable":true,"path":"Libraries/Network/NetInfo.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;