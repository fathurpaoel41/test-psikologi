export default class BaseUrl {
    BASE_URL = "https://618354c291d76c00172d18c6.mockapi.io/api/v1/"

    endpoint(path) {
        return this.BASE_URL + path
    }

}
