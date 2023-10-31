import { Fragment } from "react";

import styles from "./Overlay.module.css";

const Overlay = ({ isOpen, children, onClose }) => {
  return (
    <Fragment>
      {isOpen && (
        <div>
          <div className={styles.background} onClick={onClose} />
          <div className={styles.container}>
            <div className={styles.controls}>
              <button
                className={styles.close}
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Overlay;
