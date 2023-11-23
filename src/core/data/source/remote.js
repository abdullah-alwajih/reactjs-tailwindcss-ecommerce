import axios from 'axios'

class Remote {
  static _http = axios.create({baseURL: "http://127.0.0.1:8000"})
  
  static async get(endpoint, params = null) {
    const res = await Remote._http.get(endpoint, {params});
    return res.data;
  }
  
  static async post(endpoint, data,  isFormData= false, params  = null,) {
    const config = {
      headers: isFormData ? {"Content-Type": "multipart/form-data"} : {"Content-Type": "application/json"},
      params: params,
    }
    return await this._http.post(endpoint, data, config);
  }
}

export default Remote;