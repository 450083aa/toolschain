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

export function api(path: string, method: string, params: object, data: object) {

    let U_Token:any = localStorage.getItem("u_token") ? localStorage.getItem("u_token") : "";
    let C_Token:any = localStorage.getItem("c_token") ? localStorage.getItem("c_token") : "";

    return request({
        baseURL: "http://127.0.0.1:10081",
        headers: {
            "Content-Type": "application/json",
            "C-Token": C_Token,
            "U-Token": U_Token
        },
        url: path,
        method: method,
        params: params ? params : {},
        data: data ? data : {}
    });
}

export function Service(path: string, method: string, params: object, data: object) {

    let U_Token:any = localStorage.getItem("studio:account:token") ? localStorage.getItem("studio:account:token") : "";

    return request({
        baseURL: "https://api.geekros.com",
        headers: {
            "Content-Type": "application/json",
            "C-Token": "8vG9YJxk1B7LoOZQKlejN9y5Eo0ZaqJrdx4MVjJBqZa0Nw41Yd5kWGMz87rpAQDALSBB1pnomOgVb9XQLxPDlAvyKE6egwD8WLO1AknmzGPvY7X6BbNa4jgMbwq6QE5P",
            "U-Token": U_Token
        },
        url: path,
        method: method,
        params: params ? params : {},
        data: data ? data : {}
    });
}