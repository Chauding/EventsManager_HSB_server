const express = require('express');
const router = require('express-promise-router');

const UserController = require('../controllers/users.js');

router.route('/')
  .get(UserController.index)
  .post(UserController.newUser);

router.route('/:userId')
  .get(UserController.getUser)
  .put(UserController.replaceUser)
  .patch(UserController.updateUser);

router.route('/:userId/role')
  .get(UserController.getRole)

router.route('/:userId/events')
  .get(UserController.getUserEvents)

router.route('/userId/skills')
  .get(UserController.getUserSkills)
  .post(UserController.newUserSkill)

module.express = router;