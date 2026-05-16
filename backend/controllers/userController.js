const User = require("../models/User");

/* ---------------- GET ALL USERS ---------------- */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.log("error :", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- GET USER BY ID ---------------- */
const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- CHANGE USER ROLE ---------------- */
const changeUserRole = async (req, res) => {
  try {
    const { userId, role } = req.body;

    if (!userId || !role) {
      return res.status(400).json({
        success: false,
        message: "userId and role are required",
      });
    }

    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Role updated successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- DELETE USER ---------------- */
const deleteAccount = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- UPDATE USER ---------------- */
const updateUser = async (req, res) => {
  try {
    const { userId, name, email, role } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (role) updateData.role = role;

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- BLOCK / UNBLOCK USER ---------------- */
const blockUser = async (req, res) => {
  try {
    const { userId, status } = req.body;

    console.log("acdsc00", status);

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { status },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: status === "blocked" ? "User blocked" : "User unblocked",
      user,
    });
  } catch (error) {
    console.log("erroe :", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- SEARCH USERS ---------------- */
// const searchUsers = async (req, res) => {
//   try {
//     const { query } = req.query;

//     if (!query) {
//       return res.status(400).json({
//         success: false,
//         message: "query is required",
//       });
//     }

//     const users = await User.find({
//       $or: [
//         { name: { $regex: query, $options: "i" } },
//         { email: { $regex: query, $options: "i" } },
//       ],
//     }).select("-password");

//     return res.status(200).json({
//       success: true,
//       users,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const getFilteredUsers = async (req, res) => {
  try {
    const { search, role, status, page = 1, limit = 10 } = req.query;

    console.log("fdv : ", search, role, status);

    let query = {};

    // SEARCH
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    // ROLE FILTER
    if (role && role !== "All Roles") {
      query.role = role.toLowerCase().replace(" ", "");
    }

    // STATUS FILTER
    if (status && status !== "All Status") {
      query.status = status.toLowerCase();
    }

    // PAGINATION
    const skip = (page - 1) * limit;

    const users = await User.find(query)
      .select("-password")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const totalUsers = await User.countDocuments(query);

    return res.status(200).json({
      success: true,
      users,
      totalUsers,
      currentPage: Number(page),
      totalPages: Math.ceil(totalUsers / limit),
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* ---------------- EXPORTS ---------------- */
module.exports = {
  getAllUsers,
  getUserById,
  changeUserRole,
  deleteAccount,
  updateUser,
  blockUser,
  // searchUsers,
  getFilteredUsers,
};
