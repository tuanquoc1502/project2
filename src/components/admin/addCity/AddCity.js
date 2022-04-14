import React, { memo, useState } from 'react';
import styles from './AddCity.module.scss';
import ModalAddCity from './ModalAddCity';

const AddCity = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div className={styles.wrapper} onClick={handleOpen}>
        <div className={styles.title}>Add City</div>
      </div>
      <ModalAddCity open={open} setOpen={setOpen} />
    </>
  );
};

export default memo(AddCity);
