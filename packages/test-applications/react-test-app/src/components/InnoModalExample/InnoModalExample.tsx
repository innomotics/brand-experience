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
  const modalRef = useRef<ModalRef>(null);

  const open = () => {
    const content = (
      <Modal ref={modalRef}>
        <InnoModalHeader showClose={false}>Header title</InnoModalHeader>
        <InnoModalContent>
          <div>
            <span>Modal content</span>
          </div>
        </InnoModalContent>
        <InnoModalFooter>
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
