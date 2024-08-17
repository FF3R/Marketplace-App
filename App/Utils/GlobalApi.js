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
  `
  const result = await request(MASTER_URL, query);
  return result;
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
  query getBusinessList {
    buisnessLists {
      id
      name
      email
      contactPerson
      address
      about
      images {
        url
      }
      category {
        name
      }
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessListByCategory = async (category) =>{
  const query = gql`
  query getBusinessList {
    buisnessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      address
      about
      images {
        url
      }
      category {
        name
      }
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory
};
