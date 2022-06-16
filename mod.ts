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

/**
 * Jumble a string
 *
 * Jumbling a string shifts around the letters in a string, while keeping the
 * first and last letter of a word the same; lkie tihs, do you utnsrednad now?
 * @param text The text to jumble
 * @returns The input text, but jumbled
 * @example jumble("Hello, World!") // A possible result is "Hlleo, Wrlod!"
 */
export function jumble(text: string): string {
  let words = text.split(" ");

  words = words.map((word) => {
    const characters = word.split("");
    const firsts = [characters.shift()];
    const lasts = [characters.pop()];

    const isLetter = (text: string) => RegExp(/^\p{L}/, "u").test(text);

    if (!isLetter(firsts[0]!)) {
      firsts.push(characters.shift());
    }

    if (!isLetter(lasts[0]!)) {
      lasts.push(characters.pop());
      lasts.reverse();
    }

    for (let i = characters.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));

      [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    return [...firsts, ...characters, ...lasts].join("");
  });

  return words.join(" ");
}
