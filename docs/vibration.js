/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 77,
      "source": "vibrate: function(pattern: number | Array<number> = 400, repeat: boolean = false) \{\\n    if (Platform.OS === 'android') \{\\n      if (typeof pattern === 'number') \{\\n        RCTVibration.vibrate(pattern);\\n      } else if (Array.isArray(pattern)) \{\\n        RCTVibration.vibrateByPattern(pattern, repeat ? 0 : -1);\\n      } else \{\\n        throw new Error('Vibration pattern should be a number or array');\\n      }\\n    } else \{\\n      if (_vibrating) \{\\n        return;\\n      }\\n      if (typeof pattern === 'number') \{\\n        RCTVibration.vibrate();\\n      } else if (Array.isArray(pattern)) \{\\n        vibrateByPattern(pattern, repeat);\\n      } else \{\\n        throw new Error('Vibration pattern should be a number or array');\\n      }\\n    }\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "number | Array<number>",
          "name": "pattern"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"boolean\\",\\"length\\":1}",
          "name": "repeat"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "vibrate"
    },
    \{
      "line": 102,
      "source": "cancel: function() \{\\n    if (Platform.OS === 'ios') \{\\n      _vibrating = false;\\n    } else \{\\n      RCTVibration.cancel();\\n    }\\n  }",
      "docblock": "/**\\n   * Stop vibration\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "cancel"
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 76,
  "name": "Vibration",
  "docblock": "/**\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    },
    \{
      "name": "Platform"
    }
  ],
  "filepath": "Libraries/Vibration/Vibration.js",
  "componentName": "Vibration",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/VibrationExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule VibrationExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  View,\\n  Text,\\n  TouchableHighlight,\\n  Vibration,\\n  Platform,\\n} = ReactNative;\\n\\nexports.framework = 'React';\\nexports.title = 'Vibration';\\nexports.description = 'Vibration API';\\n\\nvar pattern, patternLiteral, patternDescription;\\nif (Platform.OS === 'android') \{\\n  pattern = [0, 500, 200, 500];\\n  patternLiteral = '[0, 500, 200, 500]';\\n  patternDescription = \`$\{patternLiteral}\\narg 0: duration to wait before turning the vibrator on.\\narg with odd: vibration length.\\narg with even: duration to wait before next vibration.\\n\`;\\n} else \{\\n  pattern = [0, 1000, 2000, 3000];\\n  patternLiteral = '[0, 1000, 2000, 3000]';\\n  patternDescription = \`$\{patternLiteral}\\nvibration length on iOS is fixed.\\npattern controls durations BETWEEN each vibration only.\\n\\narg 0: duration to wait before turning the vibrator on.\\nsubsequent args: duration to wait before next vibrattion.\\n\`;\\n}\\n\\nexports.examples = [\\n  \{\\n    title: 'Pattern Descriptions',\\n    render() \{\\n      return (\\n        <View style=\{styles.wrapper}>\\n          <Text>\{patternDescription}</Text>\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Vibration.vibrate()',\\n    render() \{\\n      return (\\n        <TouchableHighlight\\n          style=\{styles.wrapper}\\n          onPress=\{() => Vibration.vibrate()}>\\n          <View style=\{styles.button}>\\n            <Text>Vibrate</Text>\\n          </View>\\n        </TouchableHighlight>\\n      );\\n    },\\n  },\\n  \{\\n    title: \`Vibration.vibrate($\{patternLiteral})\`,\\n    render() \{\\n      return (\\n        <TouchableHighlight\\n          style=\{styles.wrapper}\\n          onPress=\{() => Vibration.vibrate(pattern)}>\\n          <View style=\{styles.button}>\\n            <Text>Vibrate once</Text>\\n          </View>\\n        </TouchableHighlight>\\n      );\\n    },\\n  },\\n  \{\\n    title: \`Vibration.vibrate($\{patternLiteral}, true)\`,\\n    render() \{\\n      return (\\n        <TouchableHighlight\\n          style=\{styles.wrapper}\\n          onPress=\{() => Vibration.vibrate(pattern, true)}>\\n          <View style=\{styles.button}>\\n            <Text>Vibrate until cancel</Text>\\n          </View>\\n        </TouchableHighlight>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Vibration.cancel()',\\n    render() \{\\n      return (\\n        <TouchableHighlight\\n          style=\{styles.wrapper}\\n          onPress=\{() => Vibration.cancel()}>\\n          <View style=\{styles.button}>\\n            <Text>Cancel</Text>\\n          </View>\\n        </TouchableHighlight>\\n      );\\n    },\\n  },\\n];\\n\\nvar styles = StyleSheet.create(\{\\n  wrapper: \{\\n    borderRadius: 5,\\n    marginBottom: 5,\\n  },\\n  button: \{\\n    backgroundColor: '#eeeeee',\\n    padding: 10,\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"vibration","title":"Vibration","layout":"autodocs","category":"APIs","permalink":"docs/vibration.html","platform":"cross","next":"vibrationios","previous":"toastandroid","sidebar":true,"runnable":true,"path":"Libraries/Vibration/Vibration.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;