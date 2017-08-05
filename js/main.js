//Copy the color

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  var getId = $(element).attr('id');
  $('.text').html('copied');
  setTimeout("location.reload(true);",1000);
}


//Search Engine Modification

$('input').on('click',function() {
  $(this).css('border-color','#fff');
  $('.btn').css('border','none');
});
