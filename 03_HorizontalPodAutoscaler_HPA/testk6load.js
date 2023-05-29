// snippet from ./todos-testing.js
import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1,
};

// snippet from ./todos-testing.js
export default function () {
    const response = http.get('http://127.0.0.1:58437/');
    check(response, {
        "status code should be 200": res => res.status === 200,
    });
    console.log ("Hi Arun");
}