import React from 'react';

const Statistics = ({ good, bad, neutral, total, positiveFb }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positiveFb}%</li>
      </ul>
    </>
  );
};

export default Statistics;
