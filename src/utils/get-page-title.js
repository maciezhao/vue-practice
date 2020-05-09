import defaultSettings from '@/settings'

const title = defaultSettings.title || 'UM 4G'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
