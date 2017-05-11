const rootContainer = document.querySelector('#root');
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queueCards: [],
      progressCards: [],
      completedCards: []
    };

    this.getCards = this.getCards.bind(this);
    this.updateCards = this.updateCards.bind(this);
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    return getAllCards()
      .then( cards => {
        this.setState({
          queueCards: cards.filter(card => card.status === 'Queue'),
          progressCards: cards.filter(card => card.status === 'Progress'),
          completedCards: cards.filter(card => card.status === 'Completed')
        });
      })
      .catch(console.log);
  }

  updateCards(id, cardObj) {
    console.log('Heyyyy', this);
    return updateCardInDb(id, cardObj)
      .then(this.getCards())
      .catch(console.log);
  }

  render() {
    return (
      <div id="whole-page">
        <h1 id="main-title">KANBAN BOARD</h1>
        <div id="full-board">
          <Column cardList={this.state.queueCards} updateCards={this.updateCards}></Column>
          <Column cardList={this.state.progressCards} updateCards={this.updateCards}></Column>
          <Column cardList={this.state.completedCards} updateCards={this.updateCards}></Column>
        </div>
        <div id="newCardForm">
          <NewCardComponent getCards={this.getCards}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, rootContainer);