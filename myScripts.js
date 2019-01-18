$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
});//modified code from https://codepen.io/cooljockey/pen/uyeHz

function makeNewPosition(){

    var h = window.innerHeight - 50;
    var w = window.innerWidth - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 800,   function(){
      animateDiv(myclass);
    });

};

 function toLogin(){
   window.open("Pages/login.html");
 }
