export const getContactPageController = (req, res) => {
  return res.render('contact.pug', {
    env: process.env.NODE_ENV,
  });
};
