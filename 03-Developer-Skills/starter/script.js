// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius: ')), //the type is number
  };

  //   console.log(measurement);
  //   console.warn(measurement);
  //   console.error(measurement);
  //   console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
