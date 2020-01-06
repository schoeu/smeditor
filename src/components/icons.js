const qiniu = (name) => {
  return `https://qncdn.schoeu.com/editor/${name}.svg`
}

const names = ['bold', 'italic', 'underline', 'strikethrough', 'color', 'listOrdered', 'listUnordered', 'listCheck', 'indent', 'outdent', 'alignLeft', 'alignCenter', 'alignRight', 'undo', 'redo', 'removeFormat', 'insertVideo', 'insertLink', 'insertImage', 'insertLine', 'insertQuote', 'insertBlock']
const icons = {}

names.forEach(name => {
  icons[name] = qiniu(name.toLowerCase())
})

export default icons
