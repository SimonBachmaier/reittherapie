import React from 'react'
import PropTypes from 'prop-types'
import IndexPage from '../../templates/home'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  // image={data.image}
  // title={data.title}
  // heading={data.heading}
  // subheading={data.subheading}
  // description={data.description}
  // intro={data.intro || { blurbs: [] }}
  // mainpitch={data.mainpitch || {}}
  if (data) {
    return (
      <IndexPage
        data={ { markdownRemark: { frontmatter: data } } }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
