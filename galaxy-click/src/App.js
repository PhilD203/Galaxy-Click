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
  characters,
  clicked: [],
  score: 0,
  highScore: 0,
  userMessage: ""
}

handleClick = characterId => {
    if (this.state.clicked.includes(characterId)){
        this.setState({userMessage:"YOU LOSE"})
          setTimeout(
            function() {
              this.setState({userMessage:""});
            }
            .bind(this),
            3000
        );
        this.setState({score:0})
        this.shuffle(this.state.characters);
        this.setState({clicked: []})
    } else{
      this.handleIncrement();
      console.log(this.state.score);
      this.state.clicked.push(characterId);
      this.shuffle(this.state.characters);
      if(this.state.score === this.state.characters.length -1){
        this.setState({userMessage: "YOU WIN"})
        setTimeout(
          function() {
            this.setState({userMessage:""});
          }
          .bind(this),
          3000
      );
        this.setState({score:0})
        this.shuffle(this.state.characters);
        this.setState({clicked: []})
      }
    }
}
handleIncrement = () => {
  this.setState({ score: this.state.score + 1 });
};
 shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

render() {
  return (
      <div>
        <Nav />
        <Counter 
          score={this.state.score}
          userMessage={this.state.userMessage}
        />
        <Wrapper >
        {this.state.characters.map(character =>(
        <StarCard 
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          occupation={character.occupation}
          location={character.location}
          handleClick={this.handleClick}
        />
        ))}
        </Wrapper>
        <Footer />
    
      </div>
    
  )
}
}


export default App;
