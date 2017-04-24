/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 64,
      "source": "exitApp: function() \{\\n    DeviceEventManager.invokeDefaultBackPressHandler();\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "exitApp"
    },
    \{
      "line": 68,
      "source": "addEventListener: function (\\n    eventName: BackPressEventName,\\n    handler: Function\\n  ): \{remove: () => void} \{\\n    _backPressSubscriptions.add(handler);\\n    return \{\\n      remove: () => BackAndroid.removeEventListener(eventName, handler),\\n    };\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"BackPressEventName\\",\\"length\\":1}",
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
      "line": 78,
      "source": "removeEventListener: function(\\n    eventName: BackPressEventName,\\n    handler: Function\\n  ): void \{\\n    _backPressSubscriptions.delete(handler);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"BackPressEventName\\",\\"length\\":1}",
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
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 62,
  "name": "BackAndroid",
  "docblock": "/**\\n * Detect hardware back button presses, and programmatically invoke the default back button\\n * functionality to exit the app if there are no listeners or if none of the listeners return true.\\n * The event subscriptions are called in reverse order (i.e. last registered subscription first),\\n * and if one subscription returns true then subscriptions registered earlier will not be called.\\n *\\n * Example:\\n *\\n * \`\`\`javascript\\n * BackAndroid.addEventListener('hardwareBackPress', function() \{\\n *  // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here\\n *  // Typically you would use the navigator here to go to the last state.\\n *\\n *  if (!this.onMainScreen()) \{\\n *    this.goBack();\\n *    return true;\\n *  }\\n *  return false;\\n * });\\n * \`\`\`\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    },
    \{
      "name": "RCTDeviceEventEmitter"
    }
  ],
  "filepath": "Libraries/Utilities/BackAndroid.android.js",
  "componentName": "BackAndroid",
  "componentPlatform": "android",
  "examples": []
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"backandroid","title":"BackAndroid","layout":"autodocs","category":"APIs","permalink":"docs/backandroid.html","platform":"android","next":"cameraroll","previous":"asyncstorage","sidebar":true,"runnable":false,"path":"Libraries/Utilities/BackAndroid.android.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;