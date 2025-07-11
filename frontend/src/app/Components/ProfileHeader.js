// components/ProfileSidebarLayout.js
import { FaHistory, FaUndo, FaHeadset, FaCog } from "react-icons/fa";

const ProfileSidebarLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-6 shadow-md">
        <div className="flex flex-col items-center text-center">
          <img
            src="/profile-pic.jpg" // Replace with actual user image
            alt="Profile"
            className="w-full h-24 rounded-full object-cover mb-3"
          />
          <h2 className="text-lg font-semibold">Chandan Singh</h2>
          <p className="text-sm text-gray-500 mb-4">chandan@example.com</p>
        </div>

        {/* Sidebar Menu */}
        <nav className="space-y-4 mt-6">
          <SidebarItem icon={<FaHistory />} text="Purchase History" />
          <SidebarItem icon={<FaUndo />} text="Returns / Complaints" />
          <SidebarItem icon={<FaHeadset />} text="Customer Service" />
          <SidebarItem icon={<FaCog />} text="Settings" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full p-6 pe-0">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Your Profile</h1>
        <p className="text-gray-600">
          Yahan pe tum dynamic content dikh sakte ho based on selected menu item (like Purchase History, Complaints etc.)
        </p>
        {/* Add routing or conditional rendering logic here */}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default ProfileSidebarLayout;
