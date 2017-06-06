/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */

'use strict';

import _prodInvariant from './reactProdInvariant';

import EventConstants from './EventConstants';
import EventListener from 'fbjs/lib/EventListener';
import EventPropagators from './EventPropagators';
import ReactDOMComponentTree from './ReactDOMComponentTree';

import SyntheticEvent from './SyntheticEvent';
import SyntheticFocusEvent from './SyntheticFocusEvent';
import SyntheticMouseEvent from './SyntheticMouseEvent';
import SyntheticDragEvent from './SyntheticDragEvent';
import SyntheticTouchEvent from './SyntheticTouchEvent';
import SyntheticTransitionEvent from './SyntheticTransitionEvent';
import SyntheticUIEvent from './SyntheticUIEvent';
import SyntheticAnimationEvent from './SyntheticAnimationEvent';

import SyntheticKeyboardEvent from './SyntheticKeyboardEvent';
import SyntheticClipboardEvent from './SyntheticClipboardEvent';
import SyntheticWheelEvent from './SyntheticWheelEvent';

import emptyFunction from 'fbjs/lib/emptyFunction';
import getEventCharCode from './getEventCharCode';
import invariant from 'fbjs/lib/invariant';

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {}

var topLevelEventsToDispatchConfig = []
Array(
    'abort',
    'animationEnd',
    'animationIteration',
    'animationStart',
    'blur',
    'canPlay',
    'canPlayThrough',
    'click',
    'contextMenu',
    'copy',
    'cut',
    'doubleClick',
    'drag',
    'dragEnd',
    'dragEnter',
    'dragExit',
    'dragLeave',
    'dragOver',
    'dragStart',
    'drop',
    'durationChange',
    'emptied',
    'encrypted',
    'ended',
    'error',
    'focus',
    'input',
    'invalid',
    'keyDown',
    'keyPress',
    'keyUp',
    'load',
    'loadedData',
    'loadedMetadata',
    'loadStart',
    'mouseDown',
    'mouseMove',
    'mouseOut',
    'mouseOver',
    'mouseUp',
    'paste',
    'pause',
    'play',
    'playing',
    'progress',
    'rateChange',
    'reset',
    'scroll',
    'seeked',
    'seeking',
    'stalled',
    'submit',
    'suspend',
    'timeUpdate',
    'touchCancel',
    'touchEnd',
    'touchMove',
    'touchStart',
    'transitionEnd',
    'volumeChange',
    'waiting',
    'wheel',


).forEach(function(event) {
    var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
    var onEvent = 'on' + capitalizedEvent;
    var topEvent = 'top' + capitalizedEvent;

    var type = {
        phasedRegistrationNames: {
            bubbled: onEvent,
            captured: onEvent + 'Capture',
        },
        dependencies: [topEvent],
    };
    eventTypes[event] = type;
    topLevelEventsToDispatchConfig[topEvent] = type;
});



var ON_CLICK_KEY =  'onClick';
var onClickListeners = {};

function getDictionaryKey(inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
}

var SimpleEventPlugin = {

  eventTypes: eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor;
    switch (topLevelType) {
      case topLevelTypes.topAbort:
      case topLevelTypes.topCanPlay:
      case topLevelTypes.topCanPlayThrough:
      case topLevelTypes.topDurationChange:
      case topLevelTypes.topEmptied:
      case topLevelTypes.topEncrypted:
      case topLevelTypes.topEnded:
      case topLevelTypes.topError:
      case topLevelTypes.topInput:
      case topLevelTypes.topInvalid:
      case topLevelTypes.topLoad:
      case topLevelTypes.topLoadedData:
      case topLevelTypes.topLoadedMetadata:
      case topLevelTypes.topLoadStart:
      case topLevelTypes.topPause:
      case topLevelTypes.topPlay:
      case topLevelTypes.topPlaying:
      case topLevelTypes.topProgress:
      case topLevelTypes.topRateChange:
      case topLevelTypes.topReset:
      case topLevelTypes.topSeeked:
      case topLevelTypes.topSeeking:
      case topLevelTypes.topStalled:
      case topLevelTypes.topSubmit:
      case topLevelTypes.topSuspend:
      case topLevelTypes.topTimeUpdate:
      case topLevelTypes.topVolumeChange:
      case topLevelTypes.topWaiting:
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = SyntheticEvent;
        break;
      case topLevelTypes.topKeyPress:
        // Firefox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (getEventCharCode(nativeEvent) === 0) {
          return null;
        }
      /* falls through */
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        EventConstructor = SyntheticKeyboardEvent;
        break;
      case topLevelTypes.topBlur:
      case topLevelTypes.topFocus:
        EventConstructor = SyntheticFocusEvent;
        break;
      case topLevelTypes.topClick:
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
      /* falls through */
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topDoubleClick:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topMouseMove:
      case topLevelTypes.topMouseOut:
      case topLevelTypes.topMouseOver:
      case topLevelTypes.topMouseUp:
        EventConstructor = SyntheticMouseEvent;
        break;
      case topLevelTypes.topDrag:
      case topLevelTypes.topDragEnd:
      case topLevelTypes.topDragEnter:
      case topLevelTypes.topDragExit:
      case topLevelTypes.topDragLeave:
      case topLevelTypes.topDragOver:
      case topLevelTypes.topDragStart:
      case topLevelTypes.topDrop:
        EventConstructor = SyntheticDragEvent;
        break;
      case topLevelTypes.topTouchCancel:
      case topLevelTypes.topTouchEnd:
      case topLevelTypes.topTouchMove:
      case topLevelTypes.topTouchStart:
        EventConstructor = SyntheticTouchEvent;
        break;
      case topLevelTypes.topAnimationEnd:
      case topLevelTypes.topAnimationIteration:
      case topLevelTypes.topAnimationStart:
        EventConstructor = SyntheticAnimationEvent;
        break;
      case topLevelTypes.topTransitionEnd:
        EventConstructor = SyntheticTransitionEvent;
        break;
      case topLevelTypes.topScroll:
        EventConstructor = SyntheticUIEvent;
        break;
      case topLevelTypes.topWheel:
        EventConstructor = SyntheticWheelEvent;
        break;
      case topLevelTypes.topCopy:
      case topLevelTypes.topCut:
      case topLevelTypes.topPaste:
        EventConstructor = SyntheticClipboardEvent;
        break;
    }
    !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : _prodInvariant('86', topLevelType) : void 0;
    if (!EventConstructor) return console.log(topLevelType)
    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  },

  didPutListener: function (inst, registrationName, listener) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    if (registrationName === ON_CLICK_KEY) {
      var key = getDictionaryKey(inst);
      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
      if (!onClickListeners[key]) {
        onClickListeners[key] = EventListener.listen(node, 'click', emptyFunction);
      }
    }
  },

  willDeleteListener: function (inst, registrationName) {
    if (registrationName === ON_CLICK_KEY) {
      var key = getDictionaryKey(inst);
      if (onClickListeners[key]) {
        onClickListeners[key].remove();
        delete onClickListeners[key];
      }
    }
  }

};

export default SimpleEventPlugin;
