#!/usr/bin/env node

var rest = require ('restler');

rest.json('http://ancient-mountain-7456.herokuapp.com/').on('complete',function(response) {console.log(response);
});
