// JavaScript //

//Sidenav Init
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

//Dropdown Init
const dropdown = document.querySelectorAll(".dropdown-trigger");
M.Dropdown.init(dropdown, {});

//Collapsible Init
const collapsible = document.querySelectorAll(".collapsible");
M.Collapsible.init(collapsible, {});

//Select Init

const select = document.querySelectorAll("select");
M.FormSelect.init(select, {});

//DatePicker Init
const date = document.querySelectorAll(".datepicker");
M.Datepicker.init(date, {});

//Carousel Init
var carousel = document.querySelectorAll(".carousel");
M.Carousel.init(carousel, {
  fullWidth: true,
  indicators: true
});

//RangeSlider Init
var slider = document.getElementById("budget-slider");
noUiSlider.create(slider, {
  start: [500, 1000],
  connect: true,
  step: 1,
  orientation: "horizontal", // 'horizontal' or 'vertical'
  range: {
    min: 500,
    max: 3000
  },
  format: wNumb({
    decimals: 0
  })
});

//Tooltip Init
const tooltip = document.querySelectorAll(".tooltipped");
M.Tooltip.init(tooltip, {});

//Parallax Init
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax, {});

//Transition
const scaleTrigger = document.getElementById("popout-trigger");
const scale = document.getElementById("popout");

scaleTrigger.addEventListener("click", function() {
  if (
    scale.className === "center collapsible popout scale-transition scale-out"
  ) {
    scale.className = "center collapsible popout scale-transition scale-in";
  } else {
    scale.className = "center collapsible popout scale-transition scale-out";
  }
});

//ScrollSpy Init
const scrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollSpy, {});

//Modal Init
const modal = document.querySelectorAll(".modal");
M.Modal.init(modal, {
  dismissible: false,
  inDuration: 3000,
  outDuration: 2000
});

// jQuery //
$(document).ready(function() {
  //Char counter init
  $(
    "textarea#textarea1, textarea#textarea2,textarea#textarea3"
  ).characterCounter();

  //Animate
  var text = ["UI/UX", "Web", "Graphic"];
  var counter = 0;
  var elem = $("#design");
  setInterval(change, 3000);
  function change() {
    elem.fadeOut(function() {
      elem.html(text[counter]);
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
      elem.fadeIn();
    });
  }
});
