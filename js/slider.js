var images = new Array();
var i = 0;
images[0] = 'img/sl1.jpg';
images[1] = 'img/sl2.jpg';
images[2] = 'img/sl3.jpg';
images[3] = 'img/sl4.jpg';
images[4] = 'img/sl5.jpg';
images[5] = 'img/sl6.jpg';
function viewImages() {
    document.getElementById("img_main").src = images[i]; 
    i++;
    if (i == images.length) {
        i = 0;
    }
    setTimeout("viewImages()",3000);
}
var images1 = new Array();
var d = 0;
images1[0] = 'img/sl1.jpg';
images1[1] = 'img/sl2.jpg';
images1[2] = 'img/sl3.jpg';
images1[3] = 'img/sl4.jpg';
images1[4] = 'img/sl5.jpg';
images1[5] = 'img/sl6.jpg';
function viewImages1() {
    document.getElementById("img_main1").src = images1[d]; 
    d++;
    if (d == images1.length) {
        d = 0;
    }
    setTimeout("viewImages1()",3000);
}     