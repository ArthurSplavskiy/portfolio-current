// file.js include place

// webpcss
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// ibg
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// hamburger

function changeText() {
  var checkBox = document.getElementById("inputText");
  var text = document.getElementById("menuTitle");
  const header = document.getElementById('header');

  if (checkBox.checked === true) {
    header.style.background = '#C4C4C4'
  } else {
    header.style.background = '#fff'
  }

  if (checkBox.checked == true){
    text.textContent = "CLOSE";
  } else {
    text.textContent = "MENU";
  }
}

// Smooth scrolling

const anchors = document.querySelectorAll('a[href*="#"');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
