import moment from "moment"
import { IEvents } from "../api/interfaces/events"

export const sortEventsByDate = (data : IEvents[]) => {
    data = data.sort((a,b) =>{ 
        const A = moment(a.data)
        const B =  moment(b.data)
        return  A.diff(B) - B.diff(A)})
    return data 
}