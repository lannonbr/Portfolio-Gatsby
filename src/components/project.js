import React from 'react'
import Img from 'gatsby-image'
import moment from 'moment'
import TechCard from '../components/techCard'
import styled from 'styled-components'

const ProjectWrapper = styled.article`
  display: flex;
  flex-direction: ${props =>
    props.idx && (props.idx % 2 === 0 ? `unset` : `row-reverse`)};
  padding: 10px;
  margin-bottom: 30px;

  .project__image {
    flex: 1;
    box-shadow: 0 2px 6px hsla(120, 0%, 20%, 0.3);
    border-radius: 4px;
    margin: 0 20px;
  }

  .project__details {
    flex: 1;
  }

  .project__link {
    margin-right: 20px;
  }
`

function ProjectLink({ url, target, text }) {
  return (
    <a href={url} target={target} className="project__link">
      {text}
    </a>
  )
}

function Project({ project, idx }) {
  const title = project.project_title.text
  const description = project.description.text
  let img = project.main_image.localFile

  let dateObj = moment(project.project_origin_date, 'YYYY-MM-DD')
  let date = dateObj.format(`MMMM YYYY`)

  return (
    <ProjectWrapper idx={idx}>
      <Img className="project__image" fluid={img.childImageSharp.fluid} />
      <div className="project__details">
        <h2>{title}</h2>
        <time dateTime={project.project_origin_date}>Created: {date}</time>
        <p>{description}</p>
        <ProjectLink
          url={project.github_link.url}
          target={project.github_link.target}
          text="GitHub Link"
        />
        <ProjectLink
          url={project.website_link.url}
          target={project.website_link.target}
          text="Website Link"
        />
        {project.technologies.map(tech => {
          return (
            <TechCard
              key={tech.technology_field}
              tech={tech.technology_field}
            />
          )
        })}
      </div>
    </ProjectWrapper>
  )
}

export default Project