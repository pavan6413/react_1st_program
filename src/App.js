import './App.css';

function App() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ELECTRONIC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
        </li>      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </div>
</nav>
 
    <div className='mid'>
    <h1>We Are Electronic <br/>Engineer</h1>
    <p>Electronics is the study of electricity  (the flow of electrons) <br/> and how to  use that to build things like computers. <br/> It uses circuits that are made with parts called components and <br/> connecting wires to do useful things</p>
    <button>Explore Us</button>
    </div>
    </>
  );
}

export default App;