const express = require('express');
const passport = require('passport');

const AuthService = require('../services/auth.service');
const service = new AuthService();

const router = express.Router();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  });
router.post('/logout',async (req, res) => {
  // El método logout() es proporcionado por Passport.js para cerrar la sesión del usuario
  req.logout();

  // Puedes agregar cualquier lógica adicional aquí, si es necesario

  // Respondemos con un mensaje indicando que el usuario ha cerrado sesión
  res.json({ message: 'Logout exitoso' });
});
router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const rta = await service.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  });

router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const rta = await service.changePassword(token, newPassword);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
