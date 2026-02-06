import { Router } from "express";

export const getHomePageController = (req, res) => {
  return res.render("index.pug");
};
