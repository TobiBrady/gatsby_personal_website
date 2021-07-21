import { graphql } from "gatsby"
import React from "react"
import '../styles/global.css'
import Sidebar from '../components/Sidebar.js'
//import Projects from '../components/Projects.js'

export default function Home({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  
  return (
    <div className="flex w-full">
      {/* Sidebar component. To edit the width of the sidebar go to the Sidebar.js file. */}
      <Sidebar />

      {/* Area outside of the sidebar (perhaps create a layout file in teh future to standardise the width atribute) */}
      <div className="w-3/5">

        {/* Projects Section */}
        <div>
          <h1 className="text-gray-500 text-xl">Projects</h1>
        </div>
        <div>

          {/* Map through the markdown files in the src/projects folder */}
          { projects.map(project => (
            <div className="mt-5">
              <h3 className="font-bold">{ project.frontmatter.title }</h3>
              <h4>{ project.frontmatter.description }</h4>

              <div className="flex">
                {/* Map through the stack lists in the markdown files */}
                { project.frontmatter.stack.map(component => (
                  <p className="font-thin border-2 border-gray-700 m-1 px-2 w-min">{ component }</p>
                ))}
              </div>
            </div>
            
          ))}

        </div>
      </div>
    </div>
  )
}

// eport page query
export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          stack
          image_name
          description
        }
        id
      }
    }
  }
`