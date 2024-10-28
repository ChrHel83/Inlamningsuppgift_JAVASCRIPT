import { useState, useEffect } from "react";
import "./faqlistitem.css";

const FaqListItem = ({ content }) => {
    const [listItem, setListItem] = useState(content);

    const openQuestion = (question) => {
        document.getElementById(question).querySelector(".btn-arrow").classList.add("open");
        document.getElementById(question).lastChild.classList.add("expand");
    };
    const closeQuestion = (question) => {
        document.getElementById(question).querySelector(".btn-arrow").classList.remove("open");
        document.getElementById(question).lastChild.classList.remove("expand");
    };
    const closeAllQuestions = (question) => {
        document.querySelectorAll(".btn-arrow").forEach((btn) => {
            btn.classList.remove("open");
        });
        document.querySelectorAll(".answer").forEach((btn) => {
            btn.classList.remove("expand");
        });
    };

    const handleClick = (e) => {
        const currentQuestion = e.target.closest("article").id;
        const isOpen = document.getElementById(currentQuestion).querySelector(".btn-arrow").classList.contains('open');
closeAllQuestions();
        isOpen ? closeQuestion(currentQuestion) : openQuestion(currentQuestion);

    };

    return (
        <article className="faq-question" id={listItem.id} onClick={handleClick}>
            <div className="question">
                <span className="title">{listItem.title}</span>
                <div className="btn-arrow">
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            <div className="answer">
                <div className="expand">{listItem.content}</div>
            </div>
        </article>
    );
};
export default FaqListItem;
