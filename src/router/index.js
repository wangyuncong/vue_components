import Vue from 'vue'
import Router from 'vue-router'
import WycButton from '../components/WycButton'
import WycButtonIframe from '../components/WycButtonIframe'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/WycButtonIframe'
    },
    {
      path: '/WycButton',
      name: 'WycButton',
      component: WycButton,
    }, {
      path: '/WycButtonIframe',
      name: 'WycButtonIframe',
      component: WycButtonIframe
    }
  ]
})
