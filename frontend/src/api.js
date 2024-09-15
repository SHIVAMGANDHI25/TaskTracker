import { API_URL } from "./utils";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorDetails = await response.text(); // Capture error details
    throw new Error(`HTTP error! Status: ${response.status}, ${errorDetails}`);
  }
  return response.json(); // Parse response only if it's successful
};

export const CreateTask = async (taskObj) => {
  const url = `${API_URL}/tasks`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskObj)
  };

  try {
    const response = await fetch(url, options);
    return await handleResponse(response);
  } catch (err) {
    console.error('CreateTask error:', err.message);
    return { success: false, error: err.message };
  }
};

export const GetAllTasks = async () => {
  const url = `${API_URL}/tasks`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    return await handleResponse(response);
  } catch (err) {
    console.error('GetAllTasks error:', err.message);
    return { success: false, error: err.message };
  }
};

export const DeleteTaskById = async (id) => {
  const url = `${API_URL}/tasks/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    return await handleResponse(response);
  } catch (err) {
    console.error('DeleteTaskById error:', err.message);
    return { success: false, error: err.message };
  }
};

export const UpdateTaskById = async (id, reqBody) => {
  const url = `${API_URL}/tasks/${id}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)
  };

  try {
    const response = await fetch(url, options);
    return await handleResponse(response);
  } catch (err) {
    console.error('UpdateTaskById error:', err.message);
    return { success: false, error: err.message };
  }
};
