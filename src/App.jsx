import React, { useState } from "react";
import ReactDOM from "react-dom";
import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const containerCN = cntl`
  mt-3
  p-3
  border
  rounded
`;
// const handleChange = (info, value, type) => {
//   let obj = Object.create(formData);
//   console.log(obj, info, value);
//   if (type === input) {
//     obj[info] = value;
//   }
//   if (type === drop) {
//     obj[info] = value.value;
//   }
//   setFormData(obj);
// };
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    eSpace: "",
    subscription: "",
    owner: {
      name: "",
      email: "",
      phone: "",
    },
    address: {
      street: "",
      unit: "",
      city: "",
      country: "",
      zipCode: "",
    },
  });
  const handleChange = (obj, type) => {
    if (type) {
      setFormData({ ...formData, [type]: { ...formData[type], ...obj } });
    } else {
      setFormData({ ...formData, ...obj });
    }
  };
  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      name: "",
      eSpace: "",
      subscription: "",
      owner: {
        name: "",
        email: "",
        phone: "",
      },
      address: {
        street: "",
        unit: "",
        city: "",
        country: "",
        zipCode: "",
      },
    });
  };
  return (
    <div
      className="bg-black h-full w-full flex flex-col overflow-auto
    "
    >
      <NavBar />
      <div className="px-10 mb-24">
        <p className="mt-4">Add New Client</p>
        <ProgressTracker
          steps={Array(5)
            .fill()
            .map((a, index) => `Step ${index + 1}`)}
        />
        <div>
          <CollapsibleSection
            title="Overview"
            defaultOpen={true}
            className={"my-4"}
          >
            <div className="flex w-full mb-4">
              <Dropdown
                className="w-1/2 pr-4"
                label={"Company Name"}
                value={formData.name}
                onChange={(val) => handleChange({ name: val })}
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `Option ${index + 1}`,
                    value: `Option ${index + 1}`,
                  }))}
              />
              <Input
                label="eSpace Name"
                placeholder="placeholder"
                className="w-1/2"
                value={formData.eSpace}
                onChange={(val) => handleChange({ eSpace: val })}
              />
            </div>
            <div className="flex w-full mb-4">
              <Dropdown
                className="w-1/2 pr-4"
                value={formData.subscription}
                onChange={(val) => handleChange({ subscription: val })}
                label={"Subscription"}
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `Option ${index + 1}`,
                    value: `Option ${index + 1}`,
                  }))}
              />
            </div>
          </CollapsibleSection>
        </div>
        <div>
          <CollapsibleSection
            title="Owner Information"
            defaultOpen={true}
            className={"my-4"}
          >
            <div className="flex w-full mb-4">
              <Input
                label="Primary Owner"
                value={formData.owner.name}
                onChange={(val) => handleChange({ name: val }, "owner")}
                placeholder="placeholder"
                className="w-1/2 pr-4"
              />
              <Input
                label="Primary Owner Email"
                value={formData.owner.email}
                onChange={(val) => handleChange({ email: val }, "owner")}
                placeholder="placeholder"
                className="w-1/2"
              />
            </div>
            <div className="flex w-full mb-4">
              <Input
                label="Primary Owner Phone"
                value={formData.owner.phone}
                onChange={(val) => handleChange({ phone: val }, "owner")}
                placeholder="placeholder"
                className="w-1/2 pr-4"
              />
            </div>
          </CollapsibleSection>
        </div>
        <div>
          <CollapsibleSection
            title="Location Information"
            defaultOpen={true}
            className={"my-4"}
          >
            <div className="flex w-full mb-4">
              <Input
                label="Street Address"
                value={formData.address.street}
                onChange={(val) => handleChange({ street: val }, "address")}
                placeholder="placeholder"
                className="w-1/2 pr-4"
              />
              <Input
                label="City"
                value={formData.address.city}
                onChange={(val) => handleChange({ city: val }, "address")}
                placeholder="placeholder"
                className="w-1/2"
              />
            </div>
            <div className="flex w-full mb-4">
              <Input
                label="Suite/Unit"
                value={formData.address.unit}
                onChange={(val) => handleChange({ unit: val }, "address")}
                placeholder="placeholder"
                className="w-1/2 pr-4"
              />
              <Dropdown
                className="w-1/2"
                label={"Country"}
                value={formData.address.country}
                onChange={(val) => handleChange({ country: val }, "address")}
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `Option ${index + 1}`,
                    value: `Option ${index + 1}`,
                  }))}
              />
            </div>
            <div className="flex w-full mb-4">
              <Input
                label="Postal Code"
                value={formData.address.zipCode}
                onChange={(val) => handleChange({ zipCode: val }, "address")}
                placeholder="placeholder"
                className="w-1/2 pr-4"
              />
            </div>
          </CollapsibleSection>
        </div>
        <div className="mt-12">
          <Button title="Button" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
