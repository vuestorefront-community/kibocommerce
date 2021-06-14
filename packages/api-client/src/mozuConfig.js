export default {
  api: {
    accessTokenUrl: process.env.KIBO_ACCESS_TOKEN_URL || 'https://home.mozu.com/api/platform/applications/authtickets/oauth',
    clientId: process.env.KIBO_CLIENT_ID || 'd4e9bb5.cmcmannus.1.0.0.Release',
    sharedSecret: process.env.KIBO_SHARED_SECRET || '20feabf08fb14e0b86fb5335f98661ce',
    apiHost: process.env.KIBO_API_HOST || 'https://t30295-s50527.sandbox.mozu.com'
  }
};
