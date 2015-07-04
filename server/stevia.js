
Meteor.publish('thePlans', function(){
		var currentPlanId = this.planId;
		return PlansList.find({createdBy: currentUserId})
		});



Meteor.methods({ 'insertPlayerData': function(playerNameVar, playerScoreVar){
var currentUserId = Meteor.userId(); 
// La conversi�n siguiente es porque no funcionaba el update del score de acuerdo a como
// estaba en el libro, parece que por algun motivo, por m�s que el input type del html es
// number meteor lo toma como string, y asi lo graba en mongo.
// Con la conversi�n de abajo (multiplicando por 1) seg�n vi en 
//  http://javascript.about.com/library/blstrnum.htm
// el tipo de dato queda como Undefined, pero la adici�n y sustracci�n
// de puntos al score funcionan!
console.log("El tipo de datos de playerScoreVar es ==> ", typeof(playerScoreVar));
var scoreAsNumber = playerScoreVar * 1;
console.log("El tipo de datos convertido es ==>: ", typeof(socreAsNumber));
PlayersList.insert({
            name: playerNameVar,
            score: scoreAsNumber,
            createdBy: currentUserId
}); },

'removePlayerData': function(selectedPlayer){
	var currentUserId = Meteor.userId();
	PlayersList.remove({_id: selectedPlayer, createdBy: currentUserId});
},

'modifyPlayerScore': function(selectedPlayer, scoreValue){
	var currentUserId = Meteor.userId();
	PlayersList.update( {_id: selectedPlayer, createdBy: currentUserId},
                        {$inc: {score: scoreValue} });
}

});
	
	
	
