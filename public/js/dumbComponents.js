window.KanbanCard = ({card, updateCards}) => (
  <div className="each-card">
    <h1>{card.title}</h1>
    <p>
      Priority: {card.priority} <br/>
      Status: {card.status} <br/>
      By: {card.Creator.username} <br/>
      For: {card.Assigned.username} <br/>
      Card-ID: {card.id}
    </p>
    <input type="button" onclick={function updateShit() {
      return updateCards(card.id, {status: 'Completed'});
    }}/>
  </div>
)

window.KanbanCardList = ({cards, updateCards}) => (
  <div className="card-list">
    {
      cards
        .map(card => <KanbanCard card={card} updateCards={updateCards}/>)
    }
  </div>
)