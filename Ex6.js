let arr = ['a', 'b', 5,'d', 'e', 'f', 'g', 's'];

let arrSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            arrSame = false;
        }
    }
}
if (arrSame) {
    console.log("true");
} else {
    console.log("false");
}