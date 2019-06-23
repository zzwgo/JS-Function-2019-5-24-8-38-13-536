function countWords(message){
var ss = message.split(" "); 
document.write(ss.length)
}
countWords('Good morning, I love JavaScript.'); // should return 5
