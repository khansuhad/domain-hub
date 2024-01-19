import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="my-10 md:my-14 lg:my-20">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
