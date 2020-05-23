'use strict'

{
function test(){
  let get_text = document.location.search;
  get_text = get_text.substring(1,get_text.length);
  let textfield2 = document.getElementById('test');
  console.log(textfield2);
  
    document.receive.textfield2.value = decodeURI(get_text);
 alert(get_text);
}
document.getElementById('button').addEventListener('click',test);
}