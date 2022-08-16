import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/actions";
import { todosRemainingSelector } from "../../redux/selectors";
import Todo from "../Todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const inputRef = useRef();

  const handleAddTodo = () => {
    if (!todoName.trim()) {
      return;
    }
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
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
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
