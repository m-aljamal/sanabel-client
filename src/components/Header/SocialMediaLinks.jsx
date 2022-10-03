import { Container } from "../Container";
import socialLinks from "@/constant/socialLinks";

const SocialMediaLinks = () => {
  return (
    <nav className="hidden md:block border-b" style={{ direction: "ltr" }}>
      <Container>
        <ul className="flex divide-x w-fit border-r border-l ">
          {socialLinks.map((s) => (
            <a href={s.link} target="_blank" rel="noreferrer" key={s.id}>
              <li className="p-3 group">
                <s.icon className="socialIconHeader" />
              </li>
            </a>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default SocialMediaLinks;
