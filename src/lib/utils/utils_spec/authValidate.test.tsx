import { expect, test, describe } from 'vitest'
import { passwordValidate, emailValidate } from '../authValidate'

describe('Валидация почты', () => {
  test('Почта соответствует регулярному вырожению', () => {
    expect(emailValidate('glebgubckin')).toBeFalsy()
  })

  test('Почта соответствует регулярному вырожению', () => {
    expect(emailValidate('glebgubckin@mail.ru')).toBeTruthy()
  })
})

describe('Валидация пароля', () =>  {
  test('Оба пароля меньше 8 знаков', () => {
    expect(passwordValidate('abc', 'abc')).toBeFalsy()
  })

  test('Первый пароль меньше 8 знаков', () => {
    expect(passwordValidate('abc', 'abc12356789')).toBeFalsy()
  })

  test('Второй пароль меньше 8 знаков', () => {
    expect(passwordValidate('abc12356789', 'abc')).toBeFalsy()
  })

  test('Пароль 1 не равен паролю 2', () => {
    expect(passwordValidate('abc12356789', 'abc12356789a')).toBeFalsy()
  })

  test('Пароль 1 не равен паролю 2', () => {
    expect(passwordValidate('abc12356789', 'abc12356789')).toBeTruthy()
  })
})