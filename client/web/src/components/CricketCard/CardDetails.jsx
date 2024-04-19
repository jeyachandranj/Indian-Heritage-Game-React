import React from "react";
import "../App.css";
import { useState, useRef, useEffect } from "react";

function Attribute({
  attribute,
  value,
  onClick,
  isDisabled,
  currentAttribute,
  who,
  userClick,
}) {
  const [colour, setColour] = useState(
    currentAttribute === attribute ? "green" : ""
  );

  if (currentAttribute === attribute)
    console.log("clicked attribute is", attribute, userClick);
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className="attribute-button"
        id={colour}
      >
        <span className="attribute-name">{attribute}:</span>{" "}
        <span className="attribute-value">{value}</span>
      </button>
    </div>
  );
}

export const CardDetails = ({
  data,
  user,
  handleUserClick,
  userClick,
  currentAttribute,
  who,
}) => {
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
                user === "user" && handleUserClick(attribute);
              }}
              isDisabled={user === "user" && userClick}
              currentAttribute={currentAttribute}
              who={who}
              userClick={userClick}
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
                user === "user" && handleUserClick(attribute);
              }}
              isDisabled={user === "user" && userClick}
              currentAttribute={currentAttribute}
              who={who}
              userClick={userClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
