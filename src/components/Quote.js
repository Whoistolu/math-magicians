import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <p className={styles.quote}>
    Mathematics is not about numbers, equations, computations or algorithm:
    It is about understanding — Williams Paul Thurston.

    We will always have STEM with us. Some things will drop out of the public eye and go away,
    but there will always be science, engineering, and technology. And there will always,
    always be mathematics.
    — Katherine Johnson, African-American mathematician
  </p>
);

export default Quote;
