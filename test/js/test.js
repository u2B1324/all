// jQuery, select all instances of .box
// jQuery에서의 class찾기(box)
$(".box");

// Instead, select the first instance of .box
// vanilla js
// html에서 바닐라 스크립트로 찾는데, 처음으로 발견된 class찾기
// (document는 html을 뜻함? 전체라고 생각.)
// index.html 생성 후 " ! + TAB(자동완성) " 사용시, title의 기본값이 document이다.
document.querySelector(".box");

// …or select all instances of .box 
// html에서 바닐라 스크립트로 찾는데, class이름 으로 시작한 모든 항목 찾기
document.querySelectorAll(".box");

// ----------------------------------------------------------------------

// with jQuery
// Hide all instances of .box
// jQuery에서 <display: none;> 하는방법
$(".box").hide();

// Without jQuery
// Iterate over the nodelist of elements to hide all instances of .box
// 바닐라 스크립트에서 .box를 찾고, forEach를 사용해서 각각의 요소로 <display: none;>적용
document.querySelectorAll(".box").forEach((box) => {
    box.style.display = "none"
})

// ----------------------------------------------------------------------

// With jQuery
// Select the first instance of .box within .container
// jQuery에서 찾은 요소 안에서 다른 요소 찾기.
var container = $(".container");
// Later...
container.find(".box");

// Without jQuery
// Select the first instance of .box within .container
// 바닐라 스크립트에서 요소를 찾은 후 변수로 저장, 그 변수에서 다시 querySelector사용으로 한번더 찾기(jQuery find랑 같음) 
var container = document.querySelector(".container");
// Later...
container.querySelector(".box");

// ----------------------------------------------------------------------

// with jQuery
// Return the next, previous, and parent element of .box
// 부모와 자식관련 jQuery
$(".box").next();
$(".box").prev();
$(".box").parent();

// Without jQuery
// Return the next, previous, and parent element of .box
// 부모와 자식관련 바닐라 스크립트. 변수로 저장 후 추가명령어사용
var box = document.querySelector(".box");
box.nextElementSibling;
box.previousElementSibling;
box.parentElement;

// ----------------------------------------------------------------------

// With jQuery
$(".button").click(function (e) {
    /* handle click event */
});
$(".button").mouseenter(function (e) {
    /* handle click event */
});
$(document).keyup(function (e) {
    /* handle key up event */
});

// Without jQuery
// 바닐라 스크립트에서 화살표 함수 사용.(1회용)
// 표준 이벤트?

// 앞쪽명령어..(생략됨).addEventListener("기능", (이벤트) => {
//  ... 함수내용 ...
// });

// 길게 쓰는거보단 변수를 사용해서 한줄코드보단? 짧게짧게 표기해야지 가독성이 용이.
// 변수 지정(수정에 용이)
let bt = document.querySelector(".button");
// 함수정의
function fn(e){
    // 클릭이 된 버튼을 찾는다.
    let el = e.target;
    // 동작 부분
    if (el.classList.contains("red")) {
        el.classList.remove("red");
    } else {
        el.classList.add("red");
    }
};
bt.addEventListener("click", fn);
// -- 길게 쓰는거보단 변수를 사용해서 한줄코드보단? 짧게짧게 표기해야지 가독성이 용이.
// 변수 사용없는 한줄코드로 화살표 함수 사용시,
document.querySelector(".button").addEventListener("click", (e) => {
    let el = e.target;
    if (el.classList.contains("red")) {
        el.classList.remove("red");
    } else {
        el.classList.add("red");
    }
});

document.querySelector(".button").addEventListener("click", (e) => {
    /* ... */
});
document.querySelector(".button").addEventListener("mouseenter", (e) => {
    /* ... */
});
document.addEventListener("keyup", (e) => {
    /* ... */
});

// ----------------------------------------------------------------------

// With jQuery
// Handle click events .search-result elements, 
// even when they're added to the DOM programmatically
$(".search-container").on("click", ".search-result", handleClick);

// Without jQuery
// Create and add an element to the DOM
var searchElement = document.createElement("div");
document.querySelector(".search-container").appendChild(searchElement);
// Add an event listener to the element
searchElement.addEventListener("click", handleClick);

// ----------------------------------------------------------------------

// With jQuery
// Trigger myEvent on document and .box
$(document).trigger("myEvent");
$(".box").trigger("myEvent");

// Without jQuery
// Create and dispatch myEvent
document.dispatchEvent(new Event("myEvent"));
document.querySelector(".box").dispatchEvent(new Event("myEvent"));

// ----------------------------------------------------------------------

// With jQuery
// Select .box and change text color to #000
$(".box").css("color", "#000");

// Without jQuery
// Select the first .box and change its text color to #000
document.querySelector(".box").style.color = "#000";

// ----------------------------------------------------------------------

// With jQuery
// Pass multiple styles
$(".box").css({
    "color": "#000",
    "background-color": "red"
});

// Without jQuery
// Set color to #000 and background to red
var box = document.querySelector(".box");
box.style.color = "#000";
box.style.backgroundColor = "red";

// Set all styles at once (and override any existing styles)
box.style.cssText = "color: #000; background-color: red";

// ----------------------------------------------------------------------

// With jQuery
// Hide and show and element
$(".box").hide();
$(".box").show();

// Without jQuery
// Hide and show an element by changing "display" to block and none
document.querySelector(".box").style.display = "none";
document.querySelector(".box").style.display = "block";

// ----------------------------------------------------------------------

// With jQuery
$(document).ready(function () {
    /* Do things after DOM has fully loaded */
});

// Without jQuery
// Define a convenience method and use it
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    /* Do things after DOM has fully loaded */
});

// ----------------------------------------------------------------------

// With jQuery
// Add, remove, and the toggle the "focus" class
$(".box").addClass("focus");
$(".box").removeClass("focus");
$(".box").toggleClass("focus");

// Without jQuery
// Add, remove, and the toggle the "focus" class
var box = document.querySelector(".box");
box.classList.add("focus");
box.classList.remove("focus");
box.classList.toggle("focus");
// Add "focus" and "highlighted" classes, and then remove them
var box = document.querySelector(".box");
box.classList.add("focus", "highlighted");
box.classList.remove("focus", "highlighted");

// ----------------------------------------------------------------------

// With jQuery
// Check if .box has a class of "focus", and do something
if ($(".box").hasClass("focus")) {
    // Do something...
}

// Without jQuery
// Check if .box has a class of "focus", and do something
if (document.querySelector(".box").classList.contains("focus")) {
    // Do something...
}

// ----------------------------------------------------------------------

// With jQuery
$.ajax({
    url: "data.json"
}).done(function (data) {
    // ...
}).fail(function () {
    // Handle error
});

// Without jQuery
fetch("data.json")
    .then(data => {
        // Handle data
    }).catch(error => {
        // Handle error
    });
// Create a div & span
$("<div/>");
$("<span/>");

// Create a div and a span
document.createElement("div");
document.createElement("span");
var element = document.createElement("div");
element.textContent = "Text"
// or create a textNode and append it
var text = document.createTextNode("Text");
element.appendChild(text);

// ----------------------------------------------------------------------

// With jQuery
// Update the text of a .button
$(".button").text("New text");
// Read the text of a .button
$(".button").text(); // Returns "New text"

// Without jQuery
// Update the text of a .button
document.querySelector(".button").textContent = "New text";
// Read the text of a .button
document.querySelector(".button").textContent; // Returns "New text"
// Create div element and append it to .container
$(".container").append($("<div/>"));

// Create a div and append it to .container
var element = document.createElement("div");
document.querySelector(".container").appendChild(element);
// Create a div
var element = document.createElement("div");

// Update its class
element.classList.add("box");

// Set its text
element.textContent = "Text inside box";

// Append the element to .container
document.querySelector(".container").appendChild(element);