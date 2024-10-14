import {Link} from'react-router-dom';

function Header(){
    return(
      
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary border-5 mb-5 pb-2">
  <div class="container-fluid">
  <a href="in28.com" className="nav-link">in@8minutes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/todo" className="nav-link">Todo</Link>
   <Link to="/logout" className="nav-link">Logout</Link>
       
      </div>
    </div>
  </div>
</nav>
        
        {/* <hr></hr> */}
      </header>
    );
  }

  export default Header;
