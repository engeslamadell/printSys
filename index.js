$(function () {
  $(".draggable").draggable({
    helper: "clone",
    cursor: "move",
  });
  $("#container").on("dblclick", ".containeredit", function () {
    console.log("asdsa");
    $(".containeredit").attr("contenteditable", "true");
  });

  $(".containeredit").dblclick(function () {
    console.log("asds");
  });

  $("#container").droppable({
    drop: function (event, ui) {
      var $canvas = $(this);
      if (!ui.draggable.hasClass("canvas-element")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.addClass("canvas-element");
        $canvasElement.draggable({
          containment: "#container",
        });
        $canvas.append($canvasElement);
        $canvasElement.css({
          left: $("#container").position.left,
          top: $("#container").position.top,
          position: "absolute",
        });
      }
    },
  });
});
