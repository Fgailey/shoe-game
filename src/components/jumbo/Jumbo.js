import React from "react";

const Jumbo = () => {
  return (
    <div>
        <div className="jumbotron">
        <h1 className="display-4">Hello, Nzuri Fam!</h1>
        <img src="/assets/images/other/bradley.jpg" alt="bradley"></img>
        <p className="lead">Here at Nzuri we believe in two absolutes in the world. The quality of our product and the quality of our customers. </p>
        <hr className="my-4" />
        <p>Click below to see exclusive content to join the Nzuri Fam.</p>
        <a className="btn btn-primary btn-lg" href="/store" role="button">Learn more</a>
        </div>
        
    </div>

  );
}

export default Jumbo;

