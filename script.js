let net;
let img = new Image();

async function loadModel(){
net = await bodyPix.load();
}

loadModel();

document.getElementById("upload").addEventListener("change", function(e){

const reader = new FileReader();

reader.onload = function(event){
img.src = event.target.result;
}

reader.readAsDataURL(e.target.files[0]);

});

async function removeBackground(){

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img,0,0);

const segmentation = await net.segmentPerson(img);

const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);

for(let i=0;i<segmentation.data.length;i++){

if(segmentation.data[i] === 0){

imageData.data[i*4+3] = 0;

}

}

ctx.putImageData(imageData,0,0);

}