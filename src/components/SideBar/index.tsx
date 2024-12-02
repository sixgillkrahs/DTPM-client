import monitor from "../../assets/imgs/template/monitor.svg";
import mobile from "../../assets/imgs/template/mobile.svg";
import game from "../../assets/imgs/template/game.svg";
import clock from "../../assets/imgs/template/clock.svg";
import airpod from "../../assets/imgs/template/airpod.svg";
import mouse from "../../assets/imgs/template/mouse.svg";
import musicPlay from "../../assets/imgs/template/music-play.svg";
import bluetooth from "../../assets/imgs/template/bluetooth.svg";
import clound from "../../assets/imgs/template/clound.svg";
import electricity from "../../assets/imgs/template/electricity.svg";
import cpu from "../../assets/imgs/template/cpu.svg";
import driver from "../../assets/imgs/template/driver.svg";
import devices from "../../assets/imgs/template/devices.svg";
import lamp from "../../assets/imgs/template/lamp.svg";
import airpods from "../../assets/imgs/template/airpods.svg";
import { useState } from "react";

const SideBar = () => {
  const [hidden, isHidden] = useState<boolean>(false);
  const handleOpen = () => {
    isHidden(!hidden);
  };
  return (
    <div className="sidebar-left">
      <a className="btn btn-open" onClick={handleOpen}></a>
      {hidden && (
        <ul className={hidden ? `menu-icons` : "menu-icons hidden"}>
          <li>
            <a href="javascript:void(0)">
              <img src={monitor} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src={mobile} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={game} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={clock} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={airpod} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={airpod} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={mouse} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={musicPlay} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={bluetooth} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={clound} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={electricity} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={cpu} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={devices} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={driver} alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={lamp} alt="Ecom" />
            </a>
          </li>
        </ul>
      )}
      <ul className="menu-texts menu-close">
        <li className="has-children">
          <a href="shop-grid-2.html">
            <span className="img-link">
              <img src={monitor} alt="Ecom" />
            </span>
            <span className="text-link">Computers &amp; Accessories</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Computer Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Computer Cases</a>
            </li>
            <li>
              <a href="shop-grid.html">Laptop</a>
            </li>
            <li>
              <a href="shop-grid.html">HDD</a>
            </li>
            <li>
              <a href="shop-grid.html">RAM</a>
            </li>
            <li>
              <a href="shop-grid.html">Headphone</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="#">
            <span className="img-link">
              <img src={mobile} alt="Ecom" />
            </span>
            <span className="text-link">Cell Phones</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Phone Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Phone Cases</a>
            </li>
            <li>
              <a href="shop-grid.html">Postpaid Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Unlocked Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Prepaid Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Prepaid Plans</a>
            </li>
            <li>
              <a href="shop-grid.html">Refurbished Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Straight Talk</a>
            </li>
            <li>
              <a href="shop-grid.html">iPhone</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={game} alt="Ecom" />
            </span>
            <span className="text-link">Gaming Gatgets</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Wireless Routers</a>
            </li>
            <li>
              <a href="shop-grid.html">Cool New Gadgets</a>
            </li>
            <li>
              <a href="shop-grid.html">Tech and Gadgets</a>
            </li>
            <li>
              <a href="shop-grid.html">Geek Gifts and Gadgets</a>
            </li>
            <li>
              <a href="shop-grid.html">Xbox Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">PlayStation Accessories</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={clock} alt="Ecom" />
            </span>
            <span className="text-link">Smart watches</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Smart Watches</a>
            </li>
            <li>
              <a href="shop-grid.html">Fashion Smart Watches</a>
            </li>
            <li>
              <a href="shop-grid.html">Smart Bracelets</a>
            </li>
            <li>
              <a href="shop-grid.html">Pocket Watches</a>
            </li>
            <li>
              <a href="shop-grid.html">Smart Rings</a>
            </li>
            <li>
              <a href="shop-grid.html">Other Watches</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={airpods} alt="Ecom" />
            </span>
            <span className="text-link">Wired Headphone</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">On-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Earbud & In-Ear</a>
            </li>
            <li>
              <a href="shop-grid.html">DJ Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">PC Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">PC Game Headsets</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={mouse} alt="Ecom" />
            </span>
            <span className="text-link">Mouse &amp; Keyboard</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Logitech</a>
            </li>
            <li>
              <a href="shop-grid.html">Redragon</a>
            </li>
            <li>
              <a href="shop-grid.html">Amazon Basics</a>
            </li>
            <li>
              <a href="shop-grid.html">Microsoft</a>
            </li>
            <li>
              <a href="shop-grid.html">MageGee</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={musicPlay} alt="Ecom" />
            </span>
            <span className="text-link">Headphone</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Car Audio Systems</a>
            </li>
            <li>
              <a href="shop-grid.html">Cellphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Desktops</a>
            </li>
            <li>
              <a href="shop-grid.html">Gaming Consoles</a>
            </li>
            <li>
              <a href="shop-grid.html">Telephones</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={bluetooth} alt="Ecom" />
            </span>
            <span className="text-link">Bluetooth devices</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Player Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Computer Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Speakers & Audio</a>
            </li>
            <li>
              <a href="shop-grid.html">Computer Networking</a>
            </li>
            <li>
              <a href="shop-grid.html">Movies & Films</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={clound} alt="Ecom" />
            </span>
            <span className="text-link">Cloud Software</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Android</a>
            </li>
            <li>
              <a href="shop-grid.html">Linux & Unix</a>
            </li>
            <li>
              <a href="shop-grid.html">Macintosh</a>
            </li>
            <li>
              <a href="shop-grid.html">Windows</a>
            </li>
            <li>
              <a href="shop-grid.html">iPhone & iOS</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={electricity} alt="Ecom" />
            </span>
            <span className="text-link">Electric accessories</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Antenna Toppers</a>
            </li>
            <li>
              <a href="shop-grid.html">Automotive Body Armor</a>
            </li>
            <li>
              <a href="shop-grid.html">Power Inverter</a>
            </li>
            <li>
              <a href="shop-grid.html">Gas Tank Doors</a>
            </li>
            <li>
              <a href="shop-grid.html">Hood Scoops & Vents</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={cpu} alt="Ecom" />
            </span>
            <span className="text-link">Mainboard &amp; CPU</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Computer CPU Processors</a>
            </li>
            <li>
              <a href="shop-grid.html">Internal Fans & Cooling</a>
            </li>
            <li>
              <a href="shop-grid.html">Graphics Cards</a>
            </li>
            <li>
              <a href="shop-grid.html">Network I/O Port Cards</a>
            </li>
            <li>
              <a href="shop-grid.html">Internal Memory Card</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={devices} alt="Ecom" />
            </span>
            <span className="text-link">Desktop PC</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Graphic PC</a>
            </li>
            <li>
              <a href="shop-grid.html">Office PC</a>
            </li>
            <li>
              <a href="shop-grid.html">Gaming PC</a>
            </li>
            <li>
              <a href="shop-grid.html">Server</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={driver} alt="Ecom" />
            </span>
            <span className="text-link">Speaker</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">JBL</a>
            </li>
            <li>
              <a href="shop-grid.html">Anker</a>
            </li>
            <li>
              <a href="shop-grid.html">Pyle</a>
            </li>
            <li>
              <a href="shop-grid.html">Bose</a>
            </li>
            <li>
              <a href="shop-grid.html">Logitech</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={airpod} alt="Ecom" />
            </span>
            <span className="text-link">Bluetooth Headphone</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">On-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">In-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Earbud</a>
            </li>
            <li>
              <a href="shop-grid.html">Over-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Other</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <img src={lamp} alt="Ecom" />
            </span>
            <span className="text-link">Computer Decor</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Copyholders</a>
            </li>
            <li>
              <a href="shop-grid.html">Office Bookends</a>
            </li>
            <li>
              <a href="shop-grid.html">Business Card Holders</a>
            </li>
            <li>
              <a href="shop-grid.html">Lap Desks</a>
            </li>
            <li>
              <a href="shop-grid.html">Mouse Pads</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
