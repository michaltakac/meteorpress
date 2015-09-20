AdminConfig = {
  name: 'Meteorpress',
  adminEmails: ['test@meteorpress.com'],
  nonAdminRedirectRoute: 'entrySignIn',
  collections: {
  	Posts: {
      tableColumns: [
      	{ label: 'Title', name: 'title' },
      	{ label: 'Category', name: 'category' },
      	{ label: 'Tags', name: 'tags' }
      ]
    }
  },
  autoForm: {
    omitFields: ['author', 'slug', 'createdAt', 'updatedAt']
  }
}


