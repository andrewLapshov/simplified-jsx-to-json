const test = require("ava");
const jsxToJson = require(".");

test("main", (t) => {
  // Supported JSX syntax
  t.deepEqual(jsxToJson("<>Test</>"), {
    type: "Fragment",
    props: {},
    children: [{ type: "Fragment", props: {}, children: "Test" }],
  });
  t.deepEqual(jsxToJson("<Test></Test>"), {
    type: "Test",
    props: {},
    children: [],
  });
  t.deepEqual(jsxToJson("<Test>Test</Test>"), {
    type: "Test",
    props: {},
    children: [
      {
        type: "Fragment",
        props: {},
        children: "Test",
      },
    ],
  });
  t.deepEqual(jsxToJson("<Test><Test /></Test>"), {
    type: "Test",
    props: {},
    children: [
      {
        type: "Test",
        props: {},
        children: [],
      },
    ],
  });
  t.deepEqual(jsxToJson("<Test test />"), {
    type: "Test",
    props: { test: true },
    children: [],
  });

  t.deepEqual(jsxToJson("<Test><Test /></Test>"), {
    type: "Test",
    props: {},
    children: [
      {
        type: "Test",
        props: {},
        children: [],
      },
    ],
  });
  t.deepEqual(jsxToJson("<Test />"), {
    type: "Test",
    props: {},
    children: [],
  });
  t.deepEqual(jsxToJson('<Test test="test" />'), {
    type: "Test",
    props: { test: "test" },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={`test`} />"), {
    type: "Test",
    props: { test: "test" },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={`test ${1}`} />"), {
    type: "Test",
    props: { test: "test 1" },
    children: [],
  });
  t.deepEqual(jsxToJson('<Test test={`test ${["Test"]}`} />'), {
    type: "Test",
    props: { test: "test Test" },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={test} />"), {
    type: "Test",
    props: { test: "test" },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={1} />"), {
    type: "Test",
    props: { test: 1 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={false} />"), {
    type: "Test",
    props: { test: false },
    children: [],
  });
  t.deepEqual(jsxToJson('<Test test={["Test"]} />'), {
    type: "Test",
    props: { test: ["Test"] },
    children: [],
  });

  // Binary expressions: Arithmetic operators
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
  t.deepEqual(jsxToJson("<Test test={3 + 3} />"), {
    type: "Test",
    props: { test: 6 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 + 3 + 3} />"), {
    type: "Test",
    props: { test: 9 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 - 3} />"), {
    type: "Test",
    props: { test: 0 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 * 3} />"), {
    type: "Test",
    props: { test: 9 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 ** 3} />"), {
    type: "Test",
    props: { test: 27 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 / 3} />"), {
    type: "Test",
    props: { test: 1 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 % 3} />"), {
    type: "Test",
    props: { test: 0 },
    children: [],
  });

  // Binary expressions: Comparison operators
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
  t.deepEqual(jsxToJson('<Test test={3 == "3"} />'), {
    type: "Test",
    props: { test: false },
    children: [],
  });
  t.deepEqual(jsxToJson('<Test test={3 === "3"} />'), {
    type: "Test",
    props: { test: false },
    children: [],
  });
  t.deepEqual(jsxToJson('<Test test={3 != "3"} />'), {
    type: "Test",
    props: { test: true },
    children: [],
  });
  t.deepEqual(jsxToJson('<Test test={3 !== "3"} />'), {
    type: "Test",
    props: { test: true },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 > 4} />"), {
    type: "Test",
    props: { test: false },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 >= 3} />"), {
    type: "Test",
    props: { test: true },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 < 4} />"), {
    type: "Test",
    props: { test: true },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 <= 3} />"), {
    type: "Test",
    props: { test: true },
    children: [],
  });

  // Binary expressions: Bitwise Operators
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  t.deepEqual(jsxToJson("<Test test={3 << 3} />"), {
    type: "Test",
    props: { test: 24 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 >> 3} />"), {
    type: "Test",
    props: { test: 0 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 >>> 3} />"), {
    type: "Test",
    props: { test: 0 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 | 3} />"), {
    type: "Test",
    props: { test: 3 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 & 3} />"), {
    type: "Test",
    props: { test: 3 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={3 ^ 3} />"), {
    type: "Test",
    props: { test: 0 },
    children: [],
  });

  // Unary expressions
  t.deepEqual(jsxToJson("<Test test={-2} />"), {
    type: "Test",
    props: { test: -2 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={+2} />"), {
    type: "Test",
    props: { test: 2 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={~2} />"), {
    type: "Test",
    props: { test: -3 },
    children: [],
  });

  // Unsupported syntax
  t.throws(() => jsxToJson('<Test test={"test" in test}>{test}</Test>'), {
    instanceOf: SyntaxError,
  });

  t.throws(() => jsxToJson("<Test>{test}</Test>"), {
    instanceOf: SyntaxError,
  });

  t.throws(() => jsxToJson("<Test test={...xxx} />"), {
    instanceOf: SyntaxError,
  });

  t.throws(() => jsxToJson("Test"), {
    instanceOf: SyntaxError,
  });

  // With props
  const props = {
    testStr: "1",
    testNum: 1,
    testArr: [1, 2, 3],
    testObj: { key: "value" },
    testNestedObj: { key: { key: "value" } },
  };

  t.deepEqual(jsxToJson("<Test test={testStr}/>", props), {
    type: "Test",
    props: { test: "1" },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={testNum}/>", props), {
    type: "Test",
    props: { test: 1 },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={testArr}/>", props), {
    type: "Test",
    props: { test: [1, 2, 3] },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={testObj}/>", props), {
    type: "Test",
    props: { test: { key: "value" } },
    children: [],
  });
  t.deepEqual(jsxToJson("<Test test={testNestedObj}/>", props), {
    type: "Test",
    props: { test: { key: { key: "value" } } },
    children: [],
  });
});
