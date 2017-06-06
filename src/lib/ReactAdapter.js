import EventConstants from '../event/EventConstants';
import EventPluginRegistry from '../event/EventPluginRegistry';
// import ResponderEventPlugin from '../event/ResponderEventPlugin';
// import ResponderTouchHistoryStore from '../event/ResponderTouchHistoryStore';
import PooledClass from '../event/PooledClass';
import prodInvariant from '../event/reactProdInvariant';
import SyntheticUIEvent from '../event/SyntheticUIEvent';
import SyntheticEvent from '../event/SyntheticEvent';
import EventPropagators from '../event/EventPropagators';
import accumulate from '../event/accumulate';
import ReactBrowserEventEmitter from '../event/ReactBrowserEventEmitter';
import EventPluginHub from '../event/EventPluginHub';
import EventPluginUtils from '../event/EventPluginUtils';



let ReactAdapter = {
    adapt: function adaptReactWeb(qreact){
        // since these below are never required in qreact, extract them to lib
        // qreact.TouchHistoryMath
        // qreact.findNodeHandle
        // qreact.onlyChild
        // qreact.CSSPropertyOperations
        // qreact.ResponderEventPlugin
        // qreact.ResponderTouchHistoryStore

        // inline
        qreact.EventConstants      = EventConstants;
        qreact.SyntheticEvent      = SyntheticEvent;
        qreact.EventPluginRegistry = EventPluginRegistry;
        qreact.PooledClass         = PooledClass;
        qreact.reactProdInvariant  = prodInvariant;
        qreact.SyntheticUIEvent    = SyntheticUIEvent;
        qreact.EventPropagators    = EventPropagators;
        qreact.accumulate          = accumulate;
        qreact.EventPluginUtils    = EventPluginUtils;
        qreact.EventPluginHub      = EventPluginHub;
        qreact.EventEmitter        = ReactBrowserEventEmitter;
    }
};

export default ReactAdapter;
