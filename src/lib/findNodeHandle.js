/**
 * @author qianjun.yang
 * @description since findNodeHandle is never required in react mobile, extract it to lib
 */
export default function(componentOrHandle) {
    if (componentOrHandle == null || typeof componentOrHandle === 'number') return componentOrHandle
    // in preact base is _hostNode
    return componentOrHandle.base || componentOrHandle._hostNode
};
