// routes/authRoutes.j
const { Router } = require('express');
//const authenticate = require('../middleware/authMiddleware');
const { register, login, upgradeRole } = require('../Controllers/authControllers');
const { authenticate } = require('../middleware/authMiddleware');

const authRouter = Router();
authRouter.post('/register',register);
authRouter.post('/login', login);
authRouter.put('/upgrade-role', authenticate, upgradeRole); // secured

module.exports = authRouter;
