import { Modal } from "antd";


function IFitModal (props){
    return(
        <Modal
        title={props.title}
        open={props.isOpen}
        onOk={props.onOk}
        onCancel={props.onCancel}
        cancelText = {props.cancelText ? props.cancelText : 'Cancel'}
        okText={props.okText ?  props.okText : "OK"}
        maskClosable={props.maskClosable ? props.maskClosable : false}
        footer={props.footer?props.footer:null}
        closable={false}
        >
         <div>{props.Component()}</div>
         
        </Modal>
    )
     
    }
    export default IFitModal;