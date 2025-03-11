import React, { useState } from "react";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import ResultPage from "./ResultPage";

const FormNavigation = () => {
  const [page, setPage] = useState(1);
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  switch (page) {
    case 1:
      return <FormPage1 onNext={nextPage} setPrinciple={setPrinciple} />;
    case 2:
      return (
        <FormPage2 onNext={nextPage} onBack={prevPage} setRate={setRate} />
      );
    case 3:
      return (
        <FormPage3
          onNext={nextPage}
          onBack={prevPage}
          setDuration={setDuration}
        />
      );
    case 4:
      return (
        <ResultPage principle={principle} rate={rate} duration={duration} />
      );
    default:
      return null;
  }
};

export default FormNavigation;
