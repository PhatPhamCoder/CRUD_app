// Controller
import Users from "../models/user";

// GET: http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// post : http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    } else {
      const user = await Users.create(formData);
      res.status(200).json(user);
    }
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users/1
export async function putUser(req, res) {
  try {
    const { userId } = req.query;

    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User Not Selected" });
    }
  } catch (error) {
    res.status(404).json({ error: "Error while updating the data" });
  }
}

// delete : http://localhost:3000/api/users/1
export async function deletUser(req, res) {
  try {
    const { userId } = req.query;
    console.log(userId);
    if (userId) {
      await Users.findByIdAndDelete(userId);
      res.status(200).json({ deleted: userId });
    }

    res.status(404).json({ error: "user not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while Deleting the data" });
  }
}
