interface InnerHeadingProps {
  className?: string;
  title: string;
}

export default function InnerHeading({ ...props }: InnerHeadingProps): JSX.Element {
  const { className, title } = props;

  return <h3 className={`text-primary-700 mb-1 text-base font-medium ${className}`}>{title}</h3>;
}
