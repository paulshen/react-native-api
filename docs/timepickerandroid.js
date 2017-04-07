/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "TimePickerAndroid",
  "docblock": "/**\\n * Opens the standard Android time picker dialog.\\n *\\n * ### Example\\n *\\n * \`\`\`\\n * try \{\\n *   const \{action, hour, minute} = await TimePickerAndroid.open(\{\\n *     hour: 14,\\n *     minute: 0,\\n *     is24Hour: false, // Will display '2 PM'\\n *   });\\n *   if (action !== TimePickerAndroid.dismissedAction) \{\\n *     // Selected hour (0-23), minute (0-59)\\n *   }\\n * } catch (\{code, message}) \{\\n *   console.warn('Cannot open time picker', message);\\n * }\\n * \`\`\`\\n */\\n",
  "methods": [
    \{
      "line": 53,
      "source": "static async open(options: Object): Promise<Object> \{\\n    return TimePickerModule.open(options);\\n  }",
      "docblock": "/**\\n   * Opens the standard Android time picker dialog.\\n   *\\n   * The available keys for the \`options\` object are:\\n   *   * \`hour\` (0-23) - the hour to show, defaults to the current time\\n   *   * \`minute\` (0-59) - the minute to show, defaults to the current time\\n   *   * \`is24Hour\` (boolean) - If \`true\`, the picker uses the 24-hour format. If \`false\`,\\n   *     the picker shows an AM/PM chooser. If undefined, the default for the current locale\\n   *     is used.\\n   *\\n   * Returns a Promise which will be invoked an object containing \`action\`, \`hour\` (0-23),\\n   * \`minute\` (0-59) if the user picked a time. If the user dismissed the dialog, the Promise will\\n   * still be resolved with action being \`TimePickerAndroid.dismissedAction\` and all the other keys\\n   * being undefined. **Always** check whether the \`action\` before reading the values.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Object",
          "name": "options"
        }
      ],
      "tparams": null,
      "returntypehint": "Promise<Object>",
      "name": "open"
    },
    \{
      "line": 60,
      "source": "static get timeSetAction() \{ return 'timeSetAction'; }",
      "docblock": "/**\\n   * A time has been selected.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "timeSetAction"
    },
    \{
      "line": 64,
      "source": "static get dismissedAction() \{ return 'dismissedAction'; }",
      "docblock": "/**\\n   * The dialog has been dismissed.\\n   */\\n",
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
  "line": 36,
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/Components/TimePickerAndroid/TimePickerAndroid.android.js",
  "componentName": "TimePickerAndroid",
  "componentPlatform": "android",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/TimePickerAndroidExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n * @providesModule TimePickerAndroidExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  TimePickerAndroid,\\n  StyleSheet,\\n  Text,\\n  TouchableWithoutFeedback,\\n} = ReactNative;\\n\\nvar UIExplorerBlock = require\('./UIExplorerBlock');\\nvar UIExplorerPage = require\('./UIExplorerPage');\\n\\nclass TimePickerAndroidExample extends React.Component \{\\n  static title = 'TimePickerAndroid';\\n  static description = 'Standard Android time picker dialog';\\n\\n  state = \{\\n    isoFormatText: 'pick a time (24-hour format)',\\n    presetHour: 4,\\n    presetMinute: 4,\\n    presetText: 'pick a time, default: 4:04AM',\\n    simpleText: 'pick a time',\\n  };\\n\\n  showPicker = async (stateKey, options) => \{\\n    try \{\\n      const \{action, minute, hour} = await TimePickerAndroid.open(options);\\n      var newState = \{};\\n      if (action === TimePickerAndroid.timeSetAction) \{\\n        newState[stateKey + 'Text'] = _formatTime(hour, minute);\\n        newState[stateKey + 'Hour'] = hour;\\n        newState[stateKey + 'Minute'] = minute;\\n      } else if (action === TimePickerAndroid.dismissedAction) \{\\n        newState[stateKey + 'Text'] = 'dismissed';\\n      }\\n      this.setState(newState);\\n    } catch (\{code, message}) \{\\n      console.warn(\`Error in example '$\{stateKey}': \`, message);\\n    }\\n  };\\n\\n  render() \{\\n    return (\\n      <UIExplorerPage title=\\"TimePickerAndroid\\">\\n        <UIExplorerBlock title=\\"Simple time picker\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'simple', \{})}>\\n            <Text style=\{styles.text}>\{this.state.simpleText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Time picker with pre-set time\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'preset', \{\\n              hour: this.state.presetHour,\\n              minute: this.state.presetMinute,\\n            })}>\\n            <Text style=\{styles.text}>\{this.state.presetText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n\\n        <UIExplorerBlock title=\\"Time picker with 24-hour time format\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'isoFormat', \{\\n              hour: this.state.isoFormatHour,\\n              minute: this.state.isoFormatMinute,\\n              is24Hour: true,\\n            })}>\\n            <Text style=\{styles.text}>\{this.state.isoFormatText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n      </UIExplorerPage>\\n    );\\n  }\\n}\\n\\n/**\\n * Returns e.g. '3:05'.\\n */\\nfunction _formatTime(hour, minute) \{\\n  return hour + ':' + (minute < 10 ? '0' + minute : minute);\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  text: \{\\n    color: 'black',\\n  },\\n});\\n\\nmodule.exports = TimePickerAndroidExample;\\n\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"timepickerandroid","title":"TimePickerAndroid","layout":"autodocs","category":"APIs","permalink":"docs/timepickerandroid.html","platform":"android","next":"toastandroid","previous":"systrace","sidebar":true,"runnable":true,"path":"Libraries/Components/TimePickerAndroid/TimePickerAndroid.android.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;