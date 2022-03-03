import { useEffect, useState } from "react";

const useTitlePage = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Tirtawater`;
  }, []);
};

export default useTitlePage;
