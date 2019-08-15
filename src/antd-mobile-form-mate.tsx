import React from "react";
import { InputItem } from "antd-mobile";

const FormContext = React.createContext(null);
export const FormProvider = FormContext.Provider;
const FormConsumer = FormContext.Consumer;

// function renderInputComponent(inputConfig) {
//   const { type, component: CustomComponent, ...componentProps } = inputConfig;
//   switch (type) {
//     case "custom":
//       return CustomComponent;
//     default:
//       return (
//         <InputItem
//           placeholder="请输入"
//           {...componentProps}
//         />
//       );
//   }
// }

export const createFormItems = (
  itemsConfig: any[],
) => {
  return itemsConfig.map(item => {
    const {
      field,
      // fieldProps = {},
    } = item;
    // const { rules = [] } = fieldProps;
    return (
      <FormConsumer key={field}>
        {form => {
          if (form) {
            return (
              <InputItem>
                测试
              </InputItem>
            )
          }
          return null;
        }}
      </FormConsumer>
    );
  });
};
