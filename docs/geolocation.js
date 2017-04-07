/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 67,
      "source": "getCurrentPosition: function(\\n    geo_success: Function,\\n    geo_error?: Function,\\n    geo_options?: GeoOptions\\n  ) \{\\n    invariant(\\n      typeof geo_success === 'function',\\n      'Must provide a valid geo_success callback.'\\n    );\\n    RCTLocationObserver.getCurrentPosition(\\n      geo_options || \{},\\n      geo_success,\\n      geo_error || logError\\n    );\\n  }",
      "docblock": "/*\\n   * Invokes the success callback once with the latest location info.  Supported\\n   * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool)\\n   * On Android, if the location is cached this can return almost immediately,\\n   * or it will request an update which might take a while.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "geo_success"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "geo_error?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"GeoOptions\\",\\"length\\":1}",
          "name": "geo_options?"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getCurrentPosition"
    },
    \{
      "line": 87,
      "source": "watchPosition: function(success: Function, error?: Function, options?: GeoOptions): number \{\\n    if (!updatesEnabled) \{\\n      RCTLocationObserver.startObserving(options || \{});\\n      updatesEnabled = true;\\n    }\\n    var watchID = subscriptions.length;\\n    subscriptions.push([\\n      LocationEventEmitter.addListener(\\n        'geolocationDidChange',\\n        success\\n      ),\\n      error ? LocationEventEmitter.addListener(\\n        'geolocationError',\\n        error\\n      ) : null,\\n    ]);\\n    return watchID;\\n  }",
      "docblock": "/*\\n   * Invokes the success callback whenever the location changes.  Supported\\n   * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool), distanceFilter(m)\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "success"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "error?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"GeoOptions\\",\\"length\\":1}",
          "name": "options?"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
      "name": "watchPosition"
    },
    \{
      "line": 106,
      "source": "clearWatch: function(watchID: number) \{\\n    var sub = subscriptions[watchID];\\n    if (!sub) \{\\n      // Silently exit when the watchID is invalid or already cleared\\n      // This is consistent with timers\\n      return;\\n    }\\n\\n    sub[0].remove();\\n    // array element refinements not yet enabled in Flow\\n    var sub1 = sub[1]; sub1 && sub1.remove();\\n    subscriptions[watchID] = undefined;\\n    var noWatchers = true;\\n    for (var ii = 0; ii < subscriptions.length; ii++) \{\\n      if (subscriptions[ii]) \{\\n        noWatchers = false; // still valid subscriptions\\n      }\\n    }\\n    if (noWatchers) \{\\n      Geolocation.stopObserving();\\n    }\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "watchID"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "clearWatch"
    },
    \{
      "line": 129,
      "source": "stopObserving: function() \{\\n    if (updatesEnabled) \{\\n      RCTLocationObserver.stopObserving();\\n      updatesEnabled = false;\\n      for (var ii = 0; ii < subscriptions.length; ii++) \{\\n        var sub = subscriptions[ii];\\n        if (sub) \{\\n          warning('Called stopObserving with existing subscriptions.');\\n          sub[0].remove();\\n          // array element refinements not yet enabled in Flow\\n          var sub1 = sub[1]; sub1 && sub1.remove();\\n        }\\n      }\\n      subscriptions = [];\\n    }\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "stopObserving"
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 59,
  "name": "Geolocation",
  "docblock": "/**\\n * The Geolocation API extends the web spec:\\n * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation\\n *\\n * As a browser polyfill, this API is available through the \`navigator.geolocation\`\\n * global - you do not need to \`import\` it.\\n *\\n * ### iOS\\n * You need to include the \`NSLocationWhenInUseUsageDescription\` key\\n * in Info.plist to enable geolocation when using the app. Geolocation is\\n * enabled by default when you create a project with \`react-native init\`.\\n *\\n * In order to enable geolocation in the background, you need to include the\\n * 'NSLocationAlwaysUsageDescription' key in Info.plist and add location as\\n * a background mode in the 'Capabilities' tab in Xcode.\\n *\\n * ### Android\\n * To request access to location, you need to add the following line to your\\n * app's \`AndroidManifest.xml\`:\\n *\\n * \`<uses-permission android:name=\\"android.permission.ACCESS_FINE_LOCATION\\" />\`\\n *\\n * Android API >= 18 Positions will also contain a \`mocked\` boolean to indicate if position\\n * was created from a mock provider.\\n *\\n */\\n",
  "requires": [
    \{
      "name": "NativeEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "fbjs/lib/invariant"
    },
    \{
      "name": "logError"
    },
    \{
      "name": "fbjs/lib/warning"
    }
  ],
  "filepath": "Libraries/Geolocation/Geolocation.js",
  "componentName": "Geolocation",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/GeolocationExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule GeolocationExample\\n */\\n/* eslint no-console: 0 */\\n'use strict';\\n\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  Text,\\n  View,\\n} = ReactNative;\\n\\nexports.framework = 'React';\\nexports.title = 'Geolocation';\\nexports.description = 'Examples of using the Geolocation API.';\\n\\nexports.examples = [\\n  \{\\n    title: 'navigator.geolocation',\\n    render: function(): React.Element<any> \{\\n      return <GeolocationExample />;\\n    },\\n  }\\n];\\n\\nclass GeolocationExample extends React.Component \{\\n  state = \{\\n    initialPosition: 'unknown',\\n    lastPosition: 'unknown',\\n  };\\n\\n  watchID: ?number = null;\\n\\n  componentDidMount() \{\\n    navigator.geolocation.getCurrentPosition(\\n      (position) => \{\\n        var initialPosition = JSON.stringify(position);\\n        this.setState(\{initialPosition});\\n      },\\n      (error) => alert(JSON.stringify(error)),\\n      \{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}\\n    );\\n    this.watchID = navigator.geolocation.watchPosition((position) => \{\\n      var lastPosition = JSON.stringify(position);\\n      this.setState(\{lastPosition});\\n    });\\n  }\\n\\n  componentWillUnmount() \{\\n    navigator.geolocation.clearWatch(this.watchID);\\n  }\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text>\\n          <Text style=\{styles.title}>Initial position: </Text>\\n          \{this.state.initialPosition}\\n        </Text>\\n        <Text>\\n          <Text style=\{styles.title}>Current position: </Text>\\n          \{this.state.lastPosition}\\n        </Text>\\n      </View>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  title: \{\\n    fontWeight: '500',\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"geolocation","title":"Geolocation","layout":"autodocs","category":"APIs","permalink":"docs/geolocation.html","platform":"cross","next":"imageeditor","previous":"easing","sidebar":true,"runnable":true,"path":"Libraries/Geolocation/Geolocation.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;