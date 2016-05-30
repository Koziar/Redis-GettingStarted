var redis = require('redis');
var client = redis.createClient(10142, 'pub-redis-10142.us-east-1-3.7.ec2.redislabs.com', {no_ready_check: true});
client.auth(123456, function (err) {
    if (err){
        console.log(err);
    }
});
client.set("key1", "This is cool", redis.print);
client.get("key1", function (err, reply) {
    if (err) throw err;
    console.log(reply.toString());
});