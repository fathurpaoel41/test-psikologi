import BaseUrl from "./BaseUrl"
import axios from "axios"

export default class HasilTestApi extends BaseUrl {
    subPath = "hasilTest"

    getDataHasilTest(id) {
        return axios.get(this.endpoint(this.subPath + `/${id}`))
    }
}
