window.Queue = class Queue extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (
      <div>
        <KanbanCardList cards={this.props.cardList}></KanbanCardList>
      </div>
    );
  }
};
