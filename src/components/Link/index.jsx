import { Link } from 'react-router-dom';
import styles from "./style.module.css"

function LinkText ({href, customClass, children, onClick}) {
  return (
    <Link to={href} onClick={onClick} className={styles[customClass]}>
      {children}
    </Link>
  );
}

export default LinkText;