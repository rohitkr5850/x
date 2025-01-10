import React from 'react';
import Card from './Card';
const App = () => {
  return (
    <div>
      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
      </Card>
      <Card title="Card 2">
        <p>This is the content of Card 2.</p>
      </Card>
      <Card title="Card 3">
        <p>This is the content of Card 3.</p>
      </Card>
    </div>
  );
};

export default App;
