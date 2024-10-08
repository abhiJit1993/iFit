import { Modal } from "antd";


function IFitModal (props){
console.log(props)
    return(
        <Modal
        title={props.title}
        open={props.isOpen}
        onOk={props.onOk}
        onCancel={props.onCancel}
        ></Modal>
    )
     
    }
    export default IFitModal;