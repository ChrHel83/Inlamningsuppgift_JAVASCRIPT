import "./logos.css";

const Logos = () => {
  return ( 
    <section className="logos" id="logos">
      <div className="container">
        {/* Möjligen ska nedanstående vara länkar till någon annan sida */}
        <div className="img-container"><img src="./public/logoipsum_1.svg" alt="Logoipsum" /></div>
        <div className="img-container"><img src="./public/logoipsum_2.svg" alt="Logoipsum" /></div>
        <div className="img-container"><img src="./public/logoipsum_3.svg" alt="Logoipsum" /></div>
        <div className="img-container"><img src="./public/logoipsum_4.svg" alt="Logoipsum" /></div>
        <div className="img-container"><img src="./public/logoipsum_5.svg" alt="Logoipsum" /></div>
        <div className="img-container"><img src="./public/logoipsum_6.svg" alt="Logoipsum" /></div>
      </div>
    </section>
   );
}
 
export default Logos;