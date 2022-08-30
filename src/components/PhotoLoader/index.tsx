import ContentLoader from "react-content-loader";

const PhotoLoader = () => (
  <ContentLoader
    speed={2}
    width={150}
    height={226}
    viewBox="0 0 150 226"
    backgroundColor="#f5f5f5"
    foregroundColor="#437276"
  >
    <rect x="4" y="-2" rx="0" ry="0" width="258" height="148" />
    <rect x="8" y="326" rx="5" ry="5" width="197" height="12" />
    <rect x="7" y="259" rx="5" ry="5" width="226" height="18" />
    <rect x="15" y="158" rx="0" ry="0" width="123" height="7" />
    <rect x="15" y="175" rx="0" ry="0" width="123" height="7" />
    <rect x="15" y="193" rx="0" ry="0" width="123" height="7" />
    <rect x="15" y="209" rx="0" ry="0" width="123" height="7" />
  </ContentLoader>
);

export { PhotoLoader };
