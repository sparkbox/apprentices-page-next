import PropTypes from 'prop-types';

const Link = ({href, children}) => (
  <a href={href}>{children}</a>
)

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Link;
