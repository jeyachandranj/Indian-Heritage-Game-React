import { attributeTypes } from "../constants/attributeTypes.js";
import { BBI } from "./BBI.js";

export const decideWinner = (user1, user2, attribute) => {
  switch (attributeTypes[attribute]) {
    case "HIGH":
      return (user1[attribute] === "-" ? 0 : user1[attribute]) >
        (user2[attribute] === "-" ? 0 : user2[attribute])
        ? "user1"
        : "user2";
    case "LOW":
      return (user1[attribute] === "-" ? 1000 : user1[attribute]) <
        (user2[attribute] === "-" ? 1000 : user2[attribute])
        ? "user1"
        : "user2";
    case "SPL":
      let user1BBI = BBI(user1[attribute]);
      let user2BBI = BBI(user2[attribute]);
      return user1BBI > user2BBI ? "user1" : "user2";
  }
};
