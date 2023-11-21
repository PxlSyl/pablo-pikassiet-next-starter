import { useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface cModalProps {
  isOpen?: boolean
  onClose: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  disabled?: boolean
}

export const CModal: React.FC<cModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }
    onClose()
  }, [disabled, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50">
        <div className="relative mx-auto my-3 h-full w-full sm:h-auto sm:w-2/5 sm:max-w-xl">
          {/* Content  */}
          <div className="relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-[#1c1c1c] lg:h-auto">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t p-6">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                aria-label="contact"
                onClick={handleClose}
                className="ml-auto border-0 p-1 transition hover:opacity-70"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* Body  */}
            <div className="relative flex-auto p-6">{body}</div>
            {/* Footer */}
            <div className="flex flex-col gap-2 p-6">{footer}</div>
          </div>
        </div>
      </div>
    </>
  )
}
