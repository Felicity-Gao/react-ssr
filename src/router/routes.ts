import App from '@/App';
import About from '@/views/about/index';
import Test from '@/views/test/index';

const router = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/test",
    component: Test
  }
];

export default router;