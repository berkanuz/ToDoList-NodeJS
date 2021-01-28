console.log("app.js is runing");

const fs= require('fs');
const _ = require('lodash');
const { title } = require('process');
const yargs = require('yargs');

const modul=require('./modul.js');

/* for to do list;
1- Title
2- Explanation
3- Date
*/

const argumanlar = yargs.argv;
//console.log(argumanlar);
var commend = argumanlar._[0];

console.log("Request: ",commend);

switch(commend){
    case "add":
        modul.add(argumanlar.title , argumanlar.explanation , argumanlar.date);
        break;
    case "list":
        modul.list();
        break;
    case "read":
        modul.read(argumanlar.title);
        break;
    case "remove":
        modul.remove(argumanlar.title);
        break;
    default:
        console.log("UNDEFINED COMMEND");
        break;
}