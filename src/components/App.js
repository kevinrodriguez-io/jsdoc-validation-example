import React from 'react';

import PersonCard from './PersonCard';
import DogCard from './DogCard';

const App = () => {
  return (
    <div>
      <PersonCard 
        name="Kevin" 
        age={24} 
        phoneNumbers={['852365691', '22365236']} 
        gender="Male"
      />
      <hr/>
      <DogCard name="Fido" age={2} />
    </div>
  );
};

export default App;