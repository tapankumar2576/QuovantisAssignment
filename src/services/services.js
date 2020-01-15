import { appConfig } from "../config/appConfig";
import Axios from "axios";

export const globalAPIHandler = (path, method, data) => {
  return new Promise((resolve, reject) => {
    Axios({
      method: method,
      url: `${appConfig.BASE_URL}${path}`,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
