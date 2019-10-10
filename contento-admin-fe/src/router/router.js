import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home/index.vue";
import CampaignManagement from "../views/Maketer/CampaignManagement/index.vue";
import CampaignRequest from "../views/Editor/CampaignRequest/index.vue";
import TaskManagement from "../views/Writer/TaskManagement/index.vue";
import CampaignDetails from "../views/Maketer/CampaignDetails/index.vue"
import PublishChannel from "../views/Maketer/PublishChannel/index.vue"
import Calendar from "../views/Maketer/Calendar/index.vue"
import ContentManagement from "../views/Maketer/ContentManagement/index.vue";
import CustomertManagement from "../views/Maketer/CustomerManagement/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/CampaignManagement",
      name: "CampaignManagement",
      component: CampaignManagement
    },
    {
      path: "/CampaignRequest",
      name: "CampaignRequest",
      component: CampaignRequest
    },
    {
      path: "/TaskManagement",
      name: "TaskManagement",
      component: TaskManagement
    },
    {
      path: "/CampaignDetails",
      name: "CampaignDetails",
      component: CampaignDetails
    },
    {
      path: "/PublishChannel",
      name: "PublishChannel",
      component: PublishChannel
    },
    {
      path: "/Calendar",
      name: "Calendar",
      component: Calendar
    },
    {
      path: "/ContentManagement",
      name: "ContentManagement",
      component: ContentManagement
    },
    {
      path: "/CustomertManagement",
      name: "CustomertManagement",
      component: CustomertManagement
    },
  ]
});
