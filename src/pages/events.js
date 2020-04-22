import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"
import style from "./events.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Events"
        description="Come join us at an event in the future!"
        image="/logo.png"
        pathname="/events"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
        <h1 className={style.heading}>Events</h1>
        <div>
          <p>We attend and present at many events. Come join us!</p>
        </div>
      </section>
      <section className={style.events}>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Future events</h2>
          <ul className={style.events__list}>
            {data.futureEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Past events</h2>
          <ul className={style.events__list}>
            {data.pastEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "getting-creative-with-3-d-printers-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    futureEvents: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
    pastEvents: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
  }
`
