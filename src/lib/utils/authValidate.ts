export function passwordValidate(pw1: string, pw2: string): boolean {
  return pw1.length > 7 && pw2.length > 7 && pw1 === pw2
}

export function emailValidate(email: string) {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
  return email.match(emailRegex) ? true : false
}