import SUEditor from './components/SUEditor.vue'

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  Vue.component(SUEditor.name, SUEditor)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default SUEditor
