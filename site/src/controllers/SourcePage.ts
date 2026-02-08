export const getSourcePageController = (req, res) => {
  const { id } = req.params;
  return res.render('source.pug', {
    env: process.env.NODE_ENV,
    id,
  });
};
