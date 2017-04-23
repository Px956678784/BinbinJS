window.onload=init;
var sum=0;
function init(){
    var button1=document.getElementById("button-1");
    var button2=document.getElementById("button-2");
    var button3=document.getElementById("button-3");
    var button4=document.getElementById("button-4");
    button1.onclick=leftinput;
    button2.onclick=rightinput;
    button3.onclick=leftout;
    button4.onclick=rightout;
}

function leftinput() {

    var inputvalue = document.getElementById("input");
    var newdiv = document.createElement("div");
    var nodes = document.getElementById("array");
    newdiv.innerHTML = inputvalue.value;
    newdiv.style.backgroundColor = "coral";
    newdiv.style.height = "20px";
    newdiv.style.color = "white";
    newdiv.style.padding = "10px";
    newdiv.style.margin = "10px";
    newdiv.style.float = "left";
    nodes.insertBefore(newdiv, nodes.childNodes[0]);
    sum++;
}

function rightinput(){

    var inputvalue=document.getElementById("input");
    var newdiv=document.createElement("div");
    var nodes=document.getElementById("array");
    newdiv.innerHTML=inputvalue.value;
    newdiv.style.backgroundColor="coral";
    newdiv.style.height="20px";
    newdiv.style.color="white";
    newdiv.style.padding="10px";
    newdiv.style.margin="10px";
    newdiv.style.float="left";
    nodes.appendChild(newdiv);
    sum++;
}

function leftout(){
    var nodes=document.getElementById("array");
    var answer=nodes.childNodes[0].innerHTML;
    nodes.removeChild(nodes.childNodes[0]);
    alert(answer);
    sum--;
}

function rightout() {
    var nodes = document.getElementById("array");
    var answer = nodes.childNodes[sum - 1].innerHTML;
    nodes.removeChild(nodes.childNodes[sum - 1]);
    alert(answer);
    sum--;
}
