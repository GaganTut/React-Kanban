window.CardForm = class CardForm extends React.Component {
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

  handleSubmit(event) {
    event.preventDefault();
    addCardToDb(this.state)
      .then(card => {
        this.props.getCards();
      })
      .catch(console.log);
  }

  handleTitleChange(event) {
    this.setState({ title : event.target.value });
  }

  handlePriorityChange(event) {
    this.setState({ priority : event.target.value });
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
      <form
        onSubmit={this.handleSubmit}
        id="newCardForm"
      >

        <input type="text"
          placeholder="title"
          onChange={this.handleTitleChange}
          value={this.state.title}
          id="title-input"
          className="cardInputs"
        />

        <select
          onChange={this.handlePriorityChange}
          id="priority-input"
          className="cardInputs"
          >
            <option disable selected value>Task Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
        </select>

        <select
          onChange={this.handleStatusChange}
          id="status-input"
          className="cardInputs"
          >
            <option disable selected value>Current Status</option>
            <option value="Queue">Queue</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
        </select>

        <input
          type="text"
          placeholder="Created By"
          onChange={this.handleCreatedByChange}
          value={this.state.createdBy}
          id="creator-input"
          className="cardInputs"
          />
        <input
          type="text"
          placeholder="Assigned To"
          onChange={this.handleAssignedToChange}
          value={this.state.assignedTo}
          id="assigned-input"
          className="cardInputs"
          />
        <button
          type="submit"
          id="submit-input"
          className="cardInputs"
          >Submit Card
          </button>
      </form>
    )
  }
}