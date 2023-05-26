var express = require('express');
const jwt = require("jsonwebtoken");
const Currency = require("../models/currency");
var router = express.Router();

const secretKey = "Crypto2281337"

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return res.status(401).json({error: "Unauthorized"})
    }

    try {
        const decodedToken = jwt.verify(token, secretKey)
        req.user = decodedToken.user
        next()
    } catch (error) {
        res.status(401).json({error: "Unauthorized"})
    }
}

router.get('/getAll', authMiddleware, async (req, res) => {
    try {

        const currency = await Currency.find({})

        if (!currency) {
            return res.status(404).json({error: 'Bad request'});
        }

        res.status(200).json({message: currency})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})
router.get('/getBTC', authMiddleware, async (req, res) => {
    try {

        const currency = await Currency.find({name: "BTC"})

        if (!currency) {
            return res.status(404).json({error: 'Bad request'});
        }

        res.status(200).json({message: currency})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})
router.get('/getLTC', authMiddleware, async (req, res) => {
    try {

        const currency = await Currency.find({name: "LTC"})

        if (!currency) {
            return res.status(404).json({error: 'Bad request'});
        }

        res.status(200).json({message: currency})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})
router.get('/getETH', authMiddleware, async (req, res) => {
    try {

        const currency = await Currency.find({name: "ETH"})

        if (!currency) {
            return res.status(404).json({error: 'Bad request'});
        }

        res.status(200).json({message: currency})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

module.exports = router