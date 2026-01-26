import React from 'react';
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  'data-id'?: string;
}
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}
export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}
export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}
const CardRoot = ({
  children,
  className = '',
  'data-id': dataId
}: CardProps) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-lg shadow-sm ${className}`}
      data-id={dataId}>

      {children}
    </div>);

};
const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`px-6 py-4 border-b border-slate-200 ${className}`}>
      {children}
    </div>);

};
const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};
const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`px-6 py-4 border-t border-slate-200 ${className}`}>
      {children}
    </div>);

};
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter
});