
import PropTypes from 'prop-types';

const Description = ({children}) => {
    return (
        <p className='text-center lg:w-3/5 px-[5%] mx-auto text-[#fff] dark:text-[#F5F7F8]'>
            {children}
        </p>
    );
};

Description.propTypes = {
    children: PropTypes.string
};

export default Description;