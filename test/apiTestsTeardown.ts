/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import server = require('../server')

module.exports = async () => {
  server.close(undefined)
}
