// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

export default function getCookie(cookies, name) {
  return cookies.get(name) === undefined ? '' : String(cookies.get(name));
}
