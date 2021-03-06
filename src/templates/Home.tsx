import React, { useEffect } from "react";
import Layout from "../components/Layout";

import Header from "../components/Header";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Writing from "../sections/Writing";
import Footer from "../components/Footer";

const Home = (context) => {
  const posts = context.pageContext.posts;

  return (
    <Layout>
      <Header isHomePage={true} />
      <Landing />
      <About />
      <Projects />
      {posts.length > 0 && <Writing posts={posts} />}
      <Footer />
    </Layout>
  );
};

export default Home;
