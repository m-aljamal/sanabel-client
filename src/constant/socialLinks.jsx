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
    link: "https://www.facebook.com/SanabelAlamal.S.A.O",
    icon: function faceIcon({ className }) {
      return <GrFacebookOption className={className} />;
    },
  },
  {
    id: 2,
    link: "https://t.me/sanabesao",
    icon: function telegram({ className }) {
      return <FaTelegramPlane className={className} />;
    },
  },
  {
    id: 3,
    link: "https://www.youtube.com/channel/UCVorx5BxYaYbdE_gxDD1xXA",
    icon: function youtube({ className }) {
      return <GrYoutube className={className} />;
    },
  },
  {
    id: 4,
    link: "https://twitter.com/SanabelSAO",
    icon: function twitter({ className }) {
      return <GrTwitter className={className} />;
    },
  },
  {
    id: 5,
    link: "https://www.instagram.com/sanabelalamal.s.a.o",
    icon: function instgram({ className }) {
      return <GrInstagram className={className} />;
    },
  },
];

export default socialLinks;
