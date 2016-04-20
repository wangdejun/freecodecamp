/**
Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair
program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
**/

function diffArray(arr1, arr2){
  //定义个新数组，合并两个参数数组，define一个空数组，用以存放两个数组中相同的元素;
  var newArr = arr1.concat(arr2);
  var memsame=[];
  // 找出来两个数组中相同的元素，push到新数组中;
  for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
      if(arr1[i]===arr2[j]){
        memsame.push(arr1[i]);
      }
    }
  }
  //在长数组中删除共同的元素（存放在memesame中）;
  //当初纠结的难点在于怎样删除元素，shift()和pop()方法都不行，因为只能从数组头尾操作;
  //最后想到直接用delete操作符，成功，delete操作符一般用于操作对象，其实数组也是对象，有何不可;
  for(var k=0;k<newArr.length;k++){
    for(var m =0;m<memsame.length;m++){
      if(newArr[k]===memsame[m]){
        delete newArr[k];
      }
    }
  }
  //返回被删得七零八落的新数组，就是我们要的;
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
