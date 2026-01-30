const router = require("express").Router();
const { Project } = require("../../models");
const withAuth = require("../../utils/auth");

// TODO: POST /api/projects (logged in only)
router.post("/", withAuth, async (req, res) => {

  try {
    const { name, description, needed_funding } = req.body;

    // basic guard (optional but good)
    if (!name || !description || needed_funding == null) {
      return res.status(400).json({ message: "Missing required fields." });
    }
    
    console.log("logged_in:", req.session.logged_in);

    const newProject = await Project.create({
      name: name.trim(),
      description: description.trim(),
      needed_funding, // keep as-is; Sequelize will validate DECIMAL
      user_id: req.session.user_id,
    });
    // ? if the project is successfully created, the new response will be returned as json
    res.status(200).json(newProject);
    //res.status(501).json({ message: "Not implemented yet" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: DELETE /api/projects/:id (owner only)
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleted = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleted) {
      return res.status(404).json({ message: "No project found for this user." });
    }

    res.status(200).json({ message: "Project deleted." });
    //res.status(501).json({ message: "Not implemented yet" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
