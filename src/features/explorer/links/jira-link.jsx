import Link from '@/ui/link'
import { jiraTicketBaseUrl } from '@/constants'

export default function JiraLink({ ticketDescription }) {
  return (
    <div>
      <Link href={`${jiraTicketBaseUrl}${ticketDescription?.ticketNumber}`}>
        {`PHO-${ticketDescription?.ticketNumber}`}
      </Link>
    </div>
  )
}
