import "../Components/Navbar.css";
const Navbar = () => {
  return (<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">RMCTech</a>
      <ul class="navbar-nav me-auto mb-2 px-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link ">About Us</a>
        </li>
      </ul> 
      <ul className="navbar-nav me-5 mb-lg-0">
        <li className="nav-item px-2">
            <a className="nav-link" href="" >Sign Up</a>
        </li>
        <li className="nav-item px-2">
            <a className="nav-link" href="" >Log In</a>
        </li>
        <li className="nav-item px-2">
        <button type="button" class="btn-primary">Get A Quote</button>
           
        </li>

      </ul>  
    </div>
    
  </div>
</nav>
  );
};
export default Navbar;
