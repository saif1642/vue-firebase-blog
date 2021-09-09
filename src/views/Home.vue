<template>
  <div class="home">
     <BlogPost :post="welcomeScreen"/>
     <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
     <div class="blog-card-wrap">
       <div class="container">
         <h3>View More Recent Blogs</h3>
         <div class="blog-cards">
            <BlogCard :post="post" v-for="(post,index) in sampleBlogCards" :key="index"/>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
export default {
  name: "Home",
  components: {BlogPost,BlogCard},
  data(){
    return{
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          "title": "Javascript event loop explained",
          "blogHtml": "Javascript event loop explained",
          "blogCoverPhoto": "beautiful-stories"
        },
        {
          "title": "Javascript event loop explained",
          "blogHtml": "Javascript event loop explained",
          "blogCoverPhoto": "designed-for-everyone"
        }
      ],
      sampleBlogCards: [
        {blogTitle:"Blog Card #1",blogCoverPhoto:"stock-1",blogDate:"May 1,2021"},
        {blogTitle:"Blog Card #2",blogCoverPhoto:"stock-2",blogDate:"May 2,2021"},
        {blogTitle:"Blog Card #3",blogCoverPhoto:"stock-3",blogDate:"May 3,2021"},
        {blogTitle:"Blog Card #4",blogCoverPhoto:"stock-4",blogDate:"May 4,2021"}
      ]
    }
  }
};
</script>


<style lang="scss" scoped>
.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media(min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

</style>