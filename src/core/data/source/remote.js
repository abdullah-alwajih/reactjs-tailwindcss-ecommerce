import axios from 'axios'
import notify from "../../../features/notifaction/hooks/useNotifaction";

class Remote {
  static _http = axios.create({baseURL: "http://127.0.0.1:8000"})
  
  static handleRequestError(error) {
    if (!navigator.onLine) notify('هناك مشكله فى الاتصال بالانترنت', 'warn');
  }
  
  static async get(endpoint, params = null) {
    try {
      const res = await Remote._http.get(endpoint, {params});
      return res.data;
    } catch (e) {
      Remote.handleRequestError(e);
      throw e;
    }
  }
  
  static async post(endpoint, data, isFormData = false, params = null,) {
    try {
      const config = {
        headers: {"Content-Type": isFormData ? "multipart/form-data" : "application/json"},
        params: params,
      }
      return await this._http.post(endpoint, data, config);
    } catch (e) {
      Remote.handleRequestError(e);
      throw e;
    }
  }
}

export default Remote;