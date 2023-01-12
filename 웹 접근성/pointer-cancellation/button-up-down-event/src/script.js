const changeTestText = (text) => {
  $("#test").html(text);
};

$("#test").on({
  mousedown: function () {
    changeTestText("Down Event ISSUE!!");
  },
  touchstart: function () {
    changeTestText("Down Event ISSUE!!");
  },
  pointerdown: function () {
    changeTestText("Down Event ISSUE!!");
  },
  mouseup: function () {
    changeTestText("Up Event Non Issue~");
  },
  touchend: function () {
    changeTestText("Up Event Non Issue~");
  },
  pointerup: function () {
    changeTestText("Up Event Non Issue~");
  }
});
$("#test1").on({
  click: function () {
    $("test1").attr("aria-hidden", "false");
  }
});
