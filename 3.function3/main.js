function alphabetSort(message){
    var a = message.split("");
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    for (var i = 0; i < a.length; i++) {
        document.write(a[i])
    }
}
alphabetSort('hello'); // should return 'ehllo'
	
