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