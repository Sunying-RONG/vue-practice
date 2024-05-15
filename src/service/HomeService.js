import http from "./http-common";

class HomeService {
  getDate() {
    return http.get("/meme");
  }
}

export default new HomeService();