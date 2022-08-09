import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import PageTitle from "../../components/Typography/PageTitle";
import { Button, Alert } from "@windmill/react-ui";

import Actions from "../../redux/actions";

import * as schemas from "../../configs/modelSchemas";
import Form from "../../components/Forms/Form";

function ItemPage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [itemFormValues, setItemFormValues] = useState({
    loaded: false,
    values: JSON.parse(JSON.stringify(schemas[props.type + "Schema"])),
  });
  const item = useSelector((state) => state[props.type].item);

  const updateValuesWithLanguages = (language) => (evt) => {
    evt.persist();
    setItemFormValues((s) => ({
      ...s,
      values: {
        ...s.values,
        [language]: {
          ...s.values[language],
          [evt.target.name]: evt.target.value,
        },
      },
    }));
  };

  const updateValuesOneLanguage = (evt) => {
    evt.persist();
    setItemFormValues((s) => ({
      ...s,
      values: {
        ...s.values,
        [evt.target.name]: evt.target.value,
      },
    }));
  };

  const updateValues = props.language
    ? updateValuesWithLanguages
    : updateValuesOneLanguage;

  const handleCheckboxChange = (evt) => {
    setItemFormValues((s) => ({
      ...s,
      values: {
        ...s.values,
        [evt.target.name]: evt.target.checked,
      },
    }));
  };

  //TODO: DELETE BUTTON
  const deleteItem = (id) => {
    return () => {
      dispatch(Actions[props.type].deleteItem(id));
    };
  };

  const save = () => {
    dispatch(Actions[props.type].update({ id, params: itemFormValues.values }));
  };

  //GET DATA
  useEffect(() => {
    if (id) {
      dispatch(Actions[props.type].getOne(id));
    }
  }, [id]);

  //POPULATE FORM VALUES
  useEffect(() => {
    if (item.loaded && !item.fetching) {
      let tempValues = JSON.parse(JSON.stringify(itemFormValues.values));
      if (props.language) {
        for (let language in tempValues) {
          for (let key in tempValues[language]) {
            if (typeof item.data[language][key] !== "undefined") {
              if (props.options?.selectKeys && props.options.selectKeys[key]) {
                tempValues[language][key] =
                  item.data[language][key][props.options.selectKeys[key]];
              } else {
                tempValues[language][key] = item.data[language][key];
              }
            }
          }
        }
      } else {
        for (let key in tempValues) {
          if (typeof item.data[key] !== "undefined") {
            if (props.options?.selectKeys && props.options.selectKeys[key]) {
              tempValues[key] = item.data[key][props.options.selectKeys[key]];
            } else {
              tempValues[key] = item.data[key];
            }
          }
        }
      }
      setItemFormValues({
        values: tempValues,
        loaded: true,
      });
    }
  }, [item.loaded, item.fetching]);

  return (
    <>
      <PageTitle>{props.title}</PageTitle>
      <div>
        <Button className="mb-3" onClick={() => history.goBack()}>
          Revenir
        </Button>
      </div>
      {itemFormValues.loaded && !item.fetching && (
        //TODO: REFACTOR ALL FORMS IN A FILE
        //   typeof Forms[props.type] !== "undefined" &&
        <Form save={save} isEditForm>
          {item.error.status === true && (
            <Alert type="warning">{item.error.message}</Alert>
          )}
          {props.children(itemFormValues, updateValues, handleCheckboxChange)}
        </Form>
      )}
    </>
  );
}

export default ItemPage;
