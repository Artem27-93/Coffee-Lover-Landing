import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact" className="footer-3d">
        <div className="container">
          <footer className="text-cream py-5">
            <div className="container text-center">
              <h5 className="mb-3">Контакти</h5>
              <p>📞 +38 (098) XXX-XX-XX</p>
              <p>✉️ coffeelover@example.com</p>
              <p>📍 м. Дніпро, вул. Кавоманів, 100500</p>

              <a href="https://www.instagram.com/artem_nehoda?igsh=enRqYjh6Y25heXQz" target="_blank" className="d-inline-block mt-3">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                     alt="Instagram"
                     width="24"
                     height="24"
                     className="instagram-icon"/>
              </a>
            </div>
          </footer>


        </div>
      </div>
    </div>
  );
};
