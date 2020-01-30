const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(400).json({ msg: 'No token, authorization denied' });
  }

  try {
    await jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('Somethin went wrong');
    res.status(500).json({ msg: 'Server error' });
  }
};
