import router from './index';

router.afterEach((to, from) => {
  document.title = (to?.meta?.title as string) + ' - OptiCut SPA';
});
