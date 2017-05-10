window.Progress = class Progress extends React.Component{

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
