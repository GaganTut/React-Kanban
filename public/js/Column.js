window.Column = class Column extends React.Component{

  constructor(props){
    super(props);
    this.updateCards = this.updateCards.bind(this);
  }

  updateCards(id, cardObj) {
    console.log('hukbfsiybyfb');
    this.props.updateCards(id, cardObj);
  }

  render(){
    return (
      <div id="queue">
        <KanbanCardList cards={this.props.cardList} updateCards={this.updateCards}></KanbanCardList>
      </div>
    );
  }
};
