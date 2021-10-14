export interface cleanBeerData {}

const transformBeerData = (response: any) => {
  const beers = response.data.response.beers.items;
  return beers.map((beer: any) => {
    return {
      name: beer.beer.beer_name,
      style: beer.beer.beer_style,
      id: beer.beer.bid,
      brewery: beer.brewery.brewery_name,
    };
  });
};

export default transformBeerData;
