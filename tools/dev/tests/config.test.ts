import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { APP_KEYS } from "@open-design/sidecar-proto";

import {
  DEFAULT_START_APPS,
  resolveStartApps,
} from "../src/config.js";

describe("tools-dev default targets", () => {
  it("starts the browser stack without Electron by default", () => {
    assert.deepEqual(DEFAULT_START_APPS, [APP_KEYS.DAEMON, APP_KEYS.WEB]);
    assert.deepEqual(resolveStartApps(undefined), [APP_KEYS.DAEMON, APP_KEYS.WEB]);
  });

  it("keeps Electron available as an explicit target", () => {
    assert.deepEqual(resolveStartApps(APP_KEYS.DESKTOP), [
      APP_KEYS.DAEMON,
      APP_KEYS.WEB,
      APP_KEYS.DESKTOP,
    ]);
  });
});
