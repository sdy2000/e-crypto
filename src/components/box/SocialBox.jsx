import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SocialBox = ({ styles }) => {
  return (
    <ul className={styles}>
      <li>
        <a href="/#">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="/#">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="/#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="/#">
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a href="/#">
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default SocialBox;
