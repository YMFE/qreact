/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
 
import EventConstants from './EventConstants'
import EventPluginRegistry from './EventPluginRegistry'
import ResponderEventPlugin from './ResponderEventPlugin'
import ResponderTouchHistoryStore from './ResponderTouchHistoryStore'
import normalizeNativeEvent from './normalizeNativeEvent'

const {
  topMouseMove,
  topMouseUp,
  topMouseDown,
  topScroll,
  topSelectionChange,
  topTouchCancel,
  topTouchEnd,
  topTouchMove,
  topTouchStart
} = EventConstants.topLevelTypes

const touchSupport = EventConstants.touchSupport
const endDependencies = touchSupport ? [ topTouchCancel, topTouchEnd ] : [topMouseUp]
const moveDependencies = touchSupport ? [ topTouchMove ] : [ topMouseMove ]
const startDependencies = touchSupport ? [ topTouchStart ] : [topMouseDown]

/**
 * Setup ResponderEventPlugin dependencies
 */
ResponderEventPlugin.eventTypes.responderMove.dependencies = moveDependencies
ResponderEventPlugin.eventTypes.responderEnd.dependencies = endDependencies
ResponderEventPlugin.eventTypes.responderStart.dependencies = startDependencies
ResponderEventPlugin.eventTypes.responderRelease.dependencies = endDependencies
ResponderEventPlugin.eventTypes.responderTerminationRequest.dependencies = []
ResponderEventPlugin.eventTypes.responderGrant.dependencies = []
ResponderEventPlugin.eventTypes.responderReject.dependencies = []
ResponderEventPlugin.eventTypes.responderTerminate.dependencies = []
ResponderEventPlugin.eventTypes.moveShouldSetResponder.dependencies = moveDependencies
ResponderEventPlugin.eventTypes.selectionChangeShouldSetResponder.dependencies = [ topSelectionChange ]
ResponderEventPlugin.eventTypes.scrollShouldSetResponder.dependencies = [ topScroll ]
ResponderEventPlugin.eventTypes.startShouldSetResponder.dependencies = startDependencies

const originalRecordTouchTrack = ResponderTouchHistoryStore.recordTouchTrack

ResponderTouchHistoryStore.recordTouchTrack = (topLevelType, nativeEvent) => {
  // Filter out mouse-move events when the mouse button is not down
  if ((topLevelType === topMouseMove) && !ResponderEventPlugin.isMouseDown) {
    return
  }
  originalRecordTouchTrack.call(ResponderTouchHistoryStore, topLevelType, normalizeNativeEvent(nativeEvent))
}

EventPluginRegistry.injectEventPluginsByName({
  ResponderEventPlugin
})
