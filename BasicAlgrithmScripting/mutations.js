/**判断是否包含所有字母
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:String.indexOf()

----------------------------------------------------------------
test
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.

**/


//example
function mutation(arr) {
  var arr1 = arr[0].toLowerCase().split("");
  var arr2 = arr[1].toLowerCase().split("");
  var flag = 0;
  
  for(var i=0;i<arr2.length;i++){
    for(var j=0;j<arr1.length;j++){
      //如果arr1存在一个这样的字符，则置标志位flag值为1，跳出循环，否则置标志位flag为0；
      if(arr1[j]==arr2[i]){
        flag=1;
        break;
      }else{
        flag=0;
      }
    }
    //如果arr2中的某一个字母在arr1中找不到，那么可以判定函数返回false
    if(flag===0){
      break;
    }
  }
  return Boolean(flag);
}
//test:
mutation(["hello", "hey"]);
