'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
   
   /* SOL 1
    var positiveNumbers=0;
    var negativeNumbers=0;
    var cero=0;
    
    for(var index =0;index<arr.length;index++){
        if(arr[index]>0){
            positiveNumbers++;
        }else if(arr[index]<0){
            negativeNumbers++;
        }else{
            cero++;
        }
    }
    
    console.log(positiveNumbers/arr.length);
    console.log(negativeNumbers/arr.length);
    console.log(cero/arr.length);
*/

//SOL 2

    var positiveNumbers=0;
    var negativeNumbers=0;
    var cero=0;
    
    arr.forEach((element,index)=>{
        if(element>0){
            positiveNumbers++;
        }else if(element<0){
            negativeNumbers++;
        }else{
            cero++;
        }
    })
    
    console.log(positiveNumbers/arr.length);
    console.log(negativeNumbers/arr.length);
    console.log(cero/arr.length);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
