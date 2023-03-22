const googleSearch = require("./script");

dbMock = [
  "dog.com",
  "cheesepuff.com",
  "keytech.com",
  "primarykey.com",
  "doggie.com",
  "publickey.com",
];

describe("googlesearch", () => {
  it("is searching google", () => {
    expect(googleSearch("tech", dbMock)).toContain("keytech.com");
  });

  it("is searching google array", () => {
    expect(googleSearch("key", dbMock)).toEqual([
      "keytech.com",
      "primarykey.com",
      "publickey.com",
    ]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
