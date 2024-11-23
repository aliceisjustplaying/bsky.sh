module.exports = {
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
