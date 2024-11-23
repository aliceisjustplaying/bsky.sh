const { withPlausibleProxy } = require('next-plausible');

module.exports = withPlausibleProxy({ customDomain: 'https://plausible.bsky.sh' })({
  async headers() {
    return [
      {
        source: '/.well-known/atproto-did',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
});
