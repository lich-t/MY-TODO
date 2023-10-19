import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

// import React from "react";

export default function EditTask({ toggle, modal, taskObj, updateTask }) {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  useEffect(() => {
    setTaskName(taskObj.Name)
    setTaskDescription(taskObj.Description)
  }, [taskObj.Description, taskObj.Name])

  const handleUpdate = (e) => {
    e.preventDefault()
    let updateTaskObj = {
      Name: taskName,
      Description: taskDescription,
    }
    updateTask(updateTaskObj)
  }

  return (
    <Modal
      isOpen={modal}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="Task name">Task name</label>
            <input
              className="form-control"
              value={taskName}
              name="taskName"
              type="text"
              onChange={(e) => {
                setTaskName(e.target.value)
              }}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value)
              }}
              name="description"
              cols="30"
              rows="2"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}
EditTask.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
  save: PropTypes.func,
  taskObj: PropTypes.object,
  updateTask: PropTypes.func,
}
