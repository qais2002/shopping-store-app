import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const apiUrl = axios.create({
    baseURL: BASE_URL,
});


// export default async function doRequest (url, method, data, headers) {
//     try {
//         const fetchApi = await axios({
//             baseURL: BASE_URL,
//             url: url,
//             method: method,
//             data: data,
//             headers: headers
//         });

//         const response = await fetchApi.status();
//         return response
//     } catch (err) {
//         console.log(err);
//     }
// }

export default apiUrl;