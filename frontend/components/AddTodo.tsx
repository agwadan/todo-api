import { TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { addTodo, Todo } from "@/services/todoServices";

interface AddTodoProps {
  onTaskAdd?: (todo: Todo) => void; 
}

const AddTodo: React.FC<AddTodoProps> = ({onTaskAdd}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

const handleAddTask =  async () => {
  const response = await addTodo({ title, description});
  console.log('====================================');
  console.log(response);
  console.log('====================================');
  const newTodo: any = { title, description }
  if(typeof onTaskAdd === 'function') onTaskAdd(newTodo);
  setTitle('');
  setDescription('');
}

  return (
    <>
      <TextInput value={title} placeholder="Title" onChangeText={setTitle} />
      <TextInput value={description} placeholder="Description" onChangeText={setDescription} />
      <Button title="Add" onPress={handleAddTask}/>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    /* borderStyle: 'solid',
    borderBlockColor: 'blue',
     */
  },
});

export default AddTodo;
