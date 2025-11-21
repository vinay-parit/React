import "./header.css"
import LeftNav from "./LeftNav"
import RightNav from "./RightNav"

const Header = () => {
  return (
    <div className="header-parent">
      <LeftNav />
      <RightNav />
    </div>
  );
}

export default Header