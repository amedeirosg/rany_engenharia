"use client";

import { useEffect } from "react";
//@ts-expect-error
import TagManager from "react-gtm-module";

const GTM_ID = "GTM-KKVCZ8CG"; // Substitua pelo seu ID do GTM

export default function GTM() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);

  return null; // O componente não precisa renderizar nada
}
