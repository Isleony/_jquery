$(document).ready(function() {
    $("#task-form").submit(function(event) {
      event.preventDefault();
      const taskName = $("#task-name").val();
      if (taskName.trim() !== "") {
        const taskItem = $("<li>").text(taskName);
        $("#task-list").append(taskItem);
        $("#task-name").val(""); // Limpa o campo de entrada
      }
    });
  
    $("#task-list").on("click", "li", function() {
      $(this).toggleClass("completed");
    });
  });


  