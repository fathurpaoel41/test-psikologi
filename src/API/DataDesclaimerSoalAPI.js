import BaseUrl from "./BaseUrl"
import axios from "axios"

export default class DataDesclaimerSoalAPI extends BaseUrl {
    subPath = "desclaimerSoal"

    getDesclaimerSoal(id) {
        return axios.get(this.endpoint(this.subPath)+`/${id}`)
    }
}
