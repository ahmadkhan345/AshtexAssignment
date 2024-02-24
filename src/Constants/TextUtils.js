
export function isNullOrEmptyArray(array) {
    if (isNullArray(array)) return true;
    else if (isEmptyArray(array)) return true;
    else return false;
}

export function isNullArray(array) {
    return array === null;
}

export function isEmptyArray(array) {
    return array.length === 0;
}