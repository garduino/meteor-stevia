
Meteor.publish('theServices', function(){
		var currentUserId = this.userId;
		return ServicesList.find({createdBy: currentUserId})
		});



Meteor.methods({ 'insertServicesData': function(typeOfServiceVar, serviceNameVar, dueDateServiceVar, customerNameVar, customerEmailVar, customerPhoneVar, customerMobilePhoneVar ){
var currentUserId = Meteor.userId(); 
// La conversi�n siguiente es porque no funcionaba el update del score de acuerdo a como
// estaba en el libro, parece que por algun motivo, por m�s que el input type del html es
// number meteor lo toma como string, y asi lo graba en mongo.
// Con la conversi�n de abajo (multiplicando por 1) seg�n vi en 
//  http://javascript.about.com/library/blstrnum.htm
// el tipo de dato queda como Undefined, pero la adici�n y sustracci�n
// de puntos al score funcionan!

//console.log("El tipo de datos de playerScoreVar es ==> ", typeof(playerScoreVar));
//var scoreAsNumber = playerScoreVar * 1;
//console.log("El tipo de datos convertido es ==>: ", typeof(socreAsNumber));

ServicesList.insert({
		typeOfService: typeOfServiceVar,
		serviceName: serviceNameVar,
		dueDateService: dueDateServiceVar,
		customerName: customerNameVar,
		customerEmail: customerEmailVar,
		customerPhone: customerPhoneVar,
		customerMobilePhone: customerMobilePhoneVar,
		createdBy: currentUserId
}); },

'removeServiceData': function(selectedService){
	var currentUserId = Meteor.userId();
	ServicesList.remove({_id: selectedService, createdBy: currentUserId});
},
// de aca, ver como modificar múltiples datos de un documento
'modifyServiceData': function(selectedService, scoreValue){
	var currentUserId = Meteor.userId();
	PlayersList.update( {_id: selectedPlayer, createdBy: currentUserId},
                        {$inc: {score: scoreValue} });
}

});
	





