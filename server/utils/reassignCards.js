export const reassignCards = (user1Cards, user2Cards, winner) => {
  if (winner == "user1") {
    const user1FirstCard = user1Cards.shift(1);
    const user2FirstCard = user2Cards.shift(1);
    user1Cards = [...user1Cards, user2FirstCard, user1FirstCard];
  } else {
    const user1FirstCard = user2Cards.shift(1);
    const user2FirstCard = user1Cards.shift(1);
    user2Cards = [...user2Cards, user1FirstCard, user2FirstCard];
  }
  return {
    user1Cards: user1Cards,
    user2Cards: user2Cards,
  };
};
