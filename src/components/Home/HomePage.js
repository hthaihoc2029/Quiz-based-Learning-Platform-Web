import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* must muted if want to autoPlay */}
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          Welcome to BKQuiz! 🌟 Unleash your creativity and challenge your
          friends, family, or even the world with custom quizzes crafted by you!
          Whether it's trivia, personality tests, or brain teasers, create and
          share your quizzes effortlessly. Dive in and let the games begin!
        </div>
        <div className="title-3">
          {isAuthenticated === true ? (
            <button onClick={() => navigate("/users")}>Doing Quiz now</button>
          ) : (
            <button onClick={() => navigate("/login")}>
              Get's started. It's free!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
