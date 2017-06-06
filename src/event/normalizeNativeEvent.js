/*
* A native event is a synthetic touch event with the following form:
*
*  - `nativeEvent`
*      + `changedTouches` - Array of all touch events that have changed since the last event
*      + `identifier` - The ID of the touch
*      + `locationX` - The X position of the touch, relative to the element
*      + `locationY` - The Y position of the touch, relative to the element
*      + `pageX` - The X position of the touch, relative to the root element
*      + `pageY` - The Y position of the touch, relative to the root element
*      + `target` - The node id of the element receiving the touch event
*      + `timestamp` - A time identifier for the touch, useful for velocity calculation
*      + `touches` - Array of all current touches on the screen
*
* A `gestureState` object has the following:
*
*  - `stateID` - ID of the gestureState- persisted as long as there at least
*     one touch on screen
*  - `moveX` - the latest screen coordinates of the recently-moved touch
*  - `moveY` - the latest screen coordinates of the recently-moved touch
*  - `x0` - the screen coordinates of the responder grant
*  - `y0` - the screen coordinates of the responder grant
*  - `dx` - accumulated distance of the gesture since the touch started
*  - `dy` - accumulated distance of the gesture since the touch started
*  - `vx` - current velocity of the gesture
*  - `vy` - current velocity of the gesture
*  - `numberActiveTouches` - Number of touches currently on screen
*/


// Mobile Safari re-uses touch objects, so we copy the properties we want and normalize the identifier



var normalizeTouches = (touches = []) => Array.prototype.slice.call(touches).map((touch) => {
  var identifier = touch.identifier > 20 ? (touch.identifier % 20) : touch.identifier

  var rect = touch.target && touch.target.getBoundingClientRect()
  var locationX = touch.pageX - rect.left
  var locationY = touch.pageY - rect.top

  return {
    clientX: touch.clientX,
    clientY: touch.clientY,
    force: touch.force,
    locationX: locationX,
    locationY: locationY,
    identifier: identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    radiusX: touch.radiusX,
    radiusY: touch.radiusY,
    rotationAngle: touch.rotationAngle,
    screenX: touch.screenX,
    screenY: touch.screenY,
    target: touch.target,
    // normalize the timestamp
    // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
    timestamp: Date.now()
  }
})

function normalizeTouchEvent(nativeEvent) {
  var changedTouches = normalizeTouches(nativeEvent.changedTouches)
  var touches = normalizeTouches(nativeEvent.touches)

  var event = {
    changedTouches,
    type: nativeEvent.type,
    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    target: nativeEvent.target,
    // normalize the timestamp
    // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
    timestamp: Date.now(),
    touches
  }

  if (changedTouches[0]) {
    event.identifier = changedTouches[0].identifier
    event.pageX = changedTouches[0].pageX
    event.pageY = changedTouches[0].pageY
    event.locationX = changedTouches[0].locationX
    event.locationY = changedTouches[0].locationY
  }

  return event
}

function normalizeMouseEvent(nativeEvent) {
  const touches = [{
    clientX: nativeEvent.clientX,
    clientY: nativeEvent.clientY,
    force: nativeEvent.force,
    locationX: nativeEvent.clientX,
    locationY: nativeEvent.clientY,
    identifier: 0,
    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    screenX: nativeEvent.screenX,
    screenY: nativeEvent.screenY,
    target: nativeEvent.target,
    timestamp: nativeEvent.timestamp || Date.now()
  }]
  return {
    type: nativeEvent.type,
    changedTouches: touches,
    identifier: touches[0].identifier,
    locationX: nativeEvent.offsetX,
    locationY: nativeEvent.offsetY,
    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    target: nativeEvent.target,
    timestamp: touches[0].timestamp,
    touches: (nativeEvent.type === 'mouseup') ? [] : touches
  }
}

function normalizeNativeEvent(nativeEvent) {
  const mouse = nativeEvent.type.indexOf('mouse') >= 0
  return mouse ? normalizeMouseEvent(nativeEvent) : normalizeTouchEvent(nativeEvent)
}

export default normalizeNativeEvent
