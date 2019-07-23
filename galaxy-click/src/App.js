import React from 'react';
import './App.css';
import './components/Card/index';
import StarCard from './components/Card/index';
import characters from './mockData/starCards.json';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Counter from './components/Counter';
import Footer from './components/Footer'

class App extends React.Component {

state = {
  characters
}

render() {
  return (
      <div>
        <Nav />
        <Counter />
        <Wrapper >
        {this.state.characters.map(character =>(
        <StarCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          occupation={character.occupation}
          location={character.location}
        />
        ))}
        </Wrapper>
        <Footer />
    
      </div>
    
  )
}
}


export default App;
