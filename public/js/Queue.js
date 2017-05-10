const Queue = ({ cards }) => (
  <div>
    { cards
      .filter( card => card.status === 'Queue')
      .map( card => <Card card={card}/> )
    }
  </div>
);

const Progress = ({ cards }) => (
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
  <h1>{props.card.title}</h1>
  <h3>
    {props.card.priority} <br/>
    {props.card.status}
  </h3>
  <p>
    {props.card.createdBy} <br/>
    {props.card.assignedTo}
  </p>
)

class Queue extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      cards : []
    };

    this.addCard = this.addCard.bind(this);

  }

  /*componentWillMount() {
    this.getBooks().then( books => {
      this.setState({ books });
    });
  }

  getBooks(){
    return getBooksFromFakeXHR();
  }*/

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
};
