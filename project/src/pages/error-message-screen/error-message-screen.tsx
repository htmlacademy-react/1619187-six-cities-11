type ErrorMessageScreenProps = {
  message: string;
}

function ErrorMessageScreen({message}: ErrorMessageScreenProps): JSX.Element {
  return <p>{message}</p>;
}

export default ErrorMessageScreen;
