var Robots = can.Model.extend({
    findAll: 'GET /api/robots',
    findOne: 'GET /api/robots/{id}',
    create:  'POST /api/robots',
    update:  'PUT /api/robots/{id}',
    destroy: 'DELETE /api/robots/{id}'
}, {});
