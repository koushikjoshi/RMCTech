import "../Components/Header.css";

const Header = () => {
  return (
    <div className="container-fluid1">
      <ul class="nav justify-content-start px-5 me-5">
        <li class="nav-item">
          <a class="nav-link"  id="headerlink">
            Find Jobs
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="headerlink">
            Hire Freelancers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="headerlink" >
            Get Ideas
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="headerlink" >
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="headerlink" >
            Resources
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default Header;
