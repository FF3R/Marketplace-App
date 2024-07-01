import { gql, request } from 'graphql-request/build/entrypoints/main';

const MASTER_URL = "https://api-sa-east-1.hygraph.com/v2/cly1mt019055v07warae7vrkm/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider
};
