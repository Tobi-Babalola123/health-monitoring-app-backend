// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import "./SignIn.css"; // Optional: Import your CSS for styling

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add signin logic here (API call, etc.)
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Redirect to a different page after signin (optional)
//     history.push("/"); // Redirect to home page or any other
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
