function combinatoria(x, n) {
  return factorial(n)/(factorial(x)*factorial(n-x))
}

function factorial(num) {
  let fact = 1
  for(let i=1; i <= num; i++)
    fact *= i
  return fact
}

module.exports = {
  combinatoria
}
