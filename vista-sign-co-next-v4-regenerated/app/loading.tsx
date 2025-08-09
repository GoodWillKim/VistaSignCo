export default function Loading(){
  return (
    <div className="container py-16">
      <div className="h-6 w-40 skel rounded mb-4" />
      <div className="h-4 w-2/3 skel rounded mb-2" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {Array.from({length:6}).map((_,i)=>(<div key={i} className="card p-6"><div className="h-28 skel rounded-2xl mb-3" /><div className="h-4 skel rounded w-1/2" /></div>))}
      </div>
    </div>
  )
}
