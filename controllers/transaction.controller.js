// transaction.controller.js
const Transaction = require('../models/transaction.model');

// Create a new transaction
exports.createTransaction = async(req, res) => {
    const { transactionstatus, transactionamount, paymentid, transactionuserid, transactiontime } = req.body;

    try {
        const transaction = await Transaction.create({
            transactionstatus,
            transactionamount,
            transactionuserid,
            transactiontime,
            paymentid
        });
        // res.status(201).json(transaction); // Return created transaction
    } catch (error) {
        console.log('Error creating transaction:', error);
        res.status(500).json({ error: 'Failed to create transaction' });
    }
};

// Update a transaction by transactionid
exports.updateTransaction = async(req, res) => {
    const { transactionid, transactionstatus, transactionamount, transactionuserid, transactiontime } = req.body;

    // Check if transactionid is provided
    if (!transactionid) {
        return res.status(400).json({ error: 'transactionid is required' });
    }

    try {
        // Update the transaction
        const [updated] = await Transaction.update({ transactionstatus, transactionamount, transactionuserid, transactiontime }, { where: { transactionid } });

        // Check if any row was updated
        if (updated) {
            const updatedTransaction = await Transaction.findOne({ where: { transactionid } });
            return res.status(200).json(updatedTransaction); // Return updated transaction
        }

        return res.status(404).json({ message: 'Transaction not found' }); // Handle case where transaction is not found
    } catch (error) {
        console.error('Error updating transaction:', error);
        return res.status(500).json({ error: 'Failed to update transaction' });
    }
};

// Delete a transaction by transactionid
exports.deleteTransaction = async(req, res) => {
    const { transactionid } = req.body;

    // Check if transactionid is provided
    if (!transactionid) {
        return res.status(400).json({ error: 'transactionid is required' });
    }

    try {
        const deleted = await Transaction.destroy({
            where: { transactionid }
        });

        if (deleted) {
            return res.status(204).send(); // No content to send back
        }

        return res.status(404).json({ message: 'Transaction not found' }); // Handle case where transaction is not found
    } catch (error) {
        console.error('Error deleting transaction:', error);
        return res.status(500).json({ error: 'Failed to delete transaction' });
    }
};