require('dotenv').config();
const fs = require('fs');
const convict = require('convict');

convict.addFormat(require('convict-format-with-validator').url);

const config = convict({
  env: {
    doc: 'Current Store Running Environment',
    format: String,
    default: process.env.STORE_ENV || 'dev',
    env: 'STORE_ENV'
  },
  clientId: {
    doc: 'The Kibo Application (Client) ID',
    format: String,
    default: process.env.KIBO_CLIENT_ID,
    env: 'KIBO_CLIENT_ID'
  },
  sharedSecret: {
    doc: 'Secret API Key for Kibo Application',
    format: String,
    default: process.env.KIBO_SHARED_SECRET,
    env: 'KIBO_SHARED_SECRET'
  },
  apiHost: {
    doc: 'The Kibo Storefront API URL',
    format: 'url',
    default: process.env.KIBO_API_HOST,
    env: 'KIBO_API_HOST'
  },
  accessTokenUrl: {
    doc: 'The Kibo OAuth endpoint to get an access token.',
    format: 'url',
    default: process.env.KIBO_ACCESS_TOKEN_URL || 'https://home.mozu.com/api/platform/applications/authtickets/oauth',
    env: 'KIBO_ACCESS_TOKEN_URL'
  }
});

const env = config.get('env');
const filePath = `./config/${env}.json`;
try {
  fs.readFileSync(filePath, { encoding: 'utf8' });
  config.loadFile(filePath);
} catch {
  console.warn('[Kibo: Middleware Config] Not found any configuration file, will use the ENV variable or default configuration.');
}

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
