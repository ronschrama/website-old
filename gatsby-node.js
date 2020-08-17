exports.onCreateNode = ({ node }) => {
  // highlight-start
  if (node.internal.type === `Mdx`) {
    console.log(node.internal.type)
  }
  // highlight-end
}