Schemas.Posts = new SimpleSchema({
  title: {
    type: String
  },
  slug: {
    type: String
  },
  post: {
    type: String
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
});

Posts.attachSchema(Schemas.Posts);
