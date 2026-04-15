import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Indulge in Exceptional Flavors, Delivered to You</h2>
        <p>
          Explore a curated selection of mouthwatering dishes, crafted with
          premium ingredients and unmatched culinary passion. From local
          favorites to gourmet delights, every bite is designed to satisfy your
          cravings and elevate your dining experience.
        </p>
        <a href="#explore-menu">
          <button>Display Options</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
