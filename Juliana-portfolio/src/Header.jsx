function Header() {
  return(
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

    <div className="flex flex-wrap">
  <div className="w-full md:w-1/2 flex justify-center">
    <div className="hero-img-container">
      <img src="src/assets/images/hero-img.svg" alt="hero image" className="w-full h-auto"/>
    </div>
  </div>
  <div className="w-full sm:w-1/2 flex justify-center items-center">
    <div className="hero-img-container">
      <h1 className="sub-heading">Capturing Life in Watercolor</h1>
    </div>
  </div>
</div>
    </div>
    
  );
}
export default Header
