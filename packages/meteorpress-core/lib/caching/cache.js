if(Meteor.isServer) {
  var timeInMillis = 1000 * 300; // 300 secs
  FlowRouter.setPageCacheTimeout(timeInMillis)
}