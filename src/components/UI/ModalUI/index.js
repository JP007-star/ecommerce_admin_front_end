import React from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
/**
* @author
* @function ModalUI
**/

export const ModalUI = (props) => {
    console.log(props.buttons)
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {

                    props.buttons ? props.buttons.map((button, index) => (
                        <Button key={index} variant={button.color} onClick={button.onClick}>
                            {button.label}
                        </Button>
                    )) :
                        (<Button variant="primary" onClick={props.onSubmit}>
                            Save 
                        </Button>)
                }

            </Modal.Footer>
        </Modal>
    )

}