import ContentLoader from "react-content-loader"

const SkeletonPopularCategories = (props) => (
  <ContentLoader 
    speed={2}
    width={210}
    height={176}
    viewBox="0 0 210 176"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="210" height="176" />
  </ContentLoader>
)

export default SkeletonPopularCategories;


