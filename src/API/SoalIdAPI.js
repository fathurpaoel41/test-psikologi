import BaseUrl from "./BaseUrl"
import axios from "axios"

export default class DataSoalAPI extends BaseUrl {
    subPath = "soalId"

    getSoalTest(id) {
        return axios.get(this.endpoint(this.subPath+`/${id}`))
    }
}
