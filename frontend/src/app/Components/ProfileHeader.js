"use client";
import { useEffect, useState } from "react";
import { FaHistory, FaUndo, FaHeadset, FaUser } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const tabs = {
  PROFILE: "Profile",
  HISTORY: "Purchase History",
  RETURNS: "Returns / Complaints",
  SUPPORT: "Customer Service",
};

const ProfileSidebarLayout = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(tabs.HISTORY);
  const [editField, setEditField] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.user.name || "",
    email: user?.user.email || "",
  });

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  // useEffect(()=>{
  //   console.log(user.user.name)
  // })

  const handleFieldClick = (field) => setEditField(field);
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleBlur = () => setEditField(null); // Save logic later

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-6 shadow-md">
        <div className="flex flex-col items-center text-center">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-3"
          />
          <h2 className="text-lg font-semibold">{formData.name}</h2>
          <p className="text-sm text-gray-500">{formData.email}</p>
        </div>

        <nav className="space-y-4 mt-6">
          {Object.entries(tabs).map(([key, label]) => (
            <SidebarItem
              key={key}
              icon={getIcon(key)}
              text={label}
              active={activeTab === label}
              onClick={() => setActiveTab(label)}
            />
          ))}
        </nav>
        {(user?.user?.role === "superadmin" ||
          user?.user?.role === "admin") && (
          <div
            className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition hover:bg-gray-100"
            onClick={() =>
              router.push(
                user?.user?.role === "superadmin"
                  ? "/superadmin/dashboard"
                  : "/admin/dashboard",
              )
            }
          >
            <span className="text-xl">
              <FaUser />
            </span>

            <span className="text-sm font-semibold">Admin Dashboard</span>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full p-6 pe-0">
        <h1 className="text-2xl font-semibold mb-4">{activeTab}</h1>

        {activeTab === tabs.HISTORY && (
          <div className="text-gray-700 space-y-3">
            <p>No purchases yet.</p>
            <p>Once you buy something, your history will show here.</p>
          </div>
        )}

        {activeTab === tabs.RETURNS && (
          <div className="text-gray-700 space-y-3">
            <p>You haven’t submitted any returns or complaints.</p>
            <p>Track future returns here.</p>
          </div>
        )}

        {activeTab === tabs.SUPPORT && (
          <div className="text-gray-700 space-y-3">
            <p>Need help?</p>
            <p>
              Email us at{" "}
              <span className="text-blue-600">support@example.com</span>
            </p>
            <p>
              Call us at <span className="text-blue-600">+91 860968260</span>
            </p>
          </div>
        )}

        {activeTab === tabs.PROFILE && (
          <div className="space-y-4">
            {/* Editable Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              {editField === "name" ? (
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                  autoFocus
                />
              ) : (
                <p
                  className="mt-1 px-3 py-2 bg-white border border-transparent rounded-md hover:border-gray-300 cursor-pointer"
                  onClick={() => handleFieldClick("name")}
                >
                  {formData.name}
                </p>
              )}
            </div>

            {/* Editable Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              {editField === "email" ? (
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                  autoFocus
                />
              ) : (
                <p
                  className="mt-1 px-3 py-2 bg-white border border-transparent rounded-md hover:border-gray-300 cursor-pointer"
                  onClick={() => handleFieldClick("email")}
                >
                  {formData.email}
                </p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, text, active, onClick }) => (
  <div
    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition ${
      active ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
    }`}
    onClick={onClick}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm">{text}</span>
  </div>
);

const getIcon = (key) => {
  switch (key) {
    case "HISTORY":
      return <FaHistory />;
    case "RETURNS":
      return <FaUndo />;
    case "SUPPORT":
      return <FaHeadset />;
    case "PROFILE":
      return <FaUser />;
    default:
      return null;
  }
};

export default ProfileSidebarLayout;
