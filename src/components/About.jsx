import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4 pb-2 textCourse">
                            Course work on the topic "MyPet"
                            <br />
                            Work of a student Soltan Roman, KN-203
                        </p>
                        <p className="lead mb-4">
                            "Every time a hospital joins our family, we honor their legacy and learn from what they've built.  We wouldn't acquire a hospital if they didn't have great story."
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
