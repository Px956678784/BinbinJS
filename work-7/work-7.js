window.onload=init;
var array=[];
var last;
function init(){
    var button1=document.getElementById("button1");
    var button2=document.getElementById("button2");
    var button3=document.getElementById("button3");
    button1.onclick=startpreorder;
    button2.onclick=startmidorder;
    button3.onclick=startlastorder;
}

function startpreorder(){
    flag=true;
    var startdiv=document.getElementById("container");
    preorder(startdiv);
    progress();
}

function startmidorder(){
    flag=true;
    var startdiv=document.getElementById("container");
    midorder(startdiv);
    progress();
}

function startlastorder(){
    flag=true;
    var startdiv=document.getElementById("container");
    lastorder(startdiv);
    progress();
}

function preorder(node){
    if(node){
    array.push(node);
    preorder(node.firstElementChild);
    preorder(node.lastElementChild);
    }
}

function midorder(node){
    if(node){
        midorder(node.firstElementChild);
        array.push(node);
        midorder(node.lastElementChild);
    }
}

function lastorder(node){
    if(node){
        lastorder(node.firstElementChild);
        lastorder(node.lastElementChild);
        array.push(node);
    }
}

function progress() {
    for (var i = 0; i < array.length; i++) {
        setTimeout(function (i) {
            return function () {
                if (last) {
                    last.style.backgroundColor = "white";
                }
                array[i].style.backgroundColor = "red";
                last = array[i];
            }
        }(i), i * 1000)
    }
}
