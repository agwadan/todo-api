import axios from "axios";
import { Todo } from "../types/todo";

const BASE_URL = 'http://192.168.100.39:3000/todos';

/* ==== Add New Todo ==== */
export const addTodo = async (todo: any) => {
  try {
    const response = await axios.post(`${BASE_URL}`, todo);
    return response;
  } catch (error) {
    console.log("Add todo Error: ");
    console.log(error);
  }
}

/* ==== Get All Todos ==== */
export const getTodos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;

  } catch (error) {
    console.log('====================================');
    console.log("Error from service: ");
    console.log(error);
    console.log('====================================');
  }
}

/* ==== Update a Todo ==== */
export const updateTodos = async (data: any) => {
  await axios.put(`${BASE_URL}/${data.id}`, data);
}

/* ==== Delete a Todo ==== */
export const deleteTodo = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
}
}