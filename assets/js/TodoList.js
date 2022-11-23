//Check of Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Cick on X to delete Todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropogation;
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new todo
    let todoText = $(this).val();
    $(this).val("");
    //crete a new li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type = 'text']").fadeToggle();
});
