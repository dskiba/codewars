// eslint-disable-next-line camelcase
export const Vector = function (components) {
  this.values = components;
  this.result = components;
  return this;
};
Vector.prototype.equals = function (vector) {
  console.log({ vector })
  console.log(this.values)
  return this.values.reduce((acc, item, idx) => item === vector.values[idx], false)
}
Vector.prototype.add = function (vector) {
  const hisvalues = vector.values;
  const myvalues = this.values;
  let result;
  if (myvalues.length !== hisvalues.length) {
    throw ('Error');
  }

  result = myvalues.map((e, i) => e + hisvalues[i]);
  this.values = result;
  this.result = result;
  return this;
}
Vector.prototype.subtract = function (vector) {
  const hisvalues = vector.values;
  const myvalues = this.values;
  let result;
  if (myvalues.length !== hisvalues.length) {
    throw ('Error');
  }
  result = myvalues.map((e, i) => e - hisvalues[i]);
  this.values = result;
  this.result = result;
  return this;
}
Vector.prototype.dot = function (vector) {
  const hisvalues = vector.values;
  const myvalues = this.values;
  let result;
  if (myvalues.length !== hisvalues.length) {
    throw ('Error');
  }
  result = myvalues.map((e, i) => e * hisvalues[i]);
  this.result = eval(result.join('+'));
  return this.equals();
}

Vector.prototype.norm = function () {
  const myvalues = this.values;
  const result = myvalues.map((e, i, a) => Math.pow(e, 2));
  this.result = Math.sqrt(eval(result.join('+')));
  return this.equals();
}

Vector.prototype.toString = function () {
  return `(${this.values.join(',')})`;
}
