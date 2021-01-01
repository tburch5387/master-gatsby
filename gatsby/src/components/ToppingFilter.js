import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    padding: 5px;
    background: var(--grey);
    align-items: center;
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  // return pizzas with count
  // count how many pizza are in each topping
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        // console.log('Existing Topping', existingTopping.name);
        // yes? increment by 1
        existingTopping.count += 1;
      } else {
        // console.log('New topping', topping.name);
        // else create new topping in accumulater
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort by count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}
export default function ToppingsFilter() {
  // list of topppings (toppings: is simply renaming the query for easy use later)
  // list of pizzas with toppins
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          name
          id
          toppings {
            name
            id
            vegetarian
          }
        }
      }
    }
  `);
  console.clear();
  //   console.log(toppings, pizzas);

  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  //   console.log(toppingsWithCounts);

  // link up
  return (
    <ToppingsStyles>
      {/* loop over the list of toppings and count of the pizzas with topping */}
      {toppingsWithCounts.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}
