var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(('dane przed zapisem').blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\n po zapisie', function(err) {
        if (err) throw err;
        console.log(('zapisano').blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log(('dane po zapisie').blue);
            console.log(data);
        });
    });
});
fs.readdir('./', function(err, list) {
    console.log(list);
    fs.appendFile('./files.txt', list, function(err) {
        if (err) throw err;
        console.log('zapisano liste plików');
    })
})