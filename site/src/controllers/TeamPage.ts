export const getTeamPageController = (req, res) => {
  return res.render('team.pug', {
    env: process.env.NODE_ENV,
  });
};
