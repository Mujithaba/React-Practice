import CommonInput from "../common-input/CommonInput";

const formType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
  RADIO: "radio",
};

export default function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonType,
  onHandleSubmit,
}) {
  function renderSingleItem(getSingleItemForm) {
    let content = "";

    switch (getSingleItemForm.componentType) {
      case formType.INPUT:
        content = (
          <CommonInput
            id={getSingleItemForm.id}
            componentType={getSingleItemForm.componentType}
            label={getSingleItemForm.label}
            name={getSingleItemForm.name}
            placeholder={getSingleItemForm.placeholder}
            type={getSingleItemForm.type}
            value={formData[getSingleItemForm.name]}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />
        );
        break;

      case formType.SELECT:
        content = (
          <CommonInput
            id={getSingleItemForm.id}
            name={getSingleItemForm.name}
            componentType={getSingleItemForm.componentType}
            label={getSingleItemForm.label}
            option={getSingleItemForm.option}
            value={formData[getSingleItemForm.name]}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />
        );
        break;

      case formType.RADIO:
        content = (
          <CommonInput
            name={getSingleItemForm.name}
            type={getSingleItemForm.type}
            value={formData[getSingleItemForm.name]}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
            option={getSingleItemForm.option}
            componentType={getSingleItemForm.componentType}
          />
        );
        break;
      default:
        content = (
          <CommonInput
            key={getSingleItemForm.id}
            id={getSingleItemForm.id}
            label={getSingleItemForm.label}
            name={getSingleItemForm.name}
            placeholder={getSingleItemForm.placeholder}
            type={getSingleItemForm.type}
            value={formData[getSingleItemForm.name]}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls.length
        ? formControls.map((singleItemForm) => (
            <div key={singleItemForm.id}>
              {renderSingleItem(singleItemForm)}
            </div>
          ))
        : null}
      <div>
        <button
          style={{ borderRadius: "4px", backgroundColor: "cyan" }}
          type="submit"
        >
          {buttonType || "submit"}
        </button>
      </div>
    </form>
  );
}
