const rootContainer = document.querySelector('#root');
class KanbanBoard extends React.Component {
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
    return getAllCards().then( cards => {
      this.setState({
        queueCards: cards.filter(card => card.status === 'Queue'),
        progressCards: cards.filter(card => card.status === 'Progress'),
        completedCards: cards.filter(card => card.status === 'Completed')
      });
    });
  }

  render() {
    return (
      <div>
        <div id="full-board">
          <h1>KANBAN BOARD</h1>
          <div id="queue">
            <Queue cardList={this.state.queueCards}></Queue>
          </div>
          <div id="progress">
            <Progress cardList={this.state.progressCards}></Progress>
          </div>
          <div id="completed">
            <Completed cardList={this.state.completedCards}></Completed>
          </div>
        </div>
        <div id="newCardForm">
          <NewCardComponent getCards={this.getCards}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<KanbanBoard/>, rootContainer);