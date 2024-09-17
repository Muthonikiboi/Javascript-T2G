const TestRunner = require('./TestRunner');
const Assertions = require('./Assertions');

const testRunner = new TestRunner();

testRunner.registerTest('Test 1: assertEqual', () => {
    Assertions.assertEqual(1 + 1, 2);
});

testRunner.registerTest('Test 2: assertNotEqual', () => {
    Assertions.assertNotEqual(1 + 1, 3);
});

testRunner.registerTest('Test 3: assertTrue', () => {
    Assertions.assertTrue(true);
});

testRunner.registerTest('Test 4: assertFalse', () => {
    Assertions.assertFalse(false);
});

testRunner.registerTest('Test 5: assertContains', () => {
    Assertions.assertContains([1, 2, 3], 2);
});

testRunner.runTests();
