Template.stevia.helpers({
    'service': function(){    
        // var currentUserId = Meteor.userId();
        // but I think is not needed because the data is already filtered for the logged user
        return ServicesList.find({}, {sort: {dueDateService: -1, typeOfService:1, serviceName: 1}});
    },
   'selectedClass': function(){ 
   	   var serviceId = this._id;
   	   // console.log(serviceId);
   	   var selectedService = Session.get('selectedService');
   	   if(serviceId == selectedService){
   	   return "selected" }
   } ,
   'numberOfServices': function(){
   return ServicesList.find().count();
   },
   'showSelectedService': function(){
   	   var selectedService = Session.get('selectedService');
   	   return ServicesList.findOne(selectedService)
}
  });

  Template.stevia.events({
    'click .service': function(){
        var serviceId = this._id; 
        Session.set('selectedService', serviceId);
        // console.log(serviceId);
    },
       'dblclick .service': function(){
      console.log("You DOUBLE clicked a .service element");
    },
    //   'mouseover .player': function(){
    //  console.log("The mouse is over a .player element");
    // }
    'click .increment': function(){
    	var selectedPlayer = Session.get('selectedPlayer');
    	// PlayersList.update(selectedPlayer, {$inc: {score: 5} });
    	Meteor.call('modifyPlayerScore', selectedPlayer, 5);
    },
       'click .decrement': function(){
    	var selectedPlayer = Session.get('selectedPlayer');
    	//PlayersList.update(selectedPlayer, {$inc: {score: -5} });
    	Meteor.call('modifyPlayerScore', selectedPlayer, -5);
    },
    'click .remove': function(){
    	var selectedService = Session.get('selectedService');
    	
    	if (confirm('Are you sure?')) { 
 	//PlayersList.remove(selectedPlayer);
 	Meteor.call('removeService', selectedService);
 		}
    }
    
  });
  Template.addServiceForm.events({
  'submit form': function(event){
  	  event.preventDefault();
  	  var typeOfServiceVar = event.target.typeOfService.value;
  	  var serviceNameVar = event.target.serviceName.value;
  	  var dueDateServiceVar = event.target.dueDateService.value;
  	  var customerNameVar = event.target.customerName.value;
  	  var customerEmailVar = event.target.customerEmail.value;
  	  var customerPhoneVar = event.target.customerPhone.value;
  	  var customerMobilePhoneVar = event.target.customerMobilePhone.value; 
  	  
  	 Meteor.call('insertService', typeOfServiceVar, serviceNameVar, dueDateServiceVar, customerNameVar, customerEmailVar, customerPhoneVar, customerMobilePhoneVar);
  	 event.target.typeOfService.value = '';
  	 event.target.serviceName.value = '';
  	 event.target.dueDateService.value = '';
  	 event.target.customerName.value = '';
  	 event.target.customerEmail.value = '';
  	 event.target.customerPhone.value = 0;
  	 event.target.customerMobilePhone.value = 0;
  	}	  
  });
   
  Meteor.subscribe('theServices');