import "./navlinks.css";
const Navlinks = () => {
  const links = [
    {title: "Features", url: "#features", target: ""},
    {title: "Contacts", url: "contacts.html", target: ""},
    // {title: "Aftonbladet", url: "http://www.aftonbladet.se", target: "_blank"},
    // {title: "Helsingborgs DagbladD", url: "http://www.hd.se", target: "_blank"},
  ];

  
  return ( 
    <div className="navlinks">
    {links.map(link => <a href={link.url} target={link.target}>{link.title}</a>)}
    </div>
   );
}
 
export default Navlinks;