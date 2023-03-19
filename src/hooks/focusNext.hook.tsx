import { useCallback, useRef } from "react";

export function useFocusNext() {
  const controls = useRef([]);

  const handler = (event: any) => {
    if (/\d/.test(event.key)) {
      // Required if the controls can be reordered
      controls.current = controls.current
        .filter((control) => document.body.contains(control))
        .sort((a: any, b: any) =>
          a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : 1
        );

      const index = controls.current.indexOf(event.target as never);
      const next: any = controls.current[index + 1];
      next && next.focus();
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      const index = controls.current.indexOf(event.target as never);
      const prev: any = controls.current[index - 1];
      prev && prev.focus();
    }
  };

  return useCallback((element: any) => {
    if (element && !controls.current.includes(element as never)) {
      controls.current.push(element as never);
      element.addEventListener("keydown", handler);
    }
  }, []);
}
