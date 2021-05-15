export default function Welcome() {
  return (
    <header className="masthead bg-light">
      <div>
        <iframe
          src="https://www.youtube.com/embed/ncCaVk_GhMs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        {/*
        <div className="intro-text">
          <div className="intro-lead-in">We talk about javascript</div>
          <div className="intro-heading text-uppercase">Come Join Us!</div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#about"
          >
            Tell Me More
          </a>
        </div>*/}
      </div>
    </header>
  );
}
