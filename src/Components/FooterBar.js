import React from "react"

export default function FooterBar() {
    return (
        <div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                    >
                        <svg class="bi" width="30" height="24">
                            {/* <use xlink:href="#bootstrap" /> */} 
                        </svg>
                    </a>
                    <span class="text-muted">
                        <span style={{ color: "white" }}>
                            {/* tambahin logo dimarih */}
                            &copy; 2021 Muhammad Fathurachman
                        </span>
                    </span>
                </div>
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </li>
                    <li class="ms-3">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </li>
                    <li class="ms-3">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </li>
                    <li class="ms-3">&nbsp;</li>
                </ul>
            </footer>
        </div>
    )
}
