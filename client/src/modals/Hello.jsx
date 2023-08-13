import { destroyModal } from "../utils/modal"

const Hello = () => {
    return (
        <div>
            <div> test modalı burada</div>
            <button onClick={destroyModal}>modalı kapat</button>
        </div>
    )
}

export default Hello