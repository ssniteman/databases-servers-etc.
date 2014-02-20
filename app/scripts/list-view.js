var ListView = Backbone.View.extend({

	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		"click": "createMainView", 
	},

	initialize: function(){

		$('.js-contact-list').prepend( this.el );

		this.render()

		// if this model changes, render any new changes immediately, WITHOUT REFRESH

		this.listenTo(this.model, 'change', this.render);

	},

	render: function(){
		var renderedTemplate = this.createTemplate( this.model.attributes )

		 // data in models is stored in attributes. we don't want all of the methods for the model 

		this.$el.html( renderedTemplate );
  
	},

	// createMainView: function(){

	// 	new MainView ({model: this.model})

	// 	$( "body" ).animate({scrollTop: $(".jumbotron").offset().top - 50 }, "slow");
 //    	console.log('executed scrollToElement');
	// }

});





// delete from database code

// window.deleteFunction = function(){
// contacts.each(function(dataStuff){
// console.log(dataStuff)
// $.ajax({
// type: 'delete',
// url: 'http://0.0.0.0:3000/collections/contacts/'+dataStuff.get("_id")
// })
// })
// }