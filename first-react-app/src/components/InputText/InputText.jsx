import { useState } from "react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import styles from "./InputText.module.css";
import { Button } from "react-bootstrap";

const InputText = () => {
  const [data, setData] = useState("");
  return (
    <div className={styles.container}>
      <Input
        changeHandler={(value) => {
          console.log("from parent", value);
          setData(value);
        }}
        val={data}
      />
      <Button variant="primary"
        onClick={() => {
          setData("");
        }}
      >
        Reset
      </Button>
      <Text msg={data} />
    </div>
  );
};
export default InputText;
