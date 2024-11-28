////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Copied from the the original Siemens IX library.
//
// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/requestAnimationFrame.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Prevents angular from change detection when requesting an animation frame
 */
export const requestAnimationFrameNoNgZone = (callback) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(callback);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(callback);
    }
    return setTimeout(callback);
};
//# sourceMappingURL=requestAnimationFrame.js.map
