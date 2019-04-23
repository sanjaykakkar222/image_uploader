var express = require('express'),
    router = express.Router();
 
router.use('/api/v1/upload', require('./upload'));
 
// nothing for root
router.get('/', function(req, res){
    res.send(JSON.stringify({}));
});
 
module.exports = router;