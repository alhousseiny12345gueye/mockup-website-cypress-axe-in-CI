import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fpt-header" >
      <nav role="navigation">
      <a href="#main-content" className="skip-link" >Skip to main content</a>
        <section className="middle-header">
          <div className="container">
            <div className="">
              <div className="Module Module-139">
                <div className="ModuleContent">
                  <ul className="middle-header-menu">
                    <li className="active">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        </nav>
      <section className="bottom-header">
        <div className="container">
          <div className="bottom-header-wrapper">
            <div className="logo-wrapper">
              <div className="Module Module-141">
                <div className="ModuleContent">
                  <div id="eJOY__extension_root">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
