import "./Card.css";

const Cards = () => {
  return (
    <div className="container-cards">
      <section class="container text-center">
        <h1 className="Title"> Contact Us</h1>
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">Phone Number</h5>
                <p class="card-text">+91-904596040</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">Email</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">Fill</h5>
                <p class="card-text">Contact Form</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cards;
