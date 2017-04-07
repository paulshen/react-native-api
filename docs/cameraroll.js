/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "CameraRoll",
  "docblock": "/**\\n * \`CameraRoll\` provides access to the local camera roll / gallery.\\n * Before using this you must link the \`RCTCameraRoll\` library.\\n * You can refer to [Linking](docs/linking-libraries-ios.html) for help.\\n *\\n * ### Permissions\\n * The user's permission is required in order to access the Camera Roll on devices running iOS 10 or later.\\n * Fill out the \`NSCameraUsageDescription\` key in your \`Info.plist\` with a string that describes how your\\n * app will use this data. This key will appear as \`Privacy - Camera Usage Description\` in Xcode.\\n *\\n */\\n",
  "methods": [
    \{
      "line": 128,
      "source": "static saveImageWithTag(tag: string): Promise<Object> \{\\n    console.warn('CameraRoll.saveImageWithTag is deprecated. Use CameraRoll.saveToCameraRoll instead');\\n    return this.saveToCameraRoll(tag, 'photo');\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "tag"
        }
      ],
      "tparams": null,
      "returntypehint": "Promise<Object>",
      "name": "saveImageWithTag"
    },
    \{
      "line": 147,
      "source": "static saveToCameraRoll(tag: string, type?: 'photo' | 'video'): Promise<Object> \{\\n    invariant(\\n      typeof tag === 'string',\\n      'CameraRoll.saveToCameraRoll must be a valid string.'\\n    );\\n\\n    invariant(\\n      type === 'photo' || type === 'video' || type === undefined,\\n      // $FlowFixMe(>=0.28.0)\\n      \`The second argument to saveToCameraRoll must be 'photo' or 'video'. You passed $\{type}\`\\n    );\\n\\n    let mediaType = 'photo';\\n    if (type) \{\\n      mediaType = type;\\n    } else if (['mov', 'mp4'].indexOf(tag.split('.').slice(-1)[0]) >= 0) \{\\n      mediaType = 'video';\\n    }\\n\\n    return RCTCameraRollManager.saveToCameraRoll(tag, mediaType);\\n  }",
      "docblock": "/**\\n   * Saves the photo or video to the camera roll / gallery.\\n   *\\n   * On Android, the tag must be a local image or video URI, such as \`\\"file:///sdcard/img.png\\"\`.\\n   *\\n   * On iOS, the tag can be any image URI (including local, remote asset-library and base64 data URIs)\\n   * or a local video file URI (remote or data URIs are not supported for saving video at this time).\\n   *\\n   * If the tag has a file extension of .mov or .mp4, it will be inferred as a video. Otherwise\\n   * it will be treated as a photo. To override the automatic choice, you can pass an optional\\n   * \`type\` parameter that must be one of 'photo' or 'video'.\\n   *\\n   * Returns a Promise which will resolve with the new URI.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "tag"
        },
        \{
          "typehint": "'photo' | 'video'",
          "name": "type?"
        }
      ],
      "tparams": null,
      "returntypehint": "Promise<Object>",
      "name": "saveToCameraRoll"
    },
    \{
      "line": 215,
      "source": "static getPhotos(params) \{\\n    if (__DEV__) \{\\n      checkPropTypes(\{params: getPhotosParamChecker}, \{params}, 'params', 'CameraRoll.getPhotos');\\n    }\\n    if (arguments.length > 1) \{\\n      console.warn('CameraRoll.getPhotos(tag, success, error) is deprecated.  Use the returned Promise instead');\\n      let successCallback = arguments[1];\\n      if (__DEV__) \{\\n        const callback = arguments[1];\\n        successCallback = (response) => \{\\n          checkPropTypes(\\n            \{response: getPhotosReturnChecker},\\n            \{response},\\n            'response',\\n            'CameraRoll.getPhotos callback'\\n          );\\n          callback(response);\\n        };\\n      }\\n      const errorCallback = arguments[2] || ( () => \{} );\\n      RCTCameraRollManager.getPhotos(params).then(successCallback, errorCallback);\\n    }\\n    // TODO: Add the __DEV__ check back in to verify the Promise result\\n    return RCTCameraRollManager.getPhotos(params);\\n  }",
      "docblock": "/**\\n   * Returns a Promise with photo identifier objects from the local camera\\n   * roll of the device matching shape defined by \`getPhotosReturnChecker\`.\\n   *\\n   * Expects a params object of the following shape:\\n   *\\n   * - \`first\` : \{number} : The number of photos wanted in reverse order of the photo application (i.e. most recent first for SavedPhotos).\\n   * - \`after\` : \{string} : A cursor that matches \`page_info \{ end_cursor }\` returned from a previous call to \`getPhotos\`.\\n   * - \`groupTypes\` : \{string} : Specifies which group types to filter the results to. Valid values are:\\n   *      - \`Album\`\\n   *      - \`All\`\\n   *      - \`Event\`\\n   *      - \`Faces\`\\n   *      - \`Library\`\\n   *      - \`PhotoStream\`\\n   *      - \`SavedPhotos\` // default\\n   * - \`groupName\` : \{string} : Specifies filter on group names, like 'Recent Photos' or custom album titles.\\n   * - \`assetType\` : \{string} : Specifies filter on asset type. Valid values are:\\n   *      - \`All\`\\n   *      - \`Videos\`\\n   *      - \`Photos\` // default\\n   * - \`mimeTypes\` : \{string} : Filter by mimetype (e.g. image/jpeg).\\n   *\\n   * Returns a Promise which when resolved will be of the following shape:\\n   *\\n   * - \`edges\` : \{Array<node>} An array of node objects\\n   *      - \`node\`: \{object} An object with the following shape:\\n   *          - \`type\`: \{string}\\n   *          - \`group_name\`: \{string}\\n   *          - \`image\`: \{object} : An object with the following shape:\\n   *              - \`uri\`: \{string}\\n   *              - \`height\`: \{number}\\n   *              - \`width\`: \{number}\\n   *              - \`isStored\`: \{boolean}\\n   *          - \`timestamp\`: \{number}\\n   *          - \`location\`: \{object} : An object with the following shape:\\n   *              - \`latitude\`: \{number}\\n   *              - \`longitude\`: \{number}\\n   *              - \`altitude\`: \{number}\\n   *              - \`heading\`: \{number}\\n   *              - \`speed\`: \{number}\\n   * - \`page_info\` : \{object} : An object with the following shape:\\n   *      - \`has_next_page\`: \{boolean}\\n   *      - \`start_cursor\`: \{boolean}\\n   *      - \`end_cursor\`: \{boolean}\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": null,
          "name": "params"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getPhotos"
    }
  ],
  "type": "api",
  "line": 123,
  "requires": [
    \{
      "name": "React"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "createStrictShapeTypeChecker"
    },
    \{
      "name": "deepFreezeAndThrowOnMutationInDev"
    },
    \{
      "name": "fbjs/lib/invariant"
    }
  ],
  "filepath": "Libraries/CameraRoll/CameraRoll.js",
  "componentName": "CameraRoll",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/CameraRollExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule CameraRollExample\\n */\\n'use strict';\\n\\nconst React = require\('react');\\nconst ReactNative = require\('react-native');\\nconst \{\\n  CameraRoll,\\n  Image,\\n  Slider,\\n  StyleSheet,\\n  Switch,\\n  Text,\\n  View,\\n  TouchableOpacity\\n} = ReactNative;\\n\\nconst invariant = require\('fbjs/lib/invariant');\\n\\nconst CameraRollView = require\('./CameraRollView');\\n\\nconst AssetScaledImageExampleView = require\('./AssetScaledImageExample');\\n\\nclass CameraRollExample extends React.Component \{\\n  state = \{\\n    groupTypes: 'SavedPhotos',\\n    sliderValue: 1,\\n    bigImages: true,\\n  };\\n  _cameraRollView: ?CameraRollView;\\n  render() \{\\n    return (\\n      <View>\\n        <Switch\\n          onValueChange=\{this._onSwitchChange}\\n          value=\{this.state.bigImages}\\n        />\\n        <Text>\{(this.state.bigImages ? 'Big' : 'Small') + ' Images'}</Text>\\n        <Slider\\n          value=\{this.state.sliderValue}\\n          onValueChange=\{this._onSliderChange}\\n        />\\n        <Text>\{'Group Type: ' + this.state.groupTypes}</Text>\\n        <CameraRollView\\n          ref=\{(ref) => \{ this._cameraRollView = ref; }}\\n          batchSize=\{20}\\n          groupTypes=\{this.state.groupTypes}\\n          renderImage=\{this._renderImage}\\n        />\\n      </View>\\n    );\\n  }\\n\\n  loadAsset = (asset) => \{\\n    if (this.props.navigator) \{\\n      this.props.navigator.push(\{\\n        title: 'Camera Roll Image',\\n        component: AssetScaledImageExampleView,\\n        backButtonTitle: 'Back',\\n        passProps: \{ asset: asset },\\n      });\\n    }\\n  };\\n\\n  _renderImage = (asset) => \{\\n    const imageSize = this.state.bigImages ? 150 : 75;\\n    const imageStyle = [styles.image, \{width: imageSize, height: imageSize}];\\n    const \{location} = asset.node;\\n    const locationStr = location ? JSON.stringify(location) : 'Unknown location';\\n    return (\\n      <TouchableOpacity key=\{asset} onPress=\{ this.loadAsset.bind( this, asset ) }>\\n        <View style=\{styles.row}>\\n          <Image\\n            source=\{asset.node.image}\\n            style=\{imageStyle}\\n          />\\n          <View style=\{styles.info}>\\n            <Text style=\{styles.url}>\{asset.node.image.uri}</Text>\\n            <Text>\{locationStr}</Text>\\n            <Text>\{asset.node.group_name}</Text>\\n            <Text>\{new Date(asset.node.timestamp).toString()}</Text>\\n          </View>\\n        </View>\\n      </TouchableOpacity>\\n    );\\n  };\\n\\n  _onSliderChange = (value) => \{\\n    const options = CameraRoll.GroupTypesOptions;\\n    const index = Math.floor(value * options.length * 0.99);\\n    const groupTypes = options[index];\\n    if (groupTypes !== this.state.groupTypes) \{\\n      this.setState(\{groupTypes: groupTypes});\\n    }\\n  };\\n\\n  _onSwitchChange = (value) => \{\\n    invariant(this._cameraRollView, 'ref should be set');\\n    this._cameraRollView.rendererChanged();\\n    this.setState(\{ bigImages: value });\\n  };\\n}\\n\\nconst styles = StyleSheet.create(\{\\n  row: \{\\n    flexDirection: 'row',\\n    flex: 1,\\n  },\\n  url: \{\\n    fontSize: 9,\\n    marginBottom: 14,\\n  },\\n  image: \{\\n    margin: 4,\\n  },\\n  info: \{\\n    flex: 1,\\n  },\\n});\\n\\nexports.title = 'Camera Roll';\\nexports.description = 'Example component that uses CameraRoll to list user\\\\'s photos';\\nexports.examples = [\\n  \{\\n    title: 'Photos',\\n    render(): React.Element<any> \{ return <CameraRollExample />; }\\n  }\\n];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"cameraroll","title":"CameraRoll","layout":"autodocs","category":"APIs","permalink":"docs/cameraroll.html","platform":"cross","next":"clipboard","previous":"backhandler","sidebar":true,"runnable":true,"path":"Libraries/CameraRoll/CameraRoll.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;