import modalData from "../modal.js"
import { useModals } from "../utils/modal"
import { useState } from "react";
import "../styles/modal.scss"

export default function Modal() {
    const modals = useModals();
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalName) => {
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <div>
            {
                modals.map((modal, i) => {
                    const m = modalData.find(m => m.name === modal.name);
                    const isActive = activeModal === modal.name;

                    return (
                        <div
                            className={`modalContainer ${isActive ? "active" : ""}`}
                            key={i}
                        >
                            <m.element closeModal={closeModal} openModal={openModal} />
                        </div>
                    )
                })
            }
        </div>
    )
}
