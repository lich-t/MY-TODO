import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PropTypes from 'prop-types'
import { useState } from 'react'


// import React from "react";

export default function CreateTask({ toggle, modal, save}) {

   const [taskName, setTaskName] = useState('')
   const [taskDescription, setTaskDescription] = useState('')
  
  
  const handleSave = () => {
    let taskObj = {
      Name: taskName,
      Description: taskDescription
    }
    save(taskObj)
  }

  return (
    <Modal
      isOpen={modal}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="Task name">Task name</label>
            <input
              className="form-control"
              value={taskName}
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
        <Button color="primary" onClick={handleSave}>
          Add Task
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}
CreateTask.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
  save: PropTypes.func,
}