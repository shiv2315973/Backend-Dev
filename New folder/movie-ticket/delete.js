import fs from "fs";

function deleteUser(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send("Email is required to delete user");
    }

    if (!fs.existsSync("user.json")) {
      return res.status(404).send("No users found");
    }

    const users = JSON.parse(fs.readFileSync("user.json", "utf-8"));

    const updatedUsers = users.filter(user => user.email !== email);

    if (users.length === updatedUsers.length) {
      return res.status(404).send("User not found");
    }

    fs.writeFileSync("user.json", JSON.stringify(updatedUsers, null, 2));

    res.status(200).send("User deleted successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

export default deleteUser;
