import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import PizzaList from '../components/Pizzalist';
import ToppingsFilter from '../components/ToppingFilter';

export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        price
        id
        slug {
          current
        }
        toppings {
          name
          id
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            } #if you need the fixed query, will even crop for you
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

// use topping filter to serve appropriate styles?
