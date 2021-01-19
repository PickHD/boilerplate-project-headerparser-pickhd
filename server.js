// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

require('dotenv').config();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

const port =process.env.PORT||8081

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res)=> {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", (req, res)=> {
  res.json({ greeting: 'hello API' });
});

app.get("/api/whoami", (req, res)=> {
  res.json({
    ipaddress: req.ip,
    language: req.get("Accept-Language"),
    software: req.get("User-Agent")
  })
})

// listen for requests :)
app.listen(port, ()=>console.log('Your app is listening on port ' + port); );
