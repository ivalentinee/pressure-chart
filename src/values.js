function* generator() {
  let values = [];

  while(true) {
    const newValue = Math.random() * 5;

    if (values.length < 100) {
      values = values.concat([newValue]);
      yield values;
    } else {
      const [_firstValue, ...restValues] = values;
      values = restValues.concat([newValue]);
      yield values;
    }
  }
}

export { generator };
