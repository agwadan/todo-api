import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;

}

const BASE_URL = 'http://192.168.100.39:3000/todos';

/* ==== Add New Todo ==== */
export const addTodo = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}`, data);
    console.log('====================================');
    console.log(response);
    console.log('====================================');
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
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