/**
 * Created by Administrator on 2017/1/5.
 */
function prepareSlideShow() {
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById) return false;

    if (!document.getElementById("intro")) return false;

    var intro=document.getElementById("intro");
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");

    var frame=document.createElement("img");
    frame.setAttribute("src","img/aa.jpg");
    frame.setAttribute("alt","");
    frame.setAttribute("id" ,"frame");
    slideshow.appendChild(frame);

    var preview=document.createElement("img");
    preview.setAttribute("src","img/slideshow.jpg");
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);

    var links= document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onmouseover=function () {
            var destination=this.getAttribute("href");
            if(destination.indexOf("index.html")!= -1){
                moveElement("preview",0,0,5);
            }
            if(destination.indexOf("about.html")!= -1){
                moveElement("preview",-150,0,5);
            }
            if(destination.indexOf("photos.html")!= -1){
                moveElement("preview",-300,0,5);
            }
            if(destination.indexOf("live.html")!= -1){
                moveElement("preview",-450,0,5);
            }
            if(destination.indexOf("contact.html")!= -1){
                moveElement("preview",-600,0,5);
            }
        }
    }
}
addLoadEvent(prepareSlideShow);

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