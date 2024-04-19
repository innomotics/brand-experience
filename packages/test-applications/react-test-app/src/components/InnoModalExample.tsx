import {
  InnoButton,
  Modal,
  ModalRef,
  showModal,
  InnoModalHeader,
} from "@innomotics/ix-react-lib";
import React, { useRef } from "react";

export default function InnoModalExample() {
  const modalRef = useRef<ModalRef>(null);

  const open = () => {
    showModal({
      size: "720",
      content: (
        <Modal ref={modalRef}>
          <InnoModalHeader>Header title</InnoModalHeader>
          <InnoButton onClick={() => modalRef.current?.close(null)}>
            Modal with size
          </InnoButton>
        </Modal>
      ),
    });
  };

  return (
    <div className="modal-sizes-example">
      <InnoButton onClick={() => open()}>Show modal size 360</InnoButton>
    </div>
  );
}
