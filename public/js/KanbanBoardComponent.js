class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="full-board">
          <h1>KANBAN BOARD</h1>
          <div id="queue">
            <Queue></Queue>
          </div>
          <div id="progress">
            <Progress></Progress>
          </div>
          <div id="completed">
            <Completed></Completed>
          </div>
        </div>
        <div id="newCardForm">
          <NewCardComponent/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<KanbanBoard/>, rootContainer);