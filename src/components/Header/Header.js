import "./Header.css";

const Header = () => {
  return (
    <em onClick={() => window.scroll(0, 0)} className="header">
      Movies and Chill
    </em>
  );
};

export default Header;
