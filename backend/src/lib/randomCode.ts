export function randomCode() {
  const codes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let bookingCode = ''

  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * codes.length)
    bookingCode += codes.substring(randomNumber, randomNumber + 1)
  }

  return bookingCode
}
