import React from "react";
import "../../styles/contact.css";

export const Contact = () => {
  return (
    <div className="contact container-fluid">
      <div className="row p-5">
        <h2 className="library-header text-center mb-4">Contact Us</h2>
        <div className="col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              <i class="fas fa-user"></i>
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Name"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              <i class="fas fa-envelope"></i>
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div class="contact-textarea input-group">
            <textarea cols="80" rows="6" class="form-control" placeholder="Type your message here..." />
          </div>
          <button class="btn btn-warning btn-sm">Submit Your Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
