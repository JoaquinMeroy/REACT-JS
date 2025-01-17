function Header() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between my-5">
        <h1 className="logo-name">Juliana</h1>
        <div className="nav-buttons-container">
          <ul className="flex">
            <li>About me</li>
            <li>Process</li>
            <li>Gallery</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
export default Header;
