import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="w-full h-0.5 bg-pink-200 mx-auto mt-4"></div>
      <div className="flex flex-wrap justify-center space-x-4 mt-6">
        {[
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/shivam-mishra-300337242/",
          },
          {
            icon: <FaGithub />,
            link: "https://www.linkedin.com/in/shivam20XX/",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* copyright  */}

      <p className="text-sm text-gray-400 mt-4 text-center">
        © 2025 Shivam Mishra. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
