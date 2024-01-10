exports.getPosts = (req, res, next) => {
  res.status(200).json({
    postd: [{ title: 'First Post', content: 'This is the first post' }],
  });
};
