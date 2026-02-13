import { users } from "../data/users.data.js";

export const getUsers = (req, res) => {
  const { name } = req.query;

  if (name) {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(users);
};
