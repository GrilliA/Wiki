export const getMissionPageController = (req, res) => {
  return res.render('mission.pug', {
    env: process.env.NODE_ENV,
  });
};
