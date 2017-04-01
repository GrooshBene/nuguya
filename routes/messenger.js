/**
 * Created by GrooshBene on 2017-04-01.
 */
module.exports = init;
function init(app, fb) {
    var io = require("socket.io");
    fb({email : "wltn000129@gmail.com", password: "wltn1029"}, function (err, api) {
        api.setOptions({listenEvents : true});
        api.listen(function (err, event) {
            switch (event.type){
                case "message":
                    console.log(event.body);
                    io.emit("messenger message", event.body);

            }
        })
    });
    app.post("/send", function (req, res) {
        fb({email : "wltn000129@gmail.com", password : "wltn1029"}, function (err, api) {
            if(err){
                throw err;
            }
            var id = 100008139407350;
            var msg = {body : "asdf"};
            api.sendMessage(msg, id);
            api.setOptions({listenEvents: true});
        })
    })

}