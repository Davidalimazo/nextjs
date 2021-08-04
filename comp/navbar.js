import Link from 'next/link'

const Navbar = () => {
    return (
      <div>
        <header>
          <div className="logo">
            <Link href="/">
              <a>LOGO</a>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
              <Link href="/"><a className="active">
                  Home
                </a>
                 </Link>
              </li>
              <li>
               <Link href="/"><a >Add Name</a></Link>
              </li>
              <li>
                 <Link href="/about"><a>Contact</a></Link>
              </li>
            </ul>
          </nav>
          <div className="toggler">&#9776;</div>
        </header>
      </div>
    );
}
 
export default Navbar;