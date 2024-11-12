import "./socialmediabar.css";

const SocialmediaBar = () => {
  return ( 
    <>
    <div className="socialmediaBar">
      <div className="box">
        <img src="./Public/facebook-icon.svg" alt="Facebook-icon" />
      </div>
      <div className="box">
        <img src="./Public/twitter-icon.svg" alt="twitter-icon" />
      </div>
      <div className="box">
        <img src="./Public/instagram-icon.svg" alt="instagram-icon" />
      </div>
      <div className="box">
        <img src="./Public/youtube-icon.svg" alt="youtube-icon" />
      </div>
    </div>
    </>
   );
}
 
export default SocialmediaBar;