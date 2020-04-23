import { isValidCpf } from '@brazilian-utils/is-valid-cpf'
import { isValidCnpj } from '@brazilian-utils/is-valid-cnpj'
import isValidPhone from '@brazilian-utils/is-valid-phone'

const isEmpty = value =>
  typeof value === 'undefined' ||
  (Array.isArray(value) && value.length === 0) ||
  value === null ||
  value === ''

const isNotEmail = value =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
// const isNotNumeric = value => !/^(\d+(\.\d+)?)$/.test(value)
// const isNotInteger = value => Number(value) !== Math.floor(value)
// const isNotURL = R.complement(isURL)

/*
 * Validation rules.
 */

export const nil = () => undefined
export const required = value => isEmpty(value) && 'Este campo é obrigatório'
// export const url = value => every([isNotEmpty, isNotURL])(value) && 'Invalid URL'
export const email = value => isNotEmail(value) && 'Deve ser um e-mail válido'
// export const number = value => every([isNotEmpty, isNotNumeric])(value) && 'Digite apenas nÃºmeros'
// export const integer = value => number(value) || isNotInteger(value) && 'Digite apenas nÃºmeros inteiros'
// export const checked = value => !value && 'Este campo deve estar marcado'
// export const max = max => value => value >= max && `NÃºmero deve ser menor que ${max}`

export const equalsField = (field, label) => (value, values) =>
  value !== values[field] && `Deve ser igual ao campo ${label}`

// export const oneOf = (options = [], error = 'OpÃ§Ã£o invÃ¡lida', caseSensitive = true) =>
//   value => options
//     .map(str => caseSensitive ? str : str.toLowerCase())
//     .indexOf(caseSensitive ? value : value && value.toLowerCase()) === -1 && error

export const maxLength = max => value => {
  if (!isEmpty(value) && value.length > max) {
    return `Não deve ter mais de ${max} caractere(s)`
  }
}

export const min = min => value => {
  if (value < min) {
    return `Não deve ser menor que ${min}`
  }
}

export const minLength = min => value => {
  if (!isEmpty(value) && value.length < min) {
    return `Deve ter no minímo ${min} caractere(s)`
  }
}

/*
 * Combine multiple validation rules into one..
 */
export const combine = (...rules) => (...args) => {
  const _rules = [].concat(rules)

  for (let i = 0; i < _rules.length; i++) {
    const error = _rules[i](...args)
    if (error) return error
  }
}

/**
 * Conditionally validates a field.
 *
 * @param {Function} condition Callback to check if should validate. Receives the field
 *                             value as first argument and the whole form data as second.
 * @param {Array|Function} rules Either a single rule function or an array of rules.
 *
 * @return {Function} A configured conditional rule.
 */
export const condition = (condition, rules) => (...args) =>
  condition(...args) ? combine(rules)(...args) : undefined

/**
 * Branch validate based on field current value.
 *
 * @param {Function} test Branch predicate.
 * @param {Array|Function} leftRules Rules to apply when predicates true.
 * @param {Array|Function} rightRules Rules to apply when predicates false.
 */
export const branch = (test, leftRules, rightRules = nil) => (...args) =>
  combine(test(...args) ? leftRules : rightRules)(...args)

export const cpf = value => !isValidCpf(value) && 'CPF inválido'
export const cnpj = value => !isValidCnpj(value) && 'CNPJ inválido'
export const phone = value => !isValidPhone(value) && 'Telefone inválido'
