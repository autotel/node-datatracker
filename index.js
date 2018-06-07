'use strict';
var environment={};
var nodeServer={};
var httpSocket=require('./server/httpSocket.js');
environment.server=nodeServer;
nodeServer.httpSocket = httpSocket(nodeServer);
nodeServer.httpSocket.start(__dirname + '/client/index.html');

nodeServer.httpSocket.on('+ client',function(client){
  console.log("+ client");
})
