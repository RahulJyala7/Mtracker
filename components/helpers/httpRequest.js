// import axios from 'axios';
// import * as Config from '../appconfig';

// export function doActionPost(config) {
//   let token = window.localStorage.getItem("jwt_admin");
//   let authHeader;
//   if (token) {
//     authHeader = 'bearer ' + "" + token
//   }
//   else {
//     authHeader = null
//   }
//   if (config) {
//     let url = Config.Api_URL() + config.url;
//     return axios({
//       url: url,
//       method: 'POST',
//       data: config.data,
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': authHeader
//       }
//     });
//   }
// }

// export function doActionGet(config) {
//   let token = window.localStorage.getItem("jwt_admin");
//   if (config) {
//     let url = Config.Api_URL() + config.url;
//     return axios({
//       url: url,
//       method: 'GET',
//       headers: {
//         'Authorization': 'bearer ' + "" + token
//       }
//     });
//   }
// }


// //Response InterCeptors for redirection unauth user
// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   if (error.response.status === 401) {
//     window.localStorage.clear();
//     window.location.reload();
//   }
//   // Do something with response error
//   return Promise.reject(error);
// });


