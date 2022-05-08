type DetailTopImageProps = {
    // key: number;
    link: string;
}

function DetailTopImage( {link}: DetailTopImageProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img
        className="property__image"
        src={link}
        alt="studio"
      />
    </div>
  );
}

export default DetailTopImage;
