/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */



import BeforeInputEventPlugin from './BeforeInputEventPlugin';
import ChangeEventPlugin from './ChangeEventPlugin';
import DefaultEventPluginOrder from './DefaultEventPluginOrder';

import ReactDOMTreeTraversal from './ReactDOMTreeTraversal';

import ReactEventListener from './ReactEventListener';

// here can only pack with rollup !!
// var ReactInjection = {};
import ReactDOMComponentTree from './ReactDOMComponentTree';
(typeof window !== 'undefined' ? window : global).internalInstanceKey = ReactDOMComponentTree.internalInstanceKey;
import ReactBrowserEventEmitter from './ReactBrowserEventEmitter';
// ReactInjection.EventEmitter = ReactBrowserEventEmitter.injection
import EventPluginHub from './EventPluginHub';
// ReactInjection.EventPluginHub = EventPluginHub.injection
import EventPluginUtils from './EventPluginUtils';
// ReactInjection.EventPluginUtils = EventPluginUtils.injection

import SelectEventPlugin from './SelectEventPlugin';
import SimpleEventPlugin from './SimpleEventPlugin';

var alreadyInjected = false;

function inject() {
  if (alreadyInjected) {
    // TODO: This is currently true because these injections are shared between
    // the client and the server package. They should be built independently
    // and not share any injection state. Then this problem will be solved.
    return;
  }
  alreadyInjected = true;

  // ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
  ReactBrowserEventEmitter.injection.injectReactEventListener(ReactEventListener)

  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  // ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
  EventPluginHub.injection.injectEventPluginOrder(DefaultEventPluginOrder);
  // ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
  EventPluginUtils.injection.injectComponentTree(ReactDOMComponentTree);
  // ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
  EventPluginUtils.injection.injectTreeTraversal(ReactDOMTreeTraversal);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  // ReactInjection.EventPluginHub.injectEventPluginsByName
  EventPluginHub.injection.injectEventPluginsByName({
    SimpleEventPlugin: SimpleEventPlugin,
    
    ChangeEventPlugin: ChangeEventPlugin,
    SelectEventPlugin: SelectEventPlugin,
    BeforeInputEventPlugin: BeforeInputEventPlugin
  });

}

export default {
  inject: inject
};
