export default (pattern, string) => {
  const {
    prototype: { toString },
  } = Object;
  if (toString.call(pattern) !== '[object RegExp]') {
    throw Error('pattern must be regular expression');
  } else if (
    !(
      typeof string === 'string' ||
      (typeof string === 'object' &&
        toString.call(string) === '[object String]')
    )
  ) {
    throw Error('invalid string');
  }
  return pattern.test(string);
};
