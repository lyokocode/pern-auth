import { createModal, useModals } from "../utils/modal"
import Modal from "../modals"

export const Home = () => {

    const modals = useModals()
    console.log(modals)

    return (
        <div>
            <button onClick={() => {
                createModal("hello")
            }}>Open Modal</button>

            {modals.length > 0 && <Modal />}
        </div>
    )
}
