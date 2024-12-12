import Modal from 'react-bootstrap/Modal';

function IFitModal(props) {
  return (
    <Modal show={true} fullscreen={true}  autofocus={true} >
    <Modal.Header >
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.body}</Modal.Body>
  </Modal>
  );
}

export default IFitModal;
