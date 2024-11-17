import React, { useState } from "react";
import "./consultationsform.css";
import { useAPI } from "./../../contexts/APIcontext.jsx"; 
// import { v4 as uuidv4 } from "uuid";

const ConsultationsForm = () => {
    const [options, setOptions] = useState([
        { id: 1, specialist: "Developer" },
        { id: 2, specialist: "Designer" }
    ]);
    const [formInput, setFormInput] = useState({ fullName: "", email: "", specialist: options[0].specialist, });
    const [errorsFullname, setErrorsFullname] = useState({});
    const [errorsEmail, setErrorsEmail] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const {API} = useAPI(); // Hämta URL till API:et genom useContext, början på en fetch-wrapper

    const validateFullnameField = (name, value) => {
        const error = {};

        if (name === "fullName" && !/^[a-ÖA-ö\s\-]{3,}$/.test(value)) {
            error.name = "Name must be at least 3 letters, no numbers.";
        }
        setErrorsFullname(error);
    };
    const validateEmailField = (name, value) => {
        const error = {};

        if (name === "email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/.test(value)) {
            error.name = "Email must be in format x@x.x";
        }
        setErrorsEmail(error);
    };

    const validateFullname = () => {
        const newErrors = {};

        if (!/^[a-ÖA-ö\s\-]{3,}$/.test(formInput.fullName)) {
            newErrors.name = "Fullame must be at least 3 characters, no numbers";
        }
        setErrorsFullname(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateEmail = () => {
        const newErrors = {};

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/.test(formInput.email)) {
            newErrors.name = "Email must be in format x@x.x";
        }
        setErrorsEmail(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name)
        validateFullnameField(name, value);
        validateEmailField(name, value);
        setFormInput({ ...formInput, [name]: value });
    };

    const handleClick = () => {
        setSubmitted(false);
        setFormInput({ fullName: "", email: "", specialist: options[0].specialist, });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateFullname() && validateEmail()) {
            fetch(`${API}contacts`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formInput),
            }).then((res) => {
                if (res.ok) {
                    setSubmitted(true);

                }
            })
            .catch((err) => {
                console.log(err)
            })

        }
    };

    if (submitted) {
        return (
            <div className="consultation-form">
                <div className="consultation-wrapper" onClick={handleClick}>
                    <h1 className="y-0">Thank you for contacting us!</h1>
                    <h3 className="y-1">We will get back to you as soon as we can.</h3>
                    <h5 className="y-2">Check your inbox for reference-number to your request</h5>
                    <h5 className="y-0">Name: {formInput.fullName}</h5>
                    <h5 className="y-0">Email: {formInput.email}</h5>
                    <h5 className="y-0">Specialist: {formInput.specialist}</h5>
                    <h6>Click here to close box</h6>
                </div>
            </div>
        );
    }

    return (
        <div className="consultation-form">
            <div className="form-container">
                <div className="form-heading">Get Online Consultation</div>
                <form className="consulation-form" onSubmit={handleSubmit} noValidate>
                    <div className="input-group">
                        <label htmlFor="fullName" className="form-label">
                            Full Name
                            <div className="error-message">{errorsFullname.name}</div>
                        </label>
                        <input type="text" name="fullName" id="input-fullname" onChange={handleChange} className="form-input" required value={formInput.fullName} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email" className="form-label">
                            Email address
                            <div className="error-message">{errorsEmail.name}</div>
                        </label>
                        <input type="email" name="email" onChange={handleChange} className="form-input" value={formInput.email} />
                    </div>
                    <label htmlFor="specialist" className="form-label">
                        Specialist
                    </label>
                    <select id="selectSpecialist" name="specialist"value onChange={handleChange} required>
                        {options.map((option) => (
                            <option key={option.id} value={option.specialist}>
                                {option.specialist}
                            </option>
                        ))}
                    </select>

                    {/* <input type="hidden" name="refnum" className="refnum" value={uuid} /> */}

                    <button className="btn-consultation">Make an appointment</button>
                </form>
            </div>
        </div>
    );
};

export default ConsultationsForm;
