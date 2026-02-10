import fs from "fs";

function updateUser(req, res) {
  try {
    const { email, name, password } = req.body;

    if (!email) {
      return res.status(400).send("Email is required to update user");
    }

    if (!fs.existsSync("user.json")) {
      return res.status(404).send("No users found");
    }

    const users = JSON.parse(fs.readFileSync("user.json", "utf-8"));

    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    
    if (name) {
      users[userIndex].name = name;
    }

    if (password) {
      users[userIndex].password = password;
    }

    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));

    res.status(200).send("User updated successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

export default updateUser;
