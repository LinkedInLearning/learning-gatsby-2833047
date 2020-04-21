import React from "react"
import style from "./event.module.css"

const humanDate = date => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}
const Event = ({ event }) => (
  <li className={style.event}>
    <div className={style.event__title}>
      <a href={event.url}>{event.name}</a>
    </div>
    <div className={style.event__meta}>
      {humanDate(event.startDate)}{" "}
      {event.endDate && `to ${humanDate(event.endDate)}`}
    </div>
    <div className={style.event__meta}>{event.location}</div>
  </li>
)

export default Event
