import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { argumentIdState } from "../../state/atoms";
import Conclusion from "../Conclusion";
import Editor from "../Editor";
import EditorLogicContainer from "../EditorContainer";

import useKey from "../KeyPress";
import { PageContainer } from "./PageElements";
import { UpdateId } from "./updateId";


const Page = () => {
  return (
    <>
      <PageContainer>
        <Conclusion />
        <EditorLogicContainer />
        <UpdateId />
      </PageContainer>
    </>
  );
};

export default Page;
