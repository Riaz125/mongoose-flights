const { populate } = require('../models/flight');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlights,
    create,
    show
}

function index (req, res) {
    Flight.find({}, function(err, flightDocuments) {
        res.render('flights/index', {
            title: 'Flights',
            flights: flightDocuments
        })
    })
}

function newFlights (req, res) {
    res.render('flights/new.ejs', {title: 'Flights New'});
}

function create(req, res) {
    Flight.create(req.body, function(err, flightDocument) {
        res.redirect('/flights')
    })
}

function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
	    res.render('flights/show', { title: 'Flight Detail', flight: flight, tickets: tickets })
        });
	});
}