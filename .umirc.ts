import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  npmClient: 'pnpm',
  history: {
    type: 'hash',
  },
  routes: routes,
  mfsu: { mfName: 'mf', strategy: 'normal' }, //mfsu默认配置
});
