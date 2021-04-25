import axios from "axios"

// get data from api
export function fetchData() {
    return new Promise((resolve, reject) => {
        axios.get("https://api.publicapis.org/categories").then((result) => {
            resolve(result.data)
        }).catch((err) => {
            reject(err)
        });
    })
}