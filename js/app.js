

 //blog content
// const title = "My First Blog Post";
// const content = "this is my <strong>first</strong> post!";

//Getting Values from Form Fields
$("#flashMessage").hide();

$('#previewButton').click(function(){
  const title = $("#blogTitleInput").val();
  const content = $("#blogContentInput").val();

$("#blogTitlePreview").text(title);
$("#blogContentPreview").html(content);

//animate banner 
$("#flashMessage")
.slideDown(1000)
.delay(3000)
.slideUp();
});

