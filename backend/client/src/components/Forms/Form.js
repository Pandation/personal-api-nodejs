import React from "react";
import { Button } from "@windmill/react-ui";
import { EditIcon } from "../../icons";

const Form = (props) => {
  return (
    <div>
      {props.children}
      <Button
        className="mb-5 self-end"
        iconLeft={EditIcon}
        onClick={props.save}
      >
        {props.isEditForm ? "Enregistrer les modifications" : "Ajouter"}
      </Button>
    </div>
  );
};

export default Form;
