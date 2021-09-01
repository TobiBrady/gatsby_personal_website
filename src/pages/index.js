import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import '../styles/global.css'
import Sidebar from '../components/Sidebar.js'

export default function Home({ data }) {
    const projects = data.allMarkdownRemark.nodes
    const metadata = data.site.siteMetadata
  
    return (
        <div className="lg:flex w-full bg-white">

            <Helmet>
                <title>Tobi Brady</title>
            </Helmet>

            {/* Sidebar component. To edit the width of the sidebar go to the Sidebar.js file. */}
            <Sidebar />
  
            {/* Area outside of the sidebar (perhaps create a layout file in the future to standardise the width atribute) */}
            <div className="lg:w-3/5 pt-10 lg:pt-16 px-10 md:px-20 divide-y-2 divide-gray-200 divide-solid">
        
                {/* About Section */}
                <div className="pb-10">
                    <h1 className="text-gray-800 text-3xl font-extralight tracking-wider">About me</h1>
                    <p className="text-gray-500 text-justify pt-5">Hi my name is Tobi, thank you for taking the time to visit my website. I am 25 year old Healthcare Consultant currently based in London. Bit by bit I am teaching myself to code and have built this website to showcase my projects and progress. Please get in touch with me if you want to discuss anything on this website, I'd love to hear from you.</p>
                    <div className="text-gray-500 text-left pt-5 space-y-2">
                        <p><span className="font-medium text-blue-500">Email:</span> { metadata.email }</p>
                        <p><span className="font-medium text-blue-500">Github:</span> <a href={ metadata.github } className="underline hover:text-blue-500">@TobiBrady</a></p>
                        <p><span className="font-medium text-blue-500">Linkedin:</span> <a href={ metadata.linkedin } className="underline hover:text-blue-500">Tobias Brady</a></p>
                    </div>
                </div>
            
                {/* Projects Section */}
                <div className="pt-10 pb-5">
                    <h1 className="text-gray-800 text-3xl font-extralight tracking-wider">Projects</h1>
                    <p className="text-gray-500 text-justify pt-5 pb-4">Listed in this section are a selection of projects I have completed since my first "Hello World" program in 2019. The projects detailed below are available to view on my <a href={ metadata.github } className="underline hover:text-blue-500">Github</a>. However, I no longer own the interlectual property for certain projects and therefore the code is not public. The stack can be seen below each video.</p>

                    {/* Map through the markdown files in the src/projects folder */}
                    { projects.map(project => (
                        <div className="py-8 sm:w-11/12 mx-auto">

                            <div>
                                { project.frontmatter.github ? 
                                    <h3 className=" text-2xl text-gray-600"><a className="mr-auto hover:text-blue-500 underline" href={ project.frontmatter.github }>{ project.frontmatter.title }</a></h3> : 
                                    <h3 className="text-2xl text-gray-600">{ project.frontmatter.title }</h3> 
                                    }

                                <h4 className="text-gray-500 text-justify pt-2">{ project.frontmatter.description }</h4>

                                <div className="pt-4">
                                    <video className="video-container video-container-overlay mx-auto md:w-5/6 p-2" controls>
                                        <source src={ project.frontmatter.video_name } type="video/mp4" />
                                        <track />
                                    </video>
                                </div>

                                <div className="flex justify-center pt-1">
                                    {/* Map through the stack lists in the markdown files */}
                                    { project.frontmatter.stack.map(component => (
                                        <p className="text-gray-500 text-sm border border-gray-300 rounded-full m-1 px-2 w-32 text-center">{ component }</p>
                                    ))}
                                </div>
                            </div>
                        </div>              
                    ))}
                </div>
                <footer>
                    <p className="text-center text-gray-400 pt-5 pb-7 text-xs ">© 2021</p>
                </footer>
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
          video_name
          description
          github
        }
        id
      }
    }
    site {
      siteMetadata {
        email
        github
        linkedin
      }
    }  
  }
`