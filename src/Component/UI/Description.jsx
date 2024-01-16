
import PropTypes from 'prop-types';

const Description = ({children}) => {
    return (
        <p className='text-center lg:w-3/5 mx-auto'>
            {children}
        </p>
    );
};

Description.propTypes = {
    children: PropTypes.string
};

export default Description;