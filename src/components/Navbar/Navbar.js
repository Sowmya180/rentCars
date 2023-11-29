import axios from "axios";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Modal from "react-modal";
import logo from "../../components/images/logo.png";
import styles from "./Navbar.module.css";
import SignUpForm from "./SignUp";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openSignUpForm = (e) => {
    e.preventDefault();
    setShowSignUpForm(true);
    setNav(false);
  };

  const openLoginForm = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
    setNav(false);
    setShowSignUpForm(false); 
  };

  const closeSignUpForm = () => {
    setShowSignUpForm(false);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleSignUpSuccess = () => {
    alert("Account created successfully!");
    closeSignUpForm();
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("successfull");
        alert("Sucessfully Logged In");
        closeLoginForm();
        // Perform any additional actions after successful login
      } else {
        console.log("failed to login");
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  const learnMoreClickHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const LearnMoreModalContent = () => (
    <div className={styles.learnMoreModalContent}>
      <img
        src="https://cdn2.hubspot.net/hubfs/268676/2015_images/Blogging/new_car_showroom.jpg"
        alt="Car Rental"
        className={styles.modalImage}
      />
      <div className={styles.modalText}>
        <h2>Welcome to our DRIVE RENTAL SERVICES!!!</h2>
        <p>
          We are committed to providing a premium car rental experience tailored
          to meet your diverse transportation needs. Our extensive fleet
          includes a variety of vehicles, from compact cars for city exploration
          to spacious SUVs for family adventures. Whether you're planning a
          weekend getaway or a business trip, we have the perfect vehicle for
          you.
        </p>
        <p>
          Our user-friendly online platform allows you to easily browse through
          our fleet, check vehicle availability, and secure your reservation in
          just a few clicks. With competitive rental rates and flexible booking
          options, we strive to make your journey convenient and affordable.
        </p>
        <p>
          Safety is our top priority. All our vehicles undergo rigorous
          maintenance checks to ensure they meet the highest safety standards.
          We also offer optional add-ons, such as GPS navigation systems and
          child seats, to enhance your travel experience.
        </p>
        <p>
          At DRIVE RENTAL SERVICES, we believe in delivering exceptional
          customer service. Our knowledgeable and friendly staff are ready to
          assist you at every step, from reservation inquiries to vehicle
          pick-up and drop-off. We value your trust and aim to make your car
          rental experience seamless and enjoyable.
        </p>
        <p>
          Thank you for considering DRIVE RENTAL SERVICES for your
          transportation needs. We look forward to serving you and making your
          journey memorable. Feel free to explore our website for more
          information or contact our customer support for personalized
          assistance.
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="/" />
      <div>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/" onClick={learnMoreClickHandler}>
              Learn More
            </a>
          </li>
          <li>
            <a href="/" onClick={openLoginForm}>
              Login In
            </a>
          </li>
          <li>
            <a href="/" onClick={openSignUpForm}>
              Sign Up
            </a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <AiOutlineClose color="white" size={25} />
        ) : (
          <AiOutlineMenu size={25} />
        )}
      </div>
      {showSignUpForm && (
        <div className={styles.signupFormOverlay}>
          <div className={styles.signupFormContainer}>
            <SignUpForm
              onSuccess={handleSignUpSuccess}
              onClose={closeSignUpForm}
            />
          </div>
        </div>
      )}

      {showLoginForm && (
        <div className={styles.signupFormOverlay}>
          <div className={styles.signupFormContainer}>
            {/* Your login form component here */}
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Submit</button>
              <button
                onClick={closeLoginForm}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "800px",
                  bottom: "200px",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <AiOutlineClose size={25} />
              </button>
            </form>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className={styles.modal}>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Learn More Modal"
            className={styles.modal}
            overlayClassName={styles.modalOverlay}
            style={{
              content: {
                width: "100%",

                height: "75%",

                margin: "5px",
              },
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className={styles.closeButton}
              style={{ position: "absolute", top: "10px", right: "50px" }}
            >
              <AiOutlineClose size={25} />
            </button>
            <LearnMoreModalContent />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Navbar;
