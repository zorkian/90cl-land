import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>90CL - Diamond M Ranch Airport</title>
      <h1 style={headingStyles}>
        Future Home of 90CL - Diamond M Ranch Airport
      </h1>
      <p style={paragraphStyles}>
        Welcome!
      </p>
      <p style={paragraphStyles}>
        This web page will be the future home page of all information about 90CL, a small
        private airstrip in Northern California.
      </p>
      <p style={paragraphStyles}>
        We look forward to welcoming you to fly in, camp, and enjoy the quiet that comes
        from being a little bit off the beaten path. Soon!
      </p>
      <iframe width="960" height="540" src="https://www.youtube.com/embed/0ywb-iMf4po" title="Landing at 90CL" />
      <p style={paragraphStyles}>
        <br />
        Fly safe,<br />
        Mark &amp; Athena
      </p>
    </main>
  )
}

export default IndexPage
