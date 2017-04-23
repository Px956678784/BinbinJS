window.onload=init;
var sum=0;
var max=0;
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
    button5.onclick=sort;
}

function leftinput() {
    var inputvalue = document.getElementById("input");
    var newdiv = document.createElement("div");
    var nodes = document.getElementById("array");
    newdiv.innerHTML = inputvalue.value;
    newdiv.style.height = 20 * inputvalue.value +'px';
    if (parseInt(inputvalue.value)>max) {
        max = parseInt(inputvalue.value);
        nodes.style.height = max * 20 + 50+ 'px';

    }
    newdiv.className="nodediv";
    nodes.insertBefore(newdiv, nodes.childNodes[0]);
    sum++;
}

function rightinput(){

    var inputvalue = document.getElementById("input");
    var newdiv = document.createElement("div");
    var nodes = document.getElementById("array");
    newdiv.innerHTML = inputvalue.value;
    newdiv.style.height = 20 * inputvalue.value +'px';
    if (parseInt(inputvalue.value)>max) {
        max = parseInt(inputvalue.value);
        nodes.style.height = max * 20 + 50+ 'px';

    }
    newdiv.className="nodediv";
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

function insertsort(array) {
    var min,temp;
    for(var i=0;i<sum-1;i++) {
        min=i;
        for (var j = i + 1; j < sum; j++) {
            if (parseInt(array[min].innerHTML) > parseInt(array[j].innerHTML))
                min = j;

        }
        temp=array[min];
        array[min]=array[i];
        array[i]=temp;
    }
    return array;
}

function sort() {
    var nodes = document.getElementById("array");
    var array=new Array();
    for(var i=0;i<sum;i++){
        array[i]=nodes.childNodes[i].cloneNode(true);
    }
    array=insertsort(array);
    for(i=0;i<sum;i++)
        nodes.replaceChild(array[i],nodes.childNodes[i]);
}
