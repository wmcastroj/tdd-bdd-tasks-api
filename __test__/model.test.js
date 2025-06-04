const axios = require('axios');

const url = 'http://localhost:3000/tasks';

describe('Domain test', () => {
  test('The model must return the task created with the details and a completed boolean value setted in false', async () => {
    const payload = {
      title: 'Nueva tarea',
      description: 'Descripción de la tarea'
    };

    const res = await axios.post(url, payload);

    expect(res).toBeTruthy();
    expect(res.status).toBe(201);
    expect(res.data.task).toMatchObject({
      title: payload.title,
      description: payload.description,
      completed: false,
      id: expect.any(String)
    });
  });
});