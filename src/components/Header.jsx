import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">{storeName}</h1>

        <nav className="header__nav">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
