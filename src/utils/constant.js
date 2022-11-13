import { toast } from "react-toastify";

export function randomNum() {
    return Math.floor(1000 + Math.random() * 9000);
}
export function randomNum2() {
    return Math.floor(10 + Math.random() * 90);
}
export const baseURL = "http://localhost:5000"
// export const baseURL = "https://meme-backend-api.herokuapp.com"
export const logout = () => {
    window.localStorage.removeItem("authToken")
    toast.success("Logout Success !!!")
    setTimeout(() => {
        window.location.href = "/"
    }, 800);
}


export const utilActiveDB = {
    showMEME: "showMEME",
    roundStarted: "roundStarted",
    image: "image",
    video: "video",
    color: 'color',
    gif: 'gif',
    waiting: "waiting",
    topic: "topic",
    voting: "voting",
    player: 'player',
    selected_img: "selected_img",
    v_single: "v_single",
    round_winner: "round_winner",
    winner_result: "winner_result",
    round_winner: "round_winner"
}
export const utilSelectedInput = {
    player: "player",
    img: "img",
    color: "color",
    layout: "layout",
    gif: "gif",
    video: "video",
    player: "player"
}