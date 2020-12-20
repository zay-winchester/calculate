function insert(num) {
     document.form.textview.value=document.form.textview.value+num;
}
function equal() {
     let exp= document.form.textview.value;
     if(exp){
          document.form.textview.value=eval(exp);
     }
}
function clean() {
     document.form.textview.value="";
}
let cli=document.querySelector('#click');
let cl=cli.addEventListener('click',()=>{
     document.querySelector('p').innerHTML="Thanks for using my app"
})


// function cl(params) {
//      
//      cli.innerHTML="Thanks for Using my app"
// }
