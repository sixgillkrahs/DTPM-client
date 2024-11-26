import logo from "../../assets/imgs/template/logo.svg";

const NavBar = () => {
  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <a className="d-flex" href="index.html">
                <img alt="Ecom" src={logo} />
              </a>
            </div>
            <div className="header-search">
              <div className="box-header-search">
                <form className="form-search" method="post" action="#">
                  <div className="box-category">
                    <select className="select-active select2-hidden-accessible">
                      <option>All categories</option>
                      <option value="Computers Accessories">
                        Computers Accessories
                      </option>
                      <option value="Cell Phones">Cell Phones</option>
                      <option value="Gaming Gatgets">Gaming Gatgets</option>
                      <option value="Smart watches">Smart watches</option>
                      <option value="Wired Headphone">Wired Headphone</option>
                      <option value="Mouse &amp; Keyboard">
                        Mouse Keyboard
                      </option>
                      <option value="Headphone">Headphone</option>
                      <option value="Bluetooth devices">
                        Bluetooth devices
                      </option>
                      <option value="Cloud Software">Cloud Software</option>
                    </select>
                  </div>
                  <div className="box-keysearch">
                    <input
                      className="form-control font-xs"
                      type="text"
                      value=""
                      placeholder="Search for items"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li className="has-children">
                    <a className="active" href="index.html">
                      Home
                    </a>
                    <ul className="sub-menu two-col">
                      <li>
                        <a href="index.html">Homepage - 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Homepage - 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Homepage - 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Homepage - 4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Homepage - 5</a>
                      </li>
                      <li>
                        <a href="index-6.html">Homepage - 6</a>
                      </li>
                      <li>
                        <a href="index-7.html">Homepage - 7</a>
                      </li>
                      <li>
                        <a href="index-8.html">Homepage - 8</a>
                      </li>
                      <li>
                        <a href="index-9.html">Homepage - 9</a>
                      </li>
                      <li>
                        <a href="index-10.html">Homepage - 10</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="shop-grid.html">Shop</a>
                    <ul className="sub-menu two-col">
                      <li>
                        <a href="shop-grid.html">Shop Grid</a>
                      </li>
                      <li>
                        <a href="shop-grid-2.html">Shop Grid 2</a>
                      </li>
                      <li>
                        <a href="shop-list.html">Shop list - Left sidebar</a>
                      </li>
                      <li>
                        <a href="shop-list-2.html">Shop list - Right sidebar</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth.html">Shop Fullwidth</a>
                      </li>
                      <li>
                        <a href="shop-single-product.html">Single Product</a>
                      </li>
                      <li>
                        <a href="shop-single-product-2.html">
                          Single Product 2
                        </a>
                      </li>
                      <li>
                        <a href="shop-single-product-3.html">
                          Single Product 3
                        </a>
                      </li>
                      <li>
                        <a href="shop-single-product-4.html">
                          Single Product 4
                        </a>
                      </li>
                      <li>
                        <a href="shop-cart.html">Shop Cart</a>
                      </li>
                      <li>
                        <a href="shop-checkout.html">Shop Checkout</a>
                      </li>
                      <li>
                        <a href="shop-compare.html">Shop Compare</a>
                      </li>
                      <li>
                        <a href="shop-wishlist.html">Shop Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="shop-vendor-list.html">Vendors</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-vendor-list.html">Vendors Listing</a>
                      </li>
                      <li>
                        <a href="shop-vendor-single.html">Vendor Single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="page-about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="page-careers.html">Careers</a>
                      </li>
                      <li>
                        <a href="page-term.html">Term and Condition</a>
                      </li>
                      <li>
                        <a href="page-register.html">Register</a>
                      </li>
                      <li>
                        <a href="page-login.html">Login</a>
                      </li>
                      <li>
                        <a href="page-404.html">Error 404</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.html">Blog - No Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-2.html">Blog - Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-big.html">Blog category big</a>
                      </li>
                      <li>
                        <a href="blog-single.html">
                          Blog Single - Left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-2.html">
                          Blog Single - Right sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-3.html">
                          Blog Single - No sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-shop">
              <div className="d-inline-block box-dropdown-cart">
                <span className="font-lg icon-list icon-account">
                  <span>Account</span>
                </span>
                <div className="dropdown-account">
                  <ul>
                    <li>
                      <a href="page-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="page-account.html">Order Tracking</a>
                    </li>
                    <li>
                      <a href="page-account.html">My Orders</a>
                    </li>
                    <li>
                      <a href="page-account.html">My Wishlist</a>
                    </li>
                    <li>
                      <a href="page-account.html">Setting</a>
                    </li>
                    <li>
                      <a href="page-login.html">Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="font-lg icon-list icon-wishlist"
                href="shop-wishlist.html"
              >
                <span>Wishlist</span>
                <span className="number-item font-xs">5</span>
              </a>
              <div className="d-inline-block box-dropdown-cart">
                <span className="font-lg icon-list icon-cart">
                  <span>Cart</span>
                  <span className="number-item font-xs">2</span>
                </span>
                <div className="dropdown-cart">
                  <div className="item-cart mb-20">
                    <div className="cart-image">
                      <img
                        src="assets/imgs/page/homepage1/imgsp5.png"
                        alt="Ecom"
                      />
                    </div>
                    <div className="cart-info">
                      <a
                        className="font-sm-bold color-brand-3"
                        href="shop-single-product.html"
                      >
                        2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                        SSD
                      </a>
                      <p>
                        <span className="color-brand-2 font-sm-bold">
                          1 x $2856.4
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="item-cart mb-20">
                    <div className="cart-image">
                      <img
                        src="assets/imgs/page/homepage1/imgsp4.png"
                        alt="Ecom"
                      />
                    </div>
                    <div className="cart-info">
                      <a
                        className="font-sm-bold color-brand-3"
                        href="shop-single-product-2.html"
                      >
                        2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                        SSD
                      </a>
                      <p>
                        <span className="color-brand-2 font-sm-bold">
                          1 x $2856.4
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="border-bottom pt-0 mb-15"></div>
                  <div className="cart-total">
                    <div className="row">
                      <div className="col-6 text-start">
                        <span className="font-md-bold color-brand-3">
                          Total
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="font-md-bold color-brand-1">
                          $2586.3
                        </span>
                      </div>
                    </div>
                    <div className="row mt-15">
                      <div className="col-6 text-start">
                        <a
                          className="btn btn-cart w-auto"
                          href="shop-cart.html"
                        >
                          View cart
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                          className="btn btn-buy w-auto"
                          href="shop-checkout.html"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="font-lg icon-list icon-compare"
                href="shop-compare.html"
              >
                <span>Compare</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
