const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ msg: 'We did it!' });
});

module.exports = router;
