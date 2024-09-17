class TestRunner {
    constructor() {
        this.tests = [];
    }

    registerTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    async runTests() {
        console.log('Running Tests...\n');
        for (const { name, testFunction } of this.tests) {
            try {
                await testFunction();
                console.log(`✔ ${name}`);
            } catch (error) {
                console.error(`✖ ${name}`);
                console.error(error.message);
            }
        }
    }
}

module.exports = TestRunner;
