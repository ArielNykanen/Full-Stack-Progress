const express = require('express');
const PORT = 8888;
const app = express();
const cors = require('cors')
const mysql = require('mysql');
const fs = require('fs');
const rl = require('readline');
const dns = require('dns');
app.use(cors());
app.post('/', function(req, res) {
    
});

var con = mysql.createConnection({
    database: "invalid_domains",
    host: "localhost",
    user: "root",
    password: ""
});
app.get('/getStudent', function(req, res) {
    con.query("SELECT * FROM student", function (err, result, fields) {
        res.send( );
        if (err) throw err;
        console.log(result);
    });
});

app.get('/file', function(req, res, next) {
    const lineReader = rl.createInterface({
        input: fs.createReadStream('list.txt')
    })
    let domainArray = [];
    con.query(`SELECT * FROM domains`, function (err, result, fields) {
        domainArray = result;
        lineReader.on('line', function (line) {
            dns.resolve4(line, function(err, d) {
                if (err) {
                    if (domainArray.length > 0) {
                        domainArray.forEach(domain => {
                            if (domain['domain_name'] != err.hostName) {
                                console.log(domain);
                                var sql = `INSERT INTO domains (domain_name, domain_err) VALUES ('${err.hostName}', '${err.code}')`;
                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    console.log("1 record inserted");
                                });
                            }
                        });
                    } else {
                        var sql = `INSERT INTO domains (domain_name, domain_err) VALUES ('${err.hostName}', '${err.code}')`;
                        con.query(sql, function (err, result) {
                            if (err) throw err;
                            console.log("1 record inserted");
                        });
                    }
                } else { 
                    // var sql = `INSERT INTO good_domains (domain_name) VALUES ('${line}')`;
                    // con.query(sql, function (err, result) {
                    //     if (err) throw err;
                    //     console.log("1 record inserted");
                    // });
                }
            })
            // console.log('line from file' + line);
        })
    });
    res.send('post home')
});
con.connect(function(err) {
    app.listen(PORT);
    if (err) throw err;
    console.log("Connected!");
  });