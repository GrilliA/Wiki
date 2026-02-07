export const getContributePageController = (req, res) => {
  return res.render('contribute.pug', {
    env: process.env.NODE_ENV,
  });
};
