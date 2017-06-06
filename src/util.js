// m-start

import ReactEventBridge from './event/ReactEventBridge';

/* global internalInstanceKey:false */

function getInternalInstanceKey() {
    if (typeof internalInstanceKey !== 'undefined') {
        return internalInstanceKey;
    }
}

export function loseUp(inst, node) {
    let key = getInternalInstanceKey();
    // @for fucking typeof null === 'object'
    if (key && typeof inst === 'object' && inst !== null) {
        ReactEventBridge.precacheNode(inst, node);
    }
}

export function recycle(node) {
    let key = getInternalInstanceKey();
    if (node[key]) {
        ReactEventBridge.recycle(node, key);
    }
}
// m-end

/** Copy own-properties from `props` onto `obj`.
 *    @returns obj
 *    @private
 */
export function extend(obj, props) {
    for (let i in props) obj[i] = props[i];
    return obj;
}
