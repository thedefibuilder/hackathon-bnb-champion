export const zodErrors = {
  required: 'is required',
  string: {
    invalid: 'must be a string',
    upperCaseOnly: 'must contain only uppercase characters'
  },
  number: {
    invalid: 'must be a number',
    atLeastOrMore: (number: number) => `must be ${number} or more`,
    greaterThan: (number: number) => `must be grater than ${number}`
  },
  url: {
    invalid: 'must be a valid URL'
  },
  file: {
    invalid: 'file type is not supported',
    maxSize: (size: number, unit?: string) => `must be at most ${size}${unit ?? 'MB'}`
  },
  minChars: (minLength: number) => {
    const characters = minLength > 1 ? 'characters' : 'character';

    return `must contain at least ${minLength} ${characters}`;
  },
  maxChars: (maxLength: number) => {
    const characters = maxLength > 1 ? 'characters' : 'character';

    return `must contain at most ${maxLength} ${characters}`;
  }
};
