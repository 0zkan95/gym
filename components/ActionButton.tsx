import React from 'react'
import Link from 'next/link'

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const ActionButton = ({ 
  children, 
  onClick, 
  href, 
  className = '',
  type = 'button',
  disabled = false 
}: ActionButtonProps) => {
  const baseStyles = "text-white bg-secondary-500 px-8 py-2 rounded-md hover:bg-primary-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
  const buttonStyles = `${baseStyles} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  )
}

export default ActionButton
