function palindrome(message){
    var len = message.length;
    var str1 = "";
    for(var i=len-1; i>=0;i--){
        str1+=message[i];
    }
    console.log(str1 == message)
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
