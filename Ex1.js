
let result = +prompt ("введите число")
if (typeof result === 'number' && !isNaN(result))
  if (result % 2 ===0)
  console.log ('число четное')
  else
    console.log ('число нечетное')
  else
    console.log ('Упс')