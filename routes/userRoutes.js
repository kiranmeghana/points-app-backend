const express = require('express');
const router = express.Router();
const User = require('../models/User');
const History = require('../models/History');

// ✅ SEED USERS
router.get('/users/seed', async (req, res) => {
  await User.deleteMany({});
  const users = await User.insertMany([
    { name: 'Rahul' },
    { name: 'Kamal' },
    { name: 'Sanak' },
    { name: 'Ankit' },
    { name: 'Riya' },
    { name: 'Priya' },
    { name: 'Amit' },
    { name: 'Sneha' },
    { name: 'Vikram' },
    { name: 'Neha' },
  ]);
  res.json({ message: '✅ Users seeded!', users });
});

// ➜ GET all users
router.get('/users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// ➜ POST claim random points
router.post('/users/:id/claim', async (req, res) => {
  const userId = req.params.id;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findByIdAndUpdate(
    userId,
    { $inc: { totalPoints: randomPoints } },
    { new: true }
  );

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const history = new History({
    userId: user._id,
    points: randomPoints
  });
  await history.save();

  res.json({ user, points: randomPoints });
});

// ➜ GET leaderboard
router.get('/leaderboard', async (req, res) => {
  const leaderboard = await User.find({}).sort({ totalPoints: -1 });
  res.json(leaderboard);
});

// ➜ GET history
router.get('/history', async (req, res) => {
  const history = await History.find({}).populate('userId', 'name');
  res.json(history);
});

module.exports = router;

