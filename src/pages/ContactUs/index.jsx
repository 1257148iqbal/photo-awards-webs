import React from "react";
import "../../assets/styles/contactus.css";

const ContactUs = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div className="col-md-8">
            <div className="form h-100">
              <h3>Contact us</h3>
              <form
                className="mb-3"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <div className="row">
                  <div className="col-md-6 form-group mb-2">
                    <input
                      type="text"
                      className="form-control text-gray"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-2">
                    
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mb-2">
                    
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-2">
                    
                    <input
                      type="text"
                      className="form-control"
                      name="sutject"
                      id="sutject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 form-group mb-2">
                    
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary rounded-0 py-2 px-4 button"
                    />
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div>
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info h-100">
              <h3>Contact Information</h3>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <span className="wrap-icon icon-room mr-3"></span>
                  <span className="text">
                    34/56, House No#23, Road No#12, Pahartali, Chittagong, Bangladesh.
                  </span>
                </li>
                <li className="d-flex">
                  <span className="wrap-icon icon-phone mr-3"></span>
                  <span className="text">+880 1813 148110</span>
                </li>
                <li className="d-flex">
                  <span className="wrap-icon icon-envelope mr-3"></span>
                  <span className="text">mywebsite.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
