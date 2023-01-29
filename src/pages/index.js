import React from "react"
import { graphql } from "gatsby"
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
            <div className="lg:w-3/5 pt-2 lg:pt-10 px-10 md:px-20 divide-y-2 divide-gray-200 divide-solid">

                {/* About Section */}
                <div className="pb-10">

                    <div className="text-right">
                        <a href={ metadata.linkedin } className="m-2 text-gray-500 hover:text-blue-500">
                            <svg className="w-8 h-8 inline" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                            </svg>
                        </a>

                        <a href={ metadata.github } className="m-2 text-gray-500 hover:text-blue-500">
                            <svg className="w-8 h-8 inline" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                    <h1 className="text-gray-800 text-3xl font-extralight tracking-wider">About me</h1>
                    <p className="text-gray-500 text-justify pt-5">Hi my name is Tobi, thank you for taking the time to visit my website. I am a Healthcare Consultant currently based in London. Bit by bit I am teaching myself to code and have built this website to showcase my projects and progress. Please get in touch with me if you want to discuss anything on this website, I'd love to hear from you.</p>
                    <div className="text-gray-500 text-left pt-5 space-y-2">
                        <p><span className="font-medium text-blue-500">Email:</span> { metadata.email }</p>
                    </div>
                </div>
            
                {/* Projects Section */}
                <div className="pt-10 pb-5">
                    <h1 className="text-gray-800 text-3xl font-extralight tracking-wider">Projects</h1>
                    <p className="text-gray-500 text-justify pt-5 pb-4">Listed below are a selection of projects I have completed since my first "Hello World" program in 2019. The projects detailed below are available to view on my <a href={ metadata.github } className="underline hover:text-blue-500">Github</a>. However, I no longer own the interlectual property for certain projects and therefore the code is not public. The stack can be seen below each video.</p>

                    <div className="divide-y">
                        {/* Map through the markdown files in the src/projects folder */}
                        { projects.map(project => (
                            <div className="py-8 pt-6 sm:w-11/12 mx-auto">

                                <div className="text-right mb-1">

                                    { project.frontmatter.website_link ? 
                                        <a className="text-gray-500 hover:text-blue-500 mx-1" href={ project.frontmatter.website_link }>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 inline" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                                            </svg>
                                        </a> : 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 inline text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                                        </svg> }

                                    { project.frontmatter.github ? 
                                        <a className="text-gray-500 hover:text-blue-500 mx-1" href={ project.frontmatter.github }>
                                            <svg className="w-7 h-7 inline" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> 
                                            </svg>
                                        </a> : null }
                                </div>

                                <div>
                                    <h3 className="text-2xl text-gray-600 font-extralight">{ project.frontmatter.title }</h3>     
                                    <h4 className="text-gray-500 text-justify pt-2">{ project.frontmatter.description }</h4>
                                    
                                    <div className="pt-4 mx-2">
                                        <video className="video-container video-container-overlay max-h-96 mx-auto md:max-w-5/6 bg-black" controls>
                                            <source src={ project.frontmatter.video_name } type="video/mp4" />
                                            <track />
                                        </video>
                                    </div>

                                    <div className="font-extralight tracking-wider flex pt-2 mx-2 justify-center">
                                        {/* Map through the stack lists in the markdown files */}
                                        <p className="text-gray-500"><span className="text-blue-500">Stack: </span>{project.frontmatter.stack}</p>
                                    </div>
                                </div>
                            </div>              
                        ))}
                    </div>
                </div>

                <footer>
                    <p className="text-center text-gray-400 pt-5 pb-7 text-xs ">© 2023</p>
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
          website_link
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