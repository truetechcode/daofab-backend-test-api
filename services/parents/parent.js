const express = require('express');
const Parents = require('../../models/parent');
const Children = require('../../models/child');

const getParents = async (req, res, next) => {
  try {
    let parents = Parents.data;

    if (req.query.page == 1) {
      let page = req.query.page,
        limit = 2,
        startLimit = 0,
        endLimit = limit * page;

      parents = parents.slice(startLimit, endLimit)
    } else {
      let page = req.query.page,
        limit = 2,
        startLimit = (limit * (page - 1)),
        endLimit = limit * page;

      parents = parents.slice(startLimit, endLimit)
    }

    let newparent = parents.map((parent) => {
      return { ...parent, totalPaidAmount: Children.data.filter(child => child.parentId === parent.id).reduce((previous, current) => previous += current.paidAmount, 0) }
    });


    if (parents.length > 0) {
      return res.status(200).json({
        'message': 'parents fetched successfully',
        'data': newparent,
        'totalPage': Math.ceil(Parents.data.length / 2)
      });
    }

    return res.status(404).json({
      'code': 'BAD_REQUEST_ERROR',
      'description': 'No parents found in the system'
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

    let children = Children.data.filter(child => child.parentId == req.params.id);

    let newChildren = children.map((child) => {
      let parent = Parents.data.find(parent => parent.id == req.params.id)
      return { ...child, totalAmount: parent.totalAmount, sender: parent.sender, receiver: parent.receiver }
    });

    if (newChildren) {
      return res.status(200).json({
        'message': `user with id ${req.params.id} fetched successfully`,
        'data': newChildren
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

module.exports = {
  getParents,
  getParentById
}