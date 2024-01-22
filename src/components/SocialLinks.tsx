import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-start gap-4">
      <li className="cursor-pointer transition-all hover:text-slate-200">
        <a
          href="https://github.com/hansenlimanta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub size={30} />
        </a>
      </li>
      <li className="cursor-pointer transition-all hover:text-slate-200">
        <a
          href="https://www.linkedin.com/in/hansenlimanta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin size={30} />
        </a>
      </li>
      <li className="cursor-pointer transition-all hover:text-slate-200">
        <a
          href="https://www.instagram.com/hansen_limanta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={30} />
        </a>
      </li>
      <li className="cursor-pointer transition-all hover:text-slate-200">
        <a
          href="mailto:hansenlimanta@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail size={30} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
