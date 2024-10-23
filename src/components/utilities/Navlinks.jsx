import "./navlinks.css";
const Navlinks = () => {
  const links = [
    {title: "Features", url: "#features", target: "", id : 0},
    {title: "Contacts", url: "contacts.html", target: "", id : 1},
  ];

  
  return ( 
    <div className="navlinks">
    {links.map(link => <a href={link.url} key={link.id} target={link.target}>{link.title}</a>)}
    </div>
   );
}
 
export default Navlinks;