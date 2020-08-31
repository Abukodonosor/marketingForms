import React, { useState } from "react";
import { GenerateWebFormService } from "../../service/GenerateWebFormService";

export function DemoView({ applicationType, themeValue, disablePages }) {
  const GenerateCodeService = GenerateWebFormService(
    applicationType,
    themeValue,
    disablePages
  );

  const [iframeUrl, setIframeUrl] = useState(GenerateCodeService.generateUrl());
  const [genericCode, setGenericCode] = useState(
    GenerateCodeService.generateIframeCode(true)
  );

  return (
    <div className="demo-test">
      <div className="web-form-navigation">
        <div
          className="navigation-buttons generate-demo-code"
          onClick={() => {
            const newGenericCode = GenerateCodeService.generateIframeCode();
            setGenericCode(newGenericCode);
          }}
        >
          Generate Code
        </div>
        <div
          className="navigation-buttons test-demo-code"
          onClick={() => {
            const newGeneratedUrl = GenerateCodeService.generateUrl();
            setIframeUrl(newGeneratedUrl);
          }}
        >
          Demo Code
        </div>
      </div>
      <div>
        <div className="web-form-view">
          <h3 style={{ fontWeight: "bold" }}>Web form code:</h3>
          <div>
            <textarea
              disabled
              className="generated-code"
              rows="2"
              value={genericCode}
            ></textarea>
          </div>
        </div>
        <div className="web-form-view">
          <iframe className="demo-iframe" src={iframeUrl}></iframe>
        </div>
      </div>
    </div>
  );
}
