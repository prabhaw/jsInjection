// const inputName = document.getElementById('inputName');
// const inputEmail = document.getElementById('inputEmail');

// myFrame.contentWindow.foo = function(){

// }

function getFrame() {
  var myFrame = document.getElementById("myFrame");

  myFrame.contentWindow.document.getElementById("inputName").value =
    "prabhaw soti";
  myFrame.contentWindow.document.getElementById("inputEmail").value =
    "mail.prabhaw@gmail.com";
}
