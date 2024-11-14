import "./consultationsform.css";

const ConsultationsForm = () => {
  return ( 
    <div className="consultation-form">
      <div className="form-container">
      <div className="form-heading">Get Online Consultation</div>
    <form className="consulation-form" noValidate>
      <label htmlFor="fullname" className="form-label">Full Name</label>
      <input type="text" id="fullname" className="form-input" required /*value={formInput.email}*/ />

      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" id="email" className="form-input" /*value={formInput.email}*//>

      <label htmlFor="specialist" className="form-label">Specialist</label>
      <select name="specialist" id="specialist">
        <option value="designer">Designer</option>
        <option value="developer">Developer</option>
      </select>

      <button className="btn-consultation">Make an appointment</button>

    </form>
    </div>
  </div>
   );
}
 
export default ConsultationsForm;

