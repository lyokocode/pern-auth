import Modal from "../../modals"
import { createModal, useModals } from "../../utils/modal"

export const Calender = () => {
    const modals = useModals()
    return (
        <div>
            <button onClick={() => {
                createModal("calendar")
            }}>Date</button>
            {modals.length > 0 && <Modal />}

        </div>
    )
}
