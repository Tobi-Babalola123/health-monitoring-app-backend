import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="flex h-screen font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white">
        <h1>Hello, Tailwind!</h1>
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="w-64 bg-gray-100 p-6 flex flex-col justify-between">
    <div className="text-center mb-6">
      <img
        src="/img/avatar-placeholder.png"
        alt="User"
        className="w-16 h-16 rounded-full mx-auto"
      />
      <p className="text-gray-600 mt-2">Welcome</p>
      <h3 className="text-lg font-semibold">Tobi Babalola</h3>
    </div>
    <nav>
      <Link to="/dashboard" className="nav-item active">
        <div className="text-blue-500 font-bold flex items-center space-x-2">
          <span className="material-icons">dashboard</span>
          <span>Dashboard</span>
        </div>
      </Link>
      <Link to="/reports" className="nav-item">
        <div className="text-gray-600 flex items-center space-x-2">
          <span className="material-icons">assessment</span>
          <span>Reports</span>
        </div>
      </Link>
      <Link to="/lab-results" className="nav-item">
        <div className="text-gray-600 flex items-center space-x-2">
          <span className="material-icons">science</span>
          <span>Lab Results</span>
        </div>
      </Link>
      <Link to="/files" className="nav-item">
        <div className="text-gray-600 flex items-center space-x-2">
          <span className="material-icons">folder</span>
          <span>Files</span>
        </div>
      </Link>
      <Link to="/knowledge-base" className="nav-item">
        <div className="text-gray-600 flex items-center space-x-2">
          <span className="material-icons">school</span>
          <span>Knowledge Base</span>
        </div>
      </Link>
    </nav>
  </div>
);

const Header = () => (
  <header className="flex items-center justify-between p-6 border-b bg-white">
    <div className="flex items-center">
      <img src="/img/logo.png" alt="Heads Up Logo" className="h-10" />
    </div>
    <div className="flex space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Upgrade
      </button>
      <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">
        + Add Data
      </button>
      <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">
        Connect Data
      </button>
    </div>
  </header>
);

const DashboardContent = () => (
  <div className="p-6 grid grid-cols-3 gap-6">
    {dashboardItems.map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
      >
        <h3 className="text-gray-800 font-medium text-lg">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.date}</p>
        <div className="text-3xl text-blue-500 my-4">{item.icon}</div>
        <p className="text-gray-500">{item.value}</p>
        <Link
          to={item.link}
          className="text-blue-500 hover:underline mt-4 block"
        >
          View Summary
        </Link>
        <div className="flex justify-between mt-2">
          <button className="text-gray-400">+</button>
          <button className="text-gray-400">⋮</button>
        </div>
      </div>
    ))}
  </div>
);

const dashboardItems = [
  {
    title: "Weight (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: "🔗", // Replace with actual icon/image
    value: "pounds",
    link: "/summary/weight",
  },
  {
    title: "Body Fat (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: "🧴", // Replace with actual icon/image
    value: "%",
    link: "/summary/body-fat",
  },
  // Add more items as needed
];

export default UserDashboard;

// import React from "react";
// import "./UserDashboard.css";
// import { Link } from "react-router-dom";

// const UserDashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <DashboardContent />
//       </div>
//     </div>
//   );
// };

// const Sidebar = () => (
//   <div className="sidebar">
//     <div className="user-info">
//       <img src="/img/avatar-placeholder.png" alt="User" className="avatar" />
//       <p>Welcome</p>
//       <h3>Tobi Babalola</h3>
//     </div>
//     <nav>
//       <Link to="/dashboard" className="nav-item active">
//         Dashboard
//       </Link>
//       <Link to="/reports" className="nav-item">
//         Reports
//       </Link>
//       <Link to="/lab-results" className="nav-item">
//         Lab Results
//       </Link>
//       <Link to="/files" className="nav-item">
//         Files
//       </Link>
//       <Link to="/knowledge-base" className="nav-item">
//         Knowledge Base
//       </Link>
//     </nav>
//   </div>
// );

// const Header = () => (
//   <header className="header">
//     <div className="logo">
//       <img src="/img/logo.png" alt="Heads Up Logo" />
//     </div>
//     <div className="header-buttons">
//       <button className="upgrade-button">Upgrade</button>
//       <button className="add-data-button">+ Add Data</button>
//       <button className="connect-data-button">Connect Data</button>
//     </div>
//   </header>
// );

// const DashboardContent = () => (
//   <div className="dashboard-cards">
//     {dashboardItems.map((item, index) => (
//       <div key={index} className="dashboard-card">
//         <h3>{item.title}</h3>
//         <p>{item.date}</p>
//         <div className="card-icon">{item.icon}</div>
//         <p>{item.value}</p>
//         <Link to={item.link} className="view-summary">
//           View Summary
//         </Link>
//       </div>
//     ))}
//   </div>
// );

// const dashboardItems = [
//   {
//     title: "Weight (Manual)",
//     date: "11/03/24, 07:09 AM",
//     icon: "📏", // Replace with actual icon/image
//     value: "pounds",
//     link: "/summary/weight",
//   },
//   {
//     title: "Body Fat (Manual)",
//     date: "11/03/24, 07:09 AM",
//     icon: "📏", // Replace with actual icon/image
//     value: "%",
//     link: "/summary/body-fat",
//   },
//   // Add more items as needed
// ];

// export default UserDashboard;
