import { useState } from "react";
// import { FaUser, FaPhone, FaTag, FaComment } from "react-icons/fa";
import "./ContactForm.css";

const INITIAL_FORM_DATA = {
  name: "Joe Programming",
  phone: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted:", formData);
  };

  return (
    <section className="contact-form">
      <div className="contact-form__container">
        <form
          className="contact-form__form"
          onSubmit={handleSubmit}
        >

          <div className="contact-form__fields">

            <div className="contact-form__field contact-form__field--active">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Name"
                required
              />

              {/* <FaUser className="contact-form__icon" /> */}
            </div>

            <div className="contact-form__field">
              <input
                type="tel"
                name="phone"
                placeholder="+20 1515 85 8"
                value={formData.phone}
                onChange={handleChange}
                aria-label="Phone"
                required
              />

              {/* <FaPhone className="contact-form__icon" /> */}
            </div>

            <div className="contact-form__field">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                aria-label="Subject"
                required
              />

              {/* <FaTag className="contact-form__icon" /> */}
            </div>

          </div>

          <div className="contact-form__message">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
              required
            />

            {/* <FaComment className="contact-form__icon" /> */}
          </div>

          <button
            type="submit"
            className="contact-form__button"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default ContactForm;
