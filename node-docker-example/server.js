"use strict";
/**
 * In the context of servers, 0.0.0.0 means all IPv4 addresses on the local machine. 
 *  If a host has two IP addresses, 192.168.1.1 and 10.1.2.1, and a server running 
 * on the host listens on 0.0.0.0, it will be reachable at both of those IPs.
 */

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);