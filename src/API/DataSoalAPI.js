import BaseUrl from "./BaseUrl"
import axios from "axios"

export default class DataSoalAPI extends BaseUrl {
    subPath = "postTest"

    getDataSoal() {
        return axios.get(this.endpoint(this.subPath))
    }
}
