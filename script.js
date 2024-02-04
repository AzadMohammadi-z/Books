function GetBooks() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "books.xml", true);
  xhr.onload = function () {
    const DocumentBooks = this.responseXML;
    const books = DocumentBooks.getElementsByTagName("book");
    let table = "<tr><th>Title</th><th>Author</th><th>Genre</th>";
    for (let i = 0; i < books.length; i++) {
      table +=
        "<tr><td>" +
        books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + // books[i].getElementsByTagName("title")[0].innerHTML
        "</td><td>" +
        books[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
        "</td><td>" +
        books[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("table").innerHTML = table;
  };
  xhr.send();
}

GetBooks();
