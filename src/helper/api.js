import axios from "axios";

async function apiTest(text) {
    let result;
    await axios
        .post("http://localhost:8000/api/test", text, {})
        .then((res) => {
            console.log(res.data);
            result = res.data;
        })
        .catch((e) => {
            // Unknown / Unhandled Error
            result = e;
        });
    return result;
}

export { apiTest };
