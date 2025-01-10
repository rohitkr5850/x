import React from 'react';
const Card = ({ title, children }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};
export default Card;
