import modalData from "../modal.js"
import { useModals } from "../utils/modal"
import "../styles/modal/modal.scss"

export default function Modal({ data, reFetch }) {
    const modals = useModals()
    return (
        <div >
            {
                modals.map((modal, i) => {
                    const m = modalData.find(m => m.name === modal.name)

                    return (
                        <div className="modalContainer" key={i}>
                            <m.element data={data} reFetch={reFetch} />
                        </div>
                    )
                })
            }
        </div>
    )
}