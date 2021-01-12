import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Request from './Request';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    results: [],
    next: "http://swapi.dev/api/people/?page=2&format=json",
    previous: null
  })
}))

describe("App", () => {
  it("loads first characters" , async () => {
    await act(async () => render(<Request/>))
    expect(screen.getByText).toMatch("foo");
  })
})