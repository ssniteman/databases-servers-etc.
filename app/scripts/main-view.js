var MainView = Backbone.View.extend({

	
	className: 'jumbo-item',
	
	jumbotronTemplate: _.template($('#jumbotron-template').text()),
	
	initialize: function(){

		$('.js-jumbotron').html( this.el );

		this.render()

	},

	render: function(){

		var renderedjumboTemplate = this.jumbotronTemplate( this.model.attributes )

		this.$el.html( renderedjumboTemplate)
	}
})

 