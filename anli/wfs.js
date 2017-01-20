/**
 * Created by admin on 2016/9/18.
 */
window.onload=function () {
    waterfull();
    var dataImg={"data":[{src:"1 1.jpg"},{src:"2 2.jpg"},{src:"3 3.jpg"},{src:"4 4.jpg"},{src:"slideshow.jpg"},{src:"6.jpg"},
        {src:"7.jpg"},{src:"8.jpg"},{src:"9.jpg"},{src:"10.jpg"},{src:"11.jpg"},{src:"12.jpg"},{src:"13.jpg"},
        {src:"15.jpg"},{src:"14.jpg"}]}
    window.onscroll=function () {
        if (checkScrollSlide()){
            var oParent=document.getElementById("main");
            for( var i=0;i<dataImg.data.length;i++){
                var oPin=document.createElement("div");
                oPin.className="pin";
                oParent.appendChild(oPin);
                var oBox=document.createElement("div");
                oBox.className="box";
                oPin.appendChild(oBox);
                var oImg=document.createElement("img");
                oImg.src="image/"+dataImg.data[i].src;
                oBox.appendChild(oImg);
            }
            waterfull();
        }
    }
}


function waterfull() {
    var apin=get();
    var iPinW=apin[0].offsetWidth;
    var num=Math.floor(document.documentElement.clientWidth/iPinW);
    var oparent=document.getElementById("main");
    oparent.style.cssText="width:"+iPinW*num+"px;margin:0 auto;";
    var pinHArr=[];
    for(var i=0;i<apin.length;i++){
        var pinH=apin[i].offsetHeight;
        if(i<num){
            pinHArr[i]=pinH;
        } else{
            var minH=Math.min.apply(null,pinHArr);
            var minHIndex=getMinHIndex(pinHArr,minH);
            apin[i].style.position="absolute";
            apin[i].style.top=minH+"px";
            apin[i].style.left=apin[minHIndex].offsetLeft+"px";
            pinHArr[minHIndex]+=apin[i].offsetHeight;
        }
    }
}
function get() {
    var obj=document.getElementById("main").getElementsByClassName("pin");
    var pinS=[];
    for(var i=0;i<obj.length;i++){
        pinS.push(obj[i]);
    }
    return pinS
}

function getMinHIndex(arr, minH) {
    for(var i=0;i<arr.length;i++){
        if (arr[i]==minH){
            return i;
        }
    }
}

function checkScrollSlide() {
    var aPin=document.getElementsByClassName("pin");
    console.log(aPin);
    var lastPinH=aPin[aPin.length-1].offsetTop-(Math.floor(aPin[aPin.length-1].offsetHeight)/2);
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var documentH=document.documentElement.clientHeight;
    return(lastPinH<scrollTop+documentH)?true:false;
}