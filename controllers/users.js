const router = require('express').Router();
const asyncWrapper = require('../utils/asyncWrapper');

router.get(
  '/',
  asyncWrapper(async (req, res) => {
    res.json({ msg: 'We did it!' });
  })
);

module.exports = router;
