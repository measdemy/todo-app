import { useState, useEffect } from "react";
import {
  Container,
  Item,
  Grow,
  Image,
  Title,
  Button,
  ButtonSection,
} from "./styles";
import deleteIcon from "../../icons/delete.png";
import editIcon from "../../icons/edit.png";

export const TodoList = (props) => {
  const { item, removeTodo, updateTodo, handleEditMode, onHandleCancel } =
    props;
  const [listItem, setListItem] = useState(item);

  const { id, title, description, editable } = listItem;

  useEffect(() => {
    setListItem(item);
  }, [item]); //run only when item got changes

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setListItem({ ...listItem, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = { id, title, description, editable: !editable };
    updateTodo(id, updatedItem);
  };

  return (
    <Container>
      {!editable && (
        <Item>
          <Title>
            <h2>{title}</h2>
            <Image src={editIcon} onClick={() => handleEditMode(id)} />
            <Image src={deleteIcon} onClick={() => removeTodo(id)} />
          </Title>
          <p>{description}</p>
        </Item>
      )}
      {editable && (
        <Item>
          <Image src={deleteIcon} onClick={() => removeTodo(id)} />
          <Grow>
            <input name="title" value={title} onChange={onHandleChange} />
            <textarea
              name="description"
              value={description}
              onChange={onHandleChange}
            ></textarea>
          </Grow>
          <ButtonSection>
            <Button onClick={onHandleSubmit}>Save</Button>
            <Button onClick={() => onHandleCancel(id)}>Cancel</Button>
          </ButtonSection>
        </Item>
      )}
    </Container>
  );
};
