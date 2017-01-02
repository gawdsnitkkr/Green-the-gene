(function(w,d) {
var DOM = {};
var temp = {};
var fn = {};  
DOM.gtgInit = d.getElementById("gtgInit");
DOM.contGrid = DOM.gtgInit.getElementsByClassName("contGrid")[0];
DOM.contImg =  DOM.gtgInit.getElementsByClassName("contImg")[0] ;
DOM.infoOuter =DOM.gtgInit.getElementsByClassName("infoOuter")[0] ;
DOM.contLoader =DOM.gtgInit.getElementsByClassName("contLoader")[0] ; 
DOM.contTitle = DOM.gtgInit.getElementsByClassName("contTitle")[0] ;
DOM.contHead= DOM.gtgInit.getElementsByClassName("contHead")[0] ;
DOM.contData =  DOM.contLoader.getElementsByTagName("p");
fn.allCamp = function() {
  DOM.infoOuter.innerHTML = "";
  DOM.contTitle.innerHTML = "";
  DOM.contImg.src = "images/logo.png";
  temp.HTML = "<ul class='contUl' >";
  for(temp.i=0;temp.i<DOM.contData.length;temp.i++)
  temp.HTML+="<li class='contLi' data-index='"+temp.i+"' >"+DOM.contData[temp.i].getAttribute("data-h")+"</li>";
  temp.HTML+="</ul>";
 DOM.infoOuter.innerHTML = temp.HTML;
 DOM.contHead.innerHTML = "Featured Campaigns";
};
fn.nthCamp = function(i) {
DOM.contTitle.innerHTML =  DOM.contData[i].getAttribute("data-h") ;
temp.HTML= DOM.contData[i].innerHTML; 
DOM.infoOuter.innerHTML = temp.HTML;  
DOM.contImg.src = DOM.contData[i].getAttribute("data-img");
DOM.contHead.innerHTML = "Featured Campaigns"+"<div class='seeAllBtn' > See All </div>";
};
 DOM.contHead.addEventListener('click', function(e) {
  if (e.target.className.split(' ').indexOf("seeAllBtn") > -1)  
fn.allCamp();  
 });
 DOM.infoOuter.addEventListener('click', function(e) {
 if (e.target.className.split(' ').indexOf("contLi") > -1) 
fn.nthCamp( e.target.getAttribute("data-index"));  
 });
fn.allCamp();
})(window,document);
