const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  archived_at: { type: Date, default: null },
  avatar_url: { type: String, required: true },
  bid: { type: Number, default: 0 },
  blog: { type: String, default: null },
  company: { type: String, default: null },
  created_at: { type: Date, required: true },
  description: { type: String, default: null },
  email: { type: String, default: null },
  events_url: { type: String, required: true },
  followers: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  has_organization_projects: { type: Boolean, default: false },
  has_repository_projects: { type: Boolean, default: false },
  hooks_url: { type: String, required: true },
  html_url: { type: String, required: true },
  id: { type: String, required: true },
  is_verified: { type: Boolean, default: false },
  issues_url: { type: String, required: true },
  languages: { type: [String], default: [] },
  links: { type: [String], default: [] },
  location: { type: String, default: null },
  login: { type: String, required: true },
  members_url: { type: String, required: true },
  name: { type: String, required: true },
  node_id: { type: String, required: true },
  peopleCount: { type: Number, default: 0 },
  projectCount: { type: Number, default: 0 },
  public_gists: { type: Number, default: 0 },
  public_members_url: { type: String, required: true },
  public_repos: { type: Number, default: 0 },
  repos_url: { type: String, required: true },
  repositoryCount: { type: Number, default: 0 },
  topics: { type: [String], default: [] },
  twitter_username: { type: String, default: null },
  type: { type: String, required: true },
  updated_at: { type: Date, required: true },
  url: { type: String, required: true }
});

// Create the model from the schema
const Organization = mongoose.model('Organization', organizationSchema);

// Export the model
module.exports = Organization;
