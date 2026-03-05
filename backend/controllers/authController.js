exports.loginUser = async (req, res) => {

  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      message: "Login successful",
      username: username
    });
  }

  return res.status(401).json({
    message: "Invalid credentials"
  });
};