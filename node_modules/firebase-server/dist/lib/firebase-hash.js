"use strict";
/*
 * firebase-server - https://github.com/urish/firebase-server
 * License: MIT.
 * Copyright (C) 2013-2018, Uri Shaked.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function convertToIEEE754Hex(num) {
    const buf = new Buffer(8);
    buf.writeDoubleBE(num, 0);
    return buf.toString('hex');
}
function hashPriority(priority) {
    if (typeof priority === 'number') {
        return `number:${convertToIEEE754Hex(priority)}`;
    }
    else {
        return `string:${priority}`;
    }
}
function getFirebaseHash(value) {
    let hash = '';
    if (value === null) {
        return '';
    }
    if (value['.priority']) {
        hash += `priority:${hashPriority(value['.priority'])}:`;
    }
    if (value['.value']) {
        value = value['.value'];
    }
    if (value && (typeof value === 'object')) {
        for (const key of Object.keys(value).sort()) {
            if (key !== '.priority') {
                hash += `:${key}:${getFirebaseHash(value[key])}`;
            }
        }
    }
    else {
        hash += `${typeof value}:`;
        hash += (typeof value === 'number') ? convertToIEEE754Hex(value) : value;
    }
    const sha1 = crypto.createHash('sha1');
    sha1.update(hash);
    return sha1.digest('base64');
}
exports.getFirebaseHash = getFirebaseHash;
//# sourceMappingURL=firebase-hash.js.map