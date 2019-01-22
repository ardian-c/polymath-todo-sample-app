const todoController = require('../controllers/todoController');

const routes = [
  {
    method: "GET",
    url: "/api/v1/todos",
    handler: todoController.getTodos
  },

  {
    method: "GET",
    url: "/api/v1/todos/:id",
    handler: todoController.getSingleTodo
  },

  {
    method: "POST",
    url: "/api/v1/todos",
    handler: todoController.addTodo
  },

  {
    method: "PUT",
    url: "/api/v1/todos/:id",
    handler: todoController.updateTodo
  },

  {
    method: "DELETE",
    url: "/api/v1/todos/:id",
    handler: todoController.deleteTodo
  }
];

module.exports = routes;