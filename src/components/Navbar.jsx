import React from 'react'

const Navbar = () => {
  return (

    <div className="container-fluid">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">

            <nav class="navbar navbar-expand-lg bg-primary ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Employee App</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link " aria-current="page" href="/">Home</a>
                                <a class="nav-link " aria-current="page" href="./Form">Add Employee</a>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    </div>
</div>

  )
}

export default Navbar