export default function NotFound(){
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-slate-600">The page you’re looking for doesn’t exist or was moved.</p>
      <a className="btn mt-6 inline-block" href="/">Go home</a>
    </div>
  )
}
