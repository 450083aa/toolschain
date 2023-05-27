import Request from "axios";

const request = Request.create({
    baseURL: "",
    timeout: 5000,
});

request.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if(error.response){
            if (error.response.status) {
                return false;
            }
        }
        return false;
    }
);

export function Device(host: any, path: string, method: string, params: object, data: object) {

    return request({
        baseURL: "http://" + host + ":10081",
        headers: {
            "Content-Type": "application/json"
        },
        url: path,
        method: method,
        params: params ? params : {},
        data: data ? data : {}
    });
}