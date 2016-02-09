if (Meteor.isClient) {
	ViewModel.mixins = {

	};

	Template.list.viewmodel({
		peoples : [{_id:1, firstName:'test1'},{_id:2,firstName:'test2'}],
		triggerRefreshed : 0,
		add: function(){
			console.log("add");
			//this.triggerRefreshed.changed();
			this.triggerRefreshed(this.triggerRefreshed()+1);
		}
	});

	Template.person.viewmodel({
		autorun : function(){
			//this.triggerRefreshed.depend();
			if (this.triggerRefreshed())
				console.log("triggerRefreshed");
		},
		onRendered: function(){
			console.log(this.firstName());
		}
	});


}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
