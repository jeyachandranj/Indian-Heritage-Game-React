import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";

function Attribute({
  attribute,
  value,
  onClick,
  disabled,
  clickedAttribute,
  highlight,
}) {
  const [colour, setColour] = useState("");
  useEffect(() => {
    if (clickedAttribute && clickedAttribute === attribute) {
      setColour(highlight ? "green" : "red");
    } else {
      setColour("");
    }
  }, [clickedAttribute, highlight]);
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`attribute-button ${colour}`}
      >
        <span className="attribute-name">{attribute}:</span>{" "}
        <span className="attribute-value">{value}</span>
      </button>
    </div>
  );
}

export const Card = ({
  data,
  showMyCards,
  disableClick,
  highlight,
  clickedAttribute,
}) => {
  console.log(data);

  const { Image, Name, Attributes } = data;
  const [isLoading, setIsLoading] = useState(true);
  const defaultImage =
    "https://scores.iplt20.com/ipl/images/default-player-statsImage.png";

  const attributeKeys = Object.keys(Attributes);
  const halfLength = Math.ceil(attributeKeys.length / 2);
  const firstColumnAttributes = attributeKeys.slice(0, halfLength);
  const secondColumnAttributes = attributeKeys.slice(halfLength);

  return (
    <section className="card-details">
      <img
        src={Image}
        alt={Name}
        className={`card-image ${isLoading ? "loading" : ""}`}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          e.target.src = defaultImage;
          e.onError = null;
        }}
      />
      <h3 className="card-name">{Name}</h3>
      <div className="attributes-container">
        <div className="column">
          {firstColumnAttributes.map((attribute) => (
            <Attribute
              key={attribute}
              attribute={attribute}
              value={Attributes[attribute]}
              onClick={() => {
                showMyCards(attribute);
              }}
              disabled={disableClick}
              highlight={highlight}
              clickedAttribute={clickedAttribute}
            />
          ))}
        </div>
        <div className="column">
          {secondColumnAttributes.map((attribute) => (
            <Attribute
              key={attribute}
              attribute={attribute}
              value={Attributes[attribute]}
              onClick={() => {
                showMyCards(attribute);
              }}
              disabled={disableClick}
              highlight={highlight}
              clickedAttribute={clickedAttribute}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
