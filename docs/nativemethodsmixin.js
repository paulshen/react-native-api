/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 72,
      "source": "measure: function(callback: MeasureOnSuccessCallback) \{\\n    UIManager.measure(\\n      ReactNative.findNodeHandle(this),\\n      mountSafeCallback(this, callback),\\n    );\\n  }",
      "docblock": "/**\\n   * Determines the location on screen, width, and height of the given view and\\n   * returns the values via an async callback. If successful, the callback will\\n   * be called with the following arguments:\\n   *\\n   *  - x\\n   *  - y\\n   *  - width\\n   *  - height\\n   *  - pageX\\n   *  - pageY\\n   *\\n   * Note that these measurements are not available until after the rendering\\n   * has been completed in native. If you need the measurements as soon as\\n   * possible, consider using the [\`onLayout\`\\n   * prop](docs/view.html#onlayout) instead.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"MeasureOnSuccessCallback\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "measure"
    },
    \{
      "line": 94,
      "source": "measureInWindow: function(callback: MeasureInWindowOnSuccessCallback) \{\\n    UIManager.measureInWindow(\\n      ReactNative.findNodeHandle(this),\\n      mountSafeCallback(this, callback),\\n    );\\n  }",
      "docblock": "/**\\n   * Determines the location of the given view in the window and returns the\\n   * values via an async callback. If the React root view is embedded in\\n   * another native view, this will give you the absolute coordinates. If\\n   * successful, the callback will be called with the following\\n   * arguments:\\n   *\\n   *  - x\\n   *  - y\\n   *  - width\\n   *  - height\\n   *\\n   * Note that these measurements are not available until after the rendering\\n   * has been completed in native.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"MeasureInWindowOnSuccessCallback\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "measureInWindow"
    },
    \{
      "line": 109,
      "source": "measureLayout: function(\\n    relativeToNativeNode: number,\\n    onSuccess: MeasureLayoutOnSuccessCallback,\\n    onFail: () => void /* currently unused */,\\n  ) \{\\n    UIManager.measureLayout(\\n      ReactNative.findNodeHandle(this),\\n      relativeToNativeNode,\\n      mountSafeCallback(this, onFail),\\n      mountSafeCallback(this, onSuccess),\\n    );\\n  }",
      "docblock": "/**\\n   * Like [\`measure()\`](#measure), but measures the view relative an ancestor,\\n   * specified as \`relativeToNativeNode\`. This means that the returned x, y\\n   * are relative to the origin x, y of the ancestor view.\\n   *\\n   * As always, to obtain a native node handle for a component, you can use\\n   * \`ReactNative.findNodeHandle(component)\`.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "relativeToNativeNode"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"MeasureLayoutOnSuccessCallback\\",\\"length\\":1}",
          "name": "onSuccess"
        },
        \{
          "typehint": "() => void",
          "name": "onFail"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "measureLayout"
    },
    \{
      "line": 144,
      "source": "focus: function() \{\\n    TextInputState.focusTextInput(ReactNative.findNodeHandle(this));\\n  }",
      "docblock": "/**\\n   * Requests focus for the given input or view. The exact behavior triggered\\n   * will depend on the platform and type of view.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "focus"
    },
    \{
      "line": 151,
      "source": "blur: function() \{\\n    TextInputState.blurTextInput(ReactNative.findNodeHandle(this));\\n  }",
      "docblock": "/**\\n   * Removes focus from an input or view. This is the opposite of \`focus()\`.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "blur"
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 54,
  "name": "NativeMethodsMixin",
  "docblock": "//*\\n * \`NativeMethodsMixin\` provides methods to access the underlying native\\n * component directly. This can be useful in cases when you want to focus\\n * a view or measure its on-screen dimensions, for example.\\n *\\n * The methods described here are available on most of the default components\\n * provided by React Native. Note, however, that they are *not* available on\\n * composite components that aren't directly backed by a native view. This will\\n * generally include most components that you define in your own app. For more\\n * information, see [Direct\\n * Manipulation](docs/direct-manipulation.html).\\n \\n// TODO (bvaughn) Figure out how to use the NativeMethodsInterface type to-\\n// ensure that these mixins and ReactNativeFiberHostComponent stay in sync.\\n// Unfortunately, using it causes Flow to complain WRT createClass mixins:\\n// \\"call of method \`createClass\`. Expected an exact object instead of ...\\"",
  "requires": [
    \{
      "name": "ReactNative"
    },
    \{
      "name": "ReactNativeFeatureFlags"
    },
    \{
      "name": "ReactNativeAttributePayload"
    },
    \{
      "name": "TextInputState"
    },
    \{
      "name": "UIManager"
    },
    \{
      "name": "fbjs/lib/invariant"
    },
    \{
      "name": "findNodeHandle"
    },
    \{
      "name": "NativeMethodsMixinUtils"
    }
  ],
  "filepath": "Libraries/Renderer/src/renderers/native/NativeMethodsMixin.js",
  "componentName": "NativeMethodsMixin",
  "componentPlatform": "cross",
  "examples": []
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"nativemethodsmixin","title":"NativeMethodsMixin","layout":"autodocs","category":"APIs","permalink":"docs/nativemethodsmixin.html","platform":"cross","next":"netinfo","previous":"linking","sidebar":true,"runnable":false,"path":"Libraries/Renderer/src/renderers/native/NativeMethodsMixin.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;