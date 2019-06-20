const ArcadeGame = require('../models/ArcadeGame');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    ArcadeGame.find({
    })
        .then(arcadeGames => {
            res.render('arcadeGames/index', {
                arcadeGames: arcadeGames,
                title: 'Archive'
            });
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};


exports.show = (req, res) => {};


exports.new = (req, res) => {};


exports.edit = (req, res) => {};


exports.create = async (req, res) => {};


exports.update = (req, res) => {};


exports.destroy = (req, res) => {};