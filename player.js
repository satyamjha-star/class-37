class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
   }
 getCount(){
   var playerCountref = database.ref ("playerCount");
   playerCountref.ref.on("value",(data)=>{
       playerCount=dataval();
   })
}
    updateCount(count){
  database.ref("/").update({
    playerCount:count
  })

  } 
  

}