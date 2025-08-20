import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getFormattedDate } from './all.js';

test('formats valid ISO date', () => {
  const result = getFormattedDate('2023-01-15T00:00:00.000Z');
  assert.equal(result, 'Jan 15, 2023');
});

test('returns empty string for nullish input', () => {
  assert.equal(getFormattedDate(null), '');
  assert.equal(getFormattedDate(undefined), '');
});

test('formats Date objects', () => {
  const date = new Date('2023-07-04T12:00:00.000Z');
  assert.equal(getFormattedDate(date), 'Jul 4, 2023');
});

test('returns empty string for empty input', () => {
  assert.equal(getFormattedDate(''), '');
});

test('returns "Invalid Date" for invalid input', () => {
  assert.equal(getFormattedDate('not-a-date'), 'Invalid Date');
});
