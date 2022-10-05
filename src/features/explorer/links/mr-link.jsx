import Link from '@/ui/link'
import { gitlabBaseUrl } from '@/constants'

export default function MRLink({ ticketDescription }) {
  return (
    <div>
      <Link
        href={`${gitlabBaseUrl}${ticketDescription?.mRNumber}`}
      >{`MR-${ticketDescription?.mRNumber}`}</Link>
    </div>
  )
}
