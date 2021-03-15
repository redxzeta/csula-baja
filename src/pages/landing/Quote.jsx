import { Fragment } from "react";
import Card from "../../layout/cards/Card";
import QuoteCard from "../../layout/cards/QuoteCard";

import GridThree from "../../layout/grid/GridThree";
import Quotes from "./data/quotes.json";
const Quote = () => {
  return (
    <Card>
      <h1 className="font-bold uppercase text-xl">Quotes</h1>
      <GridThree>
        {Quotes.map((q) => (
          <Fragment q={q.id}>
            <QuoteCard {...q} />
          </Fragment>
        ))}
      </GridThree>
    </Card>
  );
};
export default Quote;
