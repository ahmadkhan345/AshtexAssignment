
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

export function isNullOrEmpty(str) {
    if (str === undefined) return true;
    else if (isNull(str)) return true;
    else if (isEmpty(str)) return true;
    else return false;
}

export function isNull(str) {
    return str === null;
}


export function isEmpty(str) {
    return str === "";
}