const rootContainer = document.querySelector('#root');

/*class Queue extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      cards : []
    };

    this.addCard = this.addCard.bind(this);

  }

  addCard(card){
    this.setState({
      cards : this.state.cards.concat(card)
    });
  }

  render(){
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
};*/

/*const Progress = ({ cards }) => (
  <div>
    { cards
      .filter( card => card.status === 'Progress')
      .map( card => <Card card={card}/> )
    }
  </div>
);

const Completed = ({ cards }) => (
  <div>
    { cards
      .filter( card => card.status === 'Completed')
      .map( card => <Card card={card}/> )
    }
  </div>
);

const Card = (props) => (
  <div>
    <h1>{props.card.title}</h1>
    <h3>
      {props.card.priority} <br/>
      {props.card.status}
    </h3>
    <p>
      {props.card.createdBy} <br/>
      {props.card.assignedTo}
    </p>
  </div>
)*/

class NewCardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
  }

  createTaskCard(task) {

  }

  handleSubmit(event) {
    event.preventDefault();

  }

  handleTitleChange(event) {
    this.setState({ title : event.target.value });
  }

  handlePriorityChange(event) {
    this.setState({ priority : parseInt(event.target.value) });
  }

  handleStatusChange(event) {
    this.setState({ status : event.target.value });
  }

  handleCreatedByChange(event) {
    this.setState({ createdBy : event.target.value });
  }

  handleAssignedToChange(event) {
    this.setState({ assignedTo : event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" onChange={this.handleTitleChange} value={this.state.title}/>
          <select onChange={this.handleChangePriority} name="priority">
            <option disable selected value>Task Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
          <select onChange={this.handleStatusChange}>
            <option disable selected value>Current Status</option>
            <option value="Queue">Queue</option>
            <option value="Progress">Progress</option>
            <option value="Done">Completed</option>
          </select>
          <input type="text" placeholder="Created By" onChange={this.handleCreatedByChange} value={this.state.createdBy}/>
          <input type="text" placeholder="Assigned To" onChange={this.handleAssignedToChange} value={this.state.assignedTo}/>
          <button type="submit">Submit Card</button>
        </form>
      </div>
    )
  }
}

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