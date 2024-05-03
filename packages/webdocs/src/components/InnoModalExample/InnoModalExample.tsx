import {
  InnoButton,
  Modal,
  ModalRef,
  showModal,
  InnoModalHeader,
  InnoModalContent,
  InnoModalFooter,
} from "@innomotics/ix-react-lib";
import { useRef } from "react";

export default function InnoModalExample() {
  const modalRef = useRef<ModalRef | null>(null);

  const open = () => {
    const content = (
      <Modal ref={modalRef}>
        <InnoModalHeader showClose={false}>Header title</InnoModalHeader>
        <InnoModalContent>
          <div style={{ padding: "20px" }}>
            <span>Modal content</span>
          </div>
        </InnoModalContent>
        <InnoModalFooter
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          <InnoButton onClick={() => modalRef.current?.close(null)}>
            Close
          </InnoButton>
          <InnoButton onClick={() => modalRef.current?.close(null)}>
            Confirm
          </InnoButton>
        </InnoModalFooter>
      </Modal>
    );

    showModal({
      size: "720",
      content: content,
      backdrop: true,
      centered: true,
      closeOnEscape: false,
      closeOnBackdropClick: false,
    });
  };

  return (
    <div className="modal-sizes-example">
      <InnoButton onClick={() => open()}>Open modal</InnoButton>
    </div>
  );
}
