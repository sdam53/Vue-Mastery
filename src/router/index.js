import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/PageHome.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import Thread from "@/pages/PageThreadShow.vue";
import PageForum from "@/pages/PageForum.vue";
import sourceData from "@/data.json";

//list of out routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: PageForum,
    props: true
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: Thread,
    props: true,
    //this basically will check if this endpoint is right, and if not we get sent to notFound
    beforeEnter(to, from, next) {
      const threadExist = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      console.log(threadExist);
      if (!threadExist)
        return {
          name: "NotFound",
          params: {
            pathMatch: to.path.substring(1).split("/")
          },
          query: to.query,
          hash: to.hash
        };
      else next();
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFound
  }
];

//exporting it
export default createRouter({
  history: createWebHistory(),
  routes: routes
});
