class Assertions {
    static assertEqual(actual, expected, message = '') {
        if (actual !== expected) {
            throw new Error(message || `Expected ${expected}, but got ${actual}`);
        }
    }

    static assertNotEqual(actual, expected, message = '') {
        if (actual === expected) {
            throw new Error(message || `Expected not ${expected}, but got ${actual}`);
        }
    }

    static assertTrue(value, message = '') {
        if (!value) {
            throw new Error(message || `Expected true, but got ${value}`);
        }
    }

    static assertFalse(value, message = '') {
        if (value) {
            throw new Error(message || `Expected false, but got ${value}`);
        }
    }

    static assertContains(array, item, message = '') {
        if (!array.includes(item)) {
            throw new Error(message || `Expected ${array} to contain ${item}`);
        }
    }
}

module.exports = Assertions;
