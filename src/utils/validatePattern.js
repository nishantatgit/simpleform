export default (pattern, string) => {
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    throw Error('pattern must be regular expression');
  }
  return pattern.test(string);
};
