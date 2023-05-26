var express = require('express');
const jwt = require("jsonwebtoken");
var router = express.Router();
var Transactions = require('../models/transactions')


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
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, secretKey);
        const userId = decodedToken.userId;

        const transactions = await Transactions.find({user: userId})

        if (!transactions) {
            return res.status(404).json({error: 'Bad request'});
        }

        res.status(200).json({message: transactions})
    } catch (error) {
        res.status(400).json({error: error.message});
    }

});
router.get('/getThree', authMiddleware, async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, secretKey);
        const userId = decodedToken.userId;

        const transactions = await Transactions.find({user: userId}).limit(3)

        if (!transactions) {
            return res.status(404).json({error: 'Bad request'});
        }

        res.status(200).json({message: transactions})
    } catch (error) {
        res.status(400).json({error: error.message});
    }

});

module.exports = router;
