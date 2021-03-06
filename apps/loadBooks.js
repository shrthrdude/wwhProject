var loadBooks = function() {
    return $.ajax({
        type: "GET",
        url: "wwhLibrary.csv",
        dataType: "text",
        success: function(data) {
            processData(data);
        }
     });
};

function processData(allText) {
    var messageListRef = new Firebase('https://wwh.firebaseio.com/books');
    var allTextLines = allText.split(/\r\n|\n/);
    var book = '';
    var recordNum = 3;  // or however many elements there are in each row
    for (i = 0; i < allTextLines.length; i++){
        book = allTextLines[i].split(',');
        var bookFmt;
        for (j = 0; j < recordNum; j++){
            bookFmt = {
                book: book[0],
                author: book[1],
                ISBN: book[2]
            }
        }
        messageListRef.push(bookFmt);
    }
}