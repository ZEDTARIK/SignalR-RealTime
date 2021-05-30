
// Connection 
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (fromUser, message) {
    var msg = fromUser + ":  " + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});

connection.start();

$("#btnSnend", "click", function () {
    var fromUser = $("#txtUser").val();
    var messsage = $("#txtMessage").val();

    connection.invoke("SendMessage", fromUser, messsage);
});
