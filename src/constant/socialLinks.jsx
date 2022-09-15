import {
  GrFacebookOption,
  GrYoutube,
  GrInstagram,
  GrTwitter,
} from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";

export const socialMediaIcons = {
  facebook: <GrFacebookOption className="socialIconCases " />,
  twitter: <GrTwitter className="socialIconCases" />,
  instagram: <GrInstagram className="socialIconCases" />,
  youtube: <GrYoutube className="socialIconCases" />,
  telegram: <FaTelegramPlane className="socialIconCases" />,
};

const socialLinks = [
  {
    id: 1,
    link: "",
    icon: function faceIcon({ className }) {
      return <GrFacebookOption className={className} />;
    },
  },
  {
    id: 2,
    link: "",
    icon: function telegram({ className }) {
      return <FaTelegramPlane className={className} />;
    },
  },
  {
    id: 3,
    link: "",
    icon: function youtube({ className }) {
      return <GrYoutube className={className} />;
    },
  },
  {
    id: 4,
    link: "",
    icon: function twitter({ className }) {
      return <GrTwitter className={className} />;
    },
  },
  {
    id: 5,
    link: "https://www.facebook.com/",
    icon: function instgram({ className }) {
      return <GrInstagram className={className} />;
    },
  },
];

export default socialLinks;
