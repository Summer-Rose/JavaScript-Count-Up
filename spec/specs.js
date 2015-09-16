describe('findMultiples', function() {
  it("returns list of multiples y up to a given number x", function() {
    expect(findMultiples(5, 30)).to.eql([5,10,15,20,25,30]);
  });
});
