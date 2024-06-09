const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  redeemable: {
    type: Boolean,
    default: false
  }
});

const SustainabilityGoalsSchema = new mongoose.Schema({
  current_points: {
    type: Number,
    default: 0
  },
  next_reward_at: {
    type: Number,
    required: true
  }
});

const LoyaltyProgramSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  loyalty_points: {
    type: Number,
    default: 0
  },
  rewards: {
    type: [RewardSchema],
    required: true
  },
  sustainability_goals: {
    type: SustainabilityGoalsSchema,
    required: true
  }
});

const LoyaltyProgram = mongoose.model('LoyaltyProgram', LoyaltyProgramSchema);

module.exports = LoyaltyProgram;
