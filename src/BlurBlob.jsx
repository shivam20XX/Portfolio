import PropTypes from "prop-types";

function BlurBlob({ position, size }) {
  const { top, left } = position;
  const { width, height } = size;
  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%,-50%)",
      }}
    >
      <div
        className="w-full h-full bg-pink-500 rounded-full opacity-30 blur-3xl"
        style={{
          animation: "spin 7s linear infinite",
        }}
      ></div>
    </div>
  );
}
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
