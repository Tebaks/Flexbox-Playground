import React from "react";
import Button from "./Button";
import ButtonWrapper from "./ButtonWrapper";

const AlignBox = ({ align, onClick }) => {
  return (
    <ButtonWrapper title="Align Items">
      <Button
        value="center"
        onClick={onClick}
        text="Center"
        currentValue={align}
      />
      <Button
        value="flex-start"
        onClick={onClick}
        text="Flex Start"
        currentValue={align}
      />
      <Button
        value="flex-end"
        onClick={onClick}
        text="Flex End"
        currentValue={align}
      />
      <Button
        value="stretch"
        onClick={onClick}
        text="Stretch"
        currentValue={align}
      />
    </ButtonWrapper>
  );
};

export default AlignBox;
