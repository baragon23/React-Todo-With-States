const axios = require('axios');

const fetchTasks = () => {
    const taskURI = 'https://private-caaa7-versustracker.apiary-mock.com/tasks';

    return axios.get(taskURI)
        .then((response) => {
            return response.data.tasks;
        });
};

export default fetchTasks;