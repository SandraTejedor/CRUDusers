import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:3000/api/users",
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  getAllUsers = () => this._service.get("/allUsers");
  getOneUser = id => this._service.get(`/user/${id}`);
  newUser = user => this._service.post("newUser", user);
}
