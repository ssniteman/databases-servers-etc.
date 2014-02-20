console.log('You can doooo etttttt');

$(document).ready(function(){

// start the app

window.contacts = new ContactsCollection( );

// goes and fetches whatever is stored on the database already and renders to page

contacts.fetch({
    success: function(){
      contacts.each(function(contact){
        new ListView({model: contact});
      })
      
    },
    error: function(){
      console.log('WHOAAAAAAAAAA theres a problem')
    }
  })

$('.savebtn').click(function(){

	var musician = new Contact()

	// if


	var freshModel = contacts.add(musician);

	new ListView({model: freshModel})

	freshModel.save()

})


});