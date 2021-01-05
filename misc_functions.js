function sleep() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
async function delay() {
    await sleep(3000);
}

module.exports = { sleep,delay }