
// Represent Data using Models

var Robot = can.Model.extend({
    findAll: 'GET /api/robots',
    findOne: 'GET /api/robots/{id}',
    create:  'POST /api/robots',
    update:  'PUT /api/robots/{id}',
    destroy: 'DELETE /api/robots/{id}'
}, {});

//  Managing robots

Robots = can.Control({
    init: function(){
        this.element.html(can.view('views/robotsList.ejs', {
            robots: this.options.robots
        }));
    }
});

// Bootstrapping the App

$(document).ready(function(){
    $.when(Robot.findAll()).then(
        function(robotResponse){
            var robots = robotResponse[0];
            new Robots('#robots', {robots: robots});
        }
    );
});