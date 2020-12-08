var images1 = new Array();
var i = 0;
images1[0] = 'img/dr11.jpg';
images1[1] = 'img/dr12.jpg';
images1[2] = 'img/dr13.jpg';
function viewImages1() {
    document.getElementById("img_main1").src = images1[i]; 
    i++;
    if (i == images1.length) {
        i = 0;
    }
    setTimeout("viewImages1()",2000);
}
var images2 = new Array();
var o = 0;
images2[0] = 'img/dr21.jpg';
images2[1] = 'img/dr22.jpg';
images2[2] = 'img/dr23.jpg';
function viewImages2() {
    document.getElementById("img_main2").src = images2[i]; 
    o++;
    if (o == images2.length) {
        o = 0;
    }
    setTimeout("viewImages2()",2000);
}  
var images3 = new Array();
var p = 0;
images3[0] = 'img/dr31.jpg';
images3[1] = 'img/dr32.jpg';
images3[2] = 'img/dr33.jpg';
function viewImages3() {
    document.getElementById("img_main3").src = images3[i]; 
    p++;
    if (p == images3.length) {
        p = 0;
    }
    setTimeout("viewImages3()",2000);
}
var images4 = new Array();
var a = 0;
images4[0] = 'img/f1.jpg';
images4[1] = 'img/f2.jpeg';
images4[2] = 'img/f3.jpg';
function viewImages4() {
    document.getElementById("img_main4").src = images4[i]; 
    a++;
    if (a == images4.length) {
        a = 0;
    }
    setTimeout("viewImages4()",2000);
}
var images5 = new Array();
var s = 0;
images5[0] = 'img/fest11.jpg';
images5[1] = 'img/fest12.jpg';
images5[2] = 'img/fest13.jpg';
function viewImages5() {
    document.getElementById("img_main5").src = images5[i]; 
    s++;
    if (s == images5.length) {
        s = 0;
    }
    setTimeout("viewImages5()",2000);
} 
var images6 = new Array();
var d = 0;
images6[0] = 'img/fest21.jpg';
images6[1] = 'img/fest22.jpg';
images6[2] = 'img/fest23.jpg';
function viewImages6() {
    document.getElementById("img_main6").src = images6[i]; 
    d++;
    if (d == images6.length) {
        d = 0;
    }
    setTimeout("viewImages6()",2000);
} 
