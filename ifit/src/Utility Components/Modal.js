import { Modal } from "antd";


function IFitModal(props) {
    return (
        <Modal
            title={props.title}
            open={props.isOpen}
            onOk={props.onOk}
            onCancel={props.onCancel}
            cancelText={props.cancelText ? props.cancelText : 'Cancel'}
            okText={props.okText ? props.okText : "OK"}
            maskClosable={props.maskClosable ? props.maskClosable : false}
            footer={props.footer ? props.footer : null}
            closable={false}
            width="auto" // Set width to auto
            bodyStyle={{
              maxWidth: "100%", // Adjust max-width to prevent overflow
              overflow: "auto", // Allow scroll for long content
              padding: "16px", // Add padding
            }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
        >
            <div>

                {props.Component()}</div>

        </Modal>
    )

}
export default IFitModal;