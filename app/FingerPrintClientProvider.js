"use client";
import React from "react";
import { FpjsProvider, FingerprintJSPro } from "@fingerprintjs/fingerprintjs-pro-react";

const FingerPrintClientProvider = ({ children }) => {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: "il7kNE7R1rjpSvCtxASh",
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
