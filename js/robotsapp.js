
// Represent Data using Models

var Robot = can.Model({
    findAll: 'GET /api/robots',
    findOne: 'GET /api/robots/{id}',
    create:  'POST /api/robots',
    update:  'PUT /api/robots/{id}',
    destroy: 'DELETE /api/robots/{id}'
}, {});

//  Managing robots

var Robots = can.Control({
    init: function(el, options){
        var el = this.element;
        el.html(can.view('robotList', new Robot.List({})));
    },
    'span click': function(el, ev) {
        console.log('You clicked ' + el.text());
    },
    '.removebtn click': function(el, ev) {
        // ...destroy the corresponding to-do on the server.
        // The template will re-render itself and the
        // deleted to-do will be removed.
        el.parent().data('robot').destroy();
    }
});

// Routing pulls the editor and the to-do board together
// and takes care of routing as well.
var Routing = can.Control({
    init: function() {
        // Declare what our routes will look like.
        can.route('api/robots/:id');
        // Fire up the to-do board.
        new Robots($('#robots'));
    }
});

// Kick the entire thing off by instantiating the
// Routing controller.
new Routing(document.body);