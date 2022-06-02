import { isEqual } from 'lodash';
export const jestMatcher = observableMatcher(defaultAssert, (a, e) => expect(a).toStrictEqual(e));
function stringify(x) {
    return JSON.stringify(x, function (key, value) {
        if (Array.isArray(value)) {
            return ('[' +
                value.map(function (i) {
                    return '\n\t' + stringify(i);
                }) +
                '\n]');
        }
        return value;
    })
        .replace(/\\"/g, '"')
        .replace(/\\t/g, '\t')
        .replace(/\\n/g, '\n');
}
function deleteErrorNotificationStack(marble) {
    const { notification } = marble;
    if (notification) {
        const { kind, error } = notification;
        if (kind === 'E' && error instanceof Error) {
            notification.error = { name: error.name, message: error.message };
        }
    }
    return marble;
}
export function defaultAssert(value, message) {
    if (value) {
        return;
    }
    throw new Error(message);
}
export function observableMatcher(assert, assertDeepEqual) {
    return (actual, expected) => {
        if (Array.isArray(actual) && Array.isArray(expected)) {
            actual = actual.map(deleteErrorNotificationStack);
            expected = expected.map(deleteErrorNotificationStack);
            const passed = isEqual(actual, expected);
            if (passed) {
                return;
            }
            let message = '\nExpected \n';
            actual.forEach((x) => (message += `\t${stringify(x)}\n`));
            message += '\t\nto deep equal \n';
            expected.forEach((x) => (message += `\t${stringify(x)}\n`));
            assert(passed, message);
        }
        else {
            assertDeepEqual(actual, expected);
        }
    };
}
