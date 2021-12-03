export default class BaseUrl {
    BASE_URL = "http://localhost:4000/"

    endpoint(path) {
        return this.BASE_URL + path
    }

}
