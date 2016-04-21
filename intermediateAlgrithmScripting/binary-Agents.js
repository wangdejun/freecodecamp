/**
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
Write your own code.Here are some helpful links:
String.charCodeAt()
String.fromCharCode()
**/
//mycode
function binaryAgent(str) {
  var newarr =  str.split(" ");
  for(var i=0 ;i<newarr.length;i++){
    //关键在于parseInt(arr[i],2)可以将数组元素从二进制转化为10进制;
    newarr[i]=String.fromCharCode(parseInt(newarr[i],2));
  }
  //不要忘记join("")中间用"";
  newarr.join("");
  return newarr.join("");
}
//test
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 0010000001100110 01110101 01101110 00100001 00111111");
