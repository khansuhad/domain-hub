import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="py-10 md:py-14 lg:py-20">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
