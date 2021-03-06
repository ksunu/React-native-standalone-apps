import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/Blog-context";
import BlogPostForm from "../components/BlogPost-form";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))

  return (
    <BlogPostForm />
  )
}

const styles = StyleSheet.create({

})

export default EditScreen;