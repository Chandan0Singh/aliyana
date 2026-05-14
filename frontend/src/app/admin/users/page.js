"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/user/users",
        );

        setUsers(data.users);
      } catch (error) {
        console.log("error : ", error);
      }
    };

    fetchUser();
  }, []);

  const handleUserStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "blocked" : "active";

    try {
      const { data } = await axios.put("http://localhost:5000/api/user/block", {
        userId: id,
        status: newStatus,
      });

      setUsers((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, status: newStatus } : user,
        ),
      );
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleChangeRole = async (id, currentRole) => {
    try {
      const { data } = await axios.put("http://localhost:5000/api/user/role", {
        userId: id,
        role: currentRole,
      });

      console.log("role response :", data);

      // update UI instantly
      setUsers((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, role: currentRole } : user,
        ),
      );
    } catch (error) {
      console.log("error :", error);
    }
  };

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const { data } = await axios.delete(
        "http://localhost:5000/api/user/delete",
        {
          data: {
            userId: id,
          },
        },
      );

      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.log("error : ", error);
    }
  };

  console.log("userList : ", users);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Users Dashboard</h1>

          <p className="text-gray-500 mt-2">
            Manage all users, roles, permissions and account status.
          </p>
        </div>

        <button className="bg-black text-white px-5 py-3 rounded-2xl shadow hover:scale-105 transition">
          + Add New User
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-4xl font-bold mt-2">177</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <p className="text-gray-500 text-sm">Active Users</p>
          <h2 className="text-4xl font-bold mt-2">162</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <p className="text-gray-500 text-sm">Blocked Users</p>
          <h2 className="text-4xl font-bold mt-2">15</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <p className="text-gray-500 text-sm">Admins</p>
          <h2 className="text-4xl font-bold mt-2">3</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-5 rounded-3xl shadow-sm border mb-6 flex flex-col lg:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search users..."
          className="border rounded-xl px-4 py-3 w-full lg:w-1/3 outline-none"
        />

        <div className="flex flex-wrap gap-3">
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Roles</option>
            <option>User</option>
            <option>Admin</option>
            <option>Super Admin</option>
          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Blocked</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  User
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Role
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Joined
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users?.map((user) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg">
                          {user.name}
                        </h3>

                        <p className="text-gray-500 text-sm">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-5">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      {user.role}
                    </span>
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="p-5 text-gray-600">
                    {new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  <td className="p-5">
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl transition">
                        Edit
                      </button>
                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleChangeRole(user._id, e.target.value)
                        }
                        className="bg-[#C084FC] hover:bg-[#4C1D95user] text-white px-4 py-2 rounded-xl transition outline-none cursor-pointer"
                      >
                        <option value="user" className="text-black">
                          User
                        </option>

                        <option value="admin" className="text-black">
                          Admin
                        </option>

                        <option value="superadmin" className="text-black">
                          Super Admin
                        </option>
                      </select>
                      {user.status === "Active" ? (
                        <button
                          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl transition"
                          onClick={() =>
                            handleUserStatus(user._id, user.status)
                          }
                        >
                          Block
                        </button>
                      ) : (
                        <button
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
                          onClick={() =>
                            handleUserStatus(user._id, user.status)
                          }
                        >
                          Unblock
                        </button>
                      )}

                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-gray-500 text-sm">Showing 1 to 10 of 177 users</p>

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-xl bg-white hover:bg-gray-100 transition">
            Previous
          </button>

          <button className="border px-4 py-2 rounded-xl bg-black text-white">
            1
          </button>

          <button className="border px-4 py-2 rounded-xl bg-white hover:bg-gray-100 transition">
            2
          </button>

          <button className="border px-4 py-2 rounded-xl bg-white hover:bg-gray-100 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
