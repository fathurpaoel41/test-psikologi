import BaseUrl from "./BaseUrl"
import axios from "axios"

export default class DataSoalAPI extends BaseUrl {
    subPath = "dataSoal"

    getDataSoal() {
        return axios.get(this.endpoint(this.subPath))
    }
}
