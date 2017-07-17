//business logic
function Task(name, description, deadline)  {
  this.name = name;
  this.description = description;
  this.deadline = deadline;
}
  Task.prototype.showTask = function() {
    return "Task: " + this.name + " needs to be completed by " + this.deadline + ". Reminder: " + this.description;
}

//user interface logic
  $(document).ready(function(){
    $("form#new-task").submit(function(event)  {
      event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedDescription = $("input#new-description").val();
    var inputtedDeadline = $("input#new-deadline").val();
    console.log(inputtedName + " " + inputtedDescription + " " + inputtedDeadline);
    var newTask = new Task (inputtedName, inputtedDescription, inputtedDeadline);
    $("ul#tasks").append("<li><span class='taskName'>" + newTask.name + "</span></li>");


    $(".taskName").last().click(function()  {
    $("#show-tasks").show();
    $("#show-tasks h4").text(newTask.showTask());
    var clicked = $(this);


    $("#removeButton").click(function(){
      // alert("The button is clicked");
      // $(clicked).child().remove();
        //alert(clicked);
        clicked.remove();



    });



  });




    $("input#new-name").val("");
    $("input#new-description").val("");
    $("input#new-deadline").val("");


    });

      //$("ul#tasks").child().hide();
      // $(".h1").click(function(event) {
      //   alert("Button is clicked");
      // });


  });
