import { useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }
    onClose()
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }
    onSubmit()
  }, [disabled, onSubmit])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800 bg-opacity-70 outline-none focus:outline-none">
        <div className="h-7/8 relative mx-auto my-3 w-full lg:h-auto lg:w-2/5 lg:max-w-xl">
          {/* Content  */}
          <div className="relative flex h-full w-full flex-col rounded-lg border-0 bg-black shadow-lg outline-none focus:outline-none lg:h-auto">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t p-6">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                onClick={handleClose}
                className="ml-auto border-0 p-1 transition hover:opacity-70"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* Body  */}
            <div className="relative flex-auto p-6">{body}</div>
            {/* Footer */}
            <div className="flex flex-col gap-2 p-6">
              <Button disabled={disabled} label={actionLabel} fullWidth onClick={handleSubmit} />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
