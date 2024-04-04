import moment from "moment"

const fileFormat = (url = "") => {
    const fileExtension = url.split(".").pop()
    if (fileExtension === "mp4" || fileExtension === "webm" || fileExtension === "ogg") return "video"
    if (fileExtension === "mp3" || fileExtension === "wav") return "audio"
    if (fileExtension === "png" || fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "gif") return "image"
    return "file"

}

const transformImage = (url = "", width = 100) => url;

const getlast7days = () => {
    const currentDate = moment()
    const laast7days = []
    for (let i = 0; i < 7; i++) {
        const dayDate  = currentDate.clone().subtract(i,"days")
        const dayName = dayDate.format("dddd")
        laast7days.unshift(dayName)
    }
    return laast7days
}

export { fileFormat, transformImage, getlast7days }