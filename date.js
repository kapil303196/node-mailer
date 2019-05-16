var moment = require('moment');

var startdate = new moment().format("DD/MM/YYYY");
var enddate = new moment().add(1, 'years').format("DD/MM/YYYY");

console.log("startdate is : " + startdate)
console.log("enddate is : " + enddate)


if(enddate >= startdate ){
  console.log("allow access")
}
else{
  console.log("dont allow")
}
