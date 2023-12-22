import NewsletterForm, { NewsletterFormProps } from './NewsletterForm'

const BlogNewsletterForm = ({ title, apiUrl }: NewsletterFormProps) => (
  <div className="flex items-center justify-center">
    <div className="bg-theme-light p-6 sm:px-14 sm:py-8 dark:bg-darkmode-theme-light">
      <NewsletterForm title={title} apiUrl={apiUrl} />
    </div>
  </div>
)

export default BlogNewsletterForm
