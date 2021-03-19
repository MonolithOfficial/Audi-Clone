import logo from './logo.svg';
import audi_c4 from './images/audi_c4.jpg'
import audiAvus from "./images/audiavus.jpg"

import './styles/common.scss';
import './styles/landing.scss';

import Header from "./components/Header";
import TopNav from "./components/TopNav"
import ZoomableImage from "./components/ZoomableImage"
import PostBunch from "./components/PostBunch"

function App() {
  if (window.navigator.geolocation) {
      console.log("GEOLOC AVAILABLE")
   } 
  return (
    <div className="App">
      <Header />
      <TopNav />

      <section className="landingSectionOne">
          <ZoomableImage image={audiAvus} alt={audiAvus.toString} contentAllowed="true"
            heading="Being Ahead Through Technology"
             paragraph="An interview with Elin Sinervo,
              Director Audi Norway about
              the European vehicle market of the future."
          />
      </section>
      <section className="landingSectionTwo">

      <div className="landingHeadText">
        <h1 className="landingHeading">The world of Audi</h1>
        <p className="landingParagraph">Discover Audi as a brand, company and employer on our international website. Here you will find information about models and technologies. Inspiring content, interesting backgrounds and fascinating moments – digital, individual and authentic. Experience our vision of mobility and let yourself be inspired.</p>

      </div>
        <PostBunch />

      </section>
      <section className="landingSectionThree">
        <div className="attitudePart">
          <div className="imageHolder">
              <ZoomableImage image={audi_c4} contentAllowed="false"/>
          </div>
          <div className="attitudeContent">

          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
