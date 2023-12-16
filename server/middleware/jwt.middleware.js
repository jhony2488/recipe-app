
const jwt = require('jsonwebtoken');

// Instantiate the JWT token validation middleware

async function isAuthenticated(req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  const token = req.header('Authorization')
  const jwtApp = await jwt.sign(
    {
      token: 'Bearer ' + token,
    },
    token
  );
  try {
    const verified = await jwt.verify(
      jwtApp,
      'Bearer ' + process.env.TOKEN_SECRET
    );
    if (verified) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token Invalid', error });
  }
}
// Export the middleware so that we can use it to create protected routes
module.exports = {
  isAuthenticated,
};
