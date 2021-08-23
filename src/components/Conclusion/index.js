import React from "react";
import { ConclusionContainer } from "./ConclusionElements";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { argumentIdState } from "../../state/atoms";
import { ArgumentItem } from "../ArgumentItem";
import useKey from "../KeyPress";

const Conclusion = () => {
  const argId = useRecoilValue(argumentIdState);
  console.log(argId);
  return (
    <>
      <ConclusionContainer>
        {argId.map((itemId) => {
          // if (index < argId.length - 1) {
          return <ArgumentItem key={itemId} itemId={itemId} />;
          // }
          // return <div id={-999}>Last Index</div>;
        })}
      </ConclusionContainer>
    </>
  );
};

export default Conclusion;
