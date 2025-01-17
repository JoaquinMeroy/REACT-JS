export default function Hero() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="hero-img-container">
          <img src="./src\assets\images\hero-img.svg" alt="" srcset="" />
        </div>
        <div className="greetings-container">
          <p className="text-4xl sub-header-text mb-5">
            Capturing Life in Watercolor
          </p>
          <p>
            Hi, I’m Juliana, a watercolor artist inspired by nature, fleeting
            moments, and the beauty of light and color. My work captures emotion
            and wonder, transforming simple strokes into stories that connect
            with the soul. Explore my portfolio and join me on this creative
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}
