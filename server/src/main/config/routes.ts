import { NotFoundError } from '@/data/errors'
import { Express, NextFunction, Request, Response, Router } from 'express'

export const apiRoutes = async (app: Express) => {
  const router = Router()

  ;(await import('@/main/routes/user')).default(router)
  ;(await import('@/main/routes/auth')).default(router)
  ;(await import('@/main/routes/service')).default(router)

  app.use('/', router)

  app.use('/api', async (req: Request, res: Response) => {
    return res.status(200).json({
      message: 'Welcome to barber API',
    })
  })

  app.use('*', async (req: Request, res: Response) => {
    return res.status(404).json({ error: new NotFoundError('route').message })
  })

  app.use(
    async (error: Error, req: Request, res: Response, _next: NextFunction) => {
      return res.status(500).json({ error })
    }
  )
}
