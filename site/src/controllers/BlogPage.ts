export const getBlogPageController = (req, res) => {
  return res.render('blog.pug', {
    env: process.env.NODE_ENV,
  });
};
