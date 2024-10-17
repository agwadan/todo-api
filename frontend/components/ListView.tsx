import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import {Todo} from "@/types/todo";
import {
  deleteTodo,
  getTodos,
  updateTodos,
} from "@/services/todoServices";
import AddTodo from "./AddTodo";

import Checkbox from "expo-checkbox";

export function ListView() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
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
    setTodos((prev) => [...prev, todo]);
  };

  const handleDelete = async (id: number) => {

    try {
     await deleteTodo(id);
     alert("Task Deleted successfully ✅")
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);  
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <View style={styles.container}>
        <AddTodo onTaskAdd={handleReload} />
        {todos.map((todo: Todo, index) => (
          <View key={index} style={todo.isCompleted ? styles.completedItem : styles.item }>
            <View style={styles.left}>
              <Checkbox
                value={todo.isCompleted}
                onValueChange={() => {
                  const updatedTodos = todos.map((t) =>
                    t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
                  );
                  setTodos(updatedTodos);
                  updateTodos(updatedTodos[index]);
                }}
              />
              <Text style={todo.isCompleted ? styles.completedTitle : styles.title}>{todo.title}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => handleDelete(todo.id)}>
                <Text>❌</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },

  item:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffcec9",
    padding: 8,
    marginTop: 12,
  },

  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  },

  title: {
    marginLeft: 8,
    fontSize: 16,
  },

  completedTitle: {
    marginLeft: 8,
    fontSize: 16,
    textDecorationLine: "line-through"
  },

  completedItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:  "#d7fce6",
    padding: 8,
    marginTop: 12
  },
});
