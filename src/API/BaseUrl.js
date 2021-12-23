export default class BaseUrl {
    BASE_URL = "http://192.168.1.3:4000/"
    

    endpoint(path) {
        return this.BASE_URL + path
    }

}
