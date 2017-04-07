/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 17,
      "source": "getAdvertisingId: function(onSuccess: Function, onFailure: Function) \{\\n    AdSupport.getAdvertisingId(onSuccess, onFailure);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onSuccess"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onFailure"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getAdvertisingId"
    },
    \{
      "line": 21,
      "source": "getAdvertisingTrackingEnabled: function(onSuccess: Function, onFailure: Function) \{\\n    AdSupport.getAdvertisingTrackingEnabled(onSuccess, onFailure);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onSuccess"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onFailure"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getAdvertisingTrackingEnabled"
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 16,
  "name": "AdSupportIOS",
  "docblock": "/**\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/AdSupport/AdSupportIOS.js",
  "componentName": "AdSupportIOS",
  "componentPlatform": "ios",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/AdSupportIOSExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule AdSupportIOSExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  AdSupportIOS,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = ReactNative;\\n\\nexports.framework = 'React';\\nexports.title = 'Advertising ID';\\nexports.description = 'Example of using the ad support API.';\\n\\nexports.examples = [\\n  \{\\n    title: 'Ad Support IOS',\\n    render: function(): React.Element<any> \{\\n      return <AdSupportIOSExample />;\\n    },\\n  }\\n];\\n\\nclass AdSupportIOSExample extends React.Component \{\\n  state = \{\\n    deviceID: 'No IDFA yet',\\n    hasAdvertiserTracking: 'unset',\\n  };\\n\\n  componentDidMount() \{\\n    AdSupportIOS.getAdvertisingId(\\n      this._onDeviceIDSuccess,\\n      this._onDeviceIDFailure\\n    );\\n\\n    AdSupportIOS.getAdvertisingTrackingEnabled(\\n      this._onHasTrackingSuccess,\\n      this._onHasTrackingFailure\\n    );\\n  }\\n\\n  _onHasTrackingSuccess = (hasTracking) => \{\\n    this.setState(\{\\n      'hasAdvertiserTracking': hasTracking,\\n    });\\n  };\\n\\n  _onHasTrackingFailure = (e) => \{\\n    this.setState(\{\\n      'hasAdvertiserTracking': 'Error!',\\n    });\\n  };\\n\\n  _onDeviceIDSuccess = (deviceID) => \{\\n    this.setState(\{\\n      'deviceID': deviceID,\\n    });\\n  };\\n\\n  _onDeviceIDFailure = (e) => \{\\n    this.setState(\{\\n      'deviceID': 'Error!',\\n    });\\n  };\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text>\\n          <Text style=\{styles.title}>Advertising ID: </Text>\\n          \{JSON.stringify(this.state.deviceID)}\\n        </Text>\\n        <Text>\\n          <Text style=\{styles.title}>Has Advertiser Tracking: </Text>\\n          \{JSON.stringify(this.state.hasAdvertiserTracking)}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  title: \{\\n    fontWeight: '500',\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"adsupportios","title":"AdSupportIOS","layout":"autodocs","category":"APIs","permalink":"docs/adsupportios.html","platform":"ios","next":"alert","previous":"actionsheetios","sidebar":true,"runnable":true,"path":"Libraries/AdSupport/AdSupportIOS.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;