if (Meteor.isClient) {
	Template.rate.viewmodel({
		rate: 0,
		starWidth: "18px",
		readOnly: true,
		precision: 3,
		onRendered: function () {
			this.rateyo.rateYo({
				rating: this.rate(),
				readOnly: this.readOnly(),
				precision: this.precision(),
				starWidth: this.starWidth()
			});
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
