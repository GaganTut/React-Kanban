/*const rootContainer = document.querySelector('#root');
const boardContainer = document.querySelector('#full-board');
const queueDiv = document.querySelector('#queue');
const progressDiv = document.querySelector('#progress');
const completedDiv = document.querySelector('#completed');

class NewCardComponent extends React.Component {
  constructor(props, cardID) {
    super(props);

    this.cardID = cardID;

    this.state = {
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
  }

  createTaskCard(task) {
    switch (task.status) {
      case 'Queue' :
        ReactDOM.render(kanbanCard(task), rootContainer)
        break;
      case 'Progress' :
        ReactDOM.render(kanbanCard(task), progressDiv)
        break;
      case 'Completed' :
        ReactDOM.render(kanbanCard(task), completedDiv)
        break;
      default:
        console.log('Error')
        break;
    }
    this.state = {
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.priority >= 1 && this.state.priority <= 10 ) {
      if(this.state.status === 'Queue' || this.state.status === 'Progress' || this.state.status === 'Completed') {
        this.createTaskCard(this.state)
      } else {
        this.setState({ status: 'Queue, Progress, or Completed'});
      }
    } else {
      this.setState({ priority: 'PRIORITY 1 - 10 INTEGER ONLY'});
    }
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
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="title" onChange={this.handleTitleChange} value={this.state.title}/>
        <input type="text" placeholder="priority (1-10)" onChange={this.handlePriorityChange} value={this.state.priority}/>
        <input type="text" placeholder="status" onChange={this.handleStatusChange} value={this.state.status}/>
        <input type="text" placeholder="Created By" onChange={this.handleCreatedByChange} value={this.state.createdBy}/>
        <input type="text" placeholder="Assigned To" onChange={this.handleAssignedToChange} value={this.state.assignedTo}/>
        <button type="submit">Submit Card</button>
      </form>
    )
  }
}*/