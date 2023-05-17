let x = 1,
  result;
switch (typeof x) {
  case "number":
    result = "x - число";
    break;
  case "string":
    result = "x - строка";
    break;
  case "boolean":
    result = "x - логическое";
    break;
  default:
    result = "Тип x не определен";
}
console.log(result)