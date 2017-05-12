window.Column = ({cardList, updateApp, columnID}) => (
  <div  id={columnID}>
    {cardList.map((card, index) => <KanbanCard card={card} updateApp={updateApp} def={'baseValue'} />)}
  </div>
)

