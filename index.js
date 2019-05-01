const rabbitmq = require('./rabbitmq');

setInterval(function() {
    rabbitmq.publish("", "jobs", new Buffer("work work work"));
  }, 1000);