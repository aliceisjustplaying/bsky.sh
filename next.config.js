module.exports = {
  serverExternalPackages: ['bookmarkleter'],
  turbopack: {
    root: __dirname,
  },
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
};
