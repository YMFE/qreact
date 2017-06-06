import ReactBrowserEventEmitter from './ReactBrowserEventEmitter';
import EventPluginHub from './EventPluginHub';
import ReactDOMComponentTree from './ReactDOMComponentTree';

var ReactEventBridge = {};

ReactEventBridge.birdge = function (node, name, listener, inst) {
    name = 'on' + name.substring(2).replace(/^[a-z]/g, function (a) {
        return a.toUpperCase()
    });
    if (name === 'onLayout') return;
    ReactBrowserEventEmitter.listenTo(name, document);
    ReactEventBridge.precacheNode(inst, node);
    if (listener) {
        EventPluginHub.putListener(inst, name, listener);
    } else {
        EventPluginHub.deleteListener(inst, name);
    }
}

let _rootNodeID = 0;
ReactEventBridge.precacheNode = function (inst, node) {
    if (inst._rootNodeID === null) inst._rootNodeID = _rootNodeID++
        ReactDOMComponentTree.precacheNode(inst, node);
}

ReactEventBridge.recycle = function (node, key) {
    var inst = node[key];
    if (inst) {
        node[key] = node[key]._hostNode = node[key]._hostParent = null;
        EventPluginHub.deleteAllListeners(inst);
    }
}

export default ReactEventBridge;
