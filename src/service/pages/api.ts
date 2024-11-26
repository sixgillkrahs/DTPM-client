import { apiClient } from "../../utils"


const getDataMenu = async () => {
    const resp = await apiClient.get("/page/all");
    return resp;
}

export {getDataMenu}