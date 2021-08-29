import React from "react";
import Button from "./Button";
import ButtonWrapper from "./ButtonWrapper";

const JustifyBox = ({ justify, onClick }) => {
  return (
    <ButtonWrapper title="Justify Content">
      <Button
        value="center"
        onClick={onClick}
        text="center"
        currentValue={justify}
      />
      <Button
        value="space-between"
        onClick={onClick}
        text="Space Between"
        currentValue={justify}
      />
      <Button
        value="space-evenly"
        onClick={onClick}
        text="Space Evenly"
        currentValue={justify}
      />
      <Button
        value="flex-end"
        onClick={onClick}
        text="Flex End"
        currentValue={justify}
      />
      <Button
        value="flex-start"
        onClick={onClick}
        text="Flex Start"
        currentValue={justify}
      />
      <Button
        value="space-around"
        onClick={onClick}
        text="Space Around"
        currentValue={justify}
      />
    </ButtonWrapper>
  );
};

export default JustifyBox;
