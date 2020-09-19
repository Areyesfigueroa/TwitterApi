const express = require('express');
const router = express.Router();

const userSearchController = require("../controllers/userSearchController");

router.get('/user/raw/:screenName/:count', userSearchController.searchByUserRaw);
router.get('/user/tweets/:screenName/:count', userSearchController.searchByUser);
router.get('/user/nextTweets/:nextResultsURL', userSearchController.searchByUserNextResults);
router.get('/user/profiles/:screenNames', userSearchController.searchUserProfiles);

module.exports = router;



