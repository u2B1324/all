// 참고 레퍼런스 사이트
// https://whales.tistory.com/62

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
    box.style.display = "none";
});

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
// 바닐라 스크립트에서 화살표 함수 사용.(1회용?)
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
    if (el.classList.contains("red")) { //<- contains의 결과값은 true나 false..
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

// 동적으로 추가된 요소에 대한 이벤트 적용?
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
// 바닐라에선 new를 사용해서 이벤트 생성.
document.dispatchEvent(new Event("myEvent"));
document.querySelector(".box").dispatchEvent(new Event("myEvent"));

// ----------------------------------------------------------------------

// With jQuery
// Select .box and change text color to #000
// jQuery로 클래스명을 찾고, css안에 속성의 값을 수정
$(".box").css("color", "#000");

// Without jQuery
// Select the first .box and change its text color to #000
// 생긴건 변수선언과 비슷한 구조.
// querySelector로 클래스명을 찾고, '.'으로 스타일시트의 속성값을 '='너머의 값으로 바꿈.
document.querySelector(".box").style.color = "#000";

// ----------------------------------------------------------------------

// With jQuery
// Pass multiple styles
// jQuery로 스타일 시트 값 여러개를 바꿀때.
$(".box").css({
    "color": "#000",
    "background-color": "red"
});

// Without jQuery
// Set color to #000 and background to red
// 변수 선언 후 각각 따로 값을 바꿈
var box = document.querySelector(".box");
box.style.color = "#000";
box.style.backgroundColor = "red";

// Set all styles at once (and override any existing styles)
// cssText를 이용해 여러 속성을 한꺼번에 바꿈. "" 안에는 css문법
box.style.cssText = "color: #000; background-color: red";

// ----------------------------------------------------------------------

// With jQuery
// Hide and show and element
// jQuery 에서 특정 클래스를 display: none;와 display: block;하는 방법
$(".box").hide();
$(".box").show();

// Without jQuery
// Hide and show an element by changing "display" to block and none
// (중략...).style.속성 = "바꿀 값";
document.querySelector(".box").style.display = "none";
document.querySelector(".box").style.display = "block";

// ----------------------------------------------------------------------

// With jQuery
// jQuery에서의 ready
$(document).ready(function () {
    /* Do things after DOM has fully loaded */
    // 내용물 작성
});

// Without jQuery
// Define a convenience method and use it
// 바닐리 스크립트에선 callback? 함수 사용
var ready = (callback) => {
    if (document.readyState != "loading") {
        callback();
    }
    else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}
// 사이트에 적힌 구조. if(boolean값) 뒤에 {}이 왜 생략된지 모름. 화살표 함수 관련 문법.
// var ready = (callback) => {
//     if (document.readyState != "loading") callback(); // if가 true면, callback()을 리턴함.
// else document.addEventListener("DOMContentLoaded", callback); // if가 false면, 이벤트 생성해서 다시 콜백시킴?
// }

// ready(callback?)가 준비됬으면, 내용물 실행.
ready(() => {
    /* Do things after DOM has fully loaded */
    // 내용물 작성
});

// ----------------------------------------------------------------------

// With jQuery
// Add, remove, and the toggle the "focus" class
// 클래스 추가.
$(".box").addClass("focus");
$(".box").removeClass("focus");
$(".box").toggleClass("focus");

// Without jQuery
// Add, remove, and the toggle the "focus" class
// 바닐라 스크립트 querySelector와 classList라는 속성을 사용.
// document.querySelector();를 클래스명과 비슷한 이름으로 변수 선언을 해두면 구조자체가 비슷하다.
var box = document.querySelector(".box");
box.classList.add("focus");
box.classList.remove("focus");
box.classList.toggle("focus");

// Add "focus" and "highlighted" classes, and then remove them
// 한번에 여러 클래스를 추가하거나, 없애는 바닐라스크립트 문법.
var box = document.querySelector(".box");
box.classList.add("focus", "highlighted");
box.classList.remove("focus", "highlighted");

// ----------------------------------------------------------------------

// With jQuery
// Check if .box has a class of "focus", and do something
// hasClass로 boolean값 도출. 클래스가 있냐고 물어보는것
// 있으면 true, 없으면 false
if ($(".box").hasClass("focus")) {
    // Do something...
}

// Without jQuery
// Check if .box has a class of "focus", and do something
// ┌ jQuery의 hasClass  ┐
// └ vanilla의 contains ┘
if (document.querySelector(".box").classList.contains("focus")) {
    // Do something...
}

// ----------------------------------------------------------------------

// ajax? 나중에 알아보기
// catch가 있는걸 봐선, 예외와 관련되있다고 생각함.

// // With jQuery
// $.ajax({
//     url: "data.json"
// }).done(function (data) {
//     // ...
// }).fail(function () {
//     // Handle error
// });

// // Without jQuery
// fetch("data.json")
//     .then(data => {
//         // Handle data
//     }).catch(error => {
//         // Handle error
//     });
// // Create a div & span
// $("<div/>");
// $("<span/>");

// // Create a div and a span
// document.createElement("div");
// document.createElement("span");
// var element = document.createElement("div");
// element.textContent = "Text"
// // or create a textNode and append it
// var text = document.createTextNode("Text");
// element.appendChild(text);

// ----------------------------------------------------------------------

// With jQuery
// Update the text of a .button

// jQuery로 클래스 안에 텍스트 삽입.
$(".button").text("New text"/*내용물*/);
// 결과값
// <div class="button">
//    New text(내용물)
// </div>

// Read the text of a .button
// text(); 괄호 안에 값이없으면, 클래스 내용물?을 return.
// html(); , html("내용물");과 비슷함.
$(".button").text(); // Returns "New text"

// Without jQuery
// Update the text of a .button
// 바닐라 스크립트에선 textContent라는 속성을 사용
document.querySelector(".button").textContent = "New text";
// Read the text of a .button
// 똑같이 클래스 안의 내용물을 return.
document.querySelector(".button").textContent; // Returns "New text"

// ----------------------------------------------------------------------

// Create div element and append it to .container
// jQuery에서의 클래스 안에 html태그를 넣는 방법?
// container안에 <div>를 append? 배우지 않음. 찾아볼 것.
$(".container").append($("<div/>"));

// Create a div and append it to .container
// 바닐라 스크립트에선 createElement라는 속성을 사용. 문법에 유의.(<>없음)
// 그 이후 querySelector와 appendChild를 이용.
var element = document.createElement("div");
document.querySelector(".container").appendChild(element);

// ----------------------------------------------------------------------

// Create a div
// div를 지정하는 변수.
var element = document.createElement("div");

// Update its class
// 지정한 div에 box라는 클래스를 넣음?
element.classList.add("box");

// Set its text
// div의 내용물에 text를 넣음.
element.textContent = "Text inside box";

// Append the element to .container
// div를 통째로 container라는 클래스에 넣음?
document.querySelector(".container").appendChild(element);