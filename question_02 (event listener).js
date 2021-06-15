window.addEventListener('load', function()) {
  "use strict";
    let elements = document.getElementsByClassName('first'); //collects the element through their Class name
    let first = document.getElementById('one'); //get the first document CIS1110 via its ID and tags it as first
        let itemContent = first.innerHTML; //sets the itemContent to recieve the inner text of first
    let second = document.getElementById('two'); //gets the second document CIS1109 via its ID and tags it as second
        let itemContent2 = second.innerHTML; //sets the itemContent2 to recieve the inner text of second
    let third = document.getElementById('three'); //gets the third document CIS1108 via its ID and tags it as third
        let itemContent3 = third.innerHTML; //sets the itemContent3 to recieve the inner text of third so that it can be used like the other two for a sentence
      text.innerHTML = ('The first module is ' + [first.innerHTML] + ' and the second module is ' + [second.innerHTML] + ' and the third module is ' + [third.innerHTML] + '.');
      //using the text ID we can manipulate the text content become whatever we like using innerHTML and during the new sentence we grab content using the gathered elements.
};

});
