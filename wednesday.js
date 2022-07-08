/*factorial*/
/*var n = prompt('Factorial, enter number?', 100);
function factorial(n) {
    return (n !=1)? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(n) );*/

  /*palindrom*/

  /*var word = prompt('enter word?', "mather");
  function checkPalindrome(word){
    var checkString = word.split(" ").join("").toLowerCase();
    for(var i = 0; i < checkString.length/2; i++){
        if(checkString[i] != checkString[checkString.length-i-1]){
          return false; 
        }
    }
    return true;
    }
    alert ( checkPalindrome(word));*/

/*max 3 in massive */
/*var myArray=[25, 8, 7, 41, -5, 3, 12, 34]
myArray.sort(function(a,b){ 
  return a - b;
})
alert ( myArray);// enter to alert all mass
console.log(myArray[myArray.length-3]);// enter in console*/

/*max from more mas */

/*
function largestOfFour(arr) {
    // You can do this!
    var largest = [];
      for (var i = 0; i < arr.length; i++) {
      var gr = 0;
      for (var j = 0; j <= arr[i].length; j++) {
        if (arr[i][j] > gr) {
          gr = arr[i][j];
        }
      }
      largest.push(gr);
    }
    return largest;
    }
  
  var r = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(r);
*/
/*max from more mas var 2*/
  var r = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    var maxR= r.map (function(item){//Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
        return Math.max.apply(null,item)//Метод Math.max() возвращает наибольшее из нуля или более чисел.
    })  
  console.log(r, maxR);

