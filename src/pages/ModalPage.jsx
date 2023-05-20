import Modal from "../components/Modal";

function ModalPage() {
  if (open)
    return (
      <div className="relative">
        <Modal />
      </div>
    );

  return null;
}

export default ModalPage;
