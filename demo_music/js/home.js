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