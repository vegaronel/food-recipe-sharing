import React from 'react'

function Dashboard() {
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4 text-center">📋 Blog Posts</h1>

    <div className="space-y-6">
      {samplePosts.map((post) => (
        <div key={post.id} className="bg-white border rounded-lg shadow-sm">
          {/* Post Header */}
          <div className="flex items-center px-4 py-3">
            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h3 className="font-semibold">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>

          {/* Post Image */}
          <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />

          {/* Post Content */}
          <div className="p-4">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.description}</p>
          </div>

          {/* Actions */}
          <div className="flex justify-between p-4 border-t">
            <button className="text-blue-500 hover:underline">Edit</button>
            <button className="text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Dashboard
const samplePosts = [
  {
    id: 1,
    title: "10 React Best Practices for 2024",
    description: "Improve your React skills with these best practices to write clean and efficient code.",
    image: "https://source.unsplash.com/600x400/?technology,react",
    author: "John Doe",
    avatar: "https://i.pravatar.cc/40?img=1",
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    title: "Understanding React Router v6",
    description: "A complete guide to using React Router v6 for navigation in your React applications.",
    image: "https://source.unsplash.com/600x400/?coding,javascript",
    author: "Jane Smith",
    avatar: "https://i.pravatar.cc/40?img=2",
    date: "Feb 3, 2024",
  },
  {
    id: 3,
    title: "State Management in React: Context API vs Redux",
    description: "Learn when to use Context API and when to choose Redux for state management.",
    image: "https://source.unsplash.com/600x400/?programming,redux",
    author: "Emily Johnson",
    avatar: "https://i.pravatar.cc/40?img=3",
    date: "Feb 10, 2024",
  },
];
