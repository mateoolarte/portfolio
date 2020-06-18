import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import ProjectCard from "../components/ProjectCard";
import HomePost from "../components/HomePost";

import projects from "../data/projects";

const Heading = styled.h2`
  margin-top: 0;
  font-size: 2.2rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const PostsWrapper = styled.div`
  margin-bottom: 5rem;
`;

const Btn = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 2px solid #1755b2;
  border-radius: 0.6rem;
  background-color: #1755b2;
  color: #fafafa;
  text-decoration: none;

  &:hover {
    background-color: #fafafa;
    color: #1755b2;
  }
`;

export default function Home({ location, data }) {
  const pathname = (location && location.pathname) || "/";
  const allMdx = data && data.allMdx;
  const posts = allMdx && allMdx.edges;

  return (
    <Layout currentPage={pathname}>
      <SEO title="Home" />
      <HomeHero />

      <Heading id="projects">Projects</Heading>

      <ProjectsWrapper>
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </ProjectsWrapper>

      <Heading>Latest posts</Heading>

      <PostsWrapper>
        {posts.map(post => {
          const node = post && post.node;
          const frontmatter = node && node.frontmatter;
          const path = frontmatter && frontmatter.path;
          const title = frontmatter && frontmatter.title;

          return <HomePost link={`/blog/${path}`} title={title} />;
        })}

        <Btn to="/blog">See more</Btn>
      </PostsWrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
      edges {
        node {
          frontmatter {
            id
            path
            title
          }
        }
      }
    }
  }
`;