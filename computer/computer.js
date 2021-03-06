$(document).ready(function() {
    $("#pc-animation").hide()
    colorTrans()
    keyAnimation()
    animatePc()
    setTimeout(function() {
      $("#pc-animation").fadeIn("slow")
    }, 700)



  })
  // PAGE COLOR TRANSITION
function colorTrans() {
  $("body").css("background-color", "#333333")
  $("#blurb").css("color", "#FEFEFA")
}

// KEYBOARD ANIMATION
function randKey() {
  var keyNum = Math.floor(Math.random() * (46 - 1)) + 1
  var keyId = "#key-" + keyNum
  return keyId
}

function keyPress(keyId) {
  $(keyId).toggleClass("active-key")
  setTimeout(function() {
    $(keyId).toggleClass("active-key")
  }, 100)
}


function humanDelay() {
  var delay = Math.floor(Math.random() * (600 - 250)) + 250
  return delay
}

function keyAnimation() {
  setTimeout(function() {
    keyPress(randKey())
    keyAnimation()
  }, humanDelay())

}

// PC SCREEN ANIMATION

function randDataId() {
  var dataId = Math.floor(Math.random() * (28 - 1) + 1)
  return "#data-" + dataId
}

function animatePc() {
  setInterval(function() {
    $(randDataId()).toggleClass("active-data-1")
  }, 400)
}

//animate screen with colors
function animatePcColor() {
  var classArr = ["active-data-1", "active-data-2", "active-data-3", "active-data-4", "active-data-5"]
  setInterval(function() {
    var activeClass = classArr[Math.floor(Math.random() * classArr.length)];
    $(randDataId()).toggleClass(activeClass)
  }, 400)
}