Template.fAdminLayout.events
	'click .btn-delete': (e,t) ->
		_id = $(e.target).attr('doc')
		if Session.equals 'admin_collection_name', 'Users'
			Session.set 'admin_id', _id
			Session.set 'admin_doc', Meteor.users.findOne(_id)
		else
			Session.set 'admin_id', parseID(_id)
			Session.set 'admin_doc', adminCollectionObject(Session.get('admin_collection_name')).findOne(parseID(_id))
	'click [data-event="new-post"]': (e,t) ->
		Meteor.call 'insertDocument', (err,res) ->
			if err
				alert 'Something went wrong while inserting new post'
			else
				FlowRouter.go '/admin/' + res + '/edit'

Template.AdminDeleteModal.events
	'click #confirm-delete': () ->
		collection = Session.get 'admin_collection_name'
		_id = Session.get 'admin_id'
		Meteor.call 'adminRemoveDoc', collection, _id, (e,r)->
			$('#admin-delete-modal').modal('hide')
			$('body').removeClass('modal-open')
			$('.modal-backdrop').remove()

Template.AdminDashboardUsersEdit.events
	'click .btn-add-role': (e,t) ->
		console.log 'adding user'
		Meteor.call 'adminAddUserToRole', $(e.target).attr('user'), $(e.target).attr('role')
	'click .btn-remove-role': (e,t) ->
		console.log 'removing user'
		Meteor.call 'adminRemoveUserToRole', $(e.target).attr('user'), $(e.target).attr('role')

Template.AdminHeader.events
	'click .btn-sign-out': () ->
		Meteor.logout ->
			FlowRouter.go '/'
	'click [data-href="homepage"]': () ->
		FlowRouter.go '/home'
