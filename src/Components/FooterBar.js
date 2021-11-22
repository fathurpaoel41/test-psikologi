import React from "react"

export default function FooterBar() {
    return (
        <div style={{bottom: "0",position: "relative"}}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                    >
                        <svg className="bi" width="30" height="24">
                            {/* <use xlink:href="#bootstrap" /> */} 
                        </svg>
                    </a>
                    <span className="text-muted">
                        <span style={{ color: "white" }}>
                            {/* tambahin logo dimarih */}
                            &copy; 2021 Muhammad Fathurachman
                        </span>
                    </span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </li>
                    <li className="ms-3">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </li>
                    <li className="ms-3">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </li>
                    <li className="ms-3">&nbsp;</li>
                </ul>
            </footer>
            &nbsp;
        </div>
    )
}
