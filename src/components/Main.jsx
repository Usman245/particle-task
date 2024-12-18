import {useState,useRef,useEffect} from "react";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const cards = [
    {
      title: "Free",
      subtitle: "Discover Brevo",
      price: "$0",
      period: "/month",
      button: "Sign Up",
      featuresTitle: "Everything is in free:",
      features: [
        "300 emails/day",
        "Customizable email templates",
        "Drag & drop editor",
        "Transactional (API, SMTP, Webhooks)",
        "SMS & WhatsApp campaigns",
      ],
    },
    {
      title: "Starter",
      subtitle: "Ideal for growing businesses",
      price: "$8.08",
      period: "/month",
      button: "Sign Up",
      featuresTitle: "Everything is in free:",
      features: [
        "From 5,000 emails/month",
        "No daily sending limit",
        "No Brevo logo (add-on)",
        "Basic reporting & analytics",
        "24/7 email support",
      ],
    },
    {
      title: "Business",
      subtitle: "MOST POPULAR",
      price: "$16.17",
      period: "/month",
      button: "Sign Up",
      featuresTitle: "Everything is in free:",
      features: [
        "From 5,000 emails/month",
        "Marketing automation",
        "Predictive sending",
        "Multi-user access (add-on)",
        "Landing pages",
        "A/B testing",
        "Advanced statistics",
        "Phone support",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Tailored solutions to fit your needs",
      price: "Custom price",
      period: "",
      button: "Get a demo",
      featuresTitle: "Everything is in free:",
      features: [
        "Unlimited contacts",
        "Sub-account management",
        "Advanced integrations",
        "Exclusive features",
        "Tailored onboarding",
        "Personalized support",
        "Enterprise-grade security",
      ],
    },
  ];
  const [coords, setCoords] = useState(cards.map(() => ({ x: 0, y: 0 })));

  // Function to handle mouse movement
  const handleMouseMove = (index, event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left; // X position relative to the card
    const y = event.clientY - rect.top; // Y position relative to the card

    // Update only the hovered card's coordinates
    setCoords((prevCoords) => {
      const newCoords = [...prevCoords];
      newCoords[index] = { x, y };
      return newCoords;
    });
  };
console.log(coords.x, coords.y);



  return (
    <div className="pricing-container">
      {cards.map((card, index) => (
        <div
          className={`card ${card.title === "Business" ? "popular" : ""}`}
          key={index}     onMouseMove={(event) => handleMouseMove(index, event)}
          onMouseLeave={() =>
            setCoords((prevCoords) => {
              const newCoords = [...prevCoords];
              newCoords[index] = { x: 0, y: 0 }; // Reset on mouse leave
              return newCoords;
            })
          }
          style={{
            "--x": `${coords[index].x}px`,
            "--y": `${coords[index].y}px`,
          }}
        >
          <div className="section1">
            <div className="subsection1">
              <h2 className="card-title">{card.title}</h2>
              <h3 className="card-subtitle">{card.subtitle}</h3>
            </div>
            <div className="subsection2">
              <div className="card-price">
                <span>{card.price}</span>
                <span className="card-period">{card.period}</span>
              </div>
              <button className="card-button">{card.button}</button>
            </div>
          </div>
          <hr />
          <div className="section2">
            <div>
            <h3>{card.featuresTitle}</h3>
              <ul className="card-features">
                {card.features.map((feature, idx) => (
                  <li key={idx}>&#10004; {feature}</li>
                ))}
              </ul>
            </div>
            <Link to='/features' className="see-features">
              {index === cards.length - 1 ? "And more →" : "See all features →"}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;