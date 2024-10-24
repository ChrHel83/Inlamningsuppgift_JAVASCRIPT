import Card from "../utilities/card";
import "./appfeatures.css";

const AppFeatures = () => {
    const cards = [
        { title: "Easy Payments", icon: "public/icon-credit-card.svg", iconAlt: "icon Credit Card", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { title: "Data Security", icon: "public/icon-security.svg", iconAlt: "icon Data Security", text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non." },
        { title: "Cost Statistics", icon: "public/icon-statistics.svg", iconAlt: "icon Statistics", text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh." },
        { title: "Support 24/7", icon: "public/icon-support.svg", iconAlt: "icon Support", text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris." },
        { title: "Regular Cashback", icon: "public/icon-cashback.svg", iconAlt: "icon Cashback", text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend." },
        { title: "Top Standards", icon: "public/icon-happy.svg", iconAlt: "icon Smiley", text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu." },
    ];

    return (
        <section className="appfeatures" id="appfeatures">
            <div className="container">
                <div className="phone-container">
                    <img src="./public/iphone-and-visa.png" alt="iPhone and VISA-card" />
                </div>
                <div className="headline">App Features</div>
                <span className="features-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec
                    lacus.
                </span>

                <div className="cards">
                    {cards.map((card) => (
                        <Card title={card.title} icon={card.icon} iconAlt={card.iconAlt} text={card.text} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppFeatures;
