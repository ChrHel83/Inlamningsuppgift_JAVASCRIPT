import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <section className="breadcrumb">
            <div className="container">
                {/* <h1>{pathnames[pathnames.length - 1]?.replace(/-/g, " ") || "Home"}</h1> */}

                <div className="first-item">
                    <Link className="link" to="/">
                        <i className="fa-solid fa-house"></i>Homepage{" "}
                    </Link>
                </div>

                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                    return <div key={to}><i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i>{index === pathnames.length - 1 ? <span className="link">{value.replace(/-/g, " ")}</span> : <Link className="link" to={to}>{value.replace(/-/g, " ")}</Link>}</div>;
                })}
            </div>
        </section>
    );
};

export default Breadcrumb;
