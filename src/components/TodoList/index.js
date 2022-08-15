import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import { todoListSelector } from "../../redux/selectors";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const inputRef = useRef();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority,
        completed: false,
      })
    );
    inputRef.current.focus();
    setTodoName("");
    setPriority("Medium");
  };

  const handleChangeTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleChangePriority = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} priority={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={handleChangeTodoName}
            placeholder="Add a todo"
            ref={inputRef}
          />
          <Select
            onChange={handleChangePriority}
            defaultValue={priority}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddTodo} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
