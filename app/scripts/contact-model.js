
var Contact = Backbone.Model.extend({
	
	// this helps mongo play nice with underscore - daniel donaldson

	idAttribute: '_id',

	defaults: {
		avatar: 'http://4.bp.blogspot.com/-tNHx8Gt5d1c/T2aHYdEWReI/AAAAAAAAFus/i_Zg63NK93g/s400/6.jpg',
		name: 'TBA',
		email: 'TBA',
		genre: 'TBA',
		rate: 'TBA',
		bio: 'TBA'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	url: 'http://0.0.0.0:3000/collections/contacts'


})