export function isAdult(birthDate: string) {
  const idade = new Date(birthDate)
  const today = new Date()
  let age: number = today.getFullYear() - idade.getFullYear()
  const month = today.getMonth() - idade.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < idade.getDate())) {
    age--
  }
  return age >= 18
}
