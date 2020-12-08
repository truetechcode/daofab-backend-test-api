const express = require('express');
const Parent = require('../../models/parent');

const getParents = async (req, res, next) => {
  try {

    let parents = Parent.data;
    console.log(parents)
    if (parents.length > 0) {
      return res.status(200).json({
        'message': 'users fetched successfully',
        'data': parents
      });
    }

    return res.status(404).json({
      'code': 'BAD_REQUEST_ERROR',
      'description': 'No users found in the system'
    });
  } catch (error) {
    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'description': 'something went wrong, Please try again'
    });
  }
}

const getParentById = async (req, res, next) => {
  try {
    console.log(req.params.id)
    let parent = Parent.data.find(parent => parent['id'] == req.params.id);

    if (parent) {
      return res.status(200).json({
        'message': `user with id ${req.params.id} fetched successfully`,
        'data': parent
      });
    }

    return res.status(404).json({
      'code': 'BAD_REQUEST_ERROR',
      'description': 'No parent found in the system'
    });

  } catch (error) {

    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'description': 'something went wrong, Please try again'
    });
  }
}


const createParent = async (req, res, next) => {
}

const updateParent = async (req, res, next) => {
}

const deleteParent = async (req, res, next) => {
}

module.exports = {
  getParents,
  getParentById,
  createParent,
  updateParent,
  deleteParent
}