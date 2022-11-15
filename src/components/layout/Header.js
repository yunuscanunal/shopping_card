import React, { Fragment } from 'react';
import "../../App.css"

const Header = () => {
    return (
        <Fragment>
            <nav classname="navbar row">
                <div classname="col-12 col-md-3">
                    <div classname="navbar-brand">
                        <img src="/images/logo.png" width={100} />
                    </div>
                </div>

                <div classname="col-12 col-md-6 mt-2 mt-md-0">
                    <div classname="input-group">
                        <input
                            type="text"
                            id="search_field"
                            classname="form-control"
                            placeholder="Enter Product Name ..."
                        />
                        <div classname="input-group-append">
                            <button id="search_btn" classname="btn">
                                <i classname="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div classname="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <button classname="btn" id="login_btn">Login</button>

                    <span id="cart" classname="ml-3">Cart</span>
                    <span classname="ml-1" id="cart_count">2</span>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header