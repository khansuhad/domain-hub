import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-instrumentSans font-bold text-center mb-5 text-[#ffffff] dark:text-[#F5F7F8]  ">
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.string,
};

export default Heading;
