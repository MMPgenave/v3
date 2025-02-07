"use client";
import React from "react";
import { FpjsProvider, FingerprintJSPro } from "@fingerprintjs/fingerprintjs-pro-react";

const FingerPrintClientProvider = ({ children }) => {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: "NIGn4Y5I1g2bMZeeiIBT",
        endpoint: [
          // "https://metrics.yourwebsite.com",
          FingerprintJSPro.defaultEndpoint,
        ],
        scriptUrlPattern: [
          // "https://metrics.yourwebsite.com/web/v<version>/<apiKey>/loader_v<loaderVersion>.js",
          FingerprintJSPro.defaultScriptUrlPattern,
        ],
        // region: "eu"
      }}
    >
      {children}
    </FpjsProvider>
  );
};

export default FingerPrintClientProvider;
