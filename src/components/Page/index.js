import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { argumentIdState } from "../../state/atoms";
import Conclusion from "../Conclusion";
import Editor from "../editor";
import EditorLogicContainer from "../EditorContainer";

import useKey from "../KeyPress";
import { PageContainer } from "./PageElements";

// let id = 1;
function getId(id) {
  return id++;
}
const Page = () => {
  return (
    <>
      <PageContainer>
        <Conclusion />
        <EditorLogicContainer />
      </PageContainer>
    </>
  );
};

export default Page;
