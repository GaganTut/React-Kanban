window.Queue = class Queue extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <KanbanCardList cards={this.props.cardList}></KanbanCardList>
      </div>
    );
  }
};
