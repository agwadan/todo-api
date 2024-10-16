import { Text, View, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import { deleteTodo, getTodos, Todo } from "@/services/todoServices";
import AddTodo from "./AddTodo";
import { TouchableOpacity } from "react-native-gesture-handler";
//import CheckBox from '@react-native-community/checkbox';

export function ListView() {
  const [todos, setTodos] = useState<any[]>([]);
  
  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      setTodos(response);
      
    } catch (error) {        
      console.log(error);        
    }
  };
  
  useEffect(() => { 
    fetchTodos();
  }, []);

  const handleReload = (todo: any) => {
    fetchTodos();
    setTodos(prev => [...prev, todo])
  }

  const handleDelete = (id: number) => {
    deleteTodo(id);
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos);
  }

  return (
    <>
      <View style={styles.container}>
        <AddTodo onTaskAdd={handleReload}/> 
        {
          todos.map((todo: Todo, index) => (
            <View key={index} style={styles.actions}>
            {/*   <CheckBox
              disabled={true}
              value={todo.isCompleted}
              /> */}
            <Text >{todo.title}</Text>
            <View style={styles.actions}>
              <TouchableOpacity><Text>✏️</Text></TouchableOpacity>
              <TouchableOpacity onPress={() =>handleDelete(todo.id)}><Text>❌</Text></TouchableOpacity>
            </View>
            </View>
          ))
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 container: {
  margin: 40
 },
 actions: {
  display: 'flex',
  flexDirection: 'row'
 }

})
