magic_square = [
    [8, 3, 4],
    [1, 4, 9],
    [8, 7, 2]
]

var sum=0
for( var i=0;i < magic_square.length;i++){
    for(var colum =0;colum< magic_square.length;colum++){
        sum = sum +magic_square[i][colum]
    }
}
console.log(sum/3)

var sum1=0
for (var j=0;j< magic_square.length;j++){
    for(var row=0 ;row< magic_square.length;row++){
        sum1 = sum1 + magic_square[row][j]
    }
}
console.log(sum1/3)

var sum2=0
for (var k=0;k < magic_square.length;k++){
    sum2 = sum2+magic_square[k][k]
}
console.log(sum2)
var sum3=0
for (var l=0;l<magic_square.length;l++){
    var a=magic_square[l][2-l]
    sum3 = sum3+a
}
console.log(sum3)

if (sum && sum1 && sum2 && sum3){
    console.log("it is magic square")
}
else{
   console.log("it's not magic square")
}
