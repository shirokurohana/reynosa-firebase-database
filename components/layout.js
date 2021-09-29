import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>La Familia Reynosa</title>
      </Head>
      <header>
        <nav className="navbar sticky-top bg-info navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">La Familia Reynosa</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link href="/">
                 <a className="nav-link active" aria-current="page">Home</a>
                </Link>
                </li>
                <li className="nav-item">
                  <Link href="family-members/WXsgdeHn5CE7Nweeg2dU">
                    <a className="nav-link">Esteban Reynosa</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="family-members/M7v0fuZpXJvoYvdxtDsZ">
                    <a className="nav-link">Maria Reynosa</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    See more
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <Link href="/3">
                        <a className="dropdown-item">Ofelia</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a className="btn btn-info mt-4">&#127968; Go back home</a>
          </Link>
        )
      }
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-4 text-center mt-4">
              Visit Us 
              in Santa Rosa
            </div>
            <div className="col-4 text-center mt-4">
              &#169; 2021
            </div>
            <div className="col-4 text-center mt-4">
              Our Socials
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}