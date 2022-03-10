import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Soul',
    text: 'I love learning React!',
  },
  {
    id: 'q2',
    author: 'Soulyana',
    text: 'I am becoming an amazing React Devleoper!',
  },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};
export default AllQuotes;
