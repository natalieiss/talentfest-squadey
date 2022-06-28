import { Link } from 'react-router-dom';
import styles from "./style.module.css"

function LinkText ({href, customClass, children}) {
  return (
    <Link to={href} className={styles[customClass]}>
      {children}
    </Link>
  );
}

export default LinkText;