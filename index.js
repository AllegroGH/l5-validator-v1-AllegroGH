import StringSchema from './src/StringSchema.js';
import NumberSchema from './src/NumberSchema.js';
import ObjectSchema from './src/ObjectSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  number() {
    const validator = (value) => typeof value === 'number' || 'bigint';
    return new NumberSchema([validator]);
  }

  object() {
    return new ObjectSchema();
  }
}
