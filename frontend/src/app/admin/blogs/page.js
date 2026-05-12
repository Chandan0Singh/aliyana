export default function BlogsDashboard() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Luxury Bags in 2026",
      author: "Chandan Singh",
      category: "Fashion",
      status: "Published",
      views: 1245,
      date: "13 May 2026",
    },
    {
      id: 2,
      title: "How to Style Your Handbag",
      author: "Anjali Sharma",
      category: "Style",
      status: "Draft",
      views: 320,
      date: "10 May 2026",
    },
    {
      id: 3,
      title: "Best Travel Bags for Women",
      author: "Rahul Kumar",
      category: "Travel",
      status: "Published",
      views: 890,
      date: "08 May 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Blogs Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage blogs, articles, categories and publishing status.
          </p>
        </div>

        <button className="bg-black text-white px-5 py-3 rounded-2xl shadow hover:scale-105 transition">
          + Create Blog
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">Total Blogs</p>
          <h2 className="text-4xl font-bold mt-2">84</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">Published</p>
          <h2 className="text-4xl font-bold mt-2">63</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">Drafts</p>
          <h2 className="text-4xl font-bold mt-2">21</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">Total Views</p>
          <h2 className="text-4xl font-bold mt-2">52K</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-5 rounded-3xl shadow-sm border mb-6 flex flex-col lg:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search blogs..."
          className="border rounded-xl px-4 py-3 w-full lg:w-1/3 outline-none"
        />

        <div className="flex flex-wrap gap-3">
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Categories</option>
            <option>Fashion</option>
            <option>Style</option>
            <option>Travel</option>
          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Blog Title
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Author
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Category
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Views
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Date
                </th>

                <th className="text-left p-5 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-5">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {blog.title}
                      </h3>
                    </div>
                  </td>

                  <td className="p-5 text-gray-700">
                    {blog.author}
                  </td>

                  <td className="p-5">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </td>

                  <td className="p-5 font-semibold text-gray-800">
                    {blog.views}
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        blog.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>

                  <td className="p-5 text-gray-600">{blog.date}</td>

                  <td className="p-5">
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition">
                        View
                      </button>

                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl transition">
                        Edit
                      </button>

                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition">
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

      {/* Blog Editor */}
      <div className="bg-white rounded-3xl border shadow-sm p-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <input
            type="text"
            placeholder="Blog Title"
            className="border rounded-xl px-4 py-3 outline-none"
          />

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>Select Category</option>
            <option>Fashion</option>
            <option>Style</option>
            <option>Travel</option>
          </select>
        </div>

        <textarea
          rows="8"
          placeholder="Write your blog content here..."
          className="w-full border rounded-2xl px-4 py-4 outline-none resize-none mb-5"
        ></textarea>

        <div className="flex flex-wrap gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Publish Blog
          </button>

          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}
