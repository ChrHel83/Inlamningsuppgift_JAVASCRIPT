import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import React from "react";
import "./contacts.css";
import ConsultationsForm from "../components/utilities/ConsultationsForm";
import Locations from "../components/utilities/Locations";
import SocialmediaBar from "../components/utilities/SocialmediaBar";

const Contacts = () => {
    return (
        <>
            <Breadcrumb />
            <section className="contacts">
                <div className="container">
                    <div className="heading">Contact Us</div>

                    <div className="card">
                        <div className="round-icon">
                            <img src="./public/bx-envelope.svg" alt="People" />
                        </div>
                        <div>
                            <div className="headline-2">Email Us</div>
                            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                            <div className="link">
                                Leave a message<i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="round-icon">
                            <img src="./public/add_users.svg" alt="People" />
                        </div>
                        <div>
                            <div className="headline-2">Careers</div>
                            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                            <div className="link">
                                Send an application<i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <ConsultationsForm />
                </div>
            </section>
            <section className="locations">
                <div className="container">
                    <div className="map">
                      <img className="position1" src="./public/position.svg" alt="position" />
                      <img className="position2" src="./public/position.svg" alt="position" />
                      
                      </div>
                    <div className="content">
                      <Locations />

                        <SocialmediaBar />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
