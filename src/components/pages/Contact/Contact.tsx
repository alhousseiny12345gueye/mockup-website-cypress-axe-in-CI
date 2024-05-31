import { useState, useEffect } from "react";
import React from "react";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";
import phoneIcon from "../../../resources/img/phone_icon.jpg";
import mailIcon from "../../../resources/img/mail_icon.png";
import buildingIcon from "../../../resources/img/building_icon.png";
import { useForm } from "react-hook-form";

const CountrySelect = ({ value, onChange, labels, ...rest }: any) => (
  <select
    {...rest}
    value={value}
    onChange={(event) => onChange(event.target.value || undefined)}
  >
    <option value="">{labels.ZZ}</option>
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {labels[country]} +{getCountryCallingCode(country)}
      </option>
    ))}
  </select>
);

const apiKey = "AIzaSyCEW_KJC71cvlxozJ82SUL32yKfXu5R6Js";

async function lookupCountry({ latitude, longitude }: any) {
  // Prefix the env file with REACT_APP for react to find it
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  const locationData = await fetch(URL).then((res) => res.json());

  const [{ address_components }] = locationData.results.filter(
    ({ types }: any) => types.includes("country")
  );

  const [{ short_name }] = address_components;

  return short_name;
}

type ContactFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  countrySelection: any;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const onSubmit = (data: ContactFormData) => alert("You submitted the form successfully");

  const [country, setCountry] = useState();

  async function handleNavigator(pos: any) {
    const { latitude, longitude } = pos.coords;

    const userCountryCode = await lookupCountry({ latitude, longitude });
    setCountry(userCountryCode);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleNavigator, () =>
      console.warn("permission was rejected")
    );
  }, [])

  return (
    <section className="lien-he">
      <div className="container">
        <div className="Module Module-218">
          <div className="ModuleContent">
            <div className="title">
              <h1 className="contactTitle">Contact</h1>
              <p className="contact-p">
                Please fill in the form below and send your comments and
                questions
              </p>
              <p className="contact-p">to FPT University. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 Module">
            <div className="ModuleContent">
              <div className="contactInfo">
                <figure className="contactFigcaption">
                  <figcaption>FPT UNIVERSITY</figcaption>
                </figure>
                <ul>
                  <li className="li-contact">
                    <a href="">
                      <img
                        className="icon_contact"
                        aria-label="University Adress"
                        title="University Address"
                        src={buildingIcon}
                      />
                      D1 Street, Saigon Hi-tech Park, Long Thanh My Ward, Thu
                      Duc City, Ho Chi Minh City{" "}
                    </a>
                  </li>
                  <li className="li-contact">
                    <a href="">
                      <img
                        className="icon_contact"
                        aria-label="Phone number"
                        title="Phone Number"
                        src={phoneIcon}
                      />
                      (028) 7300 5588
                    </a>
                  </li>
                  <li className="li-contact">
                    <a href="">
                      {" "}
                      <img
                        className="icon_contact"
                        aria-label="Email adress"
                        title="Email Address"
                        src={mailIcon}
                      />
                      daihoc.hcm@fpt.edu.vn{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 Module">
            <div className="ContactModuleContent">
              <div id="ctl00_mainContent_ctl02_pnlFormWizard">
                <div id="ctl00_mainContent_ctl02_pnlForm" className="wrap-form">
                  <div id="ctl00_mainContent_ctl02_pnlQuestions">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-6">
                          <label
                            htmlFor="fullName"
                            id="fullNameForm"
                            className="label"
                          >
                            Full name
                            <i aria-hidden="true">*</i>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            placeholder="John Doe"
                            autoComplete="John Doe"
                            aria-required="true"
                            aria-invalid={errors.fullName ? "true" : "false"}
                            aria-describedby="name-error"
                            {...register("fullName", { required: true })}
                          />
                          {errors.fullName && (
                            <div id="name-error" role="alert" className="error-message">
                              You must enter your name
                            </div>
                          )}
                        </div>
                        <div className="form-group qtext require col-md-6">
                          <label htmlFor="emailForm" className="label">
                            Email
                            <i aria-hidden="true">*</i>
                          </label>
                          <input
                            type="email"
                            id="emailForm"
                            placeholder="johndoe@example.com"
                            autoComplete="johndoe@example.com"
                            aria-required="true"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby="email-error"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <div
                              id="email-error"
                              role="alert"
                              className="error-message"
                            >
                              You must enter your email
                            </div>
                          )}
                        </div>
                        <div className="form-group qtext require col-md-6">
                          <div>
                            <label className="label" htmlFor="countrySelect">
                              Country Select
                            </label>
                            <CountrySelect
                              labels={en}
                              value={country}
                              onChange={setCountry}
                            />
                          </div>
                        </div>
                        <div className="form-group qtext require col-md-6">
                          <label htmlFor="phoneNumber" className="label">
                            Phone number
                            <i aria-hidden="true">*</i>
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            placeholder="123456789"
                            autoComplete="123456789"
                            aria-required="true"
                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                            aria-describedby="email-error"
                            {...register("phoneNumber", { required: true })}
                          />
                          {errors.phoneNumber && (
                            <div
                              id="email-error"
                              role="alert"
                              className="error-message"
                            >
                              You must enter your phone number
                            </div>
                          )}
                        </div>
                        <div className="form-group qdropdown col-md-6">
                          <label htmlFor="contactDepartment" className="label">
                            Contact department
                          </label>
                          <select id="contactDepartment">
                            <option value="Ban Tuyển sinh và Truyền thông">
                              Student Recruitment &amp; Communication Board
                            </option>
                            <option value="Phòng Công tác sinh viên">
                              Student Service Department
                            </option>
                            <option value="Phòng Phát triển cá nhân (PDP)">
                              International Relation Department
                            </option>
                            <option value="Phòng Quan hệ Quốc tế (IC)">
                              Personal Development Department
                            </option>
                            <option value="Phòng Khởi nghiệp (IS)">
                              Startup Department
                            </option>
                            <option value="Phòng Đào tạo và Khảo thí">
                              Academic Board
                            </option>
                            <option value="Phòng Công nghệ Thông tin (IT)">
                              IT Department
                            </option>
                            <option value="Ban Giám Hiệu">
                              FPTU HCM Management Board
                            </option>
                          </select>
                        </div>
                        <div className="form-group qtext col-md-12">
                          <label htmlFor="subjectForm" className="label">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subjectForm"
                            className="contactSubject"
                          />
                        </div>
                        <div className="form-group qparagraph col-md-12">
                          <label htmlFor="contentForm" className="label">
                            Content
                          </label>
                          <textarea
                            id="contentForm"
                            className="contactContent"
                          ></textarea>
                          <input
                            type="submit"
                            title="Send"
                            id="ctl00_mainContent_ctl02_btnSubmit"
                            className="buttonSubmitContact"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="frm-btn"></div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Module Module-221">
          <div className="ModuleContent"></div>
        </div>
      </div>
    </section>
  );
}
