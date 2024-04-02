import React from 'react'
import { HiClipboard } from 'react-icons/hi2'
const Navabar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              RE sTore
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    product
                  </a>
                </li>
              </ul>

              <span>
                <HiClipboard />
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navabar
