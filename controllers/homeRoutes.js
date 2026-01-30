const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [{ model: User, attributes: ["name"] }],
      order: [["date_created", "DESC"]],
    });
    const projects = projectData.map((p) => p.get({ plain: true }));

    res.render("home", {
      projects,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["name"] }],
    });

    if (!projectData)
      return res
        .status(404)
        .render("404", { logged_in: req.session.logged_in });

    const project = projectData.get({ plain: true });
    res.render("project", {
      project,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // TODO: If logged in, redirect to /profile
   if (req.session.logged_in) {
    return res.redirect("/profile");
  }
  res.render("login");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [Project],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      name: user.name,
      projects: user.projects,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
