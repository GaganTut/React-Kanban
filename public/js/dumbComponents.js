const dumbComponents = (() => {
  const kanbanCard = ({title, priority, status, createdBy, assignedTo}) => (
    <div>
      <h1>{title}</h1>
      <p>
        Priority: {priority} <br/>
        Status: {status} <br/>
        By: {createdBy} <br/>
        For: {assignedTo}
      </p>
    </div>
  )

  return {
    kanbanCard
  }
})

export default dumbComponents;