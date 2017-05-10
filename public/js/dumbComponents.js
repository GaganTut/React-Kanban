window.KanbanCard = ({card}) => (
  <div>
    <h1>{card.title}</h1>
    <p>
      Priority: {card.priority} <br/>
      Status: {card.status} <br/>
      By: {card.createdBy} <br/>
      For: {card.assignedTo}
    </p>
  </div>
)

window.KanbanCardList = ({cards}) => (
  <div>
    {
      cards.map(card => <KanbanCard card={card} />)
    }
  </div>
)