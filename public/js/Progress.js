window.Progress = class Progress extends React.Component{

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
};
