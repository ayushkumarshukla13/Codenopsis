const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-14513.c274.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 14513
    }
});

module.exports = redisClient;