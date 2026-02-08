export const getEntityPageController = (req, res) => {
  const { id } = req.params;
  return res.render('entity.pug', {
    env: process.env.NODE_ENV,
    id,
  });
};
