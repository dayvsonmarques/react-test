import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return(
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <p className="title-404">404</p>
                        <p className="subtitle-404">Page Not Found!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/">Back to home!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;