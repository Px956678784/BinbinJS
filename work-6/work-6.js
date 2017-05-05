window.onload=init;
var sum=0;
function init(){
    var button1=document.getElementById("button-1");
    var button2=document.getElementById("button-2");
    var button3=document.getElementById("button-3");
    var button4=document.getElementById("button-4");
    var button5=document.getElementById("button-5");
    button1.onclick=leftinput;
    button2.onclick=rightinput;
    button3.onclick=leftout;
    button4.onclick=rightout;
    button5.onclick=searchelement;
}
function leftinput() {
    var input = document.getElementById("input");
    var textlink=input.value.split(/[, ，、\r\n]/);
    for(var i=0;i<textlink.length;i++) {
        if(textlink[i]!=""){
        var newdiv = document.createElement("div");
        var nodes = document.getElementById("array");
        newdiv.innerHTML = textlink[i];
        newdiv.className="nodediv";
        nodes.insertBefore(newdiv, nodes.childNodes[0]);
        sum++;
        }
    }
}

function rightinput(){
    var input = document.getElementById("input");
    var textlink=input.value.split(/[, ，、\r\n]/);
    for(var i=0;i<textlink.length;i++) {
        if(textlink[i]!=""){
            var newdiv = document.createElement("div");
            var nodes = document.getElementById("array");
            newdiv.innerHTML = textlink[i];
            newdiv.className="nodediv";
            nodes.appendChild(newdiv);
            sum++;
        }
    }
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

function searchelement() {
    var nodes = document.getElementById("array");
    var search=document.getElementById("search");
    for(var i=0;i<nodes.childNodes.length;i++) {
        var pos = nodes.childNodes[i].innerHTML.search(search.value);
        if (pos >= 0)
            nodes.childNodes[i].style.color = "black";
    }
}

