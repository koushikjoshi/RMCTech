import "../Components/Info.css";
import Innovation from "../Assets/innovation.jpg";

const Info = () => {
  return (
    <div className="container-fluid">
      <section id="home" class="dtr-section">
        <div class="dtr-section bg-white dtr-hero-section-top-padding">
          <div class="container dtr-pb-100">
            <div class="row">
              <div class="col-12 col-md-6">
                <b class="is-hidden">
                  Beautiful design interface{" "}
                  <img
                    draggable="false"
                    role="img"
                    class="emoji"
                    alt="✨"
                    src="https://s.w.org/images/core/emoji/13.1.0/svg/2728.svg"
                    width="22"
                  />
                </b>

                <h1>Discover the smartest platform</h1>
                <p class="dtr-intro-content color-dark">
                  Css Founder Pvt Ltd. is one of the best and most trusted
                  website designing companies working with the mission "Website
                  For Everyone" that has executed hundreds of projects in
                  cutting edge web technologies for clients in USA, CANADA, UAE,
                  &amp; other continents.Our sole objective is to make our
                  clients’ website super convenient with excellent features and
                  highly intuitive visual interface.
                </p>

               
              </div>
              <div class="col-12 col-md-6 small-device-space">
                <img src={Innovation} alt="image" />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Info;
