window.addEventListener('load', function()) {
  "use strict";
  function hideCourse() { //names and creats a function for use later
    let course = document.getElementById('one'); //names the element tagged as 'one' Course
      course.hidden = true; //sets named course to hidden as true
  }


  function hideCourse2() {//names and creats a function for use later
    let course = document.getElementById('two');//names the element tagged as 'two' Course
      course.hidden = true;//sets named course to hidden as true
  }

  function hideCourse3() {//names and creats a function for use later
    let course = document.getElementById('three');//names the element tagged as 'three' Course
      course.hidden = true;//sets named course to hidden as true
  }

  function hideCourse4() {//names and creats a function for use later
    let course = document.getElementById('four');//names the element tagged as 'four' Course
      course.hidden = true;//sets named course to hidden as true
  }

let button = document.getElementById('hider'); //calls upon the button from the HTML doc and puts it into use.
   button.addEventListener("click", { //applies an EventListener to the button and listens for a click action.
       handleEvent(event) { //used to apply numerous events/functions
          hideCourse(); //calls upon hideCourse function.
          hideCourse2(); //calls upon hideCourse function2.
          hideCourse3(); //calls upon hideCourse function3.
          hideCourse4(); //calls upon hideCourse function4.
       }
   });
});
