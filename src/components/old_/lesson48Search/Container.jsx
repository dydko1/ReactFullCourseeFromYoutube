import PropTypes from 'prop-types';

export default function InnerContainer({ children }) {
    return (
        <div >{children}</div >
    );
}

InnerContainer.propTypes = {
    children: PropTypes.node.isRequired,
};