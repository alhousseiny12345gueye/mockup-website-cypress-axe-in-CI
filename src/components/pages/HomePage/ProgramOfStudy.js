import React from "react";
import IT from '../../../resources/img/information_technology.jpg'
import BA from '../../../resources/img/business_administration.jpg'
import L from '../../../resources/img/language.jpg'
import TH from '../../../resources/img/travel_hotel.jpg'
import DA from '../../../resources/img/digital.jpg'
import MC from '../../../resources/img/multimedia_communication.jpg'

function ProgramOfStudy() {
  return (
    <section className="fpt-tuyensinh-nganhdaotao">
      {" "}
      <div className="container ">
        <div className="section-wrapper">
          <div className="Module Module-261">
            <div className="ModuleContent">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="description">
                    <a href="">
                    <h1 className="h1POS">Program of Study</h1>
                    </a>
                    <p className="pPOS">
                      FPT University Academic program are designed based on the
                      consultation of experts, emphasizing the importance of
                      industry-oriented education in order to meet the need of
                      the employers on the new generation.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 item">
                  <figure>
                    <div className="img">
                      <img
                        src={BA}
                        alt=""
                        className="posIMG"
                      />
                    </div>
                    <figcaption className="posFigCaption1">
                      <h4>Business Administration</h4>
                      <ul>
                        <li className="liPOS">
                          <a href="">
                            Business Administration
                          </a>
                        </li>
                        <li className="liPOS">
                          <a href="">
                            International Business
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-6 col-md-4 col-lg-3 item">
                  <figure>
                    <div className="img">
                      <img src={IT} alt="" />
                    </div>
                    <figcaption className="posFigCaption1">
                      <h4>Information Technology</h4>
                      <ul>
                      <li className="liPOS">
                          <a href="">
                            Software Engineering
                          </a>
                        </li>
                        <li className="liPOS">
                          <a href="">
                            Information Security
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-6 col-md-4 col-lg-3 item">
                  <figure>
                    <div className="img">
                      <a href="#" aria-label="Digital Art and design">
                        <img src={DA} alt="" />
                      
                      </a>
                    </div>
                    <figcaption className="posFigCaption2">
                      <h4>Digital Art &amp; Design</h4>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-6 col-md-4 col-lg-3 item">
                  <figure>
                    <div className="img">
                      <a href="" aria-label="Multimedia communication">
                        <img
                          src={MC}
                          alt=""
                        />
                      </a>
                    </div>
                    <figcaption className="posFigCaption3">
                      <h4>
                        Multimedia
                        <br />
                        Communication
                      </h4>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-6 col-md-4 col-lg-3 item">
                  <figure>
                    {/* <div className="img"> */}
                      <img
                        src={TH}
                        alt=""
                      />
                    {/* </div> */}
                    <figcaption className="posFigCaption4">
                      <h4>Travel &amp; Hotel</h4>
                      <ul>
                      <li className="liPOS">
                          <a href="">
                            Hotel Management
                          </a>
                        </li>
                        <li className="liPOS">
                          <a href="">
                            Tourism service and Travel Management
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-6 col-md-4 col-lg-3 item">
                  <figure>
                    <div className="img">
                      <img
                        src={L}
                        alt=""
                      />
                    </div>
                    <figcaption className="posFigCaption4">
                      <h4>Language</h4>
                      <ul>
                      <li className="liPOS">
                          <a href="">
                            English Language
                          </a>
                        </li>
                        <li className="liPOS">
                          <a href="">
                            Japanese Language
                          </a>
                        </li>
                        <li className="liPOS">
                          <a href="">
                            Korean Language
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramOfStudy;
