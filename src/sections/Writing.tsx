import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { CardContainer } from "../components/Card";
import Triangle from "../components/Triangle";
import { Post } from "../components/Post";
import { SECTION } from "../utils/constants";

const Writing = ({ posts }) => {
  return (
    <Section.Container id={SECTION.writing} Background={Background}>
      <Section.Header name={SECTION.writing} icon="✍️" label="writing" />
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.5}>
          {posts.map((post) => (
            <Post {...post} key={post.slug} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["15vh", "10vh"]}
      width={["100vw", "100vw"]}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
);

export default Writing;
