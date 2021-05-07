import React from "react"
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/Artist">
            <div>Artist</div>
        </Link>
       
        <Link to="/Search">
            <div>Search</div>
        </Link>

        </nav>
       

    )
}
export default Nav;




// import React from "react"
// import {Link} from "react-router-dom"

// const Nav = () => {
//     return (
//         <nav className="nav">
//             <Link to="/">
//                 <div>Home</div>
//             </Link>
//             <Link to="/Artist">
//             <div>Artist</div>
//         </Link>
       
//         <Link to="/Search">
//             <div>Search</div>
//         </Link>

//         </nav>
       

//     )
// }
// export default Nav;








// import React from "react"
// import {Link} from "react-router-dom"

// const Nav = () => {
//     return (
//         <nav className="nav">
//             <Link to="/">
//                 <div>Home</div>
//             </Link>
//             <Link to="/Artist">
//             <div>Artist</div>
//         </Link>
//         <Link to="/Song">
//             <div>Song</div>
//         </Link>
//         <Link to="/Search">
//             <div>Search</div>
//         </Link>

//         </nav>
//      )
// }
// export default Nav;