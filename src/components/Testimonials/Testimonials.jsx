import { useState, useEffect } from "react";
import ReviewCard from "../utilities/ReviewCard";
import "./testimonials.css";
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
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
                {testimonials.map((testimony) => (
              
                <ReviewCard
                author={testimony.author}
                  jobRole={testimony.jobRole}
                  starRating={testimony.starRating} avatarUrl={testimony.avatarUrl}
                  comment={testimony.comment}
              />          
                ))}

            </div>
        </section>
    );
};

export default Testimonials;
