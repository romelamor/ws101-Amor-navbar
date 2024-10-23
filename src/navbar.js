import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return (

      <nav className="nav">
          <Link to="/home" className="site-title"><span>Nav</span>Bar</Link>
          <ul>
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact Us</CustomLink>
              {/* <a to="/home" className="site-title">Home</a>
              <a to="/about" className="site-title">about</a>
              <a to="/contact" className="site-title">Contact</a>  */}
          </ul>
      </nav>

  )
}


function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true})

  return (
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}