import cn from 'classnames'

import { FlatsList } from 'widgets/flats-list'

import { PageLayout } from '../../shared/ui/page-layout'
import './style.scss'

export interface MainPageProps {
  className?: string
}

export function MainPage({ className = '' }: MainPageProps) {
  const ClassName = cn('main-page', className)

  return (
    <PageLayout className={ClassName}>
      <FlatsList />
    </PageLayout>
  )
}
