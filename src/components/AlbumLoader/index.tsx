import ContentLoader from "react-content-loader";

const AlbumLoader = () => (
  <ContentLoader
    speed={2}
    width={248}
    height={348}
    viewBox="0 0 248 348"
    backgroundColor="#f5f5f5"
    foregroundColor="#437276"
  >
    <rect x="0" y="-1" rx="0" ry="0" width="248" height="248" />
    <rect x="8" y="326" rx="5" ry="5" width="197" height="12" />
    <rect x="7" y="259" rx="5" ry="5" width="226" height="18" />
  </ContentLoader>
);

export { AlbumLoader };
