window.onload=init;
var array=[];
var last;
function init(){
    var button1=document.getElementById("button1");
    var button3=document.getElementById("button3");
    button1.onclick=startpreorder;
    button3.onclick=startlastorder;
}

function startpreorder(){
    flag=true;
    var startdiv=document.getElementById("container");
    preorder(startdiv);
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
        for(var i=0;i<node.childElementCount;i++)
            preorder(node.children[i]);
    }
}


function lastorder(node){
    if(node){
        for(var i=0;i<node.childElementCount;i++)
            lastorder(node.children[i]);
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
