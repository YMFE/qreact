import ResponderTouchHistoryStore from '../event/ResponderTouchHistoryStore';
import ResponderEventPlugin from '../event/ResponderEventPlugin';
import TouchHistoryMath from './TouchHistoryMath';
import CSSPropertyOperations from './CSSPropertyOperations';
import findNodeHandle from './findNodeHandle';


let ReactWebAdapter = {
    adapt: function adaptReactWeb(qreact){
        qreact.ResponderTouchHistoryStore = ResponderTouchHistoryStore
        qreact.ResponderEventPlugin = ResponderEventPlugin
        qreact.TouchHistoryMath = TouchHistoryMath
        qreact.CSSPropertyOperations = CSSPropertyOperations
        qreact.findNodeHandle = findNodeHandle
    }
};

export default ReactWebAdapter;
