import { Row, Tag, Checkbox } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { statusTodoChange } from '../../redux/actions'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

export default function Todo({ name, priority, completed, id }) {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(completed)

  const toggleCheckbox = (id) => () => {
    dispatch(statusTodoChange(id))
    setChecked(!checked)
  }

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox(id)}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  )
}
