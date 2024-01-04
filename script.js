var nameError = document.getElementById('name-error');
var EmailError = document.getElementById('email-error');
var Subjectrror = document.getElementById('message-error');
var nMessageError = document.getElementById('subject-error');


function validateName(){
  var name=document.getElementById('contact-name').value;


  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.matcg(/^[A-Za-Z]*\S{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;

  }
  nameError.innerHTML = 'valid';
  return true;
}