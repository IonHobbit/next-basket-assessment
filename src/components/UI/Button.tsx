import React from 'react'

type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'success';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  rounded?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, variant = 'contained', color = 'primary', size = 'medium', fullWidth = false, rounded = false, ...props }: ButtonProps) {
  return (
    <button>
      {children}
    </button>
  )
}
