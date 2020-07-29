class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hidden();
      textSize(30);
      text("Game Start",120,300);
    Player.getplayerinfo();
    if (allplayers!==undefined){
      var displayposition=130;
      for(var plr in allplayers){
        if(plr==="player"+player.index){
          fill("red");
        }
        else{
          fill("black")}
      }
      displayposition=displayposition+20;
      textSize(18);
      text(allplayers[plr].name+":"+allplayer[plr].distance,120,displayposition);
    }
    if (keyDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }
  }
  
}
