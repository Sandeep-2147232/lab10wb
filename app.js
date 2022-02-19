'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to AMS ");
        res.write(' Welcome to AMS');
        res.end();
    } else {
        res.writeHead(200);
        res.write(' OK');
        res.end();

    }
}).listen(8081, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/

let staff = {
    "staff": [
        { "status": "0", "exp": 17, "doj": "july 21 1990", "name": "Sunil", "salary": 350000.00, "location": "Periyar", "type": "teacher", "contact": "9900808675" },
        { "status": "0", "exp": 17, "doj": "july 21 1990", "name": "Sunil", "salary": 350000.00, "location": "Periyar", "type": "teacher", "contact": "9900808675" },
        { "status": "1", "exp": 16, "doj": "october 24,2021", "name": "Ramuk", "salary": 500000.00, "location": "Kalavasal", "type": "teacher", "contact": "9486693427" },
        { "status": "1", "exp": 11, "doj": "july 23 ,1990", "name": "Abishek", "salary": 1500000.00, "location": "Thiruparankundram", "type": "teacher", "contact": "8883712624" },
        { "status": "1", "exp": 15, "doj": "july 21 ,1990", "name": "Sunil Kumar", "salary": 360000.00, "location": "Andalpuram", "type": "teacher", "contact": "9082645654" },
        { "status": "1", "exp": 3, "doj": "july 21 ,1990", "name": "Prasanna", "salary": 400000.00, "location": "Madurai", "type": "teacher", "contact": "9900808574" },
        { "status": "0", "exp": 17, "doj": "january 21 ,1990", "name": "Pavan", "salary": 350000.00, "location": "Periyar", "type": "teacher", "contact": "9443083277" },
        { "status": "1", "exp": 16, "doj": "march 21 ,1990", "name": "Steve", "salary": 500000.00, "location": "Kalavasal", "type": "teacher", "contact": "9486693427" },
        { "status": "1", "exp": 11, "doj": "april 21 ,1990", "name": "Sandeep", "salary": 1500000.00, "location": "Thiruparankundram", "type": "teacher", "contact": "9047887913" },
        { "status": "1", "exp": 15, "doj": "july 21 ,1990", "name": "Madhu", "salary": 360000.00, "location": "Andalpuram", "type": "teacher", "contact": "8765676453" },
        { "status": "1", "exp": 3, "doj": "september 21 ,1990", "name": "Varsha", "salary": 400000.00, "location": "Madurai", "type": "teacher", "contact": "6677558899" },
        { "status": "0", "exp": 17, "doj": "july 21 ,1990", "name": "Priyasha", "salary": 350000.00, "location": "Periyar", "type": "teacher", "contact": "87656474647" },
        { "status": "1", "exp": 16, "doj": "july 21 ,1990", "name": "Mounika", "salary": 500000.00, "location": "Kalavasal", "type": "teacher", "contact": "9486693427" },
        { "status": "1", "exp": 11, "doj": "july 21 ,1990", "name": "Sindu", "salary": 100000.00, "location": "Thiruparankundram", "type": "teacher", "contact": "9047887913" },
        { "status": "1", "exp": 15, "doj": "july 21 ,1990", "name": "Harika", "salary": 360000.00, "location": "Andalpuram", "type": "teacher", "contact": "88776554433" },
        { "status": "1", "exp": 3, "doj": "july 21 ,1990", "name": "Gowthami", "salary": 400000.00, "location": "Madurai", "type": "teacher", "contact": "8241654654" }
    ]

};

let data = JSON.stringify(staff);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let staff = JSON.parse(data);
    console.log(staff);

});