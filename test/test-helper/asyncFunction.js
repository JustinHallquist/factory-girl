const asyncFunction = func => async () => {
  try {
    await func();
  } catch (e) {
    // done(e);
  }
};

export default asyncFunction;
