import CMS from 'netlify-cms'

import PagePreview from './preview-templates/PagePreview'
import PostPreview from './preview-templates/PostTemplate'

CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('posts', PostPreview)