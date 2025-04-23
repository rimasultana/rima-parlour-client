import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoFlower, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#F63E7B] text-primary-content p-10">
      <aside>
        <IoFlower className="text-5xl" />
        <p className="font-bold">
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <span>
            <IoLogoYoutube className="text-3xl"/>
          </span>

          <span>
            <FaTwitter className="text-3xl"/>
          </span>
          <span>
            <FaFacebook className="text-3xl"/>
          </span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
