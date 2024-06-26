<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="article in paginatedArticles" :key="article.id">
            <router-link :to="`/read/${article.slug}/${article.id}`" class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center">
              <div class="w-full pr-4">
                <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                  <div class="h-[1px] w-20 bg-sky-200 md:w-5 aos-init aos-animate mr-2"></div> {{ article.date }}
                </div>
                <h1 class="text-md md:text-lg text-sky-200 font-bold mb-2 paraf">{{ article.title }}</h1>
                <div class="text-sm hidden md:block paraf">{{ article.desc }}</div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <img :src="article.image" class="rounded-lg md:rounded-xl" alt="">
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-sky-300 text-transparent">Let's share experiences,
            stories, and knowledge together.
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-sky-200 aos-init aos-animate mr-2"></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">Topics</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Frontend Engineering</span>
              <span class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation pagination -->
    <nav class="mt-4">
      <ul class="flex justify-center space-x-4">
        <li v-if="currentPage > 1">
          <button @click="changePage(currentPage - 1)" style="color: skyblue;">Previous</button>
        </li>
        <li v-for="page in totalPages" :key="page">
          <button @click="changePage(page)" :class="{ 'font-bold': page === currentPage, ' text-white': page === currentPage, 'text-skyblue': page !== currentPage }" >{{ page }}</button>
        </li>
        <li v-if="currentPage < totalPages">
          <button @click="changePage(currentPage + 1)" style="color: skyblue;">Next</button>
        </li>
      </ul>
    </nav>

    <!-- Article List Component -->
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      perPage: 7,
    };
  },
  computed: {
    sortedArticles() {
      return this.articles.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    paginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.sortedArticles.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.sortedArticles.length / this.perPage);
    },
  },
  components: {
    ArticleList
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      try {
        const response = await axios.get('https://65cacf49efec34d9ed86526f.mockapi.io/blog');
        this.articles = response.data;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}
</style>