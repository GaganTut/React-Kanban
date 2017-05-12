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
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    return getAllCards()
      .then( cards => {
        this.setState(() => {
          return {
            queueCards: cards.filter(card => card.status === 'Queue'),
            progressCards: cards.filter(card => card.status === 'Progress'),
            completedCards: cards.filter(card => card.status === 'Completed')
          };
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div id="whole-page">
        <Login />
        <h1 id="main-title">KANBAN BOARD</h1>
        <div id="full-board">
          <Column cardList={this.state.queueCards} updateApp={this.getCards} columnID="queue-column"></Column>
          <Column cardList={this.state.progressCards} updateApp={this.getCards} columnID="progress-column"></Column>
          <Column cardList={this.state.completedCards} updateApp={this.getCards} columnID="completed-column"></Column>
        </div>
        <CardForm getCards={this.getCards}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, rootContainer);