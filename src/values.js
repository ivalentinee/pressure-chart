// const initialTen = [
//   1,
//   0,
//   0.5,
//   0,
//   0.5,
//   0,
//   0.5,
//   0,
//   1,
//   0.5,
// ];

// let initialValues = [];

// for (let i = 0; i < 10; i++) {
//   initialValues = initialValues.concat(initialTen);
// };

function* generator() {
  let values = [];

  while(true) {
    const newValue = Math.random();

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
