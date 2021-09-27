canvas=new fabric.Canvas('canvas1');
block_height =30;
block_width=30;

player_x=10;
player_y=10;

var player_obj="";
var block_obj="";

function player_update(){
fabric.Image.fromURL("player.png" , function(Img)
{
player_obj = Img ; 
player_obj.scaleToWidth(140);
player_obj.scaleToHeight(130);
player_obj.set({
top:player_y,
left:player_x 
});
canvas.add(player_obj);
}
) ;
}

function new_img(get_image){
fabric.Image.fromURL(get_image , function(Img)
{
block_obj = Img ;
block_obj.scaleToWidth(block_width);
block_obj.scaleToHeight(block_height);
bloack_obj.set({
top:player_y ,
left:player_x
});
canvas.add(block_obj);
}
) ;
}

window.addEventListener("keydown" , myKeydown);

function myKeydown(e){
Keyvalue = e.keyCode ;
console.log(Keyvalue);

if( e.shiftkey == true && Keyvalue == '80' ){
console.log("P and shift");
block_width = block_width + 10 ;
block_height = block_height + 10 ;

document.getElementById("current_width").innerHTML = block_width ;
document.getElementById("current_height").innerHTML = block_height ;
}

if( e.shiftkey == true && Keyvalue == '77'){
    console.log("M and shift");
    block_width = block_width - 10 ;
    block_height = block_height - 10 ;

    document.getElementById("current_width").innerHTML = block_width ;
    document.getElementById("current_height").innerHTML = block_height ;
}

if(Keyvalue == '38'){
    console.log("Up arrow pressed");
    up();
}

if(Keyvalue == '40'){
    console.log("Down arrow pressed");
    down();
}

if(Keyvalue == '37'){
    console.log("Left arrow pressed");
    left();
}

if(Keyvalue == '39'){
    console.log("Right arrow pressed");
    right();
}

if(Keyvalue == '87'){
    new_img('wall.jpg');
    console.log("W");
}

if(Keyvalue == '71'){
    new_img('ground.png');
    console.log("G");
}

if(Keyvalue == '76'){
    new_img('light_green.png');
    console.log("L");
}

if(Keyvalue == '84'){
    new_img('trunk.jpg');
    console.log("T");
}

if(Keyvalue == '82'){
    new_img('roof.jpg');
    console.log("R");
}

if(Keyvalue == '89'){
    new_img('yellow_wall.png');
    console.log("Y");
}

if(Keyvalue == '68'){
    new_img('dark_green.png');
    console.log("D");
}

if(Keyvalue == '85'){
    new_img('unique.jpg');
    console.log("U");
}

if(Keyvalue == '67'){
    new_img('cloud.jpg');
    console.log("C");
}
}