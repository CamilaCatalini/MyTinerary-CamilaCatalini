import CardWelcome from "../../components/CardWelcome/CardWelcom";
import IndividualIntervalsExample from "../../components/CarouselWelcome/CarouselWelcome"
import './home.css'

const Home = () => {
  return (
      <>
        <section className="parallax s-1">
          <CardWelcome />
        </section>
        <section className="parallax s-2 py-5">
          <h2>Popular Mytineraries</h2>
          <IndividualIntervalsExample />
        </section>
      </>
  );
  
};

export default Home;