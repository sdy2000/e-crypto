import { Link } from "react-router-dom";
import { SocialBox } from "../../components";

const Footer = () => {
  return (
    <footer className="bg-p pt-8 mt-12">
      <div className="container px-4 py-8 grid gap-8 border-b-2 border-dfs dark:border-lfs sm:flex justify-center items-center">
        <div className="flex flex-col gap-12 sm:w-[50%]">
          <Link to="/" className="sm:text-start text-p text-2xl font-black">
            <span className="text-silver">E</span>
            Crypto
          </Link>
          <p className="sm:text-start text-sm text-s">
            Learn about Web accessibility, Web performance, and Database
            management.
          </p>
        </div>

        <div className="text-s sm:w-[25%]">
          <p className="text-xl text-p font-bold mb-4">Quick Links</p>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                Advertise with us
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-s sm:w-[25%]">
          <p className="text-xl text-p font-bold mb-4">Legal Stuff</p>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Terms Of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 pb-3 md:hidden">
        <SocialBox
          styles={"social-icons flex items-center justify-center gap-5"}
        />
      </div>
      <p className="text-lfp dark:text-dfp text-center pb-4 md:mt-4 flex flex-col gap-2">
        <span>
          &copy; Copyright 2023{" "}
          <a href="/#">
            <span className="text-silver">E</span> Crypto
          </a>
        </span>
        <span className="text-lfp dark:text-dfp font-bold">
          Create By <span className="text-red-300">sajad.D</span>
        </span>
      </p>
    </footer>
  );
};
export default Footer;
