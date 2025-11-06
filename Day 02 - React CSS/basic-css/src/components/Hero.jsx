import "./hero.css"

const Hero = () => {
  return (
    <div className="hero-parent">
      <div className='left-hero'>
        <h1>Hello I'm Vinay Begar</h1>
        <h4>Frontend Developer</h4>
      </div>
      <div className='right-hero'>
        <img
          src="https://vb-portfolio-wheat.vercel.app/images/vinay-3img.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero