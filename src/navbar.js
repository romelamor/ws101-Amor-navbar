export default function Navbar() {
  return (

      <nav className="nav">
          <CustomLink href="/home" className="site-title"><span>Nav</span>Bar</CustomLink>
          <ul>
              <CustomLink href="/home">Home</CustomLink>
              <CustomLink href="/about">About</CustomLink>
              <CustomLink href="/contact">Contact Us</CustomLink>
              {/* <a href="/home" className="site-title">Home</a>
              <a href="/about" className="site-title">about</a>
              <a href="/contact" className="site-title">Contact</a>  */}
          </ul>
      </nav>

  )
}


function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname

  return (
      <li className={path === href ? "active" : ""}>
          <a href={href} {...props}>
              {children}
          </a>
      </li>
  )
}