Meteor.publish('theServices', function(){
		var currentUserId = this.userId;
		return ServicesList.find({createdBy: currentUserId})
		});

Meteor.methods({ 'insertServicesData': function(typeOfServiceVar, serviceNameVar, dueDateServiceVar, customerNameVar, customerEmailVar, customerPhoneVar, customerMobilePhoneVar ){
var currentUserId = Meteor.userId(); 
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