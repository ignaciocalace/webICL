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
      {/* <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      > */}
      {svgPath}
      {/* <path d={svgPath}></path> */}
      {/* </svg> */}
      <span>{username}</span>
    </a>
  );
};
export default SocialButton;
