// import { Link } from "react-router-dom";
// import logo from "../assets/favi.png";
// function Navbar() {
//   return (
//     <div className="bg-primary">
//       <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid">
//           <Link className="navbar-brand cfont text-decoration-none fw-semibold">
//             <img
//               src={logo}
//               alt="Logo"
//               width="24"
//               height="24"
//               className="d-inline-block align-text-top me-2"
//             ></img>
//             Job Bee
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-light"
//                   aria-current="page"
//                   to="#"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-light"
//                   aria-current="page"
//                   to="#"
//                 >
//                   Find Freelancers
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-light"
//                   aria-current="page"
//                   to="#"
//                 >
//                   Find Jobs
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-light"
//                   aria-current="page"
//                   to="#"
//                 >
//                   For You
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-light"
//                   aria-current="page"
//                   to="#"
//                 >
//                   Learning
//                 </Link>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control w-75 rounded"
//                 type="text"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//             </form>
//             <button className="btn btn-light rounded me-3">Login</button>
//             <button className="btn btn-warning rounded">Signup</button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
// export default Navbar;

// import { Link } from "react-router-dom";
// import logo from "../assets/favi.png";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container-fluid">
//         {/* Brand */}
//         <Link
//           to="/"
//           className="navbar-brand cfont text-decoration-none fw-semibold text-light"
//         >
//           <img
//             src={logo}
//             alt="Logo"
//             width="24"
//             height="24"
//             className="d-inline-block align-text-top me-2"
//           />
//           Job Bee
//         </Link>
//         <button
//           className="navbar-toggler border-0 shadow-none"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapse */}
//         <div
//           className="collapse navbar-collapse mt-3 mt-lg-0"
//           id="navbarSupportedContent"
//         >
//           {/* Nav Links */}
//           <ul className="navbar-nav me-auto mb-3 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/freelancers">
//                 Find Freelancers
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/jobs">
//                 Find Jobs
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/for-you">
//                 For You
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/learning">
//                 Learning
//               </Link>
//             </li>
//           </ul>

//           {/* Search + Buttons */}
//           <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2">
//             <form className="d-flex w-100" role="search">
//               <input
//                 className="form-control rounded"
//                 type="text"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//             </form>

//             <Link to="/login" className="btn btn-light rounded">
//               Login
//             </Link>
//             <Link to="/signup" className="btn btn-warning rounded">
//               Signup
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link, Outlet } from "react-router-dom";
import logo from "../assets/favi.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Brand */}
          <Link
            to="/"
            className="navbar-brand cfont text-decoration-none fw-semibold text-light"
          >
            <img
              src={logo}
              alt="Logo"
              width="24"
              height="24"
              className="d-inline-block align-text-top me-2"
            />
            Job Bee
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#jobBeeNavbar"
            aria-controls="jobBeeNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop menu */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/freelancers">
                  Find Freelancers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/jobs">
                  Find Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/for-you">
                  For You
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/learning">
                  Learning
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <form className="d-flex" role="search">
                <input
                  className="form-control rounded me-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success bfont" type="submit">
                  Search
                </button>
              </form>

              <Link to="/login" className="btn btn-light rounded">
                Login
              </Link>
              <Link to="/signup" className="btn btn-warning rounded">
                Signup
              </Link>
            </div>
          </div>

          {/* Mobile offcanvas */}
          <div
            className="offcanvas offcanvas-end text-bg-light d-lg-none"
            tabIndex="-1"
            id="jobBeeNavbar"
            aria-labelledby="jobBeeNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="jobBeeNavbarLabel">
                Job Bee
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/freelancers">
                    Find Freelancers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/jobs">
                    Find Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/for-you">
                    For You
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/learning">
                    Learning
                  </Link>
                </li>
              </ul>

              <form className="d-flex my-3" role="search">
                <input
                  className="form-control rounded"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <div className="d-flex flex-column gap-2">
                <Link to="/login" className="btn btn-outline-primary">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-warning">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;