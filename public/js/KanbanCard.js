window.KanbanCard = class KanbanCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editCard: false
    };

    this.handleStatus = this.handleStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    this.setState(() => {
      return {def: 'baseValue'};
    });
  }

  handleStatus(event){
    event.preventDefault();
    this.updateCard(this.props.card.id, {status: event.target.value});
  }

  updateCard(id, cardObj) {
    updateCardInDb(id, cardObj)
      .then(this.props.updateApp)
      .catch(console.log);
  }

  handleDelete(event){
    event.preventDefault();
    this.deleteCard(this.props.card.id);
  }

  deleteCard(id) {
    deleteCardInDb(id)
      .then(this.props.updateApp)
      .catch(console.log);
  }

  handleEdit(event) {
    console.log('heyyyy');
    this.setState({editCard: true});
  }

  handleCompleteEdit(event) {
    console.log(event);
    event.preventDefault();
  }

  getPriorityColor(priority) {
    switch (priority) {
      case 'Urgent' :
        return {'background-color':'red'};
      case 'High' :
        return {'background-color':'orange'};
      case 'Medium' :
        return {'background-color':'yellow'};
      case 'Low' :
        return {'background-color':'beige'};
    }
  }

  render() {
    if(this.state.editCard) {
      return (
        <form onSubmit={this.handleCompleteEdit}>
          <h1>#{this.props.card.id}</h1>
          <input type="text" name="title" value={this.props.card.title}/>
          <p>By: {this.props.card.Creator.username}</p>
          <input type="text" name="assignedTo" value={this.props.card.Assigned.username}/>
          <input type="submit"/>
        </form>
      )
    } else {
      return (
        <div className="each-card" style={this.getPriorityColor(this.props.card.priority)} onDoubleClick={this.handleEdit}>
          <h1>#{this.props.card.id}</h1>
          <h4>{this.props.card.title}</h4>
          <p>By: {this.props.card.Creator.username}</p>
          <p>For: {this.props.card.Assigned.username}</p>
          <select value={this.props.card.status} onChange={this.handleStatus}>
            <option value="Queue">Queue</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <input type="button" onClick={this.handleDelete} value="Delete Card"/>
        </div>
      )
    }
  }
};

