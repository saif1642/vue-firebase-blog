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
     <div class="updates">
       <div class="container">
         <h2>Never miss a post. Register for free!</h2>
         <router-link class="router-button" to="#">
           Register for VueFiredBlog <Arrow class="arrow arrow-light"/>
         </router-link>
       </div>
     </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg"

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
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
      ]
    }
  },
  computed:{
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards;
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

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}

</style>