var airbnb = require('airapi');
var fs = require('fs');
var request = require('request');
var Handlebars = require('handlebars');

var templateString = fs.readFileSync('./output.hbs').toString();
var template = Handlebars.compile(templateString);

// The API that returns the in-email representation.
module.exports = function(req, res) {
    var airbnbId = req.query.url.replace('https://www.airbnb.ca/rooms/', '').split('?')[0];

    airbnb.getInfo(airbnbId)
        .then(function(info) {
            var response = {
                url: req.query.url.trim(),
                city: info.listing.city,
                state: info.listing.state,
                country: info.listing.country,
                image: info.listing.picture_url,
                price: info.listing.price_formatted,
                currency: info.listing.native_currency,
                title: info.listing.name,
                description: info.listing.description.substring(0, 250) + '...',
                type: info.listing.room_type,
                rating: info.listing.star_rating
            };

            res.json({
                body: template(response)
            });
        })
        .catch(function() {
            res.status(500).send('An error occured');
        });
};
