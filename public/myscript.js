$(document).ready(function(){
    $("button").click(function(){
      $.post("demo_test_post.asp",
      {
        username: "Duck",
        email: "Duckburg@gmail.com"
      },
      function(data,status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    });
  });