export default class StringSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  length(minLength, maxLength = null) {
    const validator = (value) => {
      const optionMaxLength = maxLength || value.length;
      if (value.length < minLength || value.length > optionMaxLength) return false;
      return true;
    };
    return new StringSchema([...this.validators, validator]);
  }
}
