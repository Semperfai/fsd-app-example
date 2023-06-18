import { setupWorker } from 'msw'
import { productsHandlers } from '@/entities/product/api/__mocks_/productHandlers'

import { __serverStartDatabaseMigration } from '@/shared/lib/server'

const apiMockWorker = setupWorker(
    ...productsHandlers,
  )

  __serverStartDatabaseMigration()

  export const startApiMockWorker = async () => {
    await apiMockWorker.start({
      onUnhandledRequest(req, print) {
        if (/\.(tsx?|css|jsx?|woff2)$/.test(req.url.pathname)) {
          return
        }
        print.warning()
      },
    })
  }