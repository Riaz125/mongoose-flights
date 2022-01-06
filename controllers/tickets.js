const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticketDocument) {
        console.log();
        res.redirect(`/flights/${req.params.id}`)
    })
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flightDocument) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            flight: flightDocument,
        })
    })
}