const registration = require("../models/registration ");



exports.regpage = (req, res) => {
  res.render("registration");
};

exports.regdata = (req, res) => {
  const { username, email, password } = req.body;

  const form = new registration({
    regUsername: username,
    regEmail: email,
    regPassword: password,
  });
  form.save();
  res.redirect("startlogin");
};

exports.startloginpage = (req, res) => {
  res.render("startlogin");
};

exports.loginformpage = async (req, res) => {
  const { username, password } = req.body;

  const record = await registration.findOne({ regUsername: username });
  if (record!==null) {
    if (record.regPassword === password) {
        // req.session.isAuthenticated  = true
      res.redirect("/home");
    } else {
      res.redirect("startlogin");
    }
  } else {
    res.redirect("startlogin");
  }
};
