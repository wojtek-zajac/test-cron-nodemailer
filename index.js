const cron = require("node-cron")
const express = require("express")

app = express()

cron.schedule("* * * * *", function() {
    console.log("running a task every minute " + new Date() );
});

app.listen(3128);


