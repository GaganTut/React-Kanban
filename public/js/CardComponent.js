window.NewCardComponent = class NewCardComponent extends React.Component {
  constructor(props, cardID) {
    super(props);

    this.cardID = cardID;

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