export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-2 border rounded-lg bg-transparent ${className}`}
    />
  );
}
