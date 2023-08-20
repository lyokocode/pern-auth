import Modal from "../../modals"
import { createModal, useModals } from "../../utils/modal"

export const Calendar = ({ onSelectDateRange }) => {
    const modals = useModals()
    return (
        <div>
            <button onClick={() => {
                createModal("calendar")
            }}>Date</button>
            {modals.length > 0 && <Modal data={onSelectDateRange} />}

        </div>
    )
}
