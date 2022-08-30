function choice(items) {
  const min = 0;
  const max = items.length - 1;
  const index = Math.floor(Math.random() * (max - min + 1) + min);
  return items[index];
}

function remove(items, item) {
  const index = items.indexOf(item);
  if (index === -1) return undefined;
  else {
    items.splice(index, 1);
    return items;
  }
}

function splitDeck(deck) {
  let deckOne = [];
  let deckTwo = [...deck];

  for (let i = 0; i < (deck.length/2); i++) {
    deckOne.push(choice(deckTwo));
    deckTwo = remove(deckTwo, deckOne[i]);
  }

 const finalDeck = [deckOne, deckTwo];
 return finalDeck;
}

export default splitDeck;