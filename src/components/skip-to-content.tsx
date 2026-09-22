"use client";

export function SkipToContent() {
  function skipToContent() {
    const main = document.getElementById("main");
    main?.focus();
    main?.scrollIntoView();
  }

  return <button className="skip-link" type="button" onClick={skipToContent}>Skip to content</button>;
}
