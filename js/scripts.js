//business logic
function Task(name, description, deadline)  {
  this.name = name;
  this.description = description;
  this.deadline = deadline;
}
  Task.prototype.showTask() {
    return "Task: " + this.name + " needs to be completed by " + this.deadline + ".<br>Reminder " + this.description;
  };

//user interface logic
  (function() {
    $("#new-task").submit(function(event)  {
      event.preventDefault();

    var inputtedName = ("new-name").val();
    var inputtedDescription = ("#new-description").val();
    var newDeadline = ("#new-deadline").val();

    });
  });
