import QR from "../../assets/footer/QR_code.png";
import { SocialIcon } from "react-social-icons";
const socialLinks = [
  "https://www.linkedin.com/company/calstatela-baja-sae/",
  "https://twitter.com/calstatelabaja1",
  "https://www.facebook.com/calstatelabaja/",
  "https://www.instagram.com/calstatelabajasae/",
  "https://www.youtube.com/user/CSULAbajaSAE",
];
const Footer = () => (
  <footer className="w-full md:h-80 h-100% bg-black p-10 md:p-12 text-indigo-50 flex flex-col md:flex-row md:justify-between justify-evenly">
    <div className="flex flex-1 w-full md:flex-row flex-col p-10 md:p-0">
      <img
        src={QR}
        alt="qr code"
        className="md:h-1/2 w-1/2 md:w-auto h-auto mx-auto my-auto "
      />
      <div className="flex-1 w-full flex flex-col h-full p-5 md:justify-center md:items-start items-left ">
        <p className="text-left">Want to join the team?</p>
        <p className="text-left">Scan the QR code to join!</p>
      </div>
    </div>
    <div className="flex-1 w-full flex md:justify-center items-center h-full p-2 justify-evenly ">
      {socialLinks.map((url) => (
        <SocialIcon key={url} fgColor="white" url={url} className="md:mx-3" />
      ))}
    </div>
    <div className="flex-1 md:text-right text-left px-5 md:px-0">
      <p className="text-2xl">Cal State LA Baja SAE</p>
      <p>5151 State University Drive</p>
      <p>Los Angeles, CA 90032</p>
      <p>ECST B-15</p>
      <p>csulabajasae@gmail.com</p>
    </div>
  </footer>
);
export default Footer;
