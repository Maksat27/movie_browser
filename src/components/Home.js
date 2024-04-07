import Hero from "./Hero";
import '../Home.css'; 

const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="cover-container">
        <div className="content-container">
          <h1>Movie Browser ReactJS Project</h1>
          <div className="vl"></div>
          <div  className="info-section">
            <p>
              Discover, explore, and immerse yourself in the world of cinema with our intuitive movie browser. Whether you're a cinephile, casual moviegoer, or just looking for your next film to watch, our platform provides a seamless experience to find and enjoy the perfect movie for you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
