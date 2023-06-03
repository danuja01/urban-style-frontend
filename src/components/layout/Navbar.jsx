import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/services">Our Services</a>
      <div>
        <a href="/services">
          <img src="/assets/images/us-logo.svg" alt="logo" />
        </a>
      </div>
      <a href="/contact">Contacy Us</a>
      <a href="/login">Login</a>
      <button>Book Now</button>
    </nav>
  );
};

export default Navbar;
