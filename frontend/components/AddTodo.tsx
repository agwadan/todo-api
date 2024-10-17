import { TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import {Todo} from "@/types/todo";
import { addTodo } from "@/services/todoServices";

interface AddTodoProps {
  onTaskAdd?: (todo: Todo) => void; 
}

const AddTodo: React.FC<AddTodoProps> = ({onTaskAdd}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  /* ==== Function to handle addition of a task ==== */
const handleAddTask =  async () => {
  const response = await addTodo({ title, description});
  alert('Task Added Successfully 🥳🎉')
  const newTodo: any = { title, description }
  if(typeof onTaskAdd === 'function') onTaskAdd(newTodo);
  setTitle('');
  setDescription('');
}

  return (
    <>
      <TextInput style={styles.input} value={title} placeholder="Title" onChangeText={setTitle} />
      <TextInput style={styles.input} value={description} placeholder="Description" onChangeText={setDescription} />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
         <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#079080',
    marginVertical: 8,
    padding:4
  },

  button: {
    backgroundColor: '#079080',
    
  },
  addText: {
    color: 'white',
    textAlign:'center',
    borderRadius: 4,
    padding: 4
  }
});

export default AddTodo;
