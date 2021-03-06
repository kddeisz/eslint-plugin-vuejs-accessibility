import rule from "../iframe-has-title";
import makeRuleTester from "./makeRuleTester";

makeRuleTester("iframe-has-title", rule, {
  valid: ["<iframe title='test' />", "<iframe :title='test' />"],
  invalid: ["<iframe />", "<iframe :title='true' />", "<iframe :title='2' />"]
});
