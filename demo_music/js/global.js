/**
 * Created by Administrator on 2017/1/5.
 */
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof oldonload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent=targetElement.parentNode;
    if(targetElement==parent.lastChild){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element, value) {
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}

function highlightPage() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("navigation")) return false;
    var nav = document.getElementById("navigation");
    var links = nav.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        var linkrul=links[i].getAttribute("href");
        var currenturl=window.location.href;
        if(currenturl.indexOf(linkrul)!= -1){
            links[i].className="here";
            var linktext=links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}
addLoadEvent(highlightPage);

function moveElement(elementId, final_x, final_y, interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(elementId)) return false;

    var elem = document.getElementById(elementId);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if (!elem.style.left){
        elem.style.left="0px";
    }
    if(!elem.style.top){
        elem.style.top="0px";
    }
    var xpos= parseInt(elem.style.left);
    var ypos= parseInt(elem.style.top);

    if (xpos==final_x && ypos==final_y){
        return true;
    }
    if(xpos<final_x){
        var dist=Math.ceil((final_x-xpos)/5);
        xpos+=dist;
    }
    if (xpos>final_x){
        var dist=Math.ceil((xpos-final_x)/5);
        xpos-=dist;
    }
    if(ypos<final_y){
        var dist=Math.ceil((final_y-ypos)/10);
        ypos+=dist;
    }
    if(ypos>final_y){
        var dist=Math.ceil((ypos-final_y)/10);
        ypos-=dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat ="moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

