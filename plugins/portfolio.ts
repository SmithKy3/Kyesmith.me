import Vue from 'vue';
import portfolioCard from '@/components/portfolio/portfolioCard.vue';
import title from '@/components/portfolio/title.vue';
import codeLink from '@/components/portfolio/codeLink.vue';
import demoLink from '@/components/portfolio/demoLink.vue';
import lineBreak from '@/components/portfolio/lineBreak.vue';

Vue.component('portfolio-card', portfolioCard);

Vue.component('pf-title', title);
Vue.component('pf-code-link', codeLink);
Vue.component('pf-demo-link', demoLink);
Vue.component('pf-line-break', lineBreak);
