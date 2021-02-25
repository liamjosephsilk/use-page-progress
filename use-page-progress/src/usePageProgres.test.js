import { usePageProgress } from "./index";
import { renderHook } from "@testing-library/react-hooks";

describe("Initial Hook Render", () => {
  test("it should return 0", () => {
    const { result } = renderHook(() => usePageProgress());

    expect(result.current.scrollPercentage).toBe(0);
  });
});
