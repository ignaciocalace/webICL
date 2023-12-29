import "./SocialButton.style.css";

const SocialButton = ({ href, id, svgPath, username }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className="social-btn flex-center"
    >
      {svgPath}
      <span>{username}</span>
    </a>
  );
};
export default SocialButton;
