import axios from "axios";

const APIRequests = () => {
  const serverUrl = "http://localhost:3000";

  const signup = async (email, password, passwordConfirmation) => {
    return axios
      .post(`${serverUrl}/auth/signup`, {
        email,
        password,
        passwordConfirmation
      })
      .then(({ data }) => {
        return data.token;
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  const login = async (email, password) => {
    return axios
      .post(`${serverUrl}/auth/login`, {
        email,
        password
      })
      .then(({ data }) => {
        return data.token;
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  const getAllTasks = async authHeader => {
    return axios
      .get(`${serverUrl}/tasks`, {
        headers: authHeader
      })
      .then(({ data }) => {
        return data;
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  const createTask = async (authHeader, task) => {
    return axios
      .post(
        `${serverUrl}/tasks`,
        {
          content: task
        },
        { headers: authHeader }
      )
      .then(({ data }) => {
        return data;
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  const toggleTaskStatus = async (authHeader, task) => {
    return axios
      .put(
        `${serverUrl}/tasks/${task._id}`,
        {
          completed: !task.completed
        },
        { headers: authHeader }
      )
      .then(({ data }) => {
        return data;
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  const deleteTask = async (authHeader, task) => {
    return axios
      .delete(`${serverUrl}/tasks/${task._id}`, {
        headers: authHeader
      })
      .then(({ data }) => {
        return data;
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  return {
    signup,
    login,
    getAllTasks,
    createTask,
    toggleTaskStatus,
    deleteTask
  };
};

export default APIRequests;
