import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotimage"
import style from "./events.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About this site"
        description="Information about the site."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>About this site</h1>
        <RobotImage
          src={"/images/bubbles-callout.png"}
          alt={"Bubbles the Robot"}
        />
        <RobotImage src={"/images/dolly-callout.png"} alt={"Dolly the Robot"} />
        <RobotImage
          src={"/images/eileen-callout.png"}
          alt={"Eileen the Robot"}
        />
        <div>
          <p>This is the first page I've created using Gatsby!</p>
          <p>
            It was originally based on the Index page, but now it's totally
            unique!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
