var textName = $('#textName');
var textTitle = $('#textTitle');
var textEmail = $('#textEmail');
var textPhone = $('#textPhone');
var textName2 = $('#textName2');
var textTitle2 = $('#textTitle2');
var textPhone2 = $('#textPhone2');
var textEmail2 = $('#textEmail2');

$('#nameInput').on('input',function(e){
  var nameInput = $('#nameInput').val();
  textName.text(nameInput);
});

$('#nameInput2').on('input',function(e){
  var nameInput2 = $('#nameInput2').val();
  textName2.text(nameInput2);
});

$('#titleInput').on('input',function(e){
  var titleInput = $('#titleInput').val();
  textTitle.text(titleInput);
});

$('#titleInput2').on('input',function(e){
  var titleInput2 = $('#titleInput2').val();
  textTitle2.text(titleInput2);
});

$('#emailInput').on('input', function(e){
  var emailInput = $('#emailInput').val();
  textEmail.text(emailInput); // Update the displayed email
  textEmail.attr("href", "mailto:" + emailInput); // Format the href as a mailto link
});

$('#emailInput2').on('input',function(e){
  var emailInput2 = $('#emailInput2').val();
  textEmail2.attr("href", emailInput2);
});

$('#emailInput').on('input',function(e){
  var emailInput = $('#emailInput').val();
  textEmail.attr("href", emailInput);
});

$('#phoneInput').on('input',function(e){
  var phoneInput = $('#phoneInput').val();
  textPhone.text(phoneInput);
});

$('#phoneInput2').on('input',function(e){
  var phoneInput2 = $('#phoneInput2').val();
  textPhone2.text(phoneInput2);
});
