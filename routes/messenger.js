/**
 * Created by GrooshBene on 2017-04-01.
 */
module.exports = init;
function init(app, fb) {
    app.io = require("socket.io")();
    // fb({email : "wltn000129@gmail.com", password: "wltn1029"}, function (err, api) {
    //     api.setOptions({listenEvents : true});
    //     api.listen(function (err, event) {
    //         switch (event.type){
    //             case "message":
    //                 console.log(event.body);
    //                 app.io.emit(event.body);
    //         }
    //     })
    // });
    app.post("/send", function (req, res) {
        fb({email : "wltn000129@gmail.com", password : "wltn1029"}, function (err, api) {
            if(err){
                throw err;
            }
            var id = 774247622739038;
            var msg = {body : req.param("message")};
            api.sendMessage(msg, id);
            api.setOptions({listenEvents: true});
            api.setOptions({listenEvents : true});
            api.listen(function (err, event) {
                switch (event.type){
                    case "message":
                        console.log(event.body);
                        app.io.emit(event.body);
                }
            })
            res.send();
        })
    })

}