var mongoose = require('mongoose');
var Rooms = mongoose.model("Rooms","rooms");

// views the rooms an user has created
module.exports.viewRooms = function(req, res){
	var owner_username = req.body.owner;
	Rooms.find({owner: owner_username}, function(err, docs){
		console.log(docs);
		res.send(docs);
	});
}

// function to createRooms to the CosmosDB database: Room Schema
module.exports.createRoom = function(req, res) {
    //console.log('Received emotion : ' + JSON.stringify(req.body));
    var owner_username = req.body.owner;
    var roomID = req.body.roomID;
    //let emotion = req.body.payload.faceAttributes.emotion;
    //console.log(emotion);    
    var room = new Rooms();
    room.roomID = roomID;
    room.owner = owner_username;
    room.users = [];
    room.users.push(room.owner);

    room.save(function(err){
    	if(!err){
    		res.status(200);
    		res.send("Room created");
    	}
    	else{
    		res.status(404);
    		res.send("Error creating room");
    	}
    });
};

// function to add the Users from CosmosDB database: Emotion Schema
module.exports.joinRoom = function(req,res){
    var roomID = req.body.roomID;
    var username = req.body.user_name;

    Rooms.findOneAndUpdate({roomID: roomID},{$push:{"users":username}},{new:true},function (err, room) {
       if(err){
           res.send(err);
       }
       else{
           res.send(room);
       }
    });
};