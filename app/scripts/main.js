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
  });

$('.savebtn').click(function(){

	var musician = new Contact()

	if($('.avatar').val()) {musician.set({name: $('.avatar').val()})};
	if($('.name').val()) {musician.set({name: $('.name').val()})};
	if($('.email').val()) {musician.set({name: $('.email').val()})};
	if($('.genre').val()) {musician.set({name: $('.genre').val()})};
	if($('.rate').val()) {musician.set({name: $('.rate').val()})};
	if($('.bio').val()) {musician.set({name: $('.bio').val()})};

	var freshModel = contacts.add(musician);

	new ListView({model: freshModel});

	freshModel.save()

	})


});