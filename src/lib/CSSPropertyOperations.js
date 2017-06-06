/**
 * @description CSS properties which accept numbers but are not in units of "px"., since never required in react mobile, extract it to lib
 */
var isUnitlessNumber = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridColumn: 1,
    fontWeight: 1,
    lineClamp: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,

    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
}

function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1)
}
var prefixes = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = 1
    })
})

var RE_NUMBER = /^-?\d+(\.\d+)?$/,
    rnweb = {
        hasFixed: 1,
        useFlexbox: 1,
    }
var CSSPropertyOperations = {
    setValueForStyles: function(node, styles, component) {
        var style = node.style;
        for (var styleName in styles) {
            if (styleName in rnweb) continue
            var styleValue = styles[styleName]
            if (styleValue == null || typeof styleValue === 'boolean') {
                styleValue = ''
            } else if (!isUnitlessNumber[styleName] && RE_NUMBER.test(styleValue)) {
                styleValue = styleValue + 'px'
            }
            if (styleName === 'float') styleName = 'cssFloat'
            style[styleName] = styleValue
        }
    }
}
export default CSSPropertyOperations
