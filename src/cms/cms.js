import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import HorsePagePreview from './preview-templates/HorsePagePreview'
import FeaturePagePreview from './preview-templates/FeaturePagePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('index', HorsePagePreview)
CMS.registerPreviewTemplate('index', FeaturePagePreview)
