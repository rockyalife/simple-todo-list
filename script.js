var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var delBtn = document.createElement("button");
  li.classList.add("list-group-item");

  li.appendChild(document.createTextNode(input.value));
  delBtn.appendChild(document.createTextNode("X"));
  delBtn.classList.add("delBtn");

  li.append(delBtn);
  ul.appendChild(li);

  input.value = "";

  li.addEventListener("click", toggleItem);
  delBtn.addEventListener("click", removeParent);
}

function removeParent(evt) {
  evt.target.parentNode.remove();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
  input.focus();
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// ul.onclick = function (event) {
// var target = event.target;
// 	target.classList.toggle("disabled");
// 	target.setAttribute("aria-disabled", "disabled");
// };

function toggleItem(evt) {
  this.classList.toggle("disabled");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
