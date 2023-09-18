// import { useState } from "react";
// import { CgFileDocument } from 'react-icons/cg'
// import resume from "../../assets/Om-Kanta-Prasad-Yadav.pdf";
// const handleResume = () => {
//     openResume();
  
//     let alink = document.createElement("a");
//     alink.href =resume
//     alink.download = "Om-Kanta_prasad_Yadav.pdf";
//     alink.click();
//   };

//   const openResume = () => {
//     window.open(
//       "https://drive.google.com/file/d/14CLHdvT2dJQNH2dMDItfn_Ih8uvYn2SG/view?usp=sharing"
//       );
//   };

// const Navbar = () => {

//     const [Navbar, setNavbar] = useState("#");

//     return (
//         <div id="nav-menu">
//             <nav>
//                 <a href="#" onClick={() => setNavbar("#nav-link home")} className={activeNav === "#nav-link home" ? "active" : ""}>Home</a>

//                 <a href="#" onClick={() => setNavbar("#nav-link about")} className={activeNav === "#nav-link about" ? "active" : ""}>About</a>

//                 <a href="#" onClick={() => setNavbar("#nav-link skills")} className={activeNav === "#nav-link skills" ? "active" : ""}>Skills</a>

//                 <a href="#" onClick={() => setNavbar("#nav-link projects")} className={activeNav === "#nav-link projects" ? "active" : ""}>Projects</a>

//                 <a href="#" onClick={() => setNavbar("#nav-link contact")} className={activeNav === "#nav-link contact" ? "active" : ""}>Contact</a>

//                 <a onClick={handleResume} target="_blank" className="nav-link resume"><CgFileDocument />Resume</a>
//             </nav>
//         </div>
//     )
// }

// export default Navbar