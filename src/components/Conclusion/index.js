import React from "react";
import { ConclusionContainer } from "./ConclusionElements";
import { useRecoilValue } from "recoil";
import { argumentIdState } from "../../state/atoms";
import { ArgumentItem } from "../ConclusionItem";
const Conclusion = () => {
  const argIds = useRecoilValue(argumentIdState);
  return (
    <>
      <ConclusionContainer>
        {argIds.map((element) => {
          <ArgumentItem key={element} />;
        })}
      </ConclusionContainer>
    </>
  );
};

export default Conclusion;
