module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
