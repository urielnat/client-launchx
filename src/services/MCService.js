import http from "../http-common";

class MCService {
  getAll() {
    return http.get("/MC");
  }
  get(id) {
    return http.get(`/MC/${id}`);
  }
  create(data) {
    return http.post("/MC", data);
  }
  update(id, data) {
    return http.put(`/MC/${id}`, data);
  }
  delete(id) {
    return http.delete(`/MC/${id}`);
  }
}

export default new MCService();
