export default class NumberSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  integer() {
    const validator = (value) => {
      if (typeof value !== 'bigint' && !Number.isInteger(value)) return false;
      return true;
    };
    return new NumberSchema([...this.validators, validator]);
  }
}
