fn = {};
(function(d) {
pvt = {};
DOM = {};
DOM.gi = d.getElementById("gtgInit");
DOM.gl = d.getElementById("gtgLoader");
DOM.db = DOM.gl.getElementsByTagName("p");
DOM.btn1 = DOM.gi.getElementsByClassName("gtgButton1")[0] ;
DOM.btn2 = DOM.gi.getElementsByClassName("gtgButton2")[0] ;
DOM.state = DOM.gi.getElementsByClassName("gtgState")[0] ;
DOM.img = DOM.gi.getElementsByClassName("gtgImg")[0] ;
DOM.head =  DOM.gi.getElementsByClassName("gtgDataHead")[0] ;
DOM.body =  DOM.gi.getElementsByClassName("gtgDataBody")[0] ;  
pvt.state = 0;
fn.load = function(x) {
 if(pvt.state+x>=0 && pvt.state+x<DOM.db.length)
  pvt.state+=x;
 DOM.img.innerHTML = "<img src='"+DOM.db[pvt.state].getAttribute("data-img")+"' />";
 DOM.head.innerHTML =  DOM.db[pvt.state].getAttribute("data-h");
 DOM.body.innerHTML = DOM.db[pvt.state].innerHTML;
 DOM.state.innerHTML = "("+(pvt.state+1)+"/"+DOM.db.length+")";
} ;
fn.load(0);
DOM.btn1.addEventListener('click',function(e) {
fn.load(-1);  
});
DOM.btn2.addEventListener('click',function(e) {
fn.load(1);  
});
})(document);
