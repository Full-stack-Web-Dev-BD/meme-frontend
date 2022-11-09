import jwtDecode from 'jwt-decode'
export const getUserFromToken = () => {
    if (!window.localStorage.getItem("authToken")) return false
    return jwtDecode(window.localStorage.getItem("authToken"))
}