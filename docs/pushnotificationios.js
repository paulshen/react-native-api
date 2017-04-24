/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "name": "PushNotificationIOS",
  "docblock": "/**\\n * Handle push notifications for your app, including permission handling and\\n * icon badge number.\\n *\\n * To get up and running, [configure your notifications with Apple](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html#//apple_ref/doc/uid/TP40012582-CH26-SW6)\\n * and your server-side system. To get an idea, [this is the Parse guide](https://parse.com/tutorials/ios-push-notifications).\\n *\\n * [Manually link](docs/linking-libraries-ios.html#manual-linking) the PushNotificationIOS library\\n *\\n * - Add the following to your Project: \`node_modules/react-native/Libraries/PushNotificationIOS/RCTPushNotification.xcodeproj\`\\n * - Add the following to \`Link Binary With Libraries\`: \`libRCTPushNotification.a\`\\n * - Add the following to your \`Header Search Paths\`:\\n * \`$(SRCROOT)/../node_modules/react-native/Libraries/PushNotificationIOS\` and set the search to \`recursive\`\\n *\\n * Finally, to enable support for \`notification\` and \`register\` events you need to augment your AppDelegate.\\n *\\n * At the top of your \`AppDelegate.m\`:\\n *\\n *   \`#import \\"RCTPushNotificationManager.h\\"\`\\n *\\n * And then in your AppDelegate implementation add the following:\\n *\\n *   \`\`\`\\n *    // Required to register for notifications\\n *    - (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings\\n *    \{\\n *     [RCTPushNotificationManager didRegisterUserNotificationSettings:notificationSettings];\\n *    }\\n *    // Required for the register event.\\n *    - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken\\n *    \{\\n *     [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\\n *    }\\n *    // Required for the notification event. You must call the completion handler after handling the remote notification.\\n *    - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo\\n *                                                           fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler\\n *    \{\\n *      [RCTPushNotificationManager didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];\\n *    }\\n *    // Required for the registrationError event.\\n *    - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error\\n *    \{\\n *     [RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];\\n *    }\\n *    // Required for the localNotification event.\\n *    - (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification\\n *    \{\\n *     [RCTPushNotificationManager didReceiveLocalNotification:notification];\\n *    }\\n *   \`\`\`\\n */\\n",
  "methods": [
    \{
      "line": 120,
      "source": "= \{\\n    NewData: 'UIBackgroundFetchResultNewData',\\n    NoData: 'UIBackgroundFetchResultNoData',\\n    ResultFailed: 'UIBackgroundFetchResultFailed',\\n  };\\n\\n  /**\\n   * Schedules the localNotification for immediate presentation.\\n   *\\n   * details is an object containing:\\n   *\\n   * - \`alertBody\` : The message displayed in the notification alert.\\n   * - \`alertAction\` : The \\"action\\" displayed beneath an actionable notification. Defaults to \\"view\\";\\n   * - \`soundName\` : The sound played when the notification is fired (optional).\\n   * - \`category\`  : The category of this notification, required for actionable notifications (optional).\\n   * - \`userInfo\`  : An optional object containing additional notification data.\\n   * - \`applicationIconBadgeNumber\` (optional) : The number to display as the app's icon badge. The default value of this property is 0, which means that no badge is displayed.\\n   */\\n  static presentLocalNotification(details: Object) \{\\n    RCTPushNotificationManager.presentLocalNotification(details);\\n  }",
      "modifiers": [],
      "params": [
        \{
          "typehint": "'UIBackgroundFetchResultNewData'",
          "name": "NewData"
        },
        \{
          "typehint": "'UIBackgroundFetchResultNoData'",
          "name": "NoData"
        },
        \{
          "typehint": "'UIBackgroundFetchResultFailed'",
          "name": "ResultFailed"
        },
        \{
          "typehint": null,
          "name": "}"
        },
        \{
          "typehint": null,
          "name": "static"
        },
        \{
          "typehint": null,
          "name": "("
        },
        \{
          "typehint": null,
          "name": ":"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "="
    },
    \{
      "line": 156,
      "source": "static scheduleLocalNotification(details: Object) \{\\n    RCTPushNotificationManager.scheduleLocalNotification(details);\\n  }",
      "docblock": "/**\\n   * Schedules the localNotification for future presentation.\\n   *\\n   * details is an object containing:\\n   *\\n   * - \`fireDate\` : The date and time when the system should deliver the notification.\\n   * - \`alertBody\` : The message displayed in the notification alert.\\n   * - \`alertAction\` : The \\"action\\" displayed beneath an actionable notification. Defaults to \\"view\\";\\n   * - \`soundName\` : The sound played when the notification is fired (optional).\\n   * - \`category\`  : The category of this notification, required for actionable notifications (optional).\\n   * - \`userInfo\` : An optional object containing additional notification data.\\n   * - \`applicationIconBadgeNumber\` (optional) : The number to display as the app's icon badge. Setting the number to 0 removes the icon badge.\\n   * - \`repeatInterval\` : The interval to repeat as a string.  Possible values: \`minute\`, \`hour\`, \`day\`, \`week\`, \`month\`, \`year\`.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Object",
          "name": "details"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "scheduleLocalNotification"
    },
    \{
      "line": 163,
      "source": "static cancelAllLocalNotifications() \{\\n    RCTPushNotificationManager.cancelAllLocalNotifications();\\n  }",
      "docblock": "/**\\n   * Cancels all scheduled localNotifications\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "cancelAllLocalNotifications"
    },
    \{
      "line": 170,
      "source": "static setApplicationIconBadgeNumber(number: number) \{\\n    RCTPushNotificationManager.setApplicationIconBadgeNumber(number);\\n  }",
      "docblock": "/**\\n   * Sets the badge number for the app icon on the home screen\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "number"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "setApplicationIconBadgeNumber"
    },
    \{
      "line": 177,
      "source": "static getApplicationIconBadgeNumber(callback: Function) \{\\n    RCTPushNotificationManager.getApplicationIconBadgeNumber(callback);\\n  }",
      "docblock": "/**\\n   * Gets the current badge number for the app icon on the home screen\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getApplicationIconBadgeNumber"
    },
    \{
      "line": 188,
      "source": "static cancelLocalNotifications(userInfo: Object) \{\\n    RCTPushNotificationManager.cancelLocalNotifications(userInfo);\\n  }",
      "docblock": "/**\\n   * Cancel local notifications.\\n   *\\n   * Optionally restricts the set of canceled notifications to those\\n   * notifications whose \`userInfo\` fields match the corresponding fields\\n   * in the \`userInfo\` argument.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Object",
          "name": "userInfo"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "cancelLocalNotifications"
    },
    \{
      "line": 195,
      "source": "static getScheduledLocalNotifications(callback: Function) \{\\n    RCTPushNotificationManager.getScheduledLocalNotifications(callback);\\n  }",
      "docblock": "/**\\n   * Gets the local notifications that are currently scheduled.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getScheduledLocalNotifications"
    },
    \{
      "line": 216,
      "source": "static addEventListener(type: PushNotificationEventName, handler: Function) \{\\n    invariant(\\n      type === 'notification' || type === 'register' || type === 'registrationError' || type === 'localNotification',\\n      'PushNotificationIOS only supports \`notification\`, \`register\`, \`registrationError\`, and \`localNotification\` events'\\n    );\\n    var listener;\\n    if (type === 'notification') \{\\n      listener =  PushNotificationEmitter.addListener(\\n        DEVICE_NOTIF_EVENT,\\n        (notifData) => \{\\n          handler(new PushNotificationIOS(notifData));\\n        }\\n      );\\n    } else if (type === 'localNotification') \{\\n      listener = PushNotificationEmitter.addListener(\\n        DEVICE_LOCAL_NOTIF_EVENT,\\n        (notifData) => \{\\n          handler(new PushNotificationIOS(notifData));\\n        }\\n      );\\n    } else if (type === 'register') \{\\n      listener = PushNotificationEmitter.addListener(\\n        NOTIF_REGISTER_EVENT,\\n        (registrationInfo) => \{\\n          handler(registrationInfo.deviceToken);\\n        }\\n      );\\n    } else if (type === 'registrationError') \{\\n      listener = PushNotificationEmitter.addListener(\\n        NOTIF_REGISTRATION_ERROR_EVENT,\\n        (errorInfo) => \{\\n          handler(errorInfo);\\n        }\\n      );\\n    }\\n    _notifHandlers.set(type, listener);\\n  }",
      "docblock": "/**\\n   * Attaches a listener to remote or local notification events while the app is running\\n   * in the foreground or the background.\\n   *\\n   * Valid events are:\\n   *\\n   * - \`notification\` : Fired when a remote notification is received. The\\n   *   handler will be invoked with an instance of \`PushNotificationIOS\`.\\n   * - \`localNotification\` : Fired when a local notification is received. The\\n   *   handler will be invoked with an instance of \`PushNotificationIOS\`.\\n   * - \`register\`: Fired when the user registers for remote notifications. The\\n   *   handler will be invoked with a hex string representing the deviceToken.\\n   * - \`registrationError\`: Fired when the user fails to register for remote\\n   *   notifications. Typically occurs when APNS is having issues, or the device\\n   *   is a simulator. The handler will be invoked with\\n   *   \{message: string, code: number, details: any}.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"PushNotificationEventName\\",\\"length\\":1}",
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
      "line": 258,
      "source": "static removeEventListener(type: PushNotificationEventName, handler: Function) \{\\n    invariant(\\n      type === 'notification' || type === 'register' || type === 'registrationError' || type === 'localNotification',\\n      'PushNotificationIOS only supports \`notification\`, \`register\`, \`registrationError\`, and \`localNotification\` events'\\n    );\\n    var listener = _notifHandlers.get(type);\\n    if (!listener) \{\\n      return;\\n    }\\n    listener.remove();\\n    _notifHandlers.delete(type);\\n  }",
      "docblock": "/**\\n   * Removes the event listener. Do this in \`componentWillUnmount\` to prevent\\n   * memory leaks\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"PushNotificationEventName\\",\\"length\\":1}",
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
    },
    \{
      "line": 289,
      "source": "static requestPermissions(permissions?: \{\\n    alert?: boolean,\\n    badge?: boolean,\\n    sound?: boolean\\n  }): Promise<\{\\n    alert: boolean,\\n    badge: boolean,\\n    sound: boolean\\n  }> \{\\n    var requestedPermissions = \{};\\n    if (permissions) \{\\n      requestedPermissions = \{\\n        alert: !!permissions.alert,\\n        badge: !!permissions.badge,\\n        sound: !!permissions.sound\\n      };\\n    } else \{\\n      requestedPermissions = \{\\n        alert: true,\\n        badge: true,\\n        sound: true\\n      };\\n    }\\n    return RCTPushNotificationManager.requestPermissions(requestedPermissions);\\n  }",
      "docblock": "/**\\n   * Requests notification permissions from iOS, prompting the user's\\n   * dialog box. By default, it will request all notification permissions, but\\n   * a subset of these can be requested by passing a map of requested\\n   * permissions.\\n   * The following permissions are supported:\\n   *\\n   *   - \`alert\`\\n   *   - \`badge\`\\n   *   - \`sound\`\\n   *\\n   * If a map is provided to the method, only the permissions with truthy values\\n   * will be requested.\\n\\n   * This method returns a promise that will resolve when the user accepts,\\n   * rejects, or if the permissions were previously rejected. The promise\\n   * resolves to the current state of the permission.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\n    alert?: boolean,\\n    badge?: boolean,\\n    sound?: boolean\\n  }",
          "name": "permissions?"
        }
      ],
      "tparams": null,
      "returntypehint": "Promise<\{\\n    alert: boolean,\\n    badge: boolean,\\n    sound: boolean\\n  }>",
      "name": "requestPermissions"
    },
    \{
      "line": 323,
      "source": "static abandonPermissions() \{\\n    RCTPushNotificationManager.abandonPermissions();\\n  }",
      "docblock": "/**\\n   * Unregister for all remote notifications received via Apple Push Notification service.\\n   *\\n   * You should call this method in rare circumstances only, such as when a new version of\\n   * the app removes support for all types of remote notifications. Users can temporarily\\n   * prevent apps from receiving remote notifications through the Notifications section of\\n   * the Settings app. Apps unregistered through this method can always re-register.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "abandonPermissions"
    },
    \{
      "line": 335,
      "source": "static checkPermissions(callback: Function) \{\\n    invariant(\\n      typeof callback === 'function',\\n      'Must provide a valid callback'\\n    );\\n    RCTPushNotificationManager.checkPermissions(callback);\\n  }",
      "docblock": "/**\\n   * See what push permissions are currently enabled. \`callback\` will be\\n   * invoked with a \`permissions\` object:\\n   *\\n   *  - \`alert\` :boolean\\n   *  - \`badge\` :boolean\\n   *  - \`sound\` :boolean\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "checkPermissions"
    },
    \{
      "line": 347,
      "source": "static getInitialNotification(): Promise<?PushNotificationIOS> \{\\n    return RCTPushNotificationManager.getInitialNotification().then(notification => \{\\n      return notification && new PushNotificationIOS(notification);\\n    });\\n  }",
      "docblock": "/**\\n   * This method returns a promise that resolves to either the notification\\n   * object if the app was launched by a push notification, or \`null\` otherwise.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"PushNotificationIOS\\",\\"length\\":2,\\"nullable\\":true}],\\"length\\":5}",
      "name": "getInitialNotification"
    },
    \{
      "line": 358,
      "source": "constructor(nativeNotif: Object) \{\\n    this._data = \{};\\n    this._remoteNotificationCompleteCalllbackCalled = false;\\n    this._isRemote = nativeNotif.remote;\\n    if (this._isRemote) \{\\n      this._notificationId = nativeNotif.notificationId;\\n    }\\n\\n    if (nativeNotif.remote) \{\\n      // Extract data from Apple's \`aps\` dict as defined:\\n      // https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html\\n      Object.keys(nativeNotif).forEach((notifKey) => \{\\n        var notifVal = nativeNotif[notifKey];\\n        if (notifKey === 'aps') \{\\n          this._alert = notifVal.alert;\\n          this._sound = notifVal.sound;\\n          this._badgeCount = notifVal.badge;\\n        } else \{\\n          this._data[notifKey] = notifVal;\\n        }\\n      });\\n    } else \{\\n      // Local notifications aren't being sent down with \`aps\` dict.\\n      this._badgeCount = nativeNotif.applicationIconBadgeNumber;\\n      this._sound = nativeNotif.soundName;\\n      this._alert = nativeNotif.alertBody;\\n      this._data = nativeNotif.userInfo;\\n    }\\n  }",
      "docblock": "/**\\n   * You will never need to instantiate \`PushNotificationIOS\` yourself.\\n   * Listening to the \`notification\` event and invoking\\n   * \`getInitialNotification\` is sufficient\\n   */\\n",
      "modifiers": [],
      "params": [
        \{
          "typehint": "Object",
          "name": "nativeNotif"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "constructor"
    },
    \{
      "line": 401,
      "source": "finish(fetchResult: FetchResult) \{\\n    if (!this._isRemote || !this._notificationId || this._remoteNotificationCompleteCalllbackCalled) \{\\n      return;\\n    }\\n    this._remoteNotificationCompleteCalllbackCalled = true;\\n\\n    RCTPushNotificationManager.onFinishRemoteNotification(this._notificationId, fetchResult);\\n  }",
      "docblock": "/**\\n   * This method is available for remote notifications that have been received via:\\n   * \`application:didReceiveRemoteNotification:fetchCompletionHandler:\`\\n   * https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/#//apple_ref/occ/intfm/UIApplicationDelegate/application:didReceiveRemoteNotification:fetchCompletionHandler:\\n   *\\n   * Call this to execute when the remote notification handling is complete. When\\n   * calling this block, pass in the fetch result value that best describes\\n   * the results of your operation. You *must* call this handler and should do so\\n   * as soon as possible. For a list of possible values, see \`PushNotificationIOS.FetchResult\`.\\n   *\\n   * If you do not call this method your background remote notifications could\\n   * be throttled, to read more about it see the above documentation link.\\n   */\\n",
      "modifiers": [],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"FetchResult\\",\\"length\\":1}",
          "name": "fetchResult"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "finish"
    },
    \{
      "line": 413,
      "source": "getMessage(): ?string | ?Object \{\\n    // alias because \\"alert\\" is an ambiguous name\\n    return this._alert;\\n  }",
      "docblock": "/**\\n   * An alias for \`getAlert\` to get the notification's main message string\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "?string | ?Object",
      "name": "getMessage"
    },
    \{
      "line": 421,
      "source": "getSound(): ?string \{\\n    return this._sound;\\n  }",
      "docblock": "/**\\n   * Gets the sound string from the \`aps\` object\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}",
      "name": "getSound"
    },
    \{
      "line": 428,
      "source": "getAlert(): ?string | ?Object \{\\n    return this._alert;\\n  }",
      "docblock": "/**\\n   * Gets the notification's main message from the \`aps\` object\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "?string | ?Object",
      "name": "getAlert"
    },
    \{
      "line": 435,
      "source": "getBadgeCount(): ?number \{\\n    return this._badgeCount;\\n  }",
      "docblock": "/**\\n   * Gets the badge count number from the \`aps\` object\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":2,\\"nullable\\":true}",
      "name": "getBadgeCount"
    },
    \{
      "line": 442,
      "source": "getData(): ?Object \{\\n    return this._data;\\n  }",
      "docblock": "/**\\n   * Gets the data object on the notif\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "?Object",
      "name": "getData"
    }
  ],
  "type": "api",
  "line": 111,
  "requires": [
    \{
      "name": "NativeEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "fbjs/lib/invariant"
    }
  ],
  "filepath": "Libraries/PushNotificationIOS/PushNotificationIOS.js",
  "componentName": "PushNotificationIOS",
  "componentPlatform": "ios",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/PushNotificationIOSExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule PushNotificationIOSExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  AlertIOS,\\n  PushNotificationIOS,\\n  StyleSheet,\\n  Text,\\n  TouchableHighlight,\\n  View,\\n} = ReactNative;\\n\\nclass Button extends React.Component \{\\n  render() \{\\n    return (\\n      <TouchableHighlight\\n        underlayColor=\{'white'}\\n        style=\{styles.button}\\n        onPress=\{this.props.onPress}>\\n        <Text style=\{styles.buttonLabel}>\\n          \{this.props.label}\\n        </Text>\\n      </TouchableHighlight>\\n    );\\n  }\\n}\\n\\nclass NotificationExample extends React.Component \{\\n  componentWillMount() \{\\n    PushNotificationIOS.addEventListener('register', this._onRegistered);\\n    PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);\\n    PushNotificationIOS.addEventListener('notification', this._onRemoteNotification);\\n    PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);\\n\\n    PushNotificationIOS.requestPermissions();\\n  }\\n\\n  componentWillUnmount() \{\\n    PushNotificationIOS.removeEventListener('register', this._onRegistered);\\n    PushNotificationIOS.removeEventListener('registrationError', this._onRegistrationError);\\n    PushNotificationIOS.removeEventListener('notification', this._onRemoteNotification);\\n    PushNotificationIOS.removeEventListener('localNotification', this._onLocalNotification);\\n  }\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Button\\n          onPress=\{this._sendNotification}\\n          label=\\"Send fake notification\\"\\n        />\\n\\n        <Button\\n          onPress=\{this._sendLocalNotification}\\n          label=\\"Send fake local notification\\"\\n        />\\n      </View>\\n    );\\n  }\\n\\n  _sendNotification() \{\\n    require\('RCTDeviceEventEmitter').emit('remoteNotificationReceived', \{\\n      aps: \{\\n        alert: 'Sample notification',\\n        badge: '+1',\\n        sound: 'default',\\n        category: 'REACT_NATIVE'\\n      },\\n    });\\n  }\\n\\n  _sendLocalNotification() \{\\n    require\('RCTDeviceEventEmitter').emit('localNotificationReceived', \{\\n      aps: \{\\n        alert: 'Sample local notification',\\n        badge: '+1',\\n        sound: 'default',\\n        category: 'REACT_NATIVE'\\n      },\\n    });\\n  }\\n\\n  _onRegistered(deviceToken) \{\\n    AlertIOS.alert(\\n      'Registered For Remote Push',\\n      \`Device Token: $\{deviceToken}\`,\\n      [\{\\n        text: 'Dismiss',\\n        onPress: null,\\n      }]\\n    );\\n  }\\n\\n  _onRegistrationError(error) \{\\n    AlertIOS.alert(\\n      'Failed To Register For Remote Push',\\n      \`Error ($\{error.code}): $\{error.message}\`,\\n      [\{\\n        text: 'Dismiss',\\n        onPress: null,\\n      }]\\n    );\\n  }\\n\\n  _onRemoteNotification(notification) \{\\n    AlertIOS.alert(\\n      'Push Notification Received',\\n      'Alert message: ' + notification.getMessage(),\\n      [\{\\n        text: 'Dismiss',\\n        onPress: null,\\n      }]\\n    );\\n  }\\n\\n  _onLocalNotification(notification)\{\\n    AlertIOS.alert(\\n      'Local Notification Received',\\n      'Alert message: ' + notification.getMessage(),\\n      [\{\\n        text: 'Dismiss',\\n        onPress: null,\\n      }]\\n    );\\n  }\\n}\\n\\nclass NotificationPermissionExample extends React.Component \{\\n  state: any;\\n\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{permissions: null};\\n  }\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Button\\n          onPress=\{this._showPermissions.bind(this)}\\n          label=\\"Show enabled permissions\\"\\n        />\\n        <Text>\\n          \{JSON.stringify(this.state.permissions)}\\n        </Text>\\n      </View>\\n    );\\n  }\\n\\n  _showPermissions() \{\\n    PushNotificationIOS.checkPermissions((permissions) => \{\\n      this.setState(\{permissions});\\n    });\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  button: \{\\n    padding: 10,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  buttonLabel: \{\\n    color: 'blue',\\n  },\\n});\\n\\nexports.title = 'PushNotificationIOS';\\nexports.description = 'Apple PushNotification and badge value';\\nexports.examples = [\\n\{\\n  title: 'Badge Number',\\n  render(): React.Element<any> \{\\n    return (\\n      <View>\\n        <Button\\n          onPress=\{() => PushNotificationIOS.setApplicationIconBadgeNumber(42)}\\n          label=\\"Set app's icon badge to 42\\"\\n        />\\n        <Button\\n          onPress=\{() => PushNotificationIOS.setApplicationIconBadgeNumber(0)}\\n          label=\\"Clear app's icon badge\\"\\n        />\\n      </View>\\n    );\\n  },\\n},\\n\{\\n  title: 'Push Notifications',\\n  render(): React.Element<any> \{\\n    return <NotificationExample />;\\n  }\\n},\\n\{\\n  title: 'Notifications Permissions',\\n  render(): React.Element<any> \{\\n    return <NotificationPermissionExample />;\\n  }\\n}];\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"pushnotificationios","title":"PushNotificationIOS","layout":"autodocs","category":"APIs","permalink":"docs/pushnotificationios.html","platform":"ios","next":"settings","previous":"pixelratio","sidebar":true,"runnable":true,"path":"Libraries/PushNotificationIOS/PushNotificationIOS.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;