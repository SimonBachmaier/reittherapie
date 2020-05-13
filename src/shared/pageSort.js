export function getPageEdgesByUrlPart(pageEdges, urlPart) {
    return pageEdges.filter(item => item.node.fields.slug.indexOf(urlPart) > -1);
}
export function sortPageEdgesByNavOrder(pageEdges) {
    pageEdges.sort((page1, page2) => {
        let navOrderPage1 = page1.node.frontmatter.navigationOrder;
        let navOrderPage2 = page2.node.frontmatter.navigationOrder;
        
        if (navOrderPage1 <= navOrderPage2) {
            return -1;
        } else {
            return 1;
        }
    });
}

