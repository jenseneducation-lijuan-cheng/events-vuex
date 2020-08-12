const {
    Router
} = require('express')
const router = new Router()
const fs = require('fs');

router.get('/', async (req, res) => {
    const events = fs.createReadStream('./assets/data/events.json');
    events.pipe(res);
});

router.post('/', async (req, res) => {
    const order = {
        eta: 13,
        orderNr: 'SW921389B',
    }

    setTimeout(() => {
        res.send(order);
    }, 2000);
});

module.exports = router