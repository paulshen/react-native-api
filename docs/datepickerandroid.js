/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "DatePickerAndroid",
  "docblock": "/**\\n * Opens the standard Android date picker dialog.\\n *\\n * ### Example\\n *\\n * \`\`\`\\n * try \{\\n *   const \{action, year, month, day} = await DatePickerAndroid.open(\{\\n *     // Use \`new Date()\` for current date.\\n *     // May 25 2020. Month 0 is January.\\n *     date: new Date(2020, 4, 25)\\n *   });\\n *   if (action !== DatePickerAndroid.dismissedAction) \{\\n *     // Selected year, month (0-11), day\\n *   }\\n * } catch (\{code, message}) \{\\n *   console.warn('Cannot open date picker', message);\\n * }\\n * \`\`\`\\n */\\n",
  "methods": [
    \{
      "line": 69,
      "source": "static async open(options: Object): Promise<Object> \{\\n    const optionsMs = options;\\n    if (optionsMs) \{\\n      _toMillis(options, 'date');\\n      _toMillis(options, 'minDate');\\n      _toMillis(options, 'maxDate');\\n    }\\n    return DatePickerModule.open(options);\\n  }",
      "docblock": "/**\\n   * Opens the standard Android date picker dialog.\\n   *\\n   * The available keys for the \`options\` object are:\\n   *\\n   *   - \`date\` (\`Date\` object or timestamp in milliseconds) - date to show by default\\n   *   - \`minDate\` (\`Date\` or timestamp in milliseconds) - minimum date that can be selected\\n   *   - \`maxDate\` (\`Date\` object or timestamp in milliseconds) - minimum date that can be selected\\n   *   - \`mode\` (\`enum('calendar', 'spinner', 'default')\`) - To set the date-picker mode to calendar/spinner/default\\n   *     - 'calendar': Show a date picker in calendar mode.\\n   *     - 'spinner': Show a date picker in spinner mode.\\n   *     - 'default': Show a default native date picker(spinner/calendar) based on android versions.\\n   *\\n   * Returns a Promise which will be invoked an object containing \`action\`, \`year\`, \`month\` (0-11),\\n   * \`day\` if the user picked a date. If the user dismissed the dialog, the Promise will\\n   * still be resolved with action being \`DatePickerAndroid.dismissedAction\` and all the other keys\\n   * being undefined. **Always** check whether the \`action\` before reading the values.\\n   *\\n   * Note the native date picker dialog has some UI glitches on Android 4 and lower\\n   * when using the \`minDate\` and \`maxDate\` options.\\n   */\\n",
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
      "line": 82,
      "source": "static get dateSetAction() \{ return 'dateSetAction'; }",
      "docblock": "/**\\n   * A date has been selected.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "dateSetAction"
    },
    \{
      "line": 86,
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
  "line": 47,
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/Components/DatePickerAndroid/DatePickerAndroid.android.js",
  "componentName": "DatePickerAndroid",
  "componentPlatform": "android",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/DatePickerAndroidExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n * @providesModule DatePickerAndroidExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  DatePickerAndroid,\\n  StyleSheet,\\n  Text,\\n  TouchableWithoutFeedback,\\n} = ReactNative;\\n\\nvar UIExplorerBlock = require\('./UIExplorerBlock');\\nvar UIExplorerPage = require\('./UIExplorerPage');\\n\\nclass DatePickerAndroidExample extends React.Component \{\\n  static title = 'DatePickerAndroid';\\n  static description = 'Standard Android date picker dialog';\\n\\n  state = \{\\n    presetDate: new Date(2020, 4, 5),\\n    simpleDate: new Date(2020, 4, 5),\\n    spinnerDate: new Date(2020, 4, 5),\\n    calendarDate: new Date(2020, 4, 5),\\n    defaultDate: new Date(2020, 4, 5),\\n    allDate: new Date(2020, 4, 5),\\n    simpleText: 'pick a date',\\n    spinnerText: 'pick a date',\\n    calendarText: 'pick a date',\\n    defaultText: 'pick a date',\\n    minText: 'pick a date, no earlier than today',\\n    maxText: 'pick a date, no later than today',\\n    presetText: 'pick a date, preset to 2020/5/5',\\n    allText: 'pick a date between 2020/5/1 and 2020/5/10',\\n  };\\n\\n  showPicker = async (stateKey, options) => \{\\n    try \{\\n      var newState = \{};\\n      const \{action, year, month, day} = await DatePickerAndroid.open(options);\\n      if (action === DatePickerAndroid.dismissedAction) \{\\n        newState[stateKey + 'Text'] = 'dismissed';\\n      } else \{\\n        var date = new Date(year, month, day);\\n        newState[stateKey + 'Text'] = date.toLocaleDateString();\\n        newState[stateKey + 'Date'] = date;\\n      }\\n      this.setState(newState);\\n    } catch (\{code, message}) \{\\n      console.warn(\`Error in example '$\{stateKey}': \`, message);\\n    }\\n  };\\n\\n  render() \{\\n    return (\\n      <UIExplorerPage title=\\"DatePickerAndroid\\">\\n        <UIExplorerBlock title=\\"Simple date picker\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'simple', \{date: this.state.simpleDate})}>\\n            <Text style=\{styles.text}>\{this.state.simpleText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Simple spinner date picker\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'spinner', \{date: this.state.spinnerDate, mode: 'spinner'})}>\\n            <Text style=\{styles.text}>\{this.state.spinnerText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Simple calendar date picker\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'calendar', \{date: this.state.calendarDate, mode: 'calendar'})}>\\n            <Text style=\{styles.text}>\{this.state.calendarText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Simple default date picker\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'default', \{date: this.state.defaultDate, mode: 'default'})}>\\n            <Text style=\{styles.text}>\{this.state.defaultText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Date picker with pre-set date\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'preset', \{date: this.state.presetDate})}>\\n            <Text style=\{styles.text}>\{this.state.presetText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Date picker with minDate\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'min', \{\\n              date: this.state.minDate,\\n              minDate: new Date(),\\n            })}>\\n            <Text style=\{styles.text}>\{this.state.minText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Date picker with maxDate\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'max', \{\\n              date: this.state.maxDate,\\n              maxDate: new Date(),\\n            })}>\\n            <Text style=\{styles.text}>\{this.state.maxText}</Text>\\n          </TouchableWithoutFeedback>\\n        </UIExplorerBlock>\\n        <UIExplorerBlock title=\\"Date picker with all options\\">\\n          <TouchableWithoutFeedback\\n            onPress=\{this.showPicker.bind(this, 'all', \{\\n              date: this.state.allDate,\\n              minDate: new Date(2020, 4, 1),\\n              maxDate: new Date(2020, 4, 10),\\n            })}>\\n            <Text style=\{styles.text}>\{this.state.allText}</Text>\\n          </TouchableWithoutFeedback>\\n          </UIExplorerBlock>\\n      </UIExplorerPage>\\n    );\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  text: \{\\n    color: 'black',\\n  },\\n});\\n\\nmodule.exports = DatePickerAndroidExample;\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"datepickerandroid","title":"DatePickerAndroid","layout":"autodocs","category":"APIs","permalink":"docs/datepickerandroid.html","platform":"android","next":"dimensions","previous":"clipboard","sidebar":true,"runnable":true,"path":"Libraries/Components/DatePickerAndroid/DatePickerAndroid.android.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;