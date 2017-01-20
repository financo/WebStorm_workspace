/**
 * Created by Administrator on 2016/12/30.
 */
function prepareSlideShow() {
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById) return false;

    if (!document.getElementById("linklist")) return false;

    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");

    var preview=document.createElement("img");
    preview.setAttribute("src","1 1.jpg");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");

    slideshow.appendChild(preview);

    var list=document.getElementById("linklist");
    insertAfter(slideshow,list);

    var preview =document.getElementById("preview");
    preview.style.position="absolute";

    var list = document.getElementById("linklist");
    var links= list.getElementsByTagName("a");

    links[0].onmousemove=function () {
        moveElement("preview",-100,0,10);
    }
    links[1].onmousemove=function () {
        moveElement("preview",-200,0,10);
    }
    links[2].onmousemove=function () {
        moveElement("preview",-300,0,10);
    }
}

