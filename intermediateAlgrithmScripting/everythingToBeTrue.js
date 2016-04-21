/**
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation.
**/

function truthCheck(collection, pre) {
  //精髓标志位flag，默认置为置为false;
  var flag=false;
  for(var i=0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre)){
    //下边这个条件原本写的是if(collection[i][pre]!==""),对于某些属性是NULL的例子就不行，
    //直接改成判断collection[i][pre]自动类型转换之后的布尔值，NULL，undefined全部为false，成功！
      if(collection[i][pre]){
        flag=true;
      }else
      //如果发现这个属性为false，return false，跳出函数，return有跳出函数的功能~
      return false;
    }else
    //如果发现不存在这个属性，return跳出这个函数，return 值是false;
    return false;
  }
  //经历重重苦难，全部遍历这个大集合时，如果flag还是true,那么跳出函数,return Boolean(flag)
  return Boolean(flag);
}
//test
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


