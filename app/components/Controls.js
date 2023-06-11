import { useStore } from "./store";

function Controller() {
    const setUserName = useStore((state) => state.setUserName)
    const setUserID = useStore((state) => state.setUserID)
    const setUserRole = useStore((state) => state.setUserRole)

    const user = []
    user.push(setUserRole)
    return user
}

export default Controller