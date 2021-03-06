/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 2472,
      "source": "function(\\n  value: AnimatedValue | AnimatedValueXY,\\n  config: DecayAnimationConfig,\\n): CompositeAnimation \{\\n  return maybeVectorAnim(value, config, decay) || \{\\n    start: function(callback?: ?EndCallback): void \{\\n      callback = _combineCallbacks(callback, config);\\n      var singleValue: any = value;\\n      var singleConfig: any = config;\\n      singleValue.stopTracking();\\n      singleValue.animate(new DecayAnimation(singleConfig), callback);\\n    },\\n\\n    stop: function(): void \{\\n      value.stopAnimation();\\n    },\\n  };\\n}",
      "docblock": "/**\\n   * Animates a value from an initial velocity to zero based on a decay\\n   * coefficient.\\n   *\\n   * Config is an object that may have the following options:\\n   *\\n   *   - \`velocity\`: Initial velocity.  Required.\\n   *   - \`deceleration\`: Rate of decay.  Default 0.997.\\n   *   - \`useNativeDriver\`: Uses the native driver when true. Default false.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "AnimatedValue | AnimatedValueXY",
          "name": "value"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"DecayAnimationConfig\\",\\"length\\":1}",
          "name": "config"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}",
      "name": "decay"
    },
    \{
      "line": 2486,
      "source": "function(\\n  value: AnimatedValue | AnimatedValueXY,\\n  config: TimingAnimationConfig,\\n): CompositeAnimation \{\\n  return maybeVectorAnim(value, config, timing) || \{\\n    start: function(callback?: ?EndCallback): void \{\\n      callback = _combineCallbacks(callback, config);\\n      var singleValue: any = value;\\n      var singleConfig: any = config;\\n      singleValue.stopTracking();\\n      if (config.toValue instanceof Animated) \{\\n        singleValue.track(new AnimatedTracking(\\n          singleValue,\\n          config.toValue,\\n          TimingAnimation,\\n          singleConfig,\\n          callback\\n        ));\\n      } else \{\\n        singleValue.animate(new TimingAnimation(singleConfig), callback);\\n      }\\n    },\\n\\n    stop: function(): void \{\\n      value.stopAnimation();\\n    },\\n  };\\n}",
      "docblock": "/**\\n   * Animates a value along a timed easing curve. The\\n   * [\`Easing\`](docs/easing.html) module has tons of predefined curves, or you\\n   * can use your own function.\\n   *\\n   * Config is an object that may have the following options:\\n   *\\n   *   - \`duration\`: Length of animation (milliseconds).  Default 500.\\n   *   - \`easing\`: Easing function to define curve.\\n   *     Default is \`Easing.inOut(Easing.ease)\`.\\n   *   - \`delay\`: Start the animation after delay (milliseconds).  Default 0.\\n   *   - \`useNativeDriver\`: Uses the native driver when true. Default false.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "AnimatedValue | AnimatedValueXY",
          "name": "value"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"TimingAnimationConfig\\",\\"length\\":1}",
          "name": "config"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}",
      "name": "timing"
    },
    \{
      "line": 2498,
      "source": "function(\\n  value: AnimatedValue | AnimatedValueXY,\\n  config: SpringAnimationConfig,\\n): CompositeAnimation \{\\n  return maybeVectorAnim(value, config, spring) || \{\\n    start: function(callback?: ?EndCallback): void \{\\n      callback = _combineCallbacks(callback, config);\\n      var singleValue: any = value;\\n      var singleConfig: any = config;\\n      singleValue.stopTracking();\\n      if (config.toValue instanceof Animated) \{\\n        singleValue.track(new AnimatedTracking(\\n          singleValue,\\n          config.toValue,\\n          SpringAnimation,\\n          singleConfig,\\n          callback\\n        ));\\n      } else \{\\n        singleValue.animate(new SpringAnimation(singleConfig), callback);\\n      }\\n    },\\n\\n    stop: function(): void \{\\n      value.stopAnimation();\\n    },\\n  };\\n}",
      "docblock": "/**\\n   * Spring animation based on Rebound and\\n   * [Origami](https://facebook.github.io/origami/).  Tracks velocity state to\\n   * create fluid motions as the \`toValue\` updates, and can be chained together.\\n   *\\n   * Config is an object that may have the following options:\\n   *\\n   *   - \`friction\`: Controls \\"bounciness\\"/overshoot.  Default 7.\\n   *   - \`tension\`: Controls speed.  Default 40.\\n   *   - \`useNativeDriver\`: Uses the native driver when true. Default false.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "AnimatedValue | AnimatedValueXY",
          "name": "value"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"SpringAnimationConfig\\",\\"length\\":1}",
          "name": "config"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}",
      "name": "spring"
    },
    \{
      "line": 2504,
      "source": "function(\\n  a: Animated | number,\\n  b: Animated | number,\\n): AnimatedAddition \{\\n  return new AnimatedAddition(a, b);\\n}",
      "docblock": "/**\\n   * Creates a new Animated value composed from two Animated values added\\n   * together.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Animated | number",
          "name": "a"
        },
        \{
          "typehint": "Animated | number",
          "name": "b"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AnimatedAddition\\",\\"length\\":1}",
      "name": "add"
    },
    \{
      "line": 2510,
      "source": "function(\\n  a: Animated | number,\\n  b: Animated | number,\\n): AnimatedDivision \{\\n  return new AnimatedDivision(a, b);\\n}",
      "docblock": "/**\\n   * Creates a new Animated value composed by dividing the first Animated value\\n   * by the second Animated value.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Animated | number",
          "name": "a"
        },
        \{
          "typehint": "Animated | number",
          "name": "b"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AnimatedDivision\\",\\"length\\":1}",
      "name": "divide"
    },
    \{
      "line": 2516,
      "source": "function(\\n  a: Animated | number,\\n  b: Animated | number,\\n): AnimatedMultiplication \{\\n  return new AnimatedMultiplication(a, b);\\n}",
      "docblock": "/**\\n   * Creates a new Animated value composed from two Animated values multiplied\\n   * together.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "Animated | number",
          "name": "a"
        },
        \{
          "typehint": "Animated | number",
          "name": "b"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AnimatedMultiplication\\",\\"length\\":1}",
      "name": "multiply"
    },
    \{
      "line": 2522,
      "source": "function(\\n  a: Animated,\\n  modulus: number\\n): AnimatedModulo \{\\n  return new AnimatedModulo(a, modulus);\\n}",
      "docblock": "/**\\n   * Creates a new Animated value that is the (non-negative) modulo of the\\n   * provided Animated value\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Animated\\",\\"length\\":1}",
          "name": "a"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "modulus"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AnimatedModulo\\",\\"length\\":1}",
      "name": "modulo"
    },
    \{
      "line": 2533,
      "source": "function(\\n  a: Animated,\\n  min: number,\\n  max: number,\\n): AnimatedDiffClamp \{\\n  return new AnimatedDiffClamp(a, min, max);\\n}",
      "docblock": "/**\\n   * Create a new Animated value that is limited between 2 values. It uses the\\n   * difference between the last value so even if the value is far from the bounds\\n   * it will start changing when the value starts getting closer again.\\n   * (\`value = clamp(value + diff, min, max)\`).\\n   *\\n   * This is useful with scroll events, for example, to show the navbar when\\n   * scrolling up and to hide it when scrolling down.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Animated\\",\\"length\\":1}",
          "name": "a"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "min"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "max"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AnimatedDiffClamp\\",\\"length\\":1}",
      "name": "diffClamp"
    },
    \{
      "line": 2538,
      "source": "function(time: number): CompositeAnimation \{\\n  // Would be nice to make a specialized implementation\\n  return timing(new AnimatedValue(0), \{toValue: 0, delay: time, duration: 0});\\n}",
      "docblock": "/**\\n   * Starts an animation after the given delay.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "time"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}",
      "name": "delay"
    },
    \{
      "line": 2544,
      "source": "function(\\n  animations: Array<CompositeAnimation>,\\n): CompositeAnimation \{\\n  var current = 0;\\n  return \{\\n    start: function(callback?: ?EndCallback) \{\\n      var onComplete = function(result) \{\\n        if (!result.finished) \{\\n          callback && callback(result);\\n          return;\\n        }\\n\\n        current++;\\n\\n        if (current === animations.length) \{\\n          callback && callback(result);\\n          return;\\n        }\\n\\n        animations[current].start(onComplete);\\n      };\\n\\n      if (animations.length === 0) \{\\n        callback && callback(\{finished: true});\\n      } else \{\\n        animations[current].start(onComplete);\\n      }\\n    },\\n\\n    stop: function() \{\\n      if (current < animations.length) \{\\n        animations[current].stop();\\n      }\\n    }\\n  };\\n}",
      "docblock": "/**\\n   * Starts an array of animations in order, waiting for each to complete\\n   * before starting the next.  If the current running animation is stopped, no\\n   * following animations will be started.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}],\\"length\\":4}",
          "name": "animations"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}",
      "name": "sequence"
    },
    \{
      "line": 2550,
      "source": "function(\\n  animations: Array<CompositeAnimation>,\\n  config?: ?ParallelConfig,\\n): CompositeAnimation \{\\n  var doneCount = 0;\\n  // Make sure we only call stop() at most once for each animation\\n  var hasEnded = \{};\\n  var stopTogether = !(config && config.stopTogether === false);\\n\\n  var result = \{\\n    start: function(callback?: ?EndCallback) \{\\n      if (doneCount === animations.length) \{\\n        callback && callback(\{finished: true});\\n        return;\\n      }\\n\\n      animations.forEach((animation, idx) => \{\\n        var cb = function(endResult) \{\\n          hasEnded[idx] = true;\\n          doneCount++;\\n          if (doneCount === animations.length) \{\\n            doneCount = 0;\\n            callback && callback(endResult);\\n            return;\\n          }\\n\\n          if (!endResult.finished && stopTogether) \{\\n            result.stop();\\n          }\\n        };\\n\\n        if (!animation) \{\\n          cb(\{finished: true});\\n        } else \{\\n          animation.start(cb);\\n        }\\n      });\\n    },\\n\\n    stop: function(): void \{\\n      animations.forEach((animation, idx) => \{\\n        !hasEnded[idx] && animation.stop();\\n        hasEnded[idx] = true;\\n      });\\n    }\\n  };\\n\\n  return result;\\n}",
      "docblock": "/**\\n   * Starts an array of animations all at the same time.  By default, if one\\n   * of the animations is stopped, they will all be stopped.  You can override\\n   * this with the \`stopTogether\` flag.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}],\\"length\\":4}",
          "name": "animations"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"ParallelConfig\\",\\"length\\":2,\\"nullable\\":true}",
          "name": "config?"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}",
      "name": "parallel"
    },
    \{
      "line": 2555,
      "source": "function(\\n  time: number,\\n  animations: Array<CompositeAnimation>,\\n): CompositeAnimation \{\\n  return parallel(animations.map((animation, i) => \{\\n    return sequence([\\n      delay(time * i),\\n      animation,\\n    ]);\\n  }));\\n}",
      "docblock": "/**\\n   * Array of animations may run in parallel (overlap), but are started in\\n   * sequence with successive delays.  Nice for doing trailing effects.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "time"
        },
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}],\\"length\\":4}",
          "name": "animations"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"CompositeAnimation\\",\\"length\\":1}",
      "name": "stagger"
    },
    \{
      "line": 2578,
      "source": "function(\\n  argMapping: Array<?Mapping>,\\n  config?: EventConfig,\\n): any \{\\n  const animatedEvent = new AnimatedEvent(argMapping, config);\\n  if (animatedEvent.__isNative) \{\\n    return animatedEvent;\\n  } else \{\\n    return animatedEvent.__getHandler();\\n  }\\n}",
      "docblock": "/**\\n   * Takes an array of mappings and extracts values from each arg accordingly,\\n   * then calls \`setValue\` on the mapped outputs.  e.g.\\n   *\\n   *\`\`\`javascript\\n   *  onScroll=\{Animated.event(\\n   *    [\{nativeEvent: \{contentOffset: \{x: this._scrollX}}}]\\n   *    \{listener},          // Optional async listener\\n   *  )\\n   *  ...\\n   *  onPanResponderMove: Animated.event([\\n   *    null,                // raw event arg ignored\\n   *    \{dx: this._panX},    // gestureState arg\\n   *  ]),\\n   *\`\`\`\\n   *\\n   * Config is an object that may have the following options:\\n   *\\n   *   - \`listener\`: Optional async listener.\\n   *   - \`useNativeDriver\`: Uses the native driver when true. Default false.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"Mapping\\",\\"length\\":2,\\"nullable\\":true}],\\"length\\":5}",
          "name": "argMapping"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"EventConfig\\",\\"length\\":1}",
          "name": "config?"
        }
      ],
      "tparams": null,
      "returntypehint": "any",
      "name": "event"
    },
    \{
      "line": 2583,
      "source": "function createAnimatedComponent(Component: any): any \{\\n  class AnimatedComponent extends React.Component \{\\n    _component: any;\\n    _propsAnimated: AnimatedProps;\\n    _setComponentRef: Function;\\n\\n    constructor(props: Object) \{\\n      super(props);\\n      this._setComponentRef = this._setComponentRef.bind(this);\\n    }\\n\\n    componentWillUnmount() \{\\n      this._propsAnimated && this._propsAnimated.__detach();\\n      this._detachNativeEvents(this.props);\\n    }\\n\\n    setNativeProps(props) \{\\n      this._component.setNativeProps(props);\\n    }\\n\\n    componentWillMount() \{\\n      this._attachProps(this.props);\\n    }\\n\\n    componentDidMount() \{\\n      this._propsAnimated.setNativeView(this._component);\\n\\n      this._attachNativeEvents(this.props);\\n    }\\n\\n    _attachNativeEvents(newProps) \{\\n      if (newProps !== this.props) \{\\n        this._detachNativeEvents(this.props);\\n      }\\n\\n      // Make sure to get the scrollable node for components that implement\\n      // \`ScrollResponder.Mixin\`.\\n      const ref = this._component.getScrollableNode ?\\n        this._component.getScrollableNode() :\\n        this._component;\\n\\n      for (const key in newProps) \{\\n        const prop = newProps[key];\\n        if (prop instanceof AnimatedEvent && prop.__isNative) \{\\n          prop.__attach(ref, key);\\n        }\\n      }\\n    }\\n\\n    _detachNativeEvents(props) \{\\n      // Make sure to get the scrollable node for components that implement\\n      // \`ScrollResponder.Mixin\`.\\n      const ref = this._component.getScrollableNode ?\\n        this._component.getScrollableNode() :\\n        this._component;\\n\\n      for (const key in props) \{\\n        const prop = props[key];\\n        if (prop instanceof AnimatedEvent && prop.__isNative) \{\\n          prop.__detach(ref, key);\\n        }\\n      }\\n    }\\n\\n    _attachProps(nextProps) \{\\n      var oldPropsAnimated = this._propsAnimated;\\n\\n      // The system is best designed when setNativeProps is implemented. It is\\n      // able to avoid re-rendering and directly set the attributes that\\n      // changed. However, setNativeProps can only be implemented on leaf\\n      // native components. If you want to animate a composite component, you\\n      // need to re-render it. In this case, we have a fallback that uses\\n      // forceUpdate.\\n      var callback = () => \{\\n        if (this._component.setNativeProps) \{\\n          if (!this._propsAnimated.__isNative) \{\\n            this._component.setNativeProps(\\n              this._propsAnimated.__getAnimatedValue()\\n            );\\n          } else \{\\n            throw new Error('Attempting to run JS driven animation on animated '\\n              + 'node that has been moved to \\"native\\" earlier by starting an '\\n              + 'animation with \`useNativeDriver: true\`');\\n          }\\n        } else \{\\n          this.forceUpdate();\\n        }\\n      };\\n\\n      this._propsAnimated = new AnimatedProps(\\n        nextProps,\\n        callback,\\n      );\\n\\n      if (this._component) \{\\n        this._propsAnimated.setNativeView(this._component);\\n      }\\n\\n      // When you call detach, it removes the element from the parent list\\n      // of children. If it goes to 0, then the parent also detaches itself\\n      // and so on.\\n      // An optimization is to attach the new elements and THEN detach the old\\n      // ones instead of detaching and THEN attaching.\\n      // This way the intermediate state isn't to go to 0 and trigger\\n      // this expensive recursive detaching to then re-attach everything on\\n      // the very next operation.\\n      oldPropsAnimated && oldPropsAnimated.__detach();\\n    }\\n\\n    componentWillReceiveProps(nextProps) \{\\n      this._attachProps(nextProps);\\n      this._attachNativeEvents(nextProps);\\n    }\\n\\n    render() \{\\n      return (\\n        <Component\\n          \{...this._propsAnimated.__getValue()}\\n          ref=\{this._setComponentRef}\\n        />\\n      );\\n    }\\n\\n    _setComponentRef(c) \{\\n      this._component = c;\\n    }\\n\\n    // A third party library can use getNode()\\n    // to get the node reference of the decorated component\\n    getNode () \{\\n      return this._component;\\n    }\\n  }\\n  AnimatedComponent.propTypes = \{\\n    style: function(props, propName, componentName) \{\\n      if (!Component.propTypes) \{\\n        return;\\n      }\\n\\n      for (var key in ViewStylePropTypes) \{\\n        if (!Component.propTypes[key] && props[key] !== undefined) \{\\n          console.warn(\\n            'You are setting the style \`\{ ' + key + ': ... }\` as a prop. You ' +\\n            'should nest it in a style object. ' +\\n            'E.g. \`\{ style: \{ ' + key + ': ... } }\`'\\n          );\\n        }\\n      }\\n    },\\n  };\\n\\n  return AnimatedComponent;\\n}",
      "docblock": "/**\\n   * Make any React component Animatable.  Used to create \`Animated.View\`, etc.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "any",
          "name": "Component"
        }
      ],
      "tparams": null,
      "returntypehint": "any",
      "name": "createAnimatedComponent"
    }
  ],
  "properties": [
    \{
      "name": "Value",
      "type": \{
        "name": "AnimatedValue"
      },
      "docblock": "/**\\n   * Standard value class for driving animations.  Typically initialized with\\n   * \`new Animated.Value(0);\`\\n   *\\n   * See also [\`AnimatedValue\`](docs/animated.html#animatedvalue).\\n   */\\n",
      "source": "Value: AnimatedValue",
      "modifiers": [
        "static"
      ],
      "propertySource": ""
    },
    \{
      "name": "ValueXY",
      "type": \{
        "name": "AnimatedValueXY"
      },
      "docblock": "/**\\n   * 2D value class for driving 2D animations, such as pan gestures.\\n   *\\n   * See also [\`AnimatedValueXY\`](docs/animated.html#animatedvaluexy).\\n   */\\n",
      "source": "ValueXY: AnimatedValueXY",
      "modifiers": [
        "static"
      ],
      "propertySource": ""
    },
    \{
      "name": "Interpolation",
      "type": \{
        "name": "AnimatedInterpolation"
      },
      "docblock": "/**\\n   * exported to use the Interpolation type in flow\\n   *\\n   * See also [\`AnimatedInterpolation\`](docs/animated.html#animatedinterpolation).\\n   */\\n",
      "source": "Interpolation: AnimatedInterpolation",
      "modifiers": [
        "static"
      ],
      "propertySource": ""
    },
    \{
      "name": "__PropsOnlyForTests",
      "type": \{
        "name": "AnimatedProps"
      },
      "docblock": "",
      "source": "__PropsOnlyForTests: AnimatedProps",
      "modifiers": [
        "static"
      ],
      "propertySource": ""
    }
  ],
  "classes": [
    \{
      "name": "AnimatedValue",
      "docblock": "/**\\n * Standard value for driving animations.  One \`Animated.Value\` can drive\\n * multiple properties in a synchronized fashion, but can only be driven by one\\n * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,\\n * or calling \`setValue\`) will stop any previous ones.\\n */\\n",
      "methods": [
        \{
          "line": 704,
          "source": "constructor(value: number) \{\\n    super();\\n    this._value = value;\\n    this._offset = 0;\\n    this._animation = null;\\n    this._listeners = \{};\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
              "name": "value"
            }
          ],
          "tparams": null,
          "returntypehint": null,
          "name": "constructor"
        },
        \{
          "line": 712,
          "source": "__detach() \{\\n    this.stopAnimation();\\n    super.__detach();\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": null,
          "name": "__detach"
        },
        \{
          "line": 717,
          "source": "__getValue(): number \{\\n    return this._value + this._offset;\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "__getValue"
        },
        \{
          "line": 721,
          "source": "__makeNative() \{\\n    super.__makeNative();\\n\\n    if (Object.keys(this._listeners).length) \{\\n      this._startListeningToNativeValueUpdates();\\n    }\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": null,
          "name": "__makeNative"
        },
        \{
          "line": 733,
          "source": "setValue(value: number): void \{\\n    if (this._animation) \{\\n      this._animation.stop();\\n      this._animation = null;\\n    }\\n    this._updateValue(\\n      value,\\n      !this.__isNative /* don't perform a flush for natively driven values */);\\n    if (this.__isNative) \{\\n      NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), value);\\n    }\\n  }",
          "docblock": "/**\\n   * Directly set the value.  This will stop any animations running on the value\\n   * and update all the bound properties.\\n   */\\n",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
              "name": "value"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "setValue"
        },
        \{
          "line": 751,
          "source": "setOffset(offset: number): void \{\\n    this._offset = offset;\\n    if (this.__isNative) \{\\n      NativeAnimatedAPI.setAnimatedNodeOffset(this.__getNativeTag(), offset);\\n    }\\n  }",
          "docblock": "/**\\n   * Sets an offset that is applied on top of whatever value is set, whether via\\n   * \`setValue\`, an animation, or \`Animated.event\`.  Useful for compensating\\n   * things like the start of a pan gesture.\\n   */\\n",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
              "name": "offset"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "setOffset"
        },
        \{
          "line": 762,
          "source": "flattenOffset(): void \{\\n    this._value += this._offset;\\n    this._offset = 0;\\n    if (this.__isNative) \{\\n      NativeAnimatedAPI.flattenAnimatedNodeOffset(this.__getNativeTag());\\n    }\\n  }",
          "docblock": "/**\\n   * Merges the offset value into the base value and resets the offset to zero.\\n   * The final output of the value is unchanged.\\n   */\\n",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "flattenOffset"
        },
        \{
          "line": 774,
          "source": "extractOffset(): void \{\\n    this._offset += this._value;\\n    this._value = 0;\\n    if (this.__isNative) \{\\n      NativeAnimatedAPI.extractAnimatedNodeOffset(this.__getNativeTag());\\n    }\\n  }",
          "docblock": "/**\\n   * Sets the offset value to the base value, and resets the base value to zero.\\n   * The final output of the value is unchanged.\\n   */\\n",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "extractOffset"
        },
        \{
          "line": 787,
          "source": "addListener(callback: ValueListenerCallback): string \{\\n    var id = String(_uniqueId++);\\n    this._listeners[id] = callback;\\n    if (this.__isNative) \{\\n      this._startListeningToNativeValueUpdates();\\n    }\\n    return id;\\n  }",
          "docblock": "/**\\n   * Adds an asynchronous listener to the value so you can observe updates from\\n   * animations.  This is useful because there is no way to\\n   * synchronously read the value because it might be driven natively.\\n   */\\n",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"ValueListenerCallback\\",\\"length\\":1}",
              "name": "callback"
            }
          ],
          "tparams": null,
          "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "addListener"
        },
        \{
          "line": 796,
          "source": "removeListener(id: string): void \{\\n    delete this._listeners[id];\\n    if (this.__isNative && Object.keys(this._listeners).length === 0) \{\\n      this._stopListeningForNativeValueUpdates();\\n    }\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
              "name": "id"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "removeListener"
        },
        \{
          "line": 803,
          "source": "removeAllListeners(): void \{\\n    this._listeners = \{};\\n    if (this.__isNative) \{\\n      this._stopListeningForNativeValueUpdates();\\n    }\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "removeAllListeners"
        },
        \{
          "line": 810,
          "source": "_startListeningToNativeValueUpdates() \{\\n    if (this.__nativeAnimatedValueListener) \{\\n      return;\\n    }\\n\\n    NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());\\n    this.__nativeAnimatedValueListener = NativeAnimatedHelper.nativeEventEmitter.addListener(\\n      'onAnimatedValueUpdate',\\n      (data) => \{\\n        if (data.tag !== this.__getNativeTag()) \{\\n          return;\\n        }\\n        this._updateValue(data.value, false /* flush */);\\n      }\\n    );\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": null,
          "name": "_startListeningToNativeValueUpdates"
        },
        \{
          "line": 827,
          "source": "_stopListeningForNativeValueUpdates() \{\\n    if (!this.__nativeAnimatedValueListener) \{\\n      return;\\n    }\\n\\n    this.__nativeAnimatedValueListener.remove();\\n    this.__nativeAnimatedValueListener = null;\\n    NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": null,
          "name": "_stopListeningForNativeValueUpdates"
        },
        \{
          "line": 842,
          "source": "stopAnimation(callback?: ?(value: number) => void): void \{\\n    this.stopTracking();\\n    this._animation && this._animation.stop();\\n    this._animation = null;\\n    callback && callback(this.__getValue());\\n  }",
          "docblock": "/**\\n   * Stops any running animation or tracking.  \`callback\` is invoked with the\\n   * final value after stopping the animation, which is useful for updating\\n   * state to match the animation position with layout.\\n   */\\n",
          "modifiers": [],
          "params": [
            \{
              "typehint": "?(value: number) => void",
              "name": "callback?"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "stopAnimation"
        },
        \{
          "line": 853,
          "source": "interpolate(config: InterpolationConfigType): AnimatedInterpolation \{\\n    return new AnimatedInterpolation(this, config);\\n  }",
          "docblock": "/**\\n   * Interpolates the value before updating the property, e.g. mapping 0-1 to\\n   * 0-10.\\n   */\\n",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"InterpolationConfigType\\",\\"length\\":1}",
              "name": "config"
            }
          ],
          "tparams": null,
          "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AnimatedInterpolation\\",\\"length\\":1}",
          "name": "interpolate"
        },
        \{
          "line": 861,
          "source": "animate(animation: Animation, callback: ?EndCallback): void \{\\n    var handle = null;\\n    if (animation.__isInteraction) \{\\n      handle = InteractionManager.createInteractionHandle();\\n    }\\n    var previousAnimation = this._animation;\\n    this._animation && this._animation.stop();\\n    this._animation = animation;\\n    animation.start(\\n      this._value,\\n      (value) => \{\\n        // Natively driven animations will never call into that callback, therefore we can always\\n        // pass flush = true to allow the updated value to propagate to native with setNativeProps\\n        this._updateValue(value, true /* flush */);\\n      },\\n      (result) => \{\\n        this._animation = null;\\n        if (handle !== null) \{\\n          InteractionManager.clearInteractionHandle(handle);\\n        }\\n        callback && callback(result);\\n      },\\n      previousAnimation,\\n      this\\n    );\\n  }",
          "docblock": "/**\\n   * Typically only used internally, but could be used by a custom Animation\\n   * class.\\n   */\\n",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Animation\\",\\"length\\":1}",
              "name": "animation"
            },
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"EndCallback\\",\\"length\\":2,\\"nullable\\":true}",
              "name": "callback"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "animate"
        },
        \{
          "line": 891,
          "source": "stopTracking(): void \{\\n    this._tracking && this._tracking.__detach();\\n    this._tracking = null;\\n  }",
          "docblock": "/**\\n   * Typically only used internally.\\n   */\\n",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "stopTracking"
        },
        \{
          "line": 899,
          "source": "track(tracking: Animated): void \{\\n    this.stopTracking();\\n    this._tracking = tracking;\\n  }",
          "docblock": "/**\\n   * Typically only used internally.\\n   */\\n",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Animated\\",\\"length\\":1}",
              "name": "tracking"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "track"
        },
        \{
          "line": 904,
          "source": "_updateValue(value: number, flush: bool): void \{\\n    this._value = value;\\n    if (flush) \{\\n      _flush(this);\\n    }\\n    for (var key in this._listeners) \{\\n      this._listeners[key](\{value: this.__getValue()});\\n    }\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
              "name": "value"
            },
            \{
              "typehint": "bool",
              "name": "flush"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "_updateValue"
        },
        \{
          "line": 914,
          "source": "__getNativeConfig(): Object \{\\n    return \{\\n      type: 'value',\\n      value: this._value,\\n      offset: this._offset,\\n    };\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "Object",
          "name": "__getNativeConfig"
        }
      ],
      "superClass": "AnimatedWithChildren",
      "ownerProperty": "Value"
    },
    \{
      "name": "AnimatedValueXY",
      "docblock": "/**\\n * 2D Value for driving 2D animations, such as pan gestures.  Almost identical\\n * API to normal \`Animated.Value\`, but multiplexed.  Contains two regular\\n * \`Animated.Value\`s under the hood.\\n *\\n * #### Example\\n *\\n *\`\`\`javascript\\n *  class DraggableView extends React.Component \{\\n *    constructor(props) \{\\n *      super(props);\\n *      this.state = \{\\n *        pan: new Animated.ValueXY(), // inits to zero\\n *      };\\n *      this.state.panResponder = PanResponder.create(\{\\n *        onStartShouldSetPanResponder: () => true,\\n *        onPanResponderMove: Animated.event([null, \{\\n *          dx: this.state.pan.x, // x,y are Animated.Value\\n *          dy: this.state.pan.y,\\n *        }]),\\n *        onPanResponderRelease: () => \{\\n *          Animated.spring(\\n *            this.state.pan,         // Auto-multiplexed\\n *            \{toValue: \{x: 0, y: 0}} // Back to zero\\n *          ).start();\\n *        },\\n *      });\\n *    }\\n *    render() \{\\n *      return (\\n *        <Animated.View\\n *          \{...this.state.panResponder.panHandlers}\\n *          style=\{this.state.pan.getLayout()}>\\n *          \{this.props.children}\\n *        </Animated.View>\\n *      );\\n *    }\\n *  }\\n *\`\`\`\\n */\\n",
      "methods": [
        \{
          "line": 970,
          "source": "constructor(valueIn?: ?\{x: number | AnimatedValue, y: number | AnimatedValue}) \{\\n    super();\\n    var value: any = valueIn || \{x: 0, y: 0};  // @flowfixme: shouldn't need \`: any\`\\n    if (typeof value.x === 'number' && typeof value.y === 'number') \{\\n      this.x = new AnimatedValue(value.x);\\n      this.y = new AnimatedValue(value.y);\\n    } else \{\\n      invariant(\\n        value.x instanceof AnimatedValue &&\\n        value.y instanceof AnimatedValue,\\n        'AnimatedValueXY must be initalized with an object of numbers or ' +\\n        'AnimatedValues.'\\n      );\\n      this.x = value.x;\\n      this.y = value.y;\\n    }\\n    this._listeners = \{};\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "?\{x: number | AnimatedValue, y: number | AnimatedValue}",
              "name": "valueIn?"
            }
          ],
          "tparams": null,
          "returntypehint": null,
          "name": "constructor"
        },
        \{
          "line": 989,
          "source": "setValue(value: \{x: number, y: number}) \{\\n    this.x.setValue(value.x);\\n    this.y.setValue(value.y);\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{x: number, y: number}",
              "name": "value"
            }
          ],
          "tparams": null,
          "returntypehint": null,
          "name": "setValue"
        },
        \{
          "line": 994,
          "source": "setOffset(offset: \{x: number, y: number}) \{\\n    this.x.setOffset(offset.x);\\n    this.y.setOffset(offset.y);\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{x: number, y: number}",
              "name": "offset"
            }
          ],
          "tparams": null,
          "returntypehint": null,
          "name": "setOffset"
        },
        \{
          "line": 999,
          "source": "flattenOffset(): void \{\\n    this.x.flattenOffset();\\n    this.y.flattenOffset();\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "flattenOffset"
        },
        \{
          "line": 1004,
          "source": "extractOffset(): void \{\\n    this.x.extractOffset();\\n    this.y.extractOffset();\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "extractOffset"
        },
        \{
          "line": 1009,
          "source": "__getValue(): \{x: number, y: number} \{\\n    return \{\\n      x: this.x.__getValue(),\\n      y: this.y.__getValue(),\\n    };\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "\{x: number, y: number}",
          "name": "__getValue"
        },
        \{
          "line": 1016,
          "source": "stopAnimation(callback?: (value: \{x: number, y: number}) => void): void \{\\n    this.x.stopAnimation();\\n    this.y.stopAnimation();\\n    callback && callback(this.__getValue());\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "(value: \{x: number, y: number}) => void",
              "name": "callback?"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "stopAnimation"
        },
        \{
          "line": 1022,
          "source": "addListener(callback: ValueXYListenerCallback): string \{\\n    var id = String(_uniqueId++);\\n    var jointCallback = (\{value: number}) => \{\\n      callback(this.__getValue());\\n    };\\n    this._listeners[id] = \{\\n      x: this.x.addListener(jointCallback),\\n      y: this.y.addListener(jointCallback),\\n    };\\n    return id;\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"ValueXYListenerCallback\\",\\"length\\":1}",
              "name": "callback"
            }
          ],
          "tparams": null,
          "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "addListener"
        },
        \{
          "line": 1034,
          "source": "removeListener(id: string): void \{\\n    this.x.removeListener(this._listeners[id].x);\\n    this.y.removeListener(this._listeners[id].y);\\n    delete this._listeners[id];\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
              "name": "id"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "removeListener"
        },
        \{
          "line": 1040,
          "source": "removeAllListeners(): void \{\\n    this.x.removeAllListeners();\\n    this.y.removeAllListeners();\\n    this._listeners = \{};\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "removeAllListeners"
        },
        \{
          "line": 1053,
          "source": "getLayout(): \{[key: string]: AnimatedValue} \{\\n    return \{\\n      left: this.x,\\n      top: this.y,\\n    };\\n  }",
          "docblock": "/**\\n   * Converts \`\{x, y}\` into \`\{left, top}\` for use in style, e.g.\\n   *\\n   *\`\`\`javascript\\n   *  style=\{this.state.anim.getLayout()}\\n   *\`\`\`\\n   */\\n",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "\{[key: string]: AnimatedValue}",
          "name": "getLayout"
        },
        \{
          "line": 1069,
          "source": "getTranslateTransform(): Array<\{[key: string]: AnimatedValue}> \{\\n    return [\\n      \{translateX: this.x},\\n      \{translateY: this.y}\\n    ];\\n  }",
          "docblock": "/**\\n   * Converts \`\{x, y}\` into a useable translation transform, e.g.\\n   *\\n   *\`\`\`javascript\\n   *  style=\{\{\\n   *    transform: this.state.anim.getTranslateTransform()\\n   *  }}\\n   *\`\`\`\\n   */\\n",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "Array<\{[key: string]: AnimatedValue}>",
          "name": "getTranslateTransform"
        }
      ],
      "superClass": "AnimatedWithChildren",
      "ownerProperty": "ValueXY"
    },
    \{
      "name": "AnimatedInterpolation",
      "methods": [
        \{
          "line": 1082,
          "source": "constructor(parent: Animated, config: InterpolationConfigType) \{\\n    super();\\n    this._parent = parent;\\n    this._config = config;\\n    this._interpolation = Interpolation.create(config);\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Animated\\",\\"length\\":1}",
              "name": "parent"
            },
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"InterpolationConfigType\\",\\"length\\":1}",
              "name": "config"
            }
          ],
          "tparams": null,
          "returntypehint": null,
          "name": "constructor"
        },
        \{
          "line": 1089,
          "source": "__getValue(): number | string \{\\n    var parentValue: number = this._parent.__getValue();\\n    invariant(\\n      typeof parentValue === 'number',\\n      'Cannot interpolate an input which is not a number.'\\n    );\\n    return this._interpolation(parentValue);\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "number | string",
          "name": "__getValue"
        },
        \{
          "line": 1098,
          "source": "interpolate(config: InterpolationConfigType): AnimatedInterpolation \{\\n    return new AnimatedInterpolation(this, config);\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"InterpolationConfigType\\",\\"length\\":1}",
              "name": "config"
            }
          ],
          "tparams": null,
          "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"AnimatedInterpolation\\",\\"length\\":1}",
          "name": "interpolate"
        },
        \{
          "line": 1102,
          "source": "__attach(): void \{\\n    this._parent.__addChild(this);\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "__attach"
        },
        \{
          "line": 1106,
          "source": "__detach(): void \{\\n    this._parent.__removeChild(this);\\n    super.__detach();\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "__detach"
        },
        \{
          "line": 1111,
          "source": "__transformDataType(range: Array<any>) \{\\n    // Change the string array type to number array\\n    // So we can reuse the same logic in iOS and Android platform\\n    return range.map(function (value) \{\\n      if (typeof value !== 'string') \{\\n        return value;\\n      }\\n      if (/deg$/.test(value)) \{\\n        const degrees = parseFloat(value, 10) || 0;\\n        const radians = degrees * Math.PI / 180.0;\\n        return radians;\\n      } else \{\\n        // Assume radians\\n        return parseFloat(value, 10) || 0;\\n      }\\n    });\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "Array<any>",
              "name": "range"
            }
          ],
          "tparams": null,
          "returntypehint": null,
          "name": "__transformDataType"
        },
        \{
          "line": 1129,
          "source": "__getNativeConfig(): any \{\\n    if (__DEV__) \{\\n      NativeAnimatedHelper.validateInterpolation(this._config);\\n    }\\n\\n    return \{\\n      inputRange: this._config.inputRange,\\n      // Only the \`outputRange\` can contain strings so we don't need to tranform \`inputRange\` here\\n      outputRange: this.__transformDataType(this._config.outputRange),\\n      extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || 'extend',\\n      extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || 'extend',\\n      type: 'interpolation',\\n    };\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "any",
          "name": "__getNativeConfig"
        }
      ],
      "superClass": "AnimatedWithChildren",
      "ownerProperty": "Interpolation"
    },
    \{
      "name": "AnimatedProps",
      "methods": [
        \{
          "line": 1566,
          "source": "constructor(\\n    props: Object,\\n    callback: () => void,\\n  ) \{\\n    super();\\n    if (props.style) \{\\n      props = \{\\n        ...props,\\n        style: new AnimatedStyle(props.style),\\n      };\\n    }\\n    this._props = props;\\n    this._callback = callback;\\n    this.__attach();\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "Object",
              "name": "props"
            },
            \{
              "typehint": "() => void",
              "name": "callback"
            }
          ],
          "tparams": null,
          "returntypehint": null,
          "name": "constructor"
        },
        \{
          "line": 1582,
          "source": "__getValue(): Object \{\\n    var props = \{};\\n    for (var key in this._props) \{\\n      var value = this._props[key];\\n      if (value instanceof Animated) \{\\n        if (!value.__isNative || value instanceof AnimatedStyle) \{\\n          // We cannot use value of natively driven nodes this way as the value we have access from\\n          // JS may not be up to date.\\n          props[key] = value.__getValue();\\n        }\\n      } else if (value instanceof AnimatedEvent) \{\\n        props[key] = value.__getHandler();\\n      } else \{\\n        props[key] = value;\\n      }\\n    }\\n    return props;\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "Object",
          "name": "__getValue"
        },
        \{
          "line": 1601,
          "source": "__getAnimatedValue(): Object \{\\n    var props = \{};\\n    for (var key in this._props) \{\\n      var value = this._props[key];\\n      if (value instanceof Animated) \{\\n        props[key] = value.__getAnimatedValue();\\n      }\\n    }\\n    return props;\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "Object",
          "name": "__getAnimatedValue"
        },
        \{
          "line": 1612,
          "source": "__attach(): void \{\\n    for (var key in this._props) \{\\n      var value = this._props[key];\\n      if (value instanceof Animated) \{\\n        value.__addChild(this);\\n      }\\n    }\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "__attach"
        },
        \{
          "line": 1621,
          "source": "__detach(): void \{\\n    if (this.__isNative && this._animatedView) \{\\n      this.__disconnectAnimatedView();\\n    }\\n    for (var key in this._props) \{\\n      var value = this._props[key];\\n      if (value instanceof Animated) \{\\n        value.__removeChild(this);\\n      }\\n    }\\n    super.__detach();\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "__detach"
        },
        \{
          "line": 1634,
          "source": "update(): void \{\\n    this._callback();\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "update"
        },
        \{
          "line": 1638,
          "source": "__makeNative(): void \{\\n    if (!this.__isNative) \{\\n      this.__isNative = true;\\n      for (var key in this._props) \{\\n        var value = this._props[key];\\n        if (value instanceof Animated) \{\\n          value.__makeNative();\\n        }\\n      }\\n      if (this._animatedView) \{\\n        this.__connectAnimatedView();\\n      }\\n    }\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "__makeNative"
        },
        \{
          "line": 1653,
          "source": "setNativeView(animatedView: any): void \{\\n    invariant(this._animatedView === undefined, 'Animated view already set.');\\n    this._animatedView = animatedView;\\n    if (this.__isNative) \{\\n      this.__connectAnimatedView();\\n    }\\n  }",
          "modifiers": [],
          "params": [
            \{
              "typehint": "any",
              "name": "animatedView"
            }
          ],
          "tparams": null,
          "returntypehint": "void",
          "name": "setNativeView"
        },
        \{
          "line": 1661,
          "source": "__connectAnimatedView(): void \{\\n    invariant(this.__isNative, 'Expected node to be marked as \\"native\\"');\\n    var nativeViewTag: ?number = ReactNative.findNodeHandle(this._animatedView);\\n    invariant(nativeViewTag != null, 'Unable to locate attached view in the native tree');\\n    NativeAnimatedAPI.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "__connectAnimatedView"
        },
        \{
          "line": 1668,
          "source": "__disconnectAnimatedView(): void \{\\n    invariant(this.__isNative, 'Expected node to be marked as \\"native\\"');\\n    var nativeViewTag: ?number = ReactNative.findNodeHandle(this._animatedView);\\n    invariant(nativeViewTag != null, 'Unable to locate attached view in the native tree');\\n    NativeAnimatedAPI.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "void",
          "name": "__disconnectAnimatedView"
        },
        \{
          "line": 1675,
          "source": "__getNativeConfig(): Object \{\\n    var propsConfig = \{};\\n    for (const propKey in this._props) \{\\n      var value = this._props[propKey];\\n      if (value instanceof Animated) \{\\n        propsConfig[propKey] = value.__getNativeTag();\\n      }\\n    }\\n    return \{\\n      type: 'props',\\n      props: propsConfig,\\n    };\\n  }",
          "modifiers": [],
          "params": [],
          "tparams": null,
          "returntypehint": "Object",
          "name": "__getNativeConfig"
        }
      ],
      "superClass": "Animated",
      "ownerProperty": "__PropsOnlyForTests"
    }
  ],
  "superClass": null,
  "type": "api",
  "line": 2441,
  "name": "AnimatedImplementation",
  "docblock": "/**\\n * The \`Animated\` library is designed to make animations fluid, powerful, and\\n * easy to build and maintain. \`Animated\` focuses on declarative relationships\\n * between inputs and outputs, with configurable transforms in between, and\\n * simple \`start\`/\`stop\` methods to control time-based animation execution.\\n *\\n * The simplest workflow for creating an animation is to to create an\\n * \`Animated.Value\`, hook it up to one or more style attributes of an animated\\n * component, and then drive updates via animations using \`Animated.timing()\`:\\n *\\n * \`\`\`javascript\\n * Animated.timing(                            // Animate value over time\\n *   this.state.fadeAnim,                      // The value to drive\\n *   \{\\n *     toValue: 1,                             // Animate to final value of 1\\n *   }\\n * ).start();                                  // Start the animation\\n * \`\`\`\\n *\\n * Refer to the [Animations](docs/animations.html#animated-api) guide to see\\n * additional examples of \`Animated\` in action.\\n *\\n * ## Overview\\n *\\n * There are two value types you can use with \`Animated\`:\\n *\\n * - [\`Animated.Value()\`](docs/animated.html#value) for single values\\n * - [\`Animated.ValueXY()\`](docs/animated.html#valuexy) for vectors\\n *\\n * \`Animated.Value\` can bind to style properties or other props, and can be\\n * interpolated as well. A single \`Animated.Value\` can drive any number of\\n * properties.\\n *\\n * ### Configuring animations\\n *\\n * \`Animated\` provides three types of animation types. Each animation type\\n * provides a particular animation curve that controls how your values animate\\n * from their initial value to the final value:\\n *\\n * - [\`Animated.decay()\`](docs/animated.html#decay) starts with an initial\\n *   velocity and gradually slows to a stop.\\n * - [\`Animated.spring()\`](docs/animated.html#spring) provides a simple\\n *   spring physics model.\\n * - [\`Animated.timing()\`](docs/animated.html#timing) animates a value over time\\n *   using [easing functions](docs/easing.html).\\n *\\n * In most cases, you will be using \`timing()\`. By default, it uses a symmetric\\n * easeInOut curve that conveys the gradual acceleration of an object to full\\n * speed and concludes by gradually decelerating to a stop.\\n *\\n * ### Working with animations\\n *\\n * Animations are started by calling \`start()\` on your animation. \`start()\`\\n * takes a completion callback that will be called when the animation is done.\\n * If the animation finished running normally, the completion callback will be\\n * invoked with \`\{finished: true}\`. If the animation is done because \`stop()\`\\n * was called on it before it could finish (e.g. because it was interrupted by a\\n * gesture or another animation), then it will receive \`\{finished: false}\`.\\n *\\n * ### Using the native driver\\n *\\n * By using the native driver, we send everything about the animation to native\\n * before starting the animation, allowing native code to perform the animation\\n * on the UI thread without having to go through the bridge on every frame.\\n * Once the animation has started, the JS thread can be blocked without\\n * affecting the animation.\\n *\\n * You can use the native driver by specifying \`useNativeDriver: true\` in your\\n * animation configuration. See the\\n * [Animations](docs/animations.html#using-the-native-driver) guide to learn\\n * more.\\n *\\n * ### Animatable components\\n *\\n * Only animatable components can be animated. These special components do the\\n * magic of binding the animated values to the properties, and do targeted\\n * native updates to avoid the cost of the react render and reconciliation\\n * process on every frame. They also handle cleanup on unmount so they are safe\\n * by default.\\n *\\n * - [\`createAnimatedComponent()\`](docs/animated.html#createanimatedcomponent)\\n *   can be used to make a component animatable.\\n *\\n * \`Animated\` exports the following animatable components using the above\\n * wrapper:\\n *\\n * - \`Animated.Image\`\\n * - \`Animated.ScrollView\`\\n * - \`Animated.Text\`\\n * - \`Animated.View\`\\n *\\n * ### Composing animations\\n *\\n * Animations can also be combined in complex ways using composition functions:\\n *\\n * - [\`Animated.delay()\`](docs/animated.html#delay) starts an animation after\\n *   a given delay.\\n * - [\`Animated.parallel()\`](docs/animated.html#parallel) starts a number of\\n *   animations at the same time.\\n * - [\`Animated.sequence()\`](docs/animated.html#sequence) starts the animations\\n *   in order, waiting for each to complete before starting the next.\\n * - [\`Animated.stagger()\`](docs/animated.html#stagger) starts animations in\\n *   order and in parallel, but with successive delays.\\n *\\n * Animations can also be chained together simply by setting the \`toValue\` of\\n * one animation to be another \`Animated.Value\`. See\\n * [Tracking dynamic values](docs/animations.html#tracking-dynamic-values) in\\n * the Animations guide.\\n *\\n * By default, if one animation is stopped or interrupted, then all other\\n * animations in the group are also stopped.\\n *\\n * ### Combining animated values\\n *\\n * You can combine two animated values via addition, multiplication, division,\\n * or modulo to make a new animated value:\\n *\\n * - [\`Animated.add()\`](docs/animated.html#add)\\n * - [\`Animated.divide()\`](docs/animated.html#divide)\\n * - [\`Animated.modulo()\`](docs/animated.html#modulo)\\n * - [\`Animated.multiply()\`](docs/animated.html#multiply)\\n *\\n * ### Interpolation\\n *\\n * The \`interpolate()\` function allows input ranges to map to different output\\n * ranges. By default, it will extrapolate the curve beyond the ranges given,\\n * but you can also have it clamp the output value. It uses lineal interpolation\\n * by default but also supports easing functions.\\n *\\n * - [\`interpolate()\`](docs/animated.html#interpolate)\\n *\\n * Read more about interpolation in the\\n * [Animation](docs/animations.html#interpolation) guide.\\n *\\n * ### Handling gestures and other events\\n *\\n * Gestures, like panning or scrolling, and other events can map directly to\\n * animated values using \`Animated.event()\`. This is done with a structured map\\n * syntax so that values can be extracted from complex event objects. The first\\n * level is an array to allow mapping across multiple args, and that array\\n * contains nested objects.\\n *\\n * - [\`Animated.event()\`](docs/animated.html#event)\\n *\\n * For example, when working with horizontal scrolling gestures, you would do\\n * the following in order to map \`event.nativeEvent.contentOffset.x\` to\\n * \`scrollX\` (an \`Animated.Value\`):\\n *\\n * \`\`\`javascript\\n *  onScroll=\{Animated.event(\\n *    // scrollX = e.nativeEvent.contentOffset.x\\n *    [\{ nativeEvent: \{\\n *         contentOffset: \{\\n *           x: scrollX\\n *         }\\n *       }\\n *     }]\\n *  )}\\n * \`\`\`\\n *\\n */\\n",
  "requires": [
    \{
      "name": "InteractionManager"
    },
    \{
      "name": "Interpolation"
    },
    \{
      "name": "NativeAnimatedHelper"
    },
    \{
      "name": "React"
    },
    \{
      "name": "ReactNative"
    },
    \{
      "name": "Set"
    },
    \{
      "name": "SpringConfig"
    },
    \{
      "name": "ViewStylePropTypes"
    },
    \{
      "name": "flattenStyle"
    },
    \{
      "name": "fbjs/lib/invariant"
    },
    \{
      "name": "fbjs/lib/requestAnimationFrame"
    }
  ],
  "filepath": "Libraries/Animated/src/AnimatedImplementation.js",
  "componentName": "Animated",
  "componentPlatform": "cross",
  "examples": [
    \{
      "path": "Examples/UIExplorer/js/AnimatedExample.js",
      "title": "",
      "content": "/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n * @providesModule AnimatedExample\\n */\\n'use strict';\\n\\nvar React = require\('react');\\nvar ReactNative = require\('react-native');\\nvar \{\\n  Animated,\\n  Easing,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = ReactNative;\\nvar UIExplorerButton = require\('./UIExplorerButton');\\n\\nexports.framework = 'React';\\nexports.title = 'Animated - Examples';\\nexports.description = 'Animated provides a powerful ' +\\n  'and easy-to-use API for building modern, ' +\\n  'interactive user experiences.';\\n\\nexports.examples = [\\n  \{\\n    title: 'FadeInView',\\n    description: 'Uses a simple timing animation to ' +\\n      'bring opacity from 0 to 1 when the component ' +\\n      'mounts.',\\n    render: function() \{\\n      class FadeInView extends React.Component \{\\n        state: any;\\n\\n        constructor(props) \{\\n          super(props);\\n          this.state = \{\\n            fadeAnim: new Animated.Value(0), // opacity 0\\n          };\\n        }\\n        componentDidMount() \{\\n          Animated.timing(       // Uses easing functions\\n            this.state.fadeAnim, // The value to drive\\n            \{\\n              toValue: 1,        // Target\\n              duration: 2000,    // Configuration\\n            },\\n          ).start();             // Don't forget start!\\n        }\\n        render() \{\\n          return (\\n            <Animated.View   // Special animatable View\\n              style=\{\{\\n                opacity: this.state.fadeAnim,  // Binds\\n              }}>\\n              \{this.props.children}\\n            </Animated.View>\\n          );\\n        }\\n      }\\n      class FadeInExample extends React.Component \{\\n        state: any;\\n\\n        constructor(props) \{\\n          super(props);\\n          this.state = \{\\n            show: true,\\n          };\\n        }\\n        render() \{\\n          return (\\n            <View>\\n              <UIExplorerButton onPress=\{() => \{\\n                  this.setState((state) => (\\n                    \{show: !state.show}\\n                  ));\\n                }}>\\n                Press to \{this.state.show ?\\n                  'Hide' : 'Show'}\\n              </UIExplorerButton>\\n              \{this.state.show && <FadeInView>\\n                <View style=\{styles.content}>\\n                  <Text>FadeInView</Text>\\n                </View>\\n              </FadeInView>}\\n            </View>\\n          );\\n        }\\n      }\\n      return <FadeInExample />;\\n    },\\n  },\\n  \{\\n    title: 'Transform Bounce',\\n    description: 'One \`Animated.Value\` is driven by a ' +\\n      'spring with custom constants and mapped to an ' +\\n      'ordered set of transforms.  Each transform has ' +\\n      'an interpolation to convert the value into the ' +\\n      'right range and units.',\\n    render: function() \{\\n      this.anim = this.anim || new Animated.Value(0);\\n      return (\\n        <View>\\n          <UIExplorerButton onPress=\{() => \{\\n            Animated.spring(this.anim, \{\\n              toValue: 0,   // Returns to the start\\n              velocity: 3,  // Velocity makes it move\\n              tension: -10, // Slow\\n              friction: 1,  // Oscillate a lot\\n            }).start(); }}>\\n            Press to Fling it!\\n          </UIExplorerButton>\\n          <Animated.View\\n            style=\{[styles.content, \{\\n              transform: [   // Array order matters\\n                \{scale: this.anim.interpolate(\{\\n                  inputRange: [0, 1],\\n                  outputRange: [1, 4],\\n                })},\\n                \{translateX: this.anim.interpolate(\{\\n                  inputRange: [0, 1],\\n                  outputRange: [0, 500],\\n                })},\\n                \{rotate: this.anim.interpolate(\{\\n                  inputRange: [0, 1],\\n                  outputRange: [\\n                    '0deg', '360deg' // 'deg' or 'rad'\\n                  ],\\n                })},\\n              ]}\\n            ]}>\\n            <Text>Transforms!</Text>\\n          </Animated.View>\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Composite Animations with Easing',\\n    description: 'Sequence, parallel, delay, and ' +\\n      'stagger with different easing functions.',\\n    render: function() \{\\n      this.anims = this.anims || [1,2,3].map(\\n        () => new Animated.Value(0)\\n      );\\n      return (\\n        <View>\\n          <UIExplorerButton onPress=\{() => \{\\n            var timing = Animated.timing;\\n            Animated.sequence([ // One after the other\\n              timing(this.anims[0], \{\\n                toValue: 200,\\n                easing: Easing.linear,\\n              }),\\n              Animated.delay(400), // Use with sequence\\n              timing(this.anims[0], \{\\n                toValue: 0,\\n                easing: Easing.elastic(2), // Springy\\n              }),\\n              Animated.delay(400),\\n              Animated.stagger(200,\\n                this.anims.map((anim) => timing(\\n                  anim, \{toValue: 200}\\n                )).concat(\\n                this.anims.map((anim) => timing(\\n                  anim, \{toValue: 0}\\n                ))),\\n              ),\\n              Animated.delay(400),\\n              Animated.parallel([\\n                Easing.inOut(Easing.quad), // Symmetric\\n                Easing.back(1.5),  // Goes backwards first\\n                Easing.ease        // Default bezier\\n              ].map((easing, ii) => (\\n                timing(this.anims[ii], \{\\n                  toValue: 320, easing, duration: 3000,\\n                })\\n              ))),\\n              Animated.delay(400),\\n              Animated.stagger(200,\\n                this.anims.map((anim) => timing(anim, \{\\n                  toValue: 0,\\n                  easing: Easing.bounce, // Like a ball\\n                  duration: 2000,\\n                })),\\n              ),\\n            ]).start(); }}>\\n            Press to Animate\\n          </UIExplorerButton>\\n          \{['Composite', 'Easing', 'Animations!'].map(\\n            (text, ii) => (\\n              <Animated.View\\n                key=\{text}\\n                style=\{[styles.content, \{\\n                  left: this.anims[ii]\\n                }]}>\\n                <Text>\{text}</Text>\\n              </Animated.View>\\n            )\\n          )}\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Continuous Interactions',\\n    description: 'Gesture events, chaining, 2D ' +\\n      'values, interrupting and transitioning ' +\\n      'animations, etc.',\\n    render: () => (\\n      <Text>Checkout the Gratuitous Animation App!</Text>\\n    ),\\n  }\\n];\\n\\nvar styles = StyleSheet.create(\{\\n  content: \{\\n    backgroundColor: 'deepskyblue',\\n    borderWidth: 1,\\n    borderColor: 'dodgerblue',\\n    padding: 20,\\n    margin: 20,\\n    borderRadius: 10,\\n    alignItems: 'center',\\n  },\\n});\\n"
    }
  ]
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"animated","title":"Animated","layout":"autodocs","category":"APIs","permalink":"docs/animated.html","platform":"cross","next":"appregistry","previous":"alertios","sidebar":true,"runnable":true,"path":"Libraries/Animated/src/AnimatedImplementation.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;