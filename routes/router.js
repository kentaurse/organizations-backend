const express = require('express');
const router = express.Router();
const { authenticateLocal, authenticateGoogle, authenticateJwt } = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');
const messageController = require('../controllers/messageController');
const organizationController = require('../controllers/organizationController');

router.post('/login', authenticateLocal, authController.login);
router.get('/tokenLogin', authenticateJwt, authController.login);
router.get('/google', authenticateGoogle);
router.get('/google/callback', authenticateGoogle, authController.login);
router.post('/register', authController.register);
router.get('/users/:userId', authenticateJwt, authController.getUserById);


router.get('/messages', authenticateJwt, messageController.getMessages);
router.get('/messages/:msgId', authenticateJwt, messageController.getMessagesById);
router.post('/messages', authenticateJwt, messageController.setMessages);
router.put('/messages', authenticateJwt, messageController.updateMessages);
router.delete('/messages', authenticateJwt, messageController.deleteMessages);

router.get('/organizations', organizationController.getOrganizations);
module.exports = router;
