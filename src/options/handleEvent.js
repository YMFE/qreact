import ReactEventBridge from '../event/ReactEventBridge';

let event = function () {
    ReactEventBridge.birdge.apply(null, arguments);
};

export default event;
