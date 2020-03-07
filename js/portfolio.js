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

//Tooltip Init
const tooltip = document.querySelectorAll(".tooltipped");
M.Tooltip.init(tooltip, {});

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

//Materialbox Init
const box = document.querySelectorAll(".materialboxed");
M.Materialbox.init(box, {});

// jQuery //
$(document).ready(function() {
  //Char counter init
  $(
    "textarea#textarea1, textarea#textarea2,textarea#textarea3"
  ).characterCounter();

  //Tabs Init
  $(".tabs").tabs();

  //Animate
  var text = ["Graphic", "UI/UX", "Web"];
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

$(document).on("click", ".klik", function() {
  var tab = $(this).attr("data-tab");
  $(".tabs").tabs("select", tab);
});
