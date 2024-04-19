////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Copied from the the original Siemens IX library.
// Refernce: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/requestAnimationFrame.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare const __zone_symbol__requestAnimationFrame: any;

/**
 * Prevents angular from change detection when requesting an animation frame
 */
export const requestAnimationFrameNoNgZone = (callback: (...args: any[]) => void) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(callback);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(callback);
  }
  return setTimeout(callback);
};
