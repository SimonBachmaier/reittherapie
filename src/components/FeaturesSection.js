import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { sortPageEdgesByNavOrder } from '../shared/pageSort';

export default (props) => {
    const data = useStaticQuery(graphql`
        query FeaturesQuery {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "feature"}}}) {
                edges {
                    node {
                        frontmatter {
                            name
                            navigationOrder
                            previewImage {
                                childImageSharp {
                                    fluid(maxWidth: 512, quality: 90) {
                                    ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    let featurePageEdges = data.allMarkdownRemark.edges;
    sortPageEdgesByNavOrder(featurePageEdges);

    let rows = [];
    let children = [];
    for (let i = 0; i < featurePageEdges.length; i++) {
            let item = featurePageEdges[i];
            if (item) {
                children.push(
                    <Col md="6" lg="4" key={item.node.fields.slug}>
                        <Link className="media d-block media-feature text-center" to={item.node.fields.slug}>
                            <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                            <div className="media-body">
                                <h3>{item.node.frontmatter.name}</h3>
                                {item.node.frontmatter.description ? (
                                    <p>{item.node.frontmatter.description}</p>
                                ) : ("")}
                                {item.node.frontmatter.previewImage ? (
                                    <img className="feature-preview-image" src={item.node.frontmatter.previewImage.childImageSharp.fluid.src} alt={item.node.frontmatter.name} />
                                ) : ""}
                            </div>
                        </Link>
                    </Col>
                );  
        }
    }
    
    rows.push(<Row className="justify-content-center" key={rows.length}>{children}</Row>);
    return (
        <React.Fragment>
            {rows}
        </React.Fragment>
    )
};
