import chefClaudeLogo from "../assets/images/chef-claude-icon.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={chefClaudeLogo} alt="chef-claude-icon" />
      <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;
