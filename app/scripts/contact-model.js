
var Contact = Backbone.Model.extend({
	defaults: {
		name: 'Coooool Guy',
		phone: '555-555-5555',
		avatar: 'http://4.bp.blogspot.com/-tNHx8Gt5d1c/T2aHYdEWReI/AAAAAAAAFus/i_Zg63NK93g/s400/6.jpg',
		bio: 'Bio: Dummy'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact

})