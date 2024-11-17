import { useState, useEffect, useContext } from "react";
import ReviewCard from "../utilities/ReviewCard";
import "./testimonials.css";
import { useAPI } from "./../../contexts/APIcontext.jsx"; 

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);


    const {API} = useAPI(); // Hämta URL till API:et genom useContext, början på en fetch-wrapper
    useEffect(() => {
        fetch(`${API}testimonials`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setTestimonials(data);
        });
    }, []);

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="heading">Clients are Loving Our App</h2>

                {testimonials.length > 0 ? (
                    testimonials.map((testimony) => (

                        <ReviewCard key={testimony.id} author={testimony.author}
                            jobRole={testimony.jobRole}
                            starRating={testimony.starRating} avatarUrl={testimony.avatarUrl}
                            comment={testimony.comment} />

                    ))
                ) : (
                    <h1 className="ErrorMSG">Sorry... Couldn't get the testimonials</h1>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
