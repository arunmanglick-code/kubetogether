import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1,
};

export default function () {
    const response = http.get('http://127.0.0.1:58437/');
    check(response, {
        "status code should be 200": res => res.status === 200,
    });
    console.log("Testing thru K6");
}

// import http from 'k6/http';

// export default function () {
//   const payload = JSON.stringify({
//     name: 'lorem',
//     surname: 'ipsum',
//   });
//   const headers = { 'Content-Type': 'application/json' };
//   http.post('https://httpbin.test.k6.io/post', payload, { headers });
// }