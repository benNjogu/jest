const googleDatabase = [
  "dogs.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "dogpictures.com",
  "myfavouritedogs.com",
  "doggies.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

//console.log(googleSearch("fav", googleDatabase));

module.exports = googleSearch;
