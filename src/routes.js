import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
import Login from './pages/login.vue';
import Welcome from './pages/welcome.vue';
import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';
import Signup from './pages/signup.vue';
import ForgotPass from './pages/forgotpass.vue';
import HomeTab from './tabs/hometab.vue';
import MessagesTab from './tabs/messagestab.vue';
import NetworkTab from './tabs/networktab.vue';
import ProfileTab from './tabs/profiletab.vue';

export default [
  {
    path: '/',
    component: HomePage,
    tabs: [
      {
        path: "/",
        id: "tab-1",
        component: HomeTab
      },
      {
        path: "/messagestab/",
        id: "tab-2",
        component: MessagesTab
      },
      {
        path: "/networktab/",
        id: "tab-3",
        component: NetworkTab
      },
      {
        path: "/profiletab/",
        id: "tab-4",
        component: ProfileTab
      },
    ]
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '/signup/',
    component: Signup,
  },
  {
    path: '/forgotpass/',
    component: ForgotPass,
  },
  {
    path: '/welcome/',
    component: Welcome,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
