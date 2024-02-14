import axios from "axios";
import { clearCookie } from "./auth";

const axiosSecure = axios.create({
    baseURL: 'https://stay-vista-server-rho.vercel.app',
    withCredentials: true,
})

// intercept response and check for unauthorized promise
axiosSecure.interceptors.response.use(response => response, async (error) => {
    console.log("error track in the interceptors", error.response);

    if (error.response &&
        (error.response.status === 401 || error.response.status === 403)
    ) {
        await clearCookie()
        window.location.replace('/login')
    }

    Promise.reject(error)
})

export default axiosSecure