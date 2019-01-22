const boom = require('boom');
const Todo = require('../models/Todo');

exports.getTodos = async(req, res) => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch(err) {
    throw boom.boomify(err);
  }
}

exports.getSingleTodo = async(req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    return todo;
  } catch(err) {
    throw boom.boomify(err);
  }
}

exports.addTodo = async(req, res) => {
  try {
    const todo = new Todo(req.body);
    return todo.save();
  } catch(err) {
    throw boom.boomify(err);
  }
}

exports.updateTodo = async(req, res) => {
  try {
    const id = req.params.id;
    const todo = req.body;
    const { ... updateData } = todo;
    const update = await Todo.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch(err) {
    throw boom.boomify(err);
  }
}

exports.deleteTodo = async(req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByIdAndRemove(id);
    return todo;
  } catch(err) {
    throw boom.boomify(err);
  }
}