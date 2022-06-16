// This file is part of Jumble <https://github.com/Fuwn/jumble>.
// Copyright (C) 2022-2022 Fuwn <contact@fuwn.me>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, version 3.
//
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
// General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
//
// Copyright (C) 2022-2022 Fuwn <contact@fuwn.me>
// SPDX-License-Identifier: GPL-3.0-only

import { assertEquals } from "https://deno.land/std@0.139.0/testing/asserts.ts";
import { jumble } from "./mod.ts";

Deno.test("jumble", () => {
  for (let i = 0; i < 10000; ++i) {
    let same = 0;

    for (let i = 0; i < 100; ++i) {
      if (
        jumble("Can this be the same as the other?") ==
          "Can this be the same as the other?"
      ) {
        same += 1;
      }
    }

    assertEquals(same > 15, false);
  }
});
