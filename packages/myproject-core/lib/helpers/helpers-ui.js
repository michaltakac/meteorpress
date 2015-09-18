/*
* UI Helpers
* Define UI helpers for common template functionality.
*/

/*
* Current Route
* Return an active class if the currentRoute session variable name
* (set in the appropriate file in /client/routes/) is equal to the name passed
* to the helper in the template.
*/
UI.registerHelper('currentRoute', function(route){
  return Session.equals('currentRoute', route) ? 'active' : '';
});

/*
* Drop times.
*/
UI.registerHelper('fullTime', function(timestamp){
  return moment(timestamp).format("DD.MM.YYYY, HH:mm:ss");
});

/*
* Classic time we use in Slovakia.
*/
UI.registerHelper('classicTime', function(timestamp){
  return moment(timestamp).format("DD.MM.YYYY");
});

/*
* Miliseconds to seconds.
*/
UI.registerHelper('miliToSeconds', function(timestamp){
  return timestamp / 1000;
});

/*
* Number Format
* Use Numeral.js format 1,000,000.
*/
UI.registerHelper('numeralized', function(data){
  return numeral(data).format('0,0');
});

/*
* If Equals
* Take the two passed values and compare them, returning true if they're equal
* and false if they're not.
*/
UI.registerHelper('equals', function(c1,c2){
  // If case1 is equal to case2, return true, else false.
  return c1 == c2 ? true : false;
});

/*
* Percentage
* Take the two passed values, divide them, and multiply by 100 to return percentage.
*/
UI.registerHelper('percentage', function(v1,v2){
  return ( parseInt(v1) / parseInt(v2) ) * 100 + "%";
});

/*
* Capitalize
* Take the passed string and capitalize it. Helpful for when we're pulling
* data out of the database that's stored in lowercase.
*/
UI.registerHelper('capitalize', function(string){
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});

/*
* Uppercase
* Take the passed string and uppercase it. Helpful for when we're pulling
* data out of the database that's stored in lowercase.
*/
UI.registerHelper('uppercase', function(string){
  if (string) {
    return string.toUpperCase();
  }
});
/*
* lowercase
* Take the passed string and lowercase it. Helpful for when we're pulling
* data out of the database that's stored in lowercase.
*/
UI.registerHelper('lowercase', function(string){
  if (string) {
    return string.toLowerCase();
  }
});