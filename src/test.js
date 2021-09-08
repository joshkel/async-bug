function doIt() {
  return new Promise(resolve => setTimeout(resolve, 3000));
}

class TestClass {
  async testMe(enabled) {
    if (!enabled) {
      console.log('not doing it');
      return;
    }
    await doIt();
  }
}

function main() {
  const testInstance = new TestClass();
  testInstance.testMe().then(() => console.log('done'));
}

main();
