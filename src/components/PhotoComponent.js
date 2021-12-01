const PhotoComponent = ({ alt_description, urls: { regular } }) => {
  return (
    <div className="single-photo">
      <h1>Photo Component</h1>
      <img src={regular} alt={alt_description} />
    </div>
  );
};

export default PhotoComponent;
