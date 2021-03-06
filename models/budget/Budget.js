const mongoose = require('mongoose');

const Account = require('./Account');
const Transaction = require('./Transaction');

const BudgetSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  balance: {
    type: mongoose.Schema.Types.Number,
    default: 0.0
  },
  accounts: {
    type: [Account.schema]
  },
  transactions: {
    type: [Transaction.schema]
  },
  log: [
    {
      type: String
    }
  ]
});

module.exports = Budget = mongoose.model('budget', BudgetSchema);
