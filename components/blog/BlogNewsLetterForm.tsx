import NewsletterForm, { NewsletterFormProps } from './NewsletterForm'

const BlogNewsletterForm = ({ title, apiUrl }: NewsletterFormProps) => (
  <div className="flex items-center justify-center">
    <div className="bg-theme-light p-6 dark:bg-darkmode-theme-light sm:px-14 sm:py-8">
      <NewsletterForm title={title} apiUrl={apiUrl} />
    </div>
  </div>
)

export default BlogNewsletterForm
