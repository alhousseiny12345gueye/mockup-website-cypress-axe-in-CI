import React from "react";
import phoneIcon from "../../resources/img/phone_icon.jpg";
import mailIcon from "../../resources/img/mail_icon.png";
import buildingIcon from "../../resources/img/building_icon.png";

function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3 className="h3-footer">FTP UNIVERSITY</h3>
              <ul>
                <li>
                  <a href="">
                    {" "}
                    <img
                      className="icon"
                      aria-label="University Adress"
                      title="University Address"
                      src={buildingIcon}
                    />
                    D1 Street, Saigon Hi-tech Park, Long Thanh My Ward, Thu Duc
                    City, Ho Chi Minh City{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="">
                    <img
                      className="icon"
                      aria-label="Phone number"
                      title="Phone Number"
                      src={phoneIcon}
                    />
                    (028) 7300 5588
                  </a>{" "}
                </li>
                <li>
                  <a href="">
                    {" "}
                    <img
                      className="icon"
                      aria-label="Email adress"
                      title="Email Address"
                      src={mailIcon}
                    />
                    daihoc.hcm@fpt.edu.vn{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 items">
              <h3>Program of study</h3>
              <ul>
                <li>
                  <a href="">International Business</a>
                </li>
                <li>
                  <a href="">Information Assurance</a>
                </li>
                <li>
                  <a href="">Graphic Design</a>
                </li>
                <li>
                  <a href="">Tourism service and Travel Management</a>
                </li>
                <li>
                  <a href="">Japanese language</a>
                </li>
              </ul>
            </div>
            <div className="colsas">
              <ul>
                <li>
                  <a href="">Software Engineering</a>
                </li>
                <li>
                  <a href="">Multimedia Communication</a>
                </li>
                <li>
                  <a href="">Hotel Management</a>
                </li>
                <li>
                  <a href="">English language</a>
                </li>
                <li>
                  <a href="">Korean language</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <h3>Find us on Social Media</h3>
              <a href="" aria-label="Facebook logo" title="Facebook logo">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="" aria-label="Twitter logo" title="Twitter logo">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="" aria-label="Snapchat logo" title="Snapchat logo">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="" aria-label="Instagram logo" title="Instagram logo">
                <i className="icon ion-social-instagram"></i>
              </a>
              <p className="copyright">Copyright © FPT University</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
