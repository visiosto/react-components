// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

export default function encodeFormState(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}
