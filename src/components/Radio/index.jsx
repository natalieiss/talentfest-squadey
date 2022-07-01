import styles from "./style.module.css";

const Radio = ({ options, classLabel, onChange, name, text }) => {
  return (
    <>
      {options && options.map((option, index) => (
        <label className={styles[classLabel]} key={option} onChange={onChange}>
          <input
            type='radio'
            role={option}
            name={name}
            value={option}
          />
          {text[index]}
        </label>
      ))}
    </>
  );
};

export default Radio;