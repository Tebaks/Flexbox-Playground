import React from "react";
import Button from "./Button";
import ButtonWrapper from "./ButtonWrapper";

const DirectionBox = ({ direction, onClick }) => {
  return (
    <ButtonWrapper title="Flex Direction">
      <Button
        value="row"
        onClick={onClick}
        text="Row"
        currentValue={direction}
      />
      <Button
        value="column"
        onClick={onClick}
        text="Column"
        currentValue={direction}
      />
      <Button
        value="row-reverse"
        onClick={onClick}
        text="Row Reverse"
        currentValue={direction}
      />
      <Button
        value="column-reverse"
        onClick={onClick}
        text="Column Reverse"
        currentValue={direction}
      />
    </ButtonWrapper>
  );
};

export default DirectionBox;
