import { NON_DIMENSION_PROPS } from '../constants';

let isString = s => typeof s === 'string';

// m-start
/**
 * set style
 */
function processStyle(node,name,old,value){
    // if value is string set cssText directly
    if (!value || isString(value) || isString(old)) {
        node.style.cssText = value || '';
    }
    // if value is an object
    if (value && typeof value==='object') {
        // if old tyle exist, diff style
        if (!isString(old)) {
            for (let i in old) if (!(i in value)) node.style[i] = '';
        }
        for (let i in value) {
            if (!value.hasOwnProperty(i)){
                continue;
            }
            let styleValue = transStyleValue(i,value[i]);
            // mobile不用考虑IE8，直接转换为cssFloat，也不用做细拆分
            if (i === 'float') {
                i = 'cssFloat';
            }
            node.style[i] = styleValue || '';
        }
    }
}


function transStyleValue(name,value){
    if (value == null || typeof value === 'boolean' || value === '') {
        return '';
    }

    if (isNaN(value) || value === 0 || NON_DIMENSION_PROPS.hasOwnProperty(name) && NON_DIMENSION_PROPS[name]) {
        return '' + value;
    }
    if (typeof value === 'string') {
        value = value.trim();
    }
    return value + 'px';
}
// m-end


export default processStyle;
