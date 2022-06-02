
// copied from @angular/core
declare let global: any
declare let WorkerGlobalScope: any

const __globalThis = typeof globalThis !== 'undefined' && globalThis;
const __window = typeof window !== 'undefined' && window;
const __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
  self instanceof WorkerGlobalScope && self;
const __global = typeof global !== 'undefined' && global;

// Always use __globalThis if available, which is the spec-defined global variable across all
// environments, then fallback to __global first, because in Node tests both __global and
// __window may be defined and _global should be __global in that case.
const _global = __globalThis || __global || __window || __self;

export const Promise: PromiseConstructor = getZoneUnPatchedApi('Promise');
export function setInterval(cb: TimerHandler, ms: number = 0): number {
  return getZoneUnPatchedApi('setInterval')(cb, ms);
}
export function clearInterval(id: number): void {
  return getZoneUnPatchedApi('clearInterval')(id);
}

/**
 * @description
 *
 * This function returns the zone un-patched API for the a specific Browser API.
 * If no target is passed the window is used instead
 *
 * @param name - The name of the API to check.
 * @param target - The target to get un-patched API from.
 * @return {Function} - The zone un-patched API in question.
 *
 */
export function getZoneUnPatchedApi<
  N extends keyof (Window & typeof globalThis)
  >(name: N): (Window & typeof globalThis)[N];

export function getZoneUnPatchedApi<T extends object, N extends keyof T>(
  target: T,
  name: N
): T[N];

export function getZoneUnPatchedApi<T extends object, N extends keyof T>(
  targetOrName: T | string,
  name?: N
) {
  // If the user has provided the API name as the first argument, for instance:
  // `const addEventListener = getZoneUnPatchedApi('addEventListener');`
  // Then we just swap arguments and make `global` or `window` as the default target.
  if (typeof targetOrName === 'string') {
    name = targetOrName as N;
    targetOrName = _global as T;
  }
  return targetOrName['__zone_symbol__' + name] || targetOrName[name];
}

