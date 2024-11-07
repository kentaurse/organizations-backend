const Organization = require('../models/Organization');

exports.getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};