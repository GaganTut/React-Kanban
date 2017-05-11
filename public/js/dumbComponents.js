window.KanbanCard = ({card}) => (
  <div>
    <h1>{card.title}</h1>
    <p>
      Priority: {card.priority} <br/>
      Status: {card.status} <br/>
      By: {card.Creator.username} <br/>
      For: {card.Assigned.username}
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