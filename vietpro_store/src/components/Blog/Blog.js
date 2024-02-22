import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeBlog from "./HomeBlog";
import About from "../About";
import Details from "./Details";
import HeaderBlog from "./HeaderBlog";
import FooterBlog from "./FooterBlog";
import ContactBlog from "./ContactBlog";
import Page404Blog from "./Page404Blog";

const Blog = () => {
  return (
    <div id="body">
      <HeaderBlog />
      <Routes>
        <Route path="/" element={<HomeBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<ContactBlog />} />
        <Route path="*" element={<Page404Blog />} />
      </Routes>
      <FooterBlog />
    </div>
  );
};

export default Blog;
