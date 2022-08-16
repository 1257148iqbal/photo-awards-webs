import moment from "moment"

export const formattedTime = (time, format = 'hh:mm A') =>{
    return moment(time, "HH:mm:ss").add.format(format)
}