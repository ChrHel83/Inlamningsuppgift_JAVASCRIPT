import { useState, useEffect } from "react";

const FaqList = () => {
    const [faqs, setFaqs] = useState([]);

    const FAQs = () => {
        useEffect(() => {
            fetch("https://win24-assignment.azurewebsites.net/api/faq")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setFaqs(data);
                    // console.log(data);
                });
        }, []);

      };
FAQs();
        return (

            <div className="faq-list">
              {faqs.map(faq => (
                <div className="q-card" key={faq.id}>
                <div className="question">
                    <p>{faq.title}</p>
                    <div className="btn-round">
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <div className="answer">{faq.content}</div>
            </div>

              ))}
                
            </div>
        );
};
export default FaqList;
