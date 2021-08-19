import React from "react";
import Conclusion from "../Conclusion";
import Editor from "../editor";
import { PageContainer } from "./PageElements";

const Page = () => {
  return (
    <>
      <PageContainer>
        <Conclusion />
        <Editor />
      </PageContainer>
    </>
  );
};

export default Page;
