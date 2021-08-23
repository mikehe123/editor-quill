import React from "react";
import { ConclusionContainer } from "./ConclusionElements";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { argumentIdState } from "../../state/atoms";
import { ArgumentItem } from "../ArgumentItem";
import useKey from "../KeyPress";





const Conclusion = () => {
  const argId = useRecoilValue(argumentIdState);
  
  console.log(argId)

  if(argId.length >= 10){
    let i = 0
    while(i<10){
      
    }
  }

  return (
    <>
      <ConclusionContainer>
        {argId.map((itemId) => {
      return <ArgumentItem itemKey={itemId} />
})}
      </ConclusionContainer>
    </>
  );
};

export default Conclusion;
